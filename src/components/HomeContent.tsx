"use client";

import Image from "next/image";
import IPhoneFrame from "./IPhoneFrame";

import { useTranslation } from "@/lib/I18nProvider";

/* Service definitions using ACTUAL i18n keys */
const serviceKeys = [
  { titleKey: "services.rewardSystem.title", subtitleKey: "services.rewardSystem.subtitle", descKey: "services.rewardSystem.desc", ctaKey: "services.rewardSystem.cta", href: "/services/rewards", image: "/images/screen-missions.jpg", gradient: "from-[#1d1597] to-[#3028C0]", phone: true, smallImage: false },
  { titleKey: "services.voiceOfCustomer.title", subtitleKey: "services.voiceOfCustomer.subtitle", descKey: "services.voiceOfCustomer.desc", ctaKey: "services.voiceOfCustomer.cta", href: "/services/voice-of-customer", image: "/images/screen-new-5.jpg", gradient: "from-[#140F6E] to-[#3028C0]", phone: false, smallImage: false },
  { titleKey: "services.aiReports.title", subtitleKey: "services.aiReports.subtitle", descKey: "services.aiReports.desc", ctaKey: "services.aiReports.cta", href: "/services/ai-reports", image: "/images/screen-business.jpg", gradient: "from-[#3028C0] to-[#140F6E]", phone: false, smallImage: false },
  { titleKey: "services.qrCodes.title", subtitleKey: "services.qrCodes.subtitle", descKey: "services.qrCodes.desc", ctaKey: "services.qrCodes.cta", href: "/services/qr-codes", image: "/images/screen-qr.jpg", gradient: "from-[#140F6E] to-[#1d1597]", phone: false, smallImage: true },
  { titleKey: "services.cxAudits.title", subtitleKey: "services.cxAudits.subtitle", descKey: "services.cxAudits.desc", ctaKey: "services.cxAudits.cta", href: "/services/cx-audits", image: "/images/screen-new-4.jpg", gradient: "from-[#1d1597] to-[#3028C0]", phone: false, smallImage: false },
] as const;

export default function HomeContent() {
  const { t, dir } = useTranslation();
  const isRtl = dir === "rtl";
  const arrowFlip = isRtl ? "rotate-180" : "";

  return (
    <>
      {/* ── How It Works ── */}
      <section className="hiw">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="hiw__label">
              {t("howItWorks.title")}
            </span>
            <h2 className="hiw__heading">
              {t("howItWorks.subtitle")}
            </h2>
          </div>

          <div className="hiw__grid">
            {/* Connector line */}
            <div className="hiw__connector" />

            {/* Step 1 — Download: Phone with arrow */}
            <a href="/go" className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--1">

                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4v20m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 32h32a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4a2 2 0 012-2z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1" />
                  </svg>

                </div>
                <span className="hiw__num">01</span>
              </div>
              <h4 className="hiw__title">
                {t("howItWorks.step1.title" as keyof typeof import("@/lib/i18n").translations.en)}
              </h4>
              <p className="hiw__desc">
                {t("howItWorks.step1.desc" as keyof typeof import("@/lib/i18n").translations.en)}
              </p>
            </a>

            {/* Step 2 — Share: Star rating with speech bubble */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--2">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8h24a4 4 0 014 4v14a4 4 0 01-4 4H18l-6 5v-5H8a4 4 0 01-4-4V12a4 4 0 014-4z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1" />
                    <path d="M20 14l1.76 3.56 3.94.58-2.85 2.78.67 3.92L20 22.92l-3.52 1.92.67-3.92-2.85-2.78 3.94-.58L20 14z" fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <span className="hiw__num">02</span>
              </div>
              <h4 className="hiw__title">
                {t("howItWorks.step2.title" as keyof typeof import("@/lib/i18n").translations.en)}
              </h4>
              <p className="hiw__desc">
                {t("howItWorks.step2.desc" as keyof typeof import("@/lib/i18n").translations.en)}
              </p>
            </div>

            {/* Step 3 — Earn: Coin with lightning bolt */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--3">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22" cy="26" r="14" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1" />
                    <circle cx="22" cy="26" r="10" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4" />
                    <text x="22" y="31" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui">J</text>
                  </svg>
                </div>
                <span className="hiw__num">03</span>
              </div>
              <h4 className="hiw__title">
                {t("howItWorks.step3.title" as keyof typeof import("@/lib/i18n").translations.en)}
              </h4>
              <p className="hiw__desc">
                {t("howItWorks.step3.desc" as keyof typeof import("@/lib/i18n").translations.en)}
              </p>
            </div>

            {/* Step 4 — Delivered: Rocket / send arrow with checkmark */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--4">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* First checkmark */}
                    <path d="M4 24l6 6 14-14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Second checkmark overlapping */}
                    <path d="M16 24l6 6 14-14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                  </svg>
                </div>
                <span className="hiw__num">04</span>
              </div>
              <h4 className="hiw__title">
                {t("howItWorks.step4.title" as keyof typeof import("@/lib/i18n").translations.en)}
              </h4>
              <p className="hiw__desc">
                {t("howItWorks.step4.desc" as keyof typeof import("@/lib/i18n").translations.en)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — 6 alternating sections ── */}
      <section id="section-services">
        {serviceKeys.map((s, i) => {
          const isEven = i % 2 === 0;
          const bgClass = isEven ? "bg-[var(--color-bg)]" : "bg-gray-50";

          return (
            <div key={s.titleKey} className={`py-8 md:py-12 ${bgClass}`}>
              <div className="container mx-auto max-w-[1060px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white bg-gradient-to-r ${s.gradient} mb-3`}>
                      {t(s.titleKey)}
                    </span>
                    <h3 className="!text-xl sm:!text-2xl font-extrabold text-[var(--color-text)] leading-snug !mb-3">
                      {t(s.subtitleKey)}
                    </h3>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-5 max-w-[440px]">
                      {t(s.descKey)}
                    </p>
                    <a href={s.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors group">
                      {t(s.ctaKey)}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform group-hover:translate-x-1 ${arrowFlip}`}>
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className={`${!isEven ? "lg:order-1" : ""} flex justify-center`}>
                    {s.phone ? (
                      <div className={`service-phone-tilt ${!isEven ? "service-phone-tilt--left" : ""}`}>
                        <IPhoneFrame src={s.image} alt={t(s.titleKey)} />
                      </div>
                    ) : (
                      <div className={`relative w-full ${s.smallImage ? "max-w-[260px]" : "max-w-[480px]"} rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-shadow duration-300`}>
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-[var(--color-border)]">
                          <span className="h-2 w-2 rounded-full bg-red-400/60" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                          <span className="h-2 w-2 rounded-full bg-green-400/60" />
                          <span className="ml-2 text-[9px] text-[var(--color-text-muted)] truncate">app.jabb.pro</span>
                        </div>
                        <Image src={s.image} alt={t(s.titleKey)} width={560} height={380} className="w-full h-auto object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
