/** Shared constants — single source of truth for links, brand info, cities */

export const BRAND = {
  name: "JABB",
  tagline: "Just A Better Business",
  description:
    "Citizen-powered mystery shopping platform delivering GPS-verified field intelligence.",
  domain: "jabb.pro",
  email: "contact@jabb.pro",
  year: 2025,
} as const;

export const LINKS = {
  appStore: "https://apps.apple.com/ma/app/jabb-mobile/id6760529816",
  playStore:
    "https://play.google.com/store/apps/details?id=pro.jabb.mobile",
  webApp: "https://app.jabb.pro/",
  linkedin: "https://www.linkedin.com/company/jabb-pro/",
  instagram: "https://www.instagram.com/jabb.pro/",
  x: "https://x.com/jabbpro",
} as const;

export const CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fes",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
] as const;

export const NAV_ITEMS = [
  { label: "Services", href: "#section-services" },
  { label: "Cities", href: "#section-cities" },
  { label: "FAQ", href: "#section-faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
