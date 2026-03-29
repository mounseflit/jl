"use client";

import { useState } from "react";
import JabbLogo from "./JabbLogo";
import { useTranslation } from "@/lib/I18nProvider";
import type { TranslationKey } from "@/lib/i18n";

const ORBIT_ITEMS = [
  {
    key: "web",
    label: "WEB",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    key: "location",
    label: "LOCATION",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: "product",
    label: "PRODUCT",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    key: "app",
    label: "APP",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    key: "calls",
    label: "CALLS",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key: "data",
    label: "DATA",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    key: "audit",
    label: "AUDIT",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    key: "store",
    label: "STORE",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7l2-3h16l2 3" /><path d="M2 7h20v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M10 22v-6h4v6" />
      </svg>
    ),
  },
];

export default function OrbitVisual() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleClick = (key: string) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="orbit-section">
      {/* Section header */}
      <div className="orbit-section__header">
        <span className="orbit-section__badge">{t("orbit.badge")}</span>
        <h2 className="orbit-section__title">{t("orbit.title")}</h2>
        <p className="orbit-section__subtitle">{t("orbit.subtitle")}</p>
      </div>

      <div className="orbit-split">
        {/* LEFT: Globe + orbit — always spinning */}
        <div className="orbit-split__globe">
          <div className="orbit-section__inner">
            <div className="orbit-ellipse orbit-ellipse--1" />
            <div className="orbit-ellipse orbit-ellipse--2" />

            <div className="orbit-scene">
              {ORBIT_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className={`orbit-item`}
                  onClick={() => handleClick(item.key)}
                >
                  <div className={`orbit-pill ${activeKey === item.key ? "orbit-pill--active" : ""}`}>
                    <span className="orbit-pill__icon">{item.icon}</span>
                    <span className="orbit-pill__label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="orbit-globe">
              <div className="orbit-globe__glow" />
              <div className="orbit-globe__sphere">
                <svg className="orbit-globe__grid" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
                  <ellipse cx="100" cy="100" rx="92" ry="28" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
                  <ellipse cx="100" cy="100" rx="92" ry="55" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
                  <ellipse cx="100" cy="100" rx="65" ry="92" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
                  <ellipse cx="100" cy="100" rx="32" ry="92" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
                  <line x1="8" y1="100" x2="192" y2="100" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
                  <line x1="100" y1="8" x2="100" y2="192" stroke="currentColor" strokeWidth="0.4" opacity="0.1" />
                </svg>
                <div className="orbit-globe__logo">
                  <JabbLogo size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Cards grid — shows explanation when clicked */}
        <div className="orbit-split__cards">
          {activeKey ? (
            /* Active card — full detail */
            (() => {
              const item = ORBIT_ITEMS.find((i) => i.key === activeKey)!;
              return (
                <div className="orbit-card orbit-card--detail" key={activeKey}>
                  <button
                    className="orbit-card__close"
                    onClick={() => setActiveKey(null)}
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                    <span>{t("orbit.badge")}</span>
                  </button>
                  <div className="orbit-card__icon-lg">
                    {item.icon}
                  </div>
                  <h4 className="orbit-card__title">
                    {t(`orbit.item.${item.key}.title` as TranslationKey)}
                  </h4>
                  <p className="orbit-card__desc">
                    {t(`orbit.item.${item.key}.desc` as TranslationKey)}
                  </p>
                </div>
              );
            })()
          ) : (
            /* Default: mini cards grid */
            <div className="orbit-cards-grid">
              {ORBIT_ITEMS.map((item) => (
                <button
                  key={item.key}
                  className="orbit-minicard"
                  onClick={() => handleClick(item.key)}
                >
                  <span className="orbit-minicard__icon">{item.icon}</span>
                  <span className="orbit-minicard__label">
                    {t(`orbit.item.${item.key}.title` as TranslationKey)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
