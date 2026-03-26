<script lang="ts">
  import { locale, setLocale } from '$lib/i18n';
</script>

<div class="flex gap-2">
  <button
    onclick={() => setLocale('pt')}
    class="flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors {$locale === 'pt' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
  >
    🇵🇹 Português
  </button>
  <button
    onclick={() => setLocale('en')}
    class="flex-1 py-2 px-4 text-sm font-medium rounded-lg transition-colors {$locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
  >
    🇬🇧 English
  </button>
</div>
