<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { locale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { vacationesDoc, initializeDoc } from '$lib/automerge';
  import { getHolidaysForYear } from '$lib/holidays';
  import type { Entry, Holiday } from '$lib/types';
  import {
    getMonthDays,
    getMonthName,
    formatDate,
    parseDate,
    isWeekend,
    isHoliday
  } from '$lib/utils';
  import DayCell from './DayCell.svelte';
  
  let currentYear = $state(new Date().getFullYear());
  let currentMonth = $state(new Date().getMonth());
  let holidays = $state<Holiday[]>([]);
  let loading = $state(true);

  // Drag-to-select state
  let dragStart = $state<Date | null>(null);
  let dragEnd = $state<Date | null>(null);
  let isDragging = $state(false);
  
  let doc = $derived($vacationesDoc);
  
  onMount(async () => {
    await initializeDoc();
    await loadHolidays();
    loading = false;

    // End drag if pointer released outside grid
    window.addEventListener('pointerup', handleWindowPointerUp);
    return () => window.removeEventListener('pointerup', handleWindowPointerUp);
  });
  
  async function loadHolidays() {
    if (!doc) return;
    const profileIds = Object.keys(doc.profiles);
    const municipality = profileIds.length > 0 ? doc.profiles[profileIds[0]].municipality : 'Lisboa';
    const cachedHolidays = doc.holidays || {};
    holidays = await getHolidaysForYear(currentYear, municipality, cachedHolidays);
  }
  
  function prevMonth() {
    if (currentMonth === 0) { currentMonth = 11; currentYear--; }
    else currentMonth--;
  }
  
  function nextMonth() {
    if (currentMonth === 11) { currentMonth = 0; currentYear++; }
    else currentMonth++;
  }
  
  function goToToday() {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
  }
  
  function getEntriesForDay(day: Date): Entry[] {
    if (!doc) return [];
    const dayStr = formatDate(day);
    return Object.values(doc.entries).filter(entry =>
      dayStr >= entry.startDate && dayStr <= entry.endDate
    );
  }
  
  function isToday(day: Date): boolean {
    const today = new Date();
    return day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear();
  }
  
  function isCurrentMonth(day: Date): boolean {
    return day.getMonth() === currentMonth;
  }

  // --- Drag selection ---

  function selectionRange(): { start: Date; end: Date } | null {
    if (!dragStart || !dragEnd) return null;
    return dragStart <= dragEnd
      ? { start: dragStart, end: dragEnd }
      : { start: dragEnd, end: dragStart };
  }

  function isSelected(day: Date): boolean {
    const range = selectionRange();
    if (!range) return false;
    const d = day.getTime();
    return d >= range.start.getTime() && d <= range.end.getTime();
  }

  function dateFromElement(el: Element | null): Date | null {
    const cell = el?.closest('[data-date]') as HTMLElement | null;
    const ds = cell?.dataset.date;
    return ds ? parseDate(ds) : null;
  }

  function handleGridPointerDown(e: PointerEvent) {
    const day = dateFromElement(e.target as Element);
    if (!day) return;
    isDragging = true;
    dragStart = day;
    dragEnd = day;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function handleGridPointerMove(e: PointerEvent) {
    if (!isDragging) return;
    // Use elementFromPoint so touch drag works too
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const day = dateFromElement(el);
    if (day) dragEnd = day;
  }

  function handleGridPointerUp(_e: PointerEvent) {
    if (!isDragging) return;
    commitSelection();
  }

  function handleWindowPointerUp() {
    if (isDragging) commitSelection();
  }

  function commitSelection() {
    isDragging = false;
    const range = selectionRange();
    if (range) {
      const start = formatDate(range.start);
      const end = formatDate(range.end);
      window.location.href = `/plan?start=${start}&end=${end}`;
    }
    dragStart = null;
    dragEnd = null;
  }
</script>

<div class="bg-white rounded-xl shadow-sm overflow-hidden">
  <div class="flex items-center justify-between p-4 border-b border-gray-100">
    <button onclick={prevMonth} class="p-2 hover:bg-gray-100 rounded-lg transition-colors">←</button>
    <div class="text-center">
      <h2 class="text-lg font-semibold text-gray-900">
        {getMonthName(currentMonth, $locale || 'pt')} {currentYear}
      </h2>
    </div>
    <button onclick={nextMonth} class="p-2 hover:bg-gray-100 rounded-lg transition-colors">→</button>
  </div>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="grid grid-cols-7 gap-px bg-gray-200 p-2 select-none"
    style="touch-action: none;"
    onpointerdown={handleGridPointerDown}
    onpointermove={handleGridPointerMove}
    onpointerup={handleGridPointerUp}
  >
    {#each ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'] as dayName}
      <div class="text-center text-xs font-medium text-gray-500 py-2">{dayName}</div>
    {/each}
    
    {#if !loading}
      {#each getMonthDays(currentYear, currentMonth) as day}
        {@const dayHoliday = isHoliday(day, holidays)}
        <DayCell
          date={day}
          isCurrentMonth={isCurrentMonth(day)}
          isToday={isToday(day)}
          isWeekend={isWeekend(day)}
          holiday={dayHoliday}
          entries={getEntriesForDay(day)}
          {locale}
          isSelected={isSelected(day)}
        />
      {/each}
    {/if}
  </div>
  
  <div class="p-4 border-t border-gray-100">
    <button
      onclick={goToToday}
      class="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
    >
      {$_('calendar.today')}
    </button>
  </div>
</div>

{#if holidays.length > 0}
  <div class="mt-4 bg-white rounded-xl shadow-sm p-4">
    <h3 class="text-sm font-medium text-gray-700 mb-2">{$_('holidays.title')}</h3>
    <div class="flex flex-wrap gap-2">
      {#each holidays.slice(0, 5) as holiday}
        <span class="text-xs px-2 py-1 bg-red-50 text-red-700 rounded">
          {formatDate(parseDate(holiday.date))} - {holiday.localName}
        </span>
      {/each}
    </div>
  </div>
{/if}

