"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, isRTL, type Locale, type TranslationKey } from "./i18n";

/* ─── Types ─── */
interface I18nContextValue {
  /** Current locale */
  locale: Locale;
  /** Change the active locale */
  setLocale: (locale: Locale) => void;
  /** Translate a key */
  t: (key: TranslationKey) => string;
  /** Text direction: "ltr" or "rtl" */
  dir: "ltr" | "rtl";
}

/* ─── Context ─── */
const I18nContext = createContext<I18nContextValue | null>(null);

/* ─── Storage key ─── */
const STORAGE_KEY = "jabb-locale";
const DEFAULT_LOCALE: Locale = "en";

/* ─── Helpers ─── */
function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fr" || stored === "ar") return stored;
  return DEFAULT_LOCALE;
}

/* ─── Provider ─── */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  /* Hydrate from localStorage after mount */
  useEffect(() => {
    setLocaleState(getInitialLocale());
    setMounted(true);
  }, []);

  /* Keep <html> lang + dir in sync */
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.lang = locale;
    html.dir = isRTL(locale) ? "rtl" : "ltr";
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale]?.[key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  const dir = isRTL(locale) ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

/* ─── Hook ─── */
export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within an <I18nProvider>");
  }
  return ctx;
}
