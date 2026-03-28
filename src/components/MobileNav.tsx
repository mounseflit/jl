"use client";

import { useState, useEffect } from "react";
import JabbLogo from "./JabbLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "@/lib/I18nProvider";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { label: t("nav.services") || "Services", href: "#section-services" },
    { label: t("nav.faq") || "FAQ", href: "#section-faqs" },
    { label: t("nav.about") || "About", href: "/about" },
    { label: t("nav.contact") || "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="container">
          <nav className="site-header__nav">
            {/* LEFT: Brand logo — never flips in RTL */}
            <div className="brand" style={{ direction: "ltr" }}>
              <a href="/" aria-label="JABB Home">
                <JabbLogo size={28} />
                <span className="brand__text" style={{ fontSize: "1.2rem" }}>JABB</span>
              </a>
            </div>

            {/* RIGHT: CTA buttons + language + theme (desktop) */}
            <div className="site-header__nav__list">
              <a href="/go" className="button button--transparent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0113 0" />
                  <path d="M16 3l2 2-2 2" opacity="0.6" />
                </svg>
                <span style={{ marginInlineStart: "0.4rem" }}>{t("nav.becomeJabber")}</span>
              </a>
              <a href="/partner" className="button button--transparent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="10" width="7" height="11" rx="1" />
                  <rect x="14" y="4" width="7" height="17" rx="1" />
                  <line x1="5" y1="14" x2="8" y2="14" opacity="0.5" />
                  <line x1="5" y1="17" x2="8" y2="17" opacity="0.5" />
                  <line x1="16" y1="8" x2="19" y2="8" opacity="0.5" />
                  <line x1="16" y1="11" x2="19" y2="11" opacity="0.5" />
                  <line x1="16" y1="14" x2="19" y2="14" opacity="0.5" />
                </svg>
                <span style={{ marginInlineStart: "0.4rem" }}>{t("nav.becomePartner")}</span>
              </a>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Hamburger (mobile only — hidden on desktop via CSS) */}
            <button
              className="site-header__open-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="24" height="19" viewBox="0 0 24 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1.14 1H23M1.14 9.5H23M1.14 18H23" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Slide-out mobile menu */}
      <div
        className={`site-menu${menuOpen ? " site-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="site-menu__overlay" onClick={() => setMenuOpen(false)} />
        <div className="site-menu__content">
          <div className="site-menu__header">
            <div className="brand" style={{ direction: "ltr" }}>
              <a href="/" aria-label="JABB Home">
                <JabbLogo size={28} />
                <span className="brand__text" style={{ fontSize: "1.2rem" }}>JABB</span>
              </a>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="site-menu__close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="site-menu__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="/partner" onClick={() => setMenuOpen(false)} className="site-menu__cta">
                {t("nav.becomePartner")}
              </a>
            </li>
          </ul>

          <div className="site-menu__controls">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
