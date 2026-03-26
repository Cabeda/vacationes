import { locale } from 'svelte-i18n';

export { locale };

export function setLocale(lang: 'pt' | 'en') {
  void locale.set(lang);
}
