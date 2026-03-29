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

            {/* Step 1 — Download */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--1">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
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
            </div>

            {/* Step 2 — Share */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
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

            {/* Step 3 — Earn */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

            {/* Step 4 — Delivered */}
            <div className="hiw__step">
              <div className="hiw__icon-wrap">
                <div className="hiw__icon hiw__icon--4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22l-4-9-9-4z" />
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
