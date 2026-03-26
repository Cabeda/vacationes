<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { _ } from 'svelte-i18n';

  import type { PairedDevice } from '$lib/types';
  
  type PairingStep = 'idle' | 'generating' | 'waiting-scan' | 'scanning' | 'connecting' | 'connected';
  
  let step = $state<PairingStep>('idle');
  let qrCodeUrl = $state<string | null>(null);
  let error = $state<string | null>(null);
  let pairedDevices = $state<PairedDevice[]>([]);
  let peerConnection = $state<RTCPeerConnection | null>(null);
  let dataChannel = $state<RTCDataChannel | null>(null);
  let scannerElement = $state<HTMLElement | null>(null);
  let html5QrCodeScanner = $state<Record<string, unknown> | null>(null);
  let sdpOffer = $state<string | null>(null);
  
  const STUN_SERVERS = [{ urls: 'stun:stun.l.google.com:19302' }];
  
  onMount(() => {
    loadPairedDevices();
    return () => {
      cleanup();
    };
  });
  
  function loadPairedDevices() {
    const stored = localStorage.getItem('vacationes-paired-devices');
    if (stored) {
      pairedDevices = JSON.parse(stored);
    }
  }
  
  function savePairedDevices() {
    localStorage.setItem('vacationes-paired-devices', JSON.stringify(pairedDevices));
  }
  
  function cleanup() {
    if (dataChannel) {
      dataChannel.close();
      dataChannel = null;
    }
    if (peerConnection) {
      peerConnection.close();
      peerConnection = null;
    }
    if (html5QrCodeScanner) {
      html5QrCodeScanner.stop().catch(() => {});
      html5QrCodeScanner = null;
    }
  }
  
  async function generateOffer() {
    step = 'generating';
    error = null;
    
    try {
      peerConnection = new RTCPeerConnection({ iceServers: STUN_SERVERS });
      
      dataChannel = peerConnection.createDataChannel('automerge', {
        ordered: true
      });
      
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      
      await new Promise<void>((resolve) => {
        if (!peerConnection) {return resolve();}
        peerConnection!.onicegatheringstatechange = () => {
          if (peerConnection!.iceGatheringState === 'complete') {
            resolve();
          }
        };
        setTimeout(resolve, 2000);
      });
      
      sdpOffer = JSON.stringify(peerConnection.localDescription);
      qrCodeUrl = await generateQRDataUrl(sdpOffer);
      step = 'waiting-scan';
      
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to generate offer';
      step = 'idle';
    }
  }
  
  async function handleScannedQR(result: string) {
    if (!scannerElement) {return;}
    
    try {
      const parsed = JSON.parse(result);
      
      if (parsed.type === 'offer') {
        await handleOfferScanned(parsed);
      } else if (parsed.type === 'answer') {
        await handleAnswerScanned(parsed);
      } else {
        error = 'Invalid QR code format';
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to process QR code';
    }
  }
  
  async function handleOfferScanned(offerDesc: RTCSessionDescriptionInit) {
    step = 'connecting';
    error = null;
    
    try {
      peerConnection = new RTCPeerConnection({ iceServers: STUN_SERVERS });
      
      peerConnection.ondatachannel = (event) => {
        dataChannel = event.channel;
        setupDataChannel();
      };
      
      await peerConnection.setRemoteDescription(offerDesc);
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      
      const answerStr = JSON.stringify(peerConnection.localDescription);
      qrCodeUrl = await generateQRDataUrl(answerStr);
      step = 'waiting-scan';
      
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to process QR code';
      step = 'idle';
    }
  }
  
  async function handleAnswerScanned(answerDesc: RTCSessionDescriptionInit) {
    try {
      if (peerConnection) {
        await peerConnection.setRemoteDescription(answerDesc);
        step = 'connected';
        
        const device: PairedDevice = {
          id: crypto.randomUUID(),
          name: `Device ${pairedDevices.length + 1}`,
          lastConnected: new Date().toISOString(),
          peerId: ''
        };
        pairedDevices = [...pairedDevices, device];
        savePairedDevices();
        
        setTimeout(() => {
          step = 'idle';
          qrCodeUrl = null;
          sdpOffer = null;
        }, 3000);
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to complete connection';
    }
  }
  
  function setupDataChannel() {
    if (!dataChannel) {return;}
    
    dataChannel.onopen = () => {
      step = 'connected';
      setTimeout(() => {
        step = 'idle';
        qrCodeUrl = null;
        sdpOffer = null;
      }, 3000);
    };
    
    dataChannel.onmessage = (event) => {
      console.warn('Received data:', event.data);
    };
    
    dataChannel.onerror = (err) => {
      error = 'Data channel error';
      console.error(err);
    };
  }
  
  async function generateQRDataUrl(data: string): Promise<string> {
    const QRCode = await import('qrcode');
    return QRCode.toDataURL(data, {
      width: 256,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
  }
  
  async function startScanning() {
    step = 'scanning';
    error = null;
    
    await tick();
    await tick();
    
    if (!scannerElement) {
      error = 'Camera element not found';
      step = 'idle';
      return;
    }
    
    try {
      const { Html5Qrcode } = await import('html5-qrcode');
      html5QrCodeScanner = new Html5Qrcode('qr-reader');
      
      await html5QrCodeScanner.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 }
        },
        (decodedText) => {
          handleScannedQR(decodedText);
        },
        () => {}
      );
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to start camera';
      step = 'idle';
    }
  }
  
  function cancelPairing() {
    cleanup();
    step = 'idle';
    qrCodeUrl = null;
    error = null;
    sdpOffer = null;
  }
</script>

<div class="space-y-6">
  <div class="text-center">
    <p class="text-sm text-gray-600">
      {$_('sync.title')}
    </p>
    <p class="text-xs text-gray-500 mt-1">P2P • Serverless • Encrypted</p>
  </div>
  
  {#if error}
    <div class="bg-red-50 border border-red-200 rounded-lg p-4">
      <p class="text-red-700 text-sm">{error}</p>
    </div>
  {/if}
  
  {#if step === 'idle'}
    <div class="space-y-4">
      <button
        onclick={generateOffer}
        class="w-full py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
      >
        {$_('sync.showQR')}
      </button>
      
      <button
        onclick={startScanning}
        class="w-full py-4 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
      >
        {$_('sync.scanToPair')}
      </button>
    </div>
  {:else if step === 'generating'}
    <div class="text-center py-8">
      <div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
      <p class="mt-4 text-sm text-gray-600">Generating QR Code...</p>
    </div>
  {:else if step === 'waiting-scan' && qrCodeUrl}
    <div class="text-center space-y-4">
      <p class="text-sm text-gray-600">
        {step === 'waiting-scan' ? $_('sync.step4') : $_('sync.step5')}
      </p>
      <div class="bg-white rounded-xl p-4 inline-block shadow-sm">
        <img
          src={qrCodeUrl}
          alt="QR Code"
          class="w-64 h-64 mx-auto" />
      </div>
      <button
        onclick={cancelPairing}
        class="text-sm text-gray-500 hover:text-gray-700"
      >
        {$_('common.cancel')}
      </button>
    </div>
  {:else if step === 'scanning'}
    <div class="text-center space-y-4">
      <p class="text-sm text-gray-600">{$_('sync.scanning')}</p>
      <div
        id="qr-reader"
        bind:this={scannerElement}
        class="bg-gray-100 rounded-xl overflow-hidden"></div>
      <button
        onclick={cancelPairing}
        class="text-sm text-gray-500 hover:text-gray-700"
      >
        {$_('common.cancel')}
      </button>
    </div>
  {:else if step === 'connecting'}
    <div class="text-center py-8">
      <div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
      <p class="mt-4 text-sm text-gray-600">Connecting...</p>
    </div>
  {:else if step === 'connected'}
    <div class="text-center py-8">
      <p class="text-4xl mb-4">✅</p>
      <p class="text-lg font-medium text-green-600">{$_('sync.connected')}</p>
      <p class="text-sm text-gray-500 mt-2">Devices are now synced!</p>
    </div>
  {/if}
  
  {#if pairedDevices.length > 0}
    <div class="mt-8">
      <h3 class="text-sm font-medium text-gray-700 mb-3">
        {$_('sync.pairedDevices')}
      </h3>
      <div class="space-y-2">
        {#each pairedDevices as device}
          <div class="bg-white rounded-lg p-3 flex items-center justify-between">
            <div>
              <p class="font-medium text-gray-900">{device.name}</p>
              <p class="text-xs text-gray-500">
                {$_('sync.lastConnected')}: {device.lastConnected ? new Date(device.lastConnected).toLocaleDateString() : '-'}
              </p>
            </div>
            <span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
              {$_('sync.connected')}
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
  
  <div class="mt-8 p-4 bg-blue-50 rounded-xl">
    <h4 class="text-sm font-medium text-blue-900 mb-2">How it works</h4>
    <ol class="text-xs text-blue-700 space-y-1">
      <li>1. Device A taps "Show QR Code"</li>
      <li>2. Device B taps "Scan QR Code"</li>
      <li>3. Devices connect directly via WebRTC</li>
      <li>4. No data passes through any server</li>
    </ol>
  </div>
</div>
