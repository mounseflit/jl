"use client";

import { BRAND, LINKS } from "@/lib/constants";
import JabbLogo from "./JabbLogo";
import StoreButtons from "./StoreButtons";
import { useTranslation } from "@/lib/I18nProvider";

export default function Footer() {
  const { t } = useTranslation();

  const footerLists = [
    {
      title: t("footer.platform"),
      links: [
        { label: t("services.mysteryShopping.title"), href: "/services/mystery-shopping" },
        { label: t("services.cxAudits.title"), href: "/services/cx-audits" },
        { label: t("services.aiReports.title"), href: "/services/ai-reports" },
        { label: t("services.dashboard.title"), href: "/services/dashboard" },
        { label: t("services.rewardSystem.title"), href: "/services/rewards" },
      ],
    },
    {
      title: t("footer.solutions"),
      links: [
        { label: "Restaurants", href: "/partner" },
        { label: "Retail", href: "/partner" },
        { label: "Banking", href: "/partner" },
        { label: "Hospitality", href: "/partner" },
        { label: "Telecom", href: "/partner" },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.aboutUs"), href: "/about" },
        { label: t("footer.contact"), href: "/contact" },
        { label: t("footer.blog") || "Blog", href: "#" },
      ],
    },
    {
      title: t("footer.cities") || "Cities",
      links: [
        { label: "Casablanca", href: "#" },
        { label: "Rabat", href: "#" },
        { label: "Marrakech", href: "#" },
        { label: "Tanger", href: "#" },
        { label: "Fes", href: "#" },
        { label: "Agadir", href: "#" },
      ],
    },
  ];

  const quickLinks = [
    { label: t("footer.aboutUs"), href: "/about" },
    { label: t("footer.contact"), href: "/contact" },
    { label: t("footer.howItWorks") || "How JABB Works", href: "/about" },
    { label: t("footer.termsOfService"), href: "/terms" },
    { label: t("footer.privacyPolicy"), href: "/privacy" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__brand">
          <a href="/" aria-label="JABB Home">
            <JabbLogo size={32} />
            <span className="brand__text" style={{ fontSize: "1.4rem" }}>{BRAND.name}</span>
          </a>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__grid__download-links">
            <StoreButtons />
          </div>
          <div className="site-footer__grid__lists">
            {footerLists.map((list) => (
              <div className="site-footer__list" key={list.title}>
                <span className="site-footer__list__title">{list.title}</span>
                <ul>
                  {list.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="flex gap-4 bottom-footer">
          <div className="flex-1">
            <ul className="site-footer__quick-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 social-links">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.34 18.34h-2.67v-4.18c0-.99-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.2v4.26H10V9.75h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.1v4.71zM7 8.57a1.55 1.55 0 11-.01-3.1 1.55 1.55 0 01.01 3.1zM8.34 18.34H5.67V9.75h2.67v8.59zM19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3c0-.72-.6-1.3-1.33-1.3z" /></svg>
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
            </a>
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10.49 14.65l4.76 6.35h7l-8.37-11.16 7.44-8.84h-2.65l-6.12 7.28L8.75 3H1.75l8.01 10.68L2.32 21h2.65l5.52-6.35zm5.76 4.35L5.75 5h2l10.5 14h-2z" /></svg>
            </a>
          </div>
        </div>

        <hr />

        <div className="site-footer__copyright">
          <span>{t("footer.allRightsReserved")} </span>
          <span>&nbsp;{BRAND.name}&nbsp;</span>
          <span>{new Date().getFullYear()} ©</span>
        </div>
      </div>
    </footer>
  );
}
