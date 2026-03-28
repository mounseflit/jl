"use client";

import { useTranslation } from "@/lib/I18nProvider";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="section-partners" className="partners">
      <div className="skewed"></div>
      <div className="container">
        <div className="max-w-md m-x-auto">
          <h3 className="text-center">{t("partners.title")}</h3>
          <h5 className="text-center">{t("partners.subtitle")}</h5>
        </div>

        <div className="partners-grid">
          <div className="grid-2 gap-6 grid-1-md">
            <div className="partner-box fade-up">
              <div className="partner-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  <path d="M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h4>{t("partners.jabber.title")}</h4>
              <div className="partner-box__desc">{t("partners.jabber.desc")}</div>
              <a href="/go" className="button">{t("partners.jabber.cta")}</a>
            </div>

            <div className="partner-box fade-up">
              <div className="partner-box__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349" />
                  <path d="M1.5 12l10.5-9 10.5 9" />
                </svg>
              </div>
              <h4>{t("partners.business.title")}</h4>
              <div className="partner-box__desc">{t("partners.business.desc")}</div>
              <a href="/partner" className="button">{t("partners.business.cta")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
