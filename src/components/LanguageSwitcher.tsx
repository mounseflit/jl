"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/lib/I18nProvider";
import type { Locale } from "@/lib/i18n";

const LOCALE_META: Record<Locale, { flag: string; labelKey: "common.english" | "common.french" | "common.arabic" }> = {
  en: { flag: "EN", labelKey: "common.english" },
  fr: { flag: "FR", labelKey: "common.french" },
  ar: { flag: "AR", labelKey: "common.arabic" },
};

const LOCALE_ORDER: Locale[] = ["en", "fr", "ar"];

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LOCALE_META[locale];

  return (
    <div ref={ref} className="language-switcher" style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        className="lang-switcher-btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.4rem 0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid rgba(255,255,255,0.25)",
          background: "rgba(255,255,255,0.08)",
          color: "white",
          cursor: "pointer",
          fontSize: "0.85rem",
          fontWeight: 500,
          transition: "all 0.3s",
        }}
      >
        <span>{current.flag}</span>
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
        <div
          className="lang-switcher-dropdown"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            minWidth: "150px",
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "0.75rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            zIndex: 100,
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {LOCALE_ORDER.map((loc) => {
            const meta = LOCALE_META[loc];
            const isActive = loc === locale;
            return (
              <button
                key={loc}
                onClick={() => {
                  setLocale(loc);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                  padding: "0.55rem 0.85rem",
                  border: "none",
                  background: isActive ? "var(--color-primary-bg)" : "transparent",
                  color: isActive ? "var(--color-primary)" : "var(--color-text)",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 600 : 400,
                  textAlign: "start",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.background = "var(--color-primary-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                <span>{meta.flag}</span>
                <span>{t(meta.labelKey)}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
