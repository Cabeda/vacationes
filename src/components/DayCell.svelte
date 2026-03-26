<script lang="ts">
  import type { Entry, Holiday } from '$lib/types';
  import { formatDate } from '$lib/utils';
  
  interface Props {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
    holiday: Holiday | null;
    entries: Entry[];
    locale: string;
    isSelected?: boolean;
  }
  
  const { date, isCurrentMonth, isToday, isWeekend, holiday, entries, isSelected = false }: Props = $props();

  function getEntryColor(entry: Entry, profiles: Record<string, { color: string }>): string {
    const profile = profiles[entry.personId];
    return profile?.color || '#3B82F6';
  }
</script>

<div
  data-date={formatDate(date)}
  class="min-h-[80px] p-1 transition-colors cursor-pointer
    {isSelected ? 'bg-blue-100 ring-1 ring-inset ring-blue-400' : isWeekend ? 'bg-gray-50' : 'bg-white'}"
  class:opacity-40={!isCurrentMonth}
>
  <div class="flex justify-between items-start">
    <span class="text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full {isToday ? 'bg-blue-600 text-white' : 'text-gray-700'}"
    >
      {date.getDate()}
    </span>
    {#if holiday}
      <span class="text-[8px] px-1 py-0.5 bg-red-100 text-red-700 rounded truncate max-w-[50px]">
        {holiday.localName}
      </span>
    {/if}
  </div>
  
  <div class="mt-1 space-y-1">
    {#each entries as entry}
      <div
        class="text-[10px] px-1 py-0.5 rounded truncate"
        style:background-color={getEntryColor(entry, {})}
        style:color="white"
        title={entry.label}
      >
        {entry.label || '...'}
      </div>
    {/each}
  </div>
</div>
