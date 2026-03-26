import { init, addMessages, getLocaleFromNavigator, locale } from 'svelte-i18n';
import pt from '../i18n/pt.json';
import en from '../i18n/en.json';

addMessages('pt', pt);
addMessages('en', en);

init({
  fallbackLocale: 'pt',
  initialLocale: getLocaleFromNavigator() || 'pt'
});

export { locale };

export function setLocale(lang: 'pt' | 'en') {
  locale.set(lang);
}
