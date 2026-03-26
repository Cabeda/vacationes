<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { locale, setLocale } from '$lib/i18n';
  
  interface Props {
    currentPage: string;
  }
  
  const { currentPage }: Props = $props();
  
  const navItems = [
    { id: 'calendar', icon: '📅', labelKey: 'nav.calendar' },
    { id: 'add', icon: '➕', labelKey: 'nav.add' },
    { id: 'sync', icon: '🔗', labelKey: 'nav.sync' },
    { id: 'settings', icon: '⚙️', labelKey: 'nav.settings' }
  ];
  
  function toggleLanguage() {
    const newLang = $locale === 'pt' ? 'en' : 'pt';
    setLocale(newLang);
  }
</script>

<nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
  {#if $locale}
    <div class="max-w-md mx-auto flex justify-around items-center">
      {#each navItems as item}
        <a
          href={item.id === 'calendar' ? '/' : item.id === 'add' ? '/plan' : `/${item.id}`}
          class="flex flex-col items-center py-3 px-4 transition-colors {currentPage === item.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}"
        >
          <span class="text-xl">{item.icon}</span>
          <span class="text-xs mt-1">{$_(item.labelKey)}</span>
        </a>
      {/each}
    </div>
    <button
      onclick={toggleLanguage}
      class="absolute top-3 right-4 text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
    >
      {$locale === 'pt' ? 'EN' : 'PT'}
    </button>
  {:else}
    <div class="max-w-md mx-auto flex justify-around items-center py-3">
      {#each navItems}
        <div class="w-12 h-8 bg-gray-100 rounded animate-pulse"></div>
      {/each}
    </div>
  {/if}
</nav>
