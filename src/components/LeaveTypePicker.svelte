<script lang="ts">
  import { _ } from 'svelte-i18n';

  import type { LeaveType } from '$lib/types';
  
  interface Props {
    leaveTypes: LeaveType[];
    selectedId: string;
    locale: string;
    onchange: (id: string) => void;
  }
  
  const { leaveTypes, selectedId, locale, onchange }: Props = $props();
</script>

<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    {$_('entry.leaveType')}
  </label>
  <select
    value={selectedId}
    onchange={(e) => onchange(e.currentTarget.value)}
    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  >
    {#each leaveTypes as lt}
      <option value={lt.id}>
        {lt.icon} {lt.name[locale === 'en' ? 'en' : 'pt']}
      </option>
    {/each}
  </select>
</div>
