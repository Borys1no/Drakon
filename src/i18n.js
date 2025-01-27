import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      "welcome": "Bienvenido",
      "products": "PRODUCTOS",
      "cocktails": "COCTELES",
      "ourHistory": "NUESTRA HISTORIA",
      "process": "PROCESO",
      "recognitions": "RECONOCIMIENTOS",
      // Add more Spanish translations here
    }
  },
  en: {
    translation: {
      "welcome": "Welcome",
      "products": "PRODUCTS",
      "cocktails": "COCKTAILS",
      "ourHistory": "OUR HISTORY",
      "process": "PROCESS",
      "recognitions": "RECOGNITIONS",
      // Add more English translations here
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;