import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/** Keeps <html lang> in sync with the active locale. */
const I18nSync = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const base = i18n.resolvedLanguage?.split("-")[0] ?? "en";
    document.documentElement.lang = base;
  }, [i18n.resolvedLanguage]);
  return null;
};

export default I18nSync;
