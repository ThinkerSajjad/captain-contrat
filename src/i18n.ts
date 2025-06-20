'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../public/locales/en/translation.json';
import frTranslation from '../public/locales/fr/translation.json';

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
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 