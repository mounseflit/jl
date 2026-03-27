"use client";

import { useState, useEffect } from "react";
import JabbLogo from "./JabbLogo";
import { NAV_ITEMS } from "@/lib/constants";

/**
 * Fixed header nav — sits inside the hero on homepage.
 * Transparent on top, white bg on scroll. Includes mobile slide-out menu.
 */
export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      >
        <div className="container">
          <nav className="site-header__nav">
            {/* Desktop CTA buttons */}
            <div className="site-header__nav__list">
              <a href="/partner" className="button button--transparent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span style={{ marginLeft: "0.4rem" }}>Become a JABBer</span>
              </a>
              <a href="/partner" className="button button--transparent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35" />
                </svg>
                <span style={{ marginLeft: "0.4rem" }}>Become a Partner</span>
              </a>
            </div>

            {/* Brand */}
            <div className="brand">
              <a href="/" aria-label="JABB Home">
                <JabbLogo size={28} />
                <span className="brand__text" style={{ fontSize: "1.2rem" }}>
                  JABB
                </span>
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="site-header__open-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
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
        <div
          className="site-menu__overlay"
          onClick={() => setMenuOpen(false)}
        />
        <div className="site-menu__content">
          <div className="site-menu__header">
            <div className="brand">
              <a href="/" aria-label="JABB Home">
                <JabbLogo size={28} />
                <span className="brand__text" style={{ fontSize: "1.2rem" }}>
                  JABB
                </span>
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="site-menu__close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="site-menu__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/partner"
                onClick={() => setMenuOpen(false)}
                className="site-menu__cta"
              >
                Become a Partner
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
