"use client";

import JabbLogo from "./JabbLogo";
import StoreButtons from "./StoreButtons";
import MobileNav from "./MobileNav";
import IPhoneFrame from "./IPhoneFrame";
import { useTranslation } from "@/lib/I18nProvider";

const MARQUEE_ITEMS = [
  "COMMUNITY DRIVEN",
  "REAL-TIME DASHBOARDS",
  "GOLDEN PROOF PROTOCOL",
  "ANTI-FRAUD QA",
  "DENSITY-FIRST",
  "MYSTERY SHOPPING REIMAGINED",
  "VERIFIED FIELD DATA",
  "ACTIONABLE INSIGHTS",
  "PRIVACY BY DESIGN",
];

export default function Hero() {
  const { t, dir } = useTranslation();
  const isRtl = dir === "rtl";

  const stats = [
    { value: "500+", label: t("stats.jabbers") },
    { value: "50K+", label: t("stats.evaluations") },
    { value: "10+", label: t("stats.cities") },
    { value: "98%", label: t("stats.accuracy") },
  ];

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
                    <JabbLogo size={40} />
                    <span className="brand__text">JABB</span>
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

      {/* ── Combined Stats + Marquee Bar ── */}
      <div className="hero-bar">
        {/* Stats row */}
        <div className="hero-bar__stats">
          <div className="container mx-auto max-w-[1060px] px-6">
            <div className="hero-bar__stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-bar__stat">
                  <span className="hero-bar__stat-value">{stat.value}</span>
                  <span className="hero-bar__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Marquee row */}
        <div className="hero-bar__marquee">
          <div className="marquee-ticker__track">
            {marqueeContent.map((item, i) => (
              <span key={i} className="marquee-ticker__item">
                <span className="marquee-ticker__dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
