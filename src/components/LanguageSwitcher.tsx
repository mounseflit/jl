"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/lib/I18nProvider";
import type { Locale } from "@/lib/i18n";

const LOCALE_META: Record<Locale, { labelKey: "common.english" | "common.french" | "common.arabic" }> = {
  en: { labelKey: "common.english" },
  fr: { labelKey: "common.french" },
  ar: { labelKey: "common.arabic" },
};

const LOCALE_ORDER: Locale[] = ["en", "fr", "ar"];

/**
 * variant="desktop" → dropdown button, hidden on mobile (<769px)
 * variant="mobile"  → pill slider, hidden on desktop (>=769px)
 */
export default function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LOCALE_META[locale];

  /* ── Mobile: pill slider ── */
  if (variant === "mobile") {
    return (
      <div className="lang-switcher-mobile">
        {LOCALE_ORDER.map((loc) => (
          <button
            key={loc}
            onClick={() => setLocale(loc)}
            className={`lang-pill${loc === locale ? " lang-pill--active" : ""}`}
            aria-label={`Switch to ${t(LOCALE_META[loc].labelKey)}`}
          >
            {t(LOCALE_META[loc].labelKey)}
          </button>
        ))}
      </div>
    );
  }

  /* ── Desktop: dropdown button ── */
  return (
    <div ref={ref} className="lang-switcher-desktop">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        className="lang-switcher-btn"
      >
        <span>{t(current.labelKey)}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-dropdown">
          {LOCALE_ORDER.map((loc) => {
            const meta = LOCALE_META[loc];
            const isActive = loc === locale;
            return (
              <button
                key={loc}
                onClick={() => { setLocale(loc); setOpen(false); }}
                className={`lang-dropdown__item${isActive ? " lang-dropdown__item--active" : ""}`}
              >
                <span>{t(meta.labelKey)}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
