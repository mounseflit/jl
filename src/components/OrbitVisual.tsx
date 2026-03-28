"use client";

import JabbLogo from "./JabbLogo";
import { useTranslation } from "@/lib/I18nProvider";

const ORBIT_ITEMS = [
  {
    label: "WEB",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "LOCATION",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "PRODUCT",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: "APP",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    label: "DATA",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    label: "AUDIT",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function OrbitVisual() {
  const { t } = useTranslation();

  return (
    <section className="orbit-section">
      {/* Section header */}
      <div className="orbit-section__header">
        <span className="orbit-section__badge">{t("orbit.badge")}</span>
        <h2 className="orbit-section__title">{t("orbit.title")}</h2>
        <p className="orbit-section__subtitle">{t("orbit.subtitle")}</p>
      </div>

      <div className="orbit-section__inner">
        {/* Elliptical ring guides (decorative) */}
        <div className="orbit-ellipse orbit-ellipse--1" />
        <div className="orbit-ellipse orbit-ellipse--2" />

        {/* Orbit scene — each pill traces an ellipse via animation-delay */}
        <div className="orbit-scene">
          {ORBIT_ITEMS.map((item) => (
            <div key={item.label} className="orbit-item">
              <div className="orbit-pill">
                <span className="orbit-pill__icon">{item.icon}</span>
                <span className="orbit-pill__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Center globe/orb — sits above the ring */}
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
    </section>
  );
}
