// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language")|| 'en', // default language
    fallbackLng: localStorage.getItem("language") || 'en', // fallback language
    keySeparator: '.', // separator for keys
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
