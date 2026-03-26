<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { getRepo } from '$lib/automerge';
  import type { LeaveType } from '$lib/types';
  import { generateId } from '$lib/utils';
  
  interface Props {
    leaveTypes: LeaveType[];
    locale: string;
  }
  
  let { leaveTypes, locale }: Props = $props();
  
  let showAddForm = $state(false);
  
  let newNamePt = $state('');
  let newNameEn = $state('');
  let newColor = $state('#3B82F6');
  let newIcon = $state('📅');
  let newAllowance = $state<number | null>(22);
  let newHalfDayAllowed = $state(false);
  let newDeductsFrom = $state<string | null>(null);
  
  async function handleSave() {
    const repo = getRepo();
    const docHandle = repo.find(['vacationes']);
    if (!docHandle) return;
    
    const newType: LeaveType = {
      id: generateId(),
      name: { pt: newNamePt, en: newNameEn },
      color: newColor,
      icon: newIcon,
      annualAllowance: newAllowance,
      deductsFrom: newDeductsFrom,
      halfDayAllowed: newHalfDayAllowed,
      isDefault: false,
      order: leaveTypes.length + 1
    };
    
    docHandle.change((d) => {
      d.leaveTypes[newType.id] = newType;
    });
    
    resetForm();
    showAddForm = false;
  }
  
  function resetForm() {
    newNamePt = '';
    newNameEn = '';
    newColor = '#3B82F6';
    newIcon = '📅';
    newAllowance = 22;
    newHalfDayAllowed = false;
    newDeductsFrom = null;
  }
  
  async function deleteLeaveType(id: string) {
    const lt = leaveTypes.find(t => t.id === id);
    if (lt?.isDefault) return;
    
    const repo = getRepo();
    const docHandle = repo.find(['vacationes']);
    if (!docHandle) return;
    
    docHandle.change((d) => {
      delete d.leaveTypes[id];
    });
  }
  
  async function toggleHalfDay(id: string) {
    const lt = leaveTypes.find(t => t.id === id);
    if (!lt) return;
    
    const repo = getRepo();
    const docHandle = repo.find(['vacationes']);
    if (!docHandle) return;
    
    docHandle.change((d) => {
      if (d.leaveTypes[id]) {
        d.leaveTypes[id].halfDayAllowed = !d.leaveTypes[id].halfDayAllowed;
      }
    });
  }
</script>

<div class="space-y-4">
  <div class="flex justify-between items-center">
    <h3 class="font-medium text-gray-900">{$_('leaveTypes.title')}</h3>
    <button
      onclick={() => showAddForm = !showAddForm}
      class="text-sm px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      {showAddForm ? $_('common.cancel') : $_('leaveTypes.add')}
    </button>
  </div>
  
  {#if showAddForm}
    <div class="bg-white rounded-xl shadow-sm p-4 space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">
            {$_('leaveTypes.namePt')}
          </label>
          <input
            type="text"
            bind:value={newNamePt}
            class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Nome em Português"
          />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">
            {$_('leaveTypes.nameEn')}
          </label>
          <input
            type="text"
            bind:value={newNameEn}
            class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Name in English"
          />
        </div>
      </div>
      
      <div class="grid grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">
            {$_('leaveTypes.icon')}
          </label>
          <input
            type="text"
            bind:value={newIcon}
            class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center text-2xl"
            placeholder="📅"
          />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">
            {$_('leaveTypes.color')}
          </label>
          <input
            type="color"
            bind:value={newColor}
            class="w-full h-10 rounded-lg cursor-pointer"
          />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-500 mb-1">
            {$_('leaveTypes.annualAllowance')}
          </label>
          <input
            type="number"
            bind:value={newAllowance}
            class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            placeholder="22"
          />
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <label class="flex items-center">
          <input
            type="checkbox"
            bind:checked={newHalfDayAllowed}
            class="mr-2"
          />
          <span class="text-sm">{$_('leaveTypes.halfDayAllowed')}</span>
        </label>
      </div>
      
      <button
        onclick={handleSave}
        disabled={!newNamePt || !newNameEn}
        class="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {$_('leaveTypes.add')}
      </button>
    </div>
  {/if}
  
  <div class="space-y-2">
    {#each leaveTypes.sort((a, b) => a.order - b.order) as lt}
      <div class="bg-white rounded-lg p-3 flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style="background-color: {lt.color}20; color: {lt.color}"
        >
          {lt.icon}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-medium text-gray-900 truncate">
            {lt.name[locale === 'en' ? 'en' : 'pt']}
          </p>
          <p class="text-xs text-gray-500">
            {lt.annualAllowance !== null ? `${lt.annualAllowance} days` : $_('leaveTypes.annualAllowanceUnlimited')}
            {#if lt.halfDayAllowed}
              • Half day
            {/if}
          </p>
        </div>
        <div class="flex items-center gap-2">
          {#if lt.halfDayAllowed}
            <button
              onclick={() => toggleHalfDay(lt.id)}
              class="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
            >
              Half day ✓
            </button>
          {/if}
          {#if !lt.isDefault}
            <button
              onclick={() => deleteLeaveType(lt.id)}
              class="text-xs px-2 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100"
            >
              {$_('common.delete')}
            </button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
