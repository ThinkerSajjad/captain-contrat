'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: require('../public/locales/en/translation.json')
      },
      fr: {
        translation: require('../public/locales/fr/translation.json')
      }
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 