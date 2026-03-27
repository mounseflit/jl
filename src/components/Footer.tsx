import { BRAND, LINKS } from "@/lib/constants";
import JabbLogo from "./JabbLogo";
import StoreButtons from "./StoreButtons";

const footerLists = [
  {
    title: "Platform",
    links: [
      { label: "Mystery Shopping", href: "#section-services" },
      { label: "CX Audits", href: "#section-services" },
      { label: "AI Reports", href: "#section-services" },
      { label: "Business Dashboard", href: LINKS.webApp },
      { label: "Reward System", href: "#section-services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Restaurants", href: "/partner" },
      { label: "Retail", href: "/partner" },
      { label: "Banking", href: "/partner" },
      { label: "Hospitality", href: "/partner" },
      { label: "Telecom", href: "/partner" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Become a Partner", href: "/partner" },
    ],
  },
  {
    title: "Cities",
    links: [
      { label: "Casablanca", href: "#section-cities" },
      { label: "Rabat", href: "#section-cities" },
      { label: "Marrakech", href: "#section-cities" },
      { label: "Tanger", href: "#section-cities" },
      { label: "Fes", href: "#section-cities" },
      { label: "Agadir", href: "#section-cities" },
    ],
  },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "How JABB Works", href: "/about" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.34 18.34h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2v4.26h-2.67V9.75h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.7 0 3.2 1.78 3.2 4.09v4.72zM7 8.57a1.55 1.55 0 110-3.1 1.55 1.55 0 010 3.1zm1.34 9.77H5.67V9.75h2.67v8.59zM19.67 3H4.33C3.6 3 3 3.58 3 4.3v15.4c0 .72.6 1.3 1.33 1.3h15.34c.73 0 1.33-.58 1.33-1.3V4.3C21 3.58 20.4 3 19.67 3z"/></svg>
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.03 2c1.13 0 1.7.01 2.19.02l.19.01c.22.01.45.01.71.02 1.07.05 1.79.22 2.43.47a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.25.64.42 1.36.47 2.43.01.27.02.49.02.72l.01.19c.02.49.02 1.06.02 2.19v2.06c0 1.13-.01 1.7-.02 2.19l-.01.19c-.01.22-.01.45-.02.72-.05 1.07-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.36.42-2.43.47-.27.01-.49.02-.72.02l-.19.01c-.49.02-1.06.02-2.19.02h-2.06c-1.13 0-1.7-.01-2.19-.02l-.19-.01c-.22-.01-.45-.01-.72-.02-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15A4.9 4.9 0 012.53 18.5c-.25-.64-.42-1.36-.47-2.43-.01-.27-.02-.49-.02-.72l-.01-.19C2 14.7 2 14.13 2 13v-2.06c0-1.13.01-1.7.02-2.19l.01-.19c.01-.22.01-.45.02-.72.05-1.07.22-1.79.47-2.43A4.9 4.9 0 013.68 3.68 4.9 4.9 0 015.45 2.53c.64-.25 1.36-.42 2.43-.47.27-.01.49-.02.72-.02l.19-.01C9.28 2.01 9.85 2 10.97 2h2.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>
            </a>
            <a href={LINKS.x} target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.49 14.65l4.76 6.35h7l-7.86-10.48L21.93 3h-2.65l-5.72 6.89L8.75 3h-7l7.26 9.68L2.32 21h2.65l5.52-6.35zM16.25 19L5.75 5h2l10.5 14h-2z"/></svg>
            </a>
          </div>
        </div>

        <hr />

        <div className="site-footer__copyright">
          <span>{new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
