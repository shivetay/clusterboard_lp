import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS } from './locales/pl/locales';

void i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: TRANSLATIONS,
    },
  },
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
