"use client";

import StoreButtons from "./StoreButtons";
import MobileNav from "./MobileNav";
import IPhoneFrame from "./IPhoneFrame";
import { useTranslation } from "@/lib/I18nProvider";

type MarqueeEntry =
  | { type: "text"; label: string }
  | { type: "stat"; value: string; labelKey: string };

const MARQUEE_ITEMS: MarqueeEntry[] = [
  { type: "stat", value: "500+", labelKey: "stats.jabbers" },
  { type: "text", label: "COMMUNITY DRIVEN" },
  { type: "text", label: "REAL-TIME DASHBOARDS" },
  { type: "stat", value: "100K+", labelKey: "stats.evaluations" },
  { type: "text", label: "GOLDEN PROOF PROTOCOL" },
  { type: "text", label: "YOUR VOICE MATTERS" },
  { type: "stat", value: "30s", labelKey: "stats.time" },
  { type: "text", label: "AI-NATIVE ANALYTICS" },
  { type: "text", label: "MYSTERY SHOPPING REIMAGINED" },
  { type: "stat", value: "100%", labelKey: "stats.accuracy" },
  { type: "text", label: "VERIFIED FIELD DATA" },
  { type: "text", label: "ACTIONABLE INSIGHTS" },
  { type: "text", label: "THE VOC PLATFORM" },
];

export default function Hero() {
  const { t, dir } = useTranslation();
  const isRtl = dir === "rtl";

  // Double the items for seamless looping
  const marqueeContent = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <>
      <section className="hero-done">
        <MobileNav />
        <div className="hero-done__content">
          <div className="container mx-auto max-w-[1060px] px-6 lg:px-8">
            <div className="hero-done__grid">
              <div className="hero-done__text">
                <div className="brand hidden lg:block" style={{ width: "9.5rem" }}>
                  <a href="/" aria-label="JABB Home">
                    <span className="brand__text">




                    </span>
                  </a>
                </div>
                <h1 className="font-display text-white font-extrabold leading-[1.1] tracking-tight text-[clamp(1.6rem,3.8vw,2.6rem)]">
                  {t("hero.title")}
                </h1>
                <p className="text-white/70 text-[clamp(0.78rem,0.95vw,0.9rem)] leading-relaxed max-w-[420px]">
                  {t("hero.subtitle")}
                </p>
                <StoreButtons />
                <a
                  href="https://app.jabb.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  {t("hero.webDashboard")} &rarr;
                </a>
              </div>
              <div className={`hero-done__phone ${isRtl ? "hero-done__phone--rtl" : ""}`}>
                <IPhoneFrame
                  src="/images/screen-home.jpg"
                  alt="JABB mystery shopping app"
                  priority
                />
                <div className="hero-done__phone-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Unified Marquee Bar — stats + keywords in one ticker ── */}
      <div className="hero-bar">
        <div className="hero-bar__marquee">
          <div className="marquee-ticker__track">
            {marqueeContent.map((item, i) =>
              item.type === "stat" ? (
                <span key={i} className="marquee-ticker__item marquee-ticker__item--stat">
                  <span className="marquee-ticker__dot" />
                  <span className="marquee-ticker__stat-value">{item.value}</span>
                  <span className="marquee-ticker__stat-label">
                    {t(item.labelKey as Parameters<typeof t>[0])}
                  </span>
                </span>
              ) : (
                <span key={i} className="marquee-ticker__item">
                  <span className="marquee-ticker__dot" />
                  {item.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
