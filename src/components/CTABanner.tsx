"use client";

import StoreButtons from "./StoreButtons";
import { useTranslation } from "@/lib/I18nProvider";

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="cta-banner dark:bg-gray-900 bg-gray-50">
      <div className="cta-banner__bg" />
      <div className="container mx-auto max-w-[900px] px-6 relative z-10">
        <div className="cta-banner__card dark:bg-gray-900 bg-gray-900">
          <div className="cta-banner__dots cta-banner__dots--tl" />
          <div className="cta-banner__dots cta-banner__dots--br" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text)] dark:text-white mb-3 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-[var(--color-text-light)] dark:text-white/60 mb-8 max-w-[440px] mx-auto text-xs sm:text-sm leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="cta-store-buttons" style={{ display: "flex", justifyContent: "center" }}>
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
