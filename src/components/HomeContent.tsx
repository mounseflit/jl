"use client";

import Image from "next/image";
import IPhoneFrame from "./IPhoneFrame";
import { useTranslation } from "@/lib/I18nProvider";

/* ── SVG Icons — Each icon has a unique fill accent + stroke for depth ── */
function MoneyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="var(--color-primary)" fillOpacity="0.08" />
      <path d="M15 9.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5 10.343 12 12 12s3 1.12 3 2.5S13.657 17 12 17s-3-1.12-3-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 5.5V7M12 17v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="var(--color-primary)" fillOpacity="0.08" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="var(--color-primary)" fillOpacity="0.08" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="var(--color-primary)" fillOpacity="0.08" />
      <rect x="6" y="13" width="3" height="5" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="10.5" y="9" width="3" height="9" rx="0.5" fill="currentColor" opacity="0.8" />
      <rect x="15" y="6" width="3" height="12" rx="0.5" fill="currentColor" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="var(--color-primary)" fillOpacity="0.08" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a4 4 0 0 0-4 4c0 .37.05.73.14 1.07A3.5 3.5 0 0 0 5 10.5c0 1.3.71 2.44 1.76 3.05A3.5 3.5 0 0 0 8.5 20H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="var(--color-primary)" fillOpacity="0.06" />
      <path d="M12 2a4 4 0 0 1 4 4c0 .37-.05.73-.14 1.07A3.5 3.5 0 0 1 19 10.5c0 1.3-.71 2.44-1.76 3.05A3.5 3.5 0 0 1 15.5 20H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="var(--color-primary)" fillOpacity="0.06" />
      <path d="M12 2v20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
      <circle cx="9.5" cy="10" r="1" fill="currentColor" />
      <circle cx="14.5" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

/* Service definitions using ACTUAL i18n keys */
const serviceKeys = [
  { titleKey: "services.mysteryShopping.title", subtitleKey: "services.mysteryShopping.subtitle", descKey: "services.mysteryShopping.desc", ctaKey: "services.mysteryShopping.cta", href: "/services/mystery-shopping", image: "/images/screen-missions.jpg", gradient: "from-[#1d1597] to-[#3028C0]", phone: true, smallImage: false },
  { titleKey: "services.cxAudits.title", subtitleKey: "services.cxAudits.subtitle", descKey: "services.cxAudits.desc", ctaKey: "services.cxAudits.cta", href: "/services/cx-audits", image: "/images/screen-new-4.jpg", gradient: "from-[#3028C0] to-[#1d1597]", phone: false, smallImage: false },
  { titleKey: "services.voiceOfCustomer.title", subtitleKey: "services.voiceOfCustomer.subtitle", descKey: "services.voiceOfCustomer.desc", ctaKey: "services.voiceOfCustomer.cta", href: "/services/voice-of-customer", image: "/images/screen-business.jpg", gradient: "from-[#140F6E] to-[#3028C0]", phone: false, smallImage: false },
  { titleKey: "services.dashboard.title", subtitleKey: "services.dashboard.subtitle", descKey: "services.dashboard.desc", ctaKey: "services.dashboard.cta", href: "/services/dashboard", image: "/images/screen-new-5.jpg", gradient: "from-[#1d1597] to-[#0C0A28]", phone: false, smallImage: false },
  { titleKey: "services.aiReports.title", subtitleKey: "services.aiReports.subtitle", descKey: "services.aiReports.desc", ctaKey: "services.aiReports.cta", href: "/services/ai-reports", image: "/images/screen-ai-report.jpg", gradient: "from-[#3028C0] to-[#140F6E]", phone: false, smallImage: true },
  { titleKey: "services.rewardSystem.title", subtitleKey: "services.rewardSystem.subtitle", descKey: "services.rewardSystem.desc", ctaKey: "services.rewardSystem.cta", href: "/services/rewards", image: "/images/screen-home.jpg", gradient: "from-[#1d1597] to-[#3028C0]", phone: true, smallImage: false },
] as const;

export default function HomeContent() {
  const { t, dir } = useTranslation();
  const isRtl = dir === "rtl";
  const arrowFlip = isRtl ? "rotate-180" : "";

  return (
    <>
      {/* ── How It Works ── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto max-w-[1060px] px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-2 block">
              {t("howItWorks.title")}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text)] leading-tight">
              {t("howItWorks.subtitle")}
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[var(--color-primary-bg)]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
              {([1, 2, 3, 4] as const).map((n) => (
                <div key={n} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs mb-4 shadow-lg">
                    {String(n).padStart(2, "0")}
                  </div>
                  <h4 className="text-sm font-bold text-[var(--color-text)] mb-1.5">
                    {t(`howItWorks.step${n}.title` as keyof typeof import("@/lib/i18n").translations.en)}
                  </h4>
                  <p className="text-xs text-[var(--color-text-light)] leading-relaxed max-w-[220px]">
                    {t(`howItWorks.step${n}.desc` as keyof typeof import("@/lib/i18n").translations.en)}
                  </p>
                </div>
              ))}
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
                      <div className={`relative w-full ${s.smallImage ? "max-w-[340px]" : "max-w-[480px]"} rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-shadow duration-300`}>
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

      {/* ── What You Get ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-[1060px] px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-2 block">
              {t("whatYouGet.title")}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text)] leading-tight">
              {t("whatYouGet.subtitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="bg-[var(--color-primary-bg)] rounded-xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                {t("whatYouGet.tabJabbers")}
              </div>
              <div className="flex flex-col gap-4">
                {([
                  { icon: <MoneyIcon />, tKey: "whatYouGet.earnMoney" },
                  { icon: <CalendarIcon />, tKey: "whatYouGet.flexibleSchedule" },
                  { icon: <CheckCircleIcon />, tKey: "whatYouGet.easyMissions" },
                ] as const).map((b) => (
                  <div key={b.tKey} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="!text-sm font-bold text-[var(--color-text)] !mb-0.5">{t(`${b.tKey}.title` as keyof typeof import("@/lib/i18n").translations.en)}</h4>
                      <p className="text-xs text-[var(--color-text-light)] leading-relaxed">{t(`${b.tKey}.desc` as keyof typeof import("@/lib/i18n").translations.en)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-[var(--color-text)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                {t("whatYouGet.tabBusinesses")}
              </div>
              <div className="flex flex-col gap-4">
                {([
                  { icon: <ChartIcon />, tKey: "whatYouGet.realTimeCX" },
                  { icon: <MapPinIcon />, tKey: "whatYouGet.gpsReports" },
                  { icon: <BrainIcon />, tKey: "whatYouGet.aiInsights" },
                ] as const).map((b) => (
                  <div key={b.tKey} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text)] shadow-sm">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="!text-sm font-bold text-[var(--color-text)] !mb-0.5">{t(`${b.tKey}.title` as keyof typeof import("@/lib/i18n").translations.en)}</h4>
                      <p className="text-xs text-[var(--color-text-light)] leading-relaxed">{t(`${b.tKey}.desc` as keyof typeof import("@/lib/i18n").translations.en)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container mx-auto max-w-[900px] px-6 relative z-10">
          <div className="cta-banner__card">
            <div className="cta-banner__dots cta-banner__dots--tl" />
            <div className="cta-banner__dots cta-banner__dots--br" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-white/60 mb-8 max-w-[440px] mx-auto text-xs sm:text-sm leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/go" className="cta-store-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                <span className="text-sm font-bold">{t("cta.downloadApp")}</span>
              </a>
              <a href="/partner" className="cta-store-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                <span className="text-sm font-bold">{t("cta.partnerWithUs")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
