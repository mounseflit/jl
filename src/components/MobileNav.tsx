"use client";

import { useState, useEffect } from "react";
import JabbLogo from "./JabbLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "@/lib/I18nProvider";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // Hide when scrolling down past hero, show when scrolling up
      if (y > 300 && y - lastY > 5) {
        setHidden(true);
      } else if (lastY - y > 5) {
        setHidden(false);
      }
      lastY = y;
    };
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
    { label: t("nav.contact") || "Contact", href: "#section-contact" },
  ];

  return (
    <>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}${hidden && !menuOpen ? " site-header--hidden" : ""}`}>
        <div className="container">
          <nav className="site-header__nav">
            <div className="brand" style={{ direction: "ltr" }}>
              <a href="/" aria-label="JABB Home">
                <JabbLogo size={28} />
                <span className="brand__text" style={{ fontSize: "1.2rem" }}>JABB</span>
              </a>
            </div>

            <div className="site-header__nav__list">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="site-header__nav-link"
                  style={{ textDecoration: "underline", textDecorationThickness: "2px", textUnderlineOffset: "6px", textDecorationColor: "transparent", transition: "text-decoration-color 0.3s", backgroundColor: "transparent" }}
                  onMouseEnter={(e) => e.currentTarget.style.textDecorationColor = "currentColor"}
                  onMouseLeave={(e) => e.currentTarget.style.textDecorationColor = "transparent"}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/go"
                className="button button--transparent"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)", color: "white" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0113 0" />
                  <path d="M16 3l2 2-2 2" opacity="0.6" />
                </svg>
                <span style={{ marginInlineStart: "0.4rem" }}>{t("nav.becomeJabber")}</span>
              </a>
              <a
                href="/partner"
                className="button button--transparent"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)", color: "white" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <span style={{ marginInlineStart: "0.4rem" }}>{t("nav.becomePartner")}</span>
              </a>
              <LanguageSwitcher variant="desktop" />
              <ThemeToggle />
            </div>

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

      {/* ── Fullscreen Awwwards-style mobile menu ── */}
      <div
        className={`fm${menuOpen ? " fm--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Top bar: logo + close */}
        <div className="fm__top">
          <div className="brand" style={{ direction: "ltr" }}>
            <a href="/" aria-label="JABB Home">
              <JabbLogo size={28} />
              <span className="brand__text" style={{ fontSize: "1.2rem" }}>JABB</span>
            </a>
          </div>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="fm__close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Center: large nav links */}
        <nav className="fm__nav">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="fm__link"
              style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.05}s` : "0s" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="fm__link-num">0{i + 1}</span>
              <span className="fm__link-text">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Bottom: CTAs + controls */}
        <div className="fm__bottom">
          <div className="fm__ctas">
            <a href="/go" onClick={() => setMenuOpen(false)} className="fm__cta fm__cta--ghost">
              {t("nav.becomeJabber")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
            <a href="/partner" onClick={() => setMenuOpen(false)} className="fm__cta fm__cta--fill">
              {t("nav.becomePartner")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
          </div>
          <div className="fm__controls">
            <LanguageSwitcher variant="mobile" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
