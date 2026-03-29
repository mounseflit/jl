"use client";

import { useTranslation } from "@/lib/I18nProvider";

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="section-partners" className="partners-3d">
      <div className="partners-3d__bg">
        <div className="partners-3d__orb partners-3d__orb--1" />
        <div className="partners-3d__orb partners-3d__orb--2" />
        <div className="partners-3d__grid-lines" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="partners-3d__header">
          <span className="partners-3d__badge">{t("partners.title")}</span>
          <h3 className="partners-3d__title">{t("partners.subtitle")}</h3>
        </div>

        <div className="partners-3d__cards">
          {/* Jabber Card */}
          <div className="p3d-card p3d-card--jabber">
            <div className="p3d-card__glow" />
            <div className="p3d-card__inner">
              <div className="p3d-card__icon-wrap">
                <div className="p3d-card__icon-sphere">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <path d="M4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="p3d-card__float-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                </div>
              </div>

              <div className="p3d-card__tag p3d-card__tag--purple">{t("partners.jabber.title")}</div>

              <h4 className="p3d-card__title">{t("partners.jabber.title")}</h4>
              <p className="p3d-card__desc">{t("partners.jabber.desc")}</p>

              <div className="p3d-card__features">
                <div className="p3d-feat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                  <span>Earn Coins & XP</span>
                </div>
                <div className="p3d-feat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                  <span>Mystery Missions</span>
                </div>
                <div className="p3d-feat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                  <span>Real Impact</span>
                </div>
              </div>

              <a href="/go" className="p3d-card__cta p3d-card__cta--primary">
                <span>{t("partners.jabber.cta")}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Business Card */}
          <div className="p3d-card p3d-card--business">
            <div className="p3d-card__glow" />
            <div className="p3d-card__inner">
              <div className="p3d-card__icon-wrap">
                <div className="p3d-card__icon-sphere p3d-card__icon-sphere--dark">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="p3d-card__float-badge p3d-card__float-badge--dark">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>
                </div>
              </div>

              <div className="p3d-card__tag p3d-card__tag--dark">{t("partners.business.title")}</div>

              <h4 className="p3d-card__title">{t("partners.business.title")}</h4>
              <p className="p3d-card__desc">{t("partners.business.desc")}</p>

              <div className="p3d-card__features">
                <div className="p3d-feat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                  <span>AI Analytics</span>
                </div>
                <div className="p3d-feat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                  <span>GPS Verified</span>
                </div>
                <div className="p3d-feat">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" /></svg>
                  <span>Real-time CX</span>
                </div>
              </div>

              <a href="/partner" className="p3d-card__cta p3d-card__cta--dark">
                <span>{t("partners.business.cta")}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
