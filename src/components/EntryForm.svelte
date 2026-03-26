<script lang="ts">
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  import { vacationesDoc, initializeDoc, updateDoc } from '$lib/automerge';
  import { locale } from '$lib/i18n';
  import type { Entry, LeaveType, Profile } from '$lib/types';
  import { generateId, formatDate } from '$lib/utils';

  import LeaveTypePicker from './LeaveTypePicker.svelte';
  
  let loading = $state(true);
  
  let selectedPersonId = $state<string>('');
  let selectedLeaveTypeId = $state<string>('ferias');
  let startDate = $state(formatDate(new Date()));
  let endDate = $state(formatDate(new Date()));
  let halfDay = $state<'morning' | 'afternoon' | null>(null);
  let label = $state('');
  let notes = $state('');
  let destination = $state('');
  let budget = $state<number | null>(null);
  let status = $state<'planned' | 'confirmed' | 'completed'>('planned');
  
  let saving = $state(false);
  let error = $state<string | null>(null);
  
  const doc = $derived($vacationesDoc);
  const profiles = $derived(doc ? Object.values(doc.profiles) : [] as Profile[]);
  const leaveTypes = $derived(doc ? Object.values(doc.leaveTypes).sort((a, b) => a.order - b.order) : [] as LeaveType[]);
  
  onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const qs = params.get('start');
    const qe = params.get('end');
    if (qs) {startDate = qs;}
    if (qe) {endDate = qe;}
    await initializeDoc();
    loading = false;
  });
  
  $effect(() => {
    if (profiles.length > 0 && !selectedPersonId) {
      selectedPersonId = profiles[0].id;
    }
  });
  
  function handleLeaveTypeChange(leaveTypeId: string) {
    selectedLeaveTypeId = leaveTypeId;
    const lt = leaveTypes.find(t => t.id === leaveTypeId);
    if (lt && !lt.halfDayAllowed) {
      halfDay = null;
    }
  }
  
  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!doc || !selectedPersonId) {return;}
    
    saving = true;
    error = null;
    
    try {
      const newEntry: Entry = {
        id: generateId(),
        personId: selectedPersonId,
        leaveTypeId: selectedLeaveTypeId,
        startDate,
        endDate,
        halfDay,
        label,
        notes,
        destination,
        budget,
        status,
        createdAt: new Date().toISOString()
      };
      
      updateDoc((d) => {
        d.entries[newEntry.id] = newEntry;
      });
      
      resetForm();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to save';
    } finally {
      saving = false;
    }
  }
  
  function resetForm() {
    startDate = formatDate(new Date());
    endDate = formatDate(new Date());
    halfDay = null;
    label = '';
    notes = '';
    destination = '';
    budget = null;
    status = 'planned';
  }
</script>

<form
  onsubmit={handleSubmit}
  class="space-y-4">
  {#if loading}
    <p class="text-gray-500">{$_('common.loading')}</p>
  {:else}
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {$_('entry.person')}
      </label>
      <select
        bind:value={selectedPersonId}
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {#each profiles as profile}
          <option value={profile.id}>
            {profile.name}
          </option>
        {/each}
      </select>
    </div>
    
    <LeaveTypePicker
      {leaveTypes}
      selectedId={selectedLeaveTypeId}
      {locale}
      onchange={handleLeaveTypeChange}
    />
    
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {$_('entry.startDate')}
        </label>
        <input
          type="date"
          bind:value={startDate}
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {$_('entry.endDate')}
        </label>
        <input
          type="date"
          bind:value={endDate}
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
    
    {#if leaveTypes.find(t => t.id === selectedLeaveTypeId)?.halfDayAllowed}
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {$_('entry.halfDay')}
        </label>
        <div class="flex gap-4">
          <label class="flex items-center">
            <input
              type="radio"
              bind:group={halfDay}
              value={null}
              class="mr-2"
            />
            <span class="text-sm">{$_('common.no')}</span>
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              bind:group={halfDay}
              value="morning"
              class="mr-2"
            />
            <span class="text-sm">{$_('entry.halfDayMorning')}</span>
          </label>
          <label class="flex items-center">
            <input
              type="radio"
              bind:group={halfDay}
              value="afternoon"
              class="mr-2"
            />
            <span class="text-sm">{$_('entry.halfDayAfternoon')}</span>
          </label>
        </div>
      </div>
    {/if}
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {$_('entry.label')}
      </label>
      <input
        type="text"
        bind:value={label}
        placeholder="e.g., Beach vacation"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {$_('entry.destination')}
      </label>
      <input
        type="text"
        bind:value={destination}
        placeholder="e.g., Algarve"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {$_('entry.budget')}
      </label>
      <input
        type="number"
        bind:value={budget}
        placeholder="0.00"
        step="0.01"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {$_('entry.status')}
      </label>
      <select
        bind:value={status}
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="planned">{$_('entry.statusPlanned')}</option>
        <option value="confirmed">{$_('entry.statusConfirmed')}</option>
        <option value="completed">{$_('entry.statusCompleted')}</option>
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        {$_('entry.notes')}
      </label>
      <textarea
        bind:value={notes}
        rows="3"
        placeholder="Additional notes..."
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ></textarea>
    </div>
    
    {#if error}
      <p class="text-red-600 text-sm">{error}</p>
    {/if}
    
    <button
      type="submit"
      disabled={saving}
      class="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {saving ? $_('common.loading') : $_('entry.save')}
    </button>
  {/if}
</form>
