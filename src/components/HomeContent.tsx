"use client";

import Image from "next/image";
import IPhoneFrame from "./IPhoneFrame";

import { useTranslation } from "@/lib/I18nProvider";

/* Service definitions using ACTUAL i18n keys */
const serviceKeys = [
  { titleKey: "services.rewardSystem.title", subtitleKey: "services.rewardSystem.subtitle", descKey: "services.rewardSystem.desc", ctaKey: "services.rewardSystem.cta", href: "/services/rewards", image: "/images/screen-missions.jpg", gradient: "from-[#1d1597] to-[#3028C0]", phone: true, smallImage: false },
  { titleKey: "services.cxAudits.title", subtitleKey: "services.cxAudits.subtitle", descKey: "services.cxAudits.desc", ctaKey: "services.cxAudits.cta", href: "/services/cx-audits", image: "/images/screen-new-4.jpg", gradient: "from-[#3028C0] to-[#1d1597]", phone: false, smallImage: false },
  { titleKey: "services.voiceOfCustomer.title", subtitleKey: "services.voiceOfCustomer.subtitle", descKey: "services.voiceOfCustomer.desc", ctaKey: "services.voiceOfCustomer.cta", href: "/services/voice-of-customer", image: "/images/screen-new-5.jpg", gradient: "from-[#140F6E] to-[#3028C0]", phone: false, smallImage: false },
  { titleKey: "services.aiReports.title", subtitleKey: "services.aiReports.subtitle", descKey: "services.aiReports.desc", ctaKey: "services.aiReports.cta", href: "/services/ai-reports", image: "/images/screen-ai-report.jpg", gradient: "from-[#3028C0] to-[#140F6E]", phone: false, smallImage: true },
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
    </>
  );
}
