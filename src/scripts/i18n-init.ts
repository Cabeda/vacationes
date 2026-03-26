import { init, addMessages, locale } from 'svelte-i18n';

import en from '../i18n/en.json';
import pt from '../i18n/pt.json';

addMessages('pt', pt);
addMessages('en', en);

function normalizeLocale(locale: string | null): string {
  if (!locale) {return 'pt';}
  return locale.startsWith('en') ? 'en' : 'pt';
}

const browserLocale = normalizeLocale(
  typeof navigator !== 'undefined' ? navigator.language : null
);

void init({
  fallbackLocale: 'pt',
  initialLocale: browserLocale
});

locale.subscribe((l) => {
  if (l) {document.dispatchEvent(new CustomEvent('i18n:ready'));}
});
