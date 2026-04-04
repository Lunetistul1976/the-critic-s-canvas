import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en.json";
import ro from "../locales/ro.json";
import fr from "../locales/fr.json";
import de from "../locales/de.json";
import es from "../locales/es.json";

export const supportedLanguages = ["en", "ro", "fr", "de", "es"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const resources = {
  en: { translation: en },
  ro: { translation: ro },
  fr: { translation: fr },
  de: { translation: de },
  es: { translation: es },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: [...supportedLanguages],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
