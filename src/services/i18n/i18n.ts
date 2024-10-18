import translationDE from '@locales/de/translation.json';
import translationEN from '@locales/en/translation.json';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const defaultNS = 'translation' as const;

export const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
} as const;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('quickbill_lang') ?? 'en',
    fallbackLng: 'de',
    defaultNS,
    debug: false, // set to false in production
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
