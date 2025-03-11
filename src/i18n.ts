import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Initialize i18n
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // Using static import for JSON files
      loadPath: '/src/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'pt-BR'],
    debug: process.env.NODE_ENV === 'development',
    defaultNS: 'translation',
    ns: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

// Import translations manually to avoid HTTP requests in development
// and ensure they're bundled with the app
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import ptBRTranslation from './locales/pt-BR/translation.json';

// Add resources manually
i18n.addResourceBundle('en', 'translation', enTranslation);
i18n.addResourceBundle('es', 'translation', esTranslation);
i18n.addResourceBundle('pt-BR', 'translation', ptBRTranslation);

export default i18n;