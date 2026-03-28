"use client";

import Image from "next/image";
import JabbLogo from "./JabbLogo";
import StoreButtons from "./StoreButtons";
import MobileNav from "./MobileNav";
import { useTranslation } from "@/lib/I18nProvider";

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: "500+", label: t("stats.jabbers") },
    { value: "50K+", label: t("stats.evaluations") },
    { value: "10+", label: t("stats.cities") },
    { value: "98%", label: t("stats.accuracy") },
  ];

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
              <div className="hero-done__phone">
                <Image
                  src="/images/screen-home.jpg"
                  alt="JABB mystery shopping app"
                  width={320}
                  height={660}
                  className="hero-done__phone-img floating"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="container mx-auto max-w-[1060px] px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-center gap-3 px-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">
                  {stat.value}
                </span>
                <span className="text-sm text-[var(--color-text-muted)] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
