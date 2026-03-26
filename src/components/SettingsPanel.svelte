<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { locale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { vacationesDoc, initializeDoc, updateDoc } from '$lib/automerge';
  import { PORTUGAL_MUNICIPALITIES } from '$lib/leave-defaults';
  import type { Profile } from '$lib/types';
  import LeaveTypeManager from './LeaveTypeManager.svelte';
  import LanguageToggle from './LanguageToggle.svelte';
  
  let profiles = $state<Profile[]>([]);
  let loading = $state(true);
  let activeTab = $state<'profiles' | 'leaveTypes' | 'general'>('profiles');
  
  let doc = $derived($vacationesDoc);
  
  onMount(async () => {
    await initializeDoc();
    loading = false;
  });
  
  $effect(() => {
    if (doc) {
      profiles = Object.values(doc.profiles);
    }
  });
  
  function updateProfile(profileId: string, updates: Partial<Profile>) {
    if (!doc) return;
    
    updateDoc((d) => {
      if (d.profiles[profileId]) {
        Object.assign(d.profiles[profileId], updates);
      }
    });
  }
  
  function exportData() {
    if (!doc) return;
    const dataStr = JSON.stringify(doc, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vacationes-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<div class="space-y-4">
  <div class="flex border-b border-gray-200">
    <button
      onclick={() => activeTab = 'profiles'}
      class="flex-1 py-2 text-sm font-medium text-center transition-colors {activeTab === 'profiles' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}"
    >
      {$_('profile.title')}
    </button>
    <button
      onclick={() => activeTab = 'leaveTypes'}
      class="flex-1 py-2 text-sm font-medium text-center transition-colors {activeTab === 'leaveTypes' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}"
    >
      {$_('leaveTypes.title')}
    </button>
    <button
      onclick={() => activeTab = 'general'}
      class="flex-1 py-2 text-sm font-medium text-center transition-colors {activeTab === 'general' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}"
    >
      {$_('settings.title')}
    </button>
  </div>
  
  {#if loading}
    <p class="text-gray-500">{$_('common.loading')}</p>
  {:else if activeTab === 'profiles'}
    <div class="space-y-4">
      {#each profiles as profile}
        <div class="bg-white rounded-xl shadow-sm p-4 space-y-3">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style="background-color: {profile.color}"
            >
              {profile.name.charAt(0).toUpperCase()}
            </div>
            <div class="flex-1">
              <input
                type="text"
                value={profile.name}
                onchange={(e) => updateProfile(profile.id, { name: e.currentTarget.value })}
                class="font-medium text-gray-900 bg-transparent border-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">
              {$_('profile.municipality')}
            </label>
            <select
              value={profile.municipality}
              onchange={(e) => updateProfile(profile.id, { municipality: e.currentTarget.value })}
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            >
              {#each PORTUGAL_MUNICIPALITIES.sort() as municipality}
                <option value={municipality}>{municipality}</option>
              {/each}
            </select>
          </div>
          
          <div>
            <label class="block text-xs font-medium text-gray-500 mb-1">
              {$_('profile.color')}
            </label>
            <input
              type="color"
              value={profile.color}
              onchange={(e) => updateProfile(profile.id, { color: e.currentTarget.value })}
              class="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      {/each}
    </div>
  {:else if activeTab === 'leaveTypes'}
    {#if doc}
      <LeaveTypeManager
        leaveTypes={Object.values(doc.leaveTypes)}
        {locale}
      />
    {/if}
  {:else}
    <div class="space-y-4">
      <div class="bg-white rounded-xl shadow-sm p-4">
        <h3 class="font-medium text-gray-900 mb-3">{$_('settings.language')}</h3>
        <LanguageToggle />
      </div>
      
      <div class="bg-white rounded-xl shadow-sm p-4">
        <h3 class="font-medium text-gray-900 mb-3">{$_('settings.exportData')}</h3>
        <button
          onclick={exportData}
          class="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          {$_('settings.exportData')}
        </button>
      </div>
    </div>
  {/if}
</div>
