"use client";

import { useTranslation } from "@/lib/I18nProvider";

/* ── SVG Icons ── */
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

export default function WhatYouGet() {
  const { t } = useTranslation();

  return (
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
  );
}
