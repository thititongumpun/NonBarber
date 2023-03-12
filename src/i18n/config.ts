import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/en/trans.json';
import th from '../assets/locales/th/trans.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const defaultNS = 'translation';

export const resources = {
  en: { translation: en },
  th: { translation: th },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'th'],
    ns: ['translation'],
    defaultNS,
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  })

export default i18next;