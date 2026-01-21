import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "./translation/en.json";
import ar from "./translation/ar.json";

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: "ar",          // default language
    fallbackLng: "en",  // if key missing in selected language
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

export default i18n;