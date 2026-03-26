<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { locale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { vacationesDoc, initializeDoc } from '$lib/automerge';
  import type { BalanceInfo } from '$lib/types';
  import { calculateAllBalances } from '$lib/balance';
  import { normalizeLocale } from '$lib/utils';

  let loading = $state(true);

  let doc = $derived($vacationesDoc);

  let currentProfileId = $derived(
    doc ? Object.keys(doc.profiles)[0] ?? null : null
  );

  let balances = $derived.by<BalanceInfo[]>(() => {
    if (!doc || !currentProfileId) return [];
    const profile = doc.profiles[currentProfileId];
    if (!profile) return [];
    return calculateAllBalances(profile, doc.leaveTypes, doc.entries);
  });

  onMount(async () => {
    await initializeDoc();
    loading = false;
  });
</script>

<div class="bg-white rounded-xl shadow-sm p-4 mb-4">
  {#if loading}
    <p class="text-sm text-gray-500">{$_('common.loading')}</p>
  {:else if balances.length > 0}
    <div class="flex gap-2 overflow-x-auto pb-2">
      {#each balances as balance}
        {@const leaveType = doc?.leaveTypes[balance.leaveTypeId]}
        {#if leaveType && balance.allowance > 0}
          <div class="flex-shrink-0 bg-gray-50 rounded-lg p-3 min-w-[100px]">
            <div class="flex items-center gap-1 mb-1">
              <span>{leaveType.icon}</span>
              <span class="text-xs font-medium text-gray-700">
                {leaveType.name[normalizeLocale($locale)]}
              </span>
            </div>
            <div class="text-lg font-bold" style="color: {leaveType.color}">
              {balance.remaining}
            </div>
            <div class="text-xs text-gray-500">
              {$_('balance.of')} {balance.allowance}
            </div>
            <div class="mt-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all"
                style="width: {Math.max(0, Math.min(100, (balance.used / balance.allowance) * 100))}%; background-color: {leaveType.color}"
              ></div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  {:else}
    <p class="text-sm text-gray-500">{$_('common.noData')}</p>
  {/if}
</div>
