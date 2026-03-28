import type { Metadata } from "next";
import { BRAND, LINKS, CITIES } from "./constants";

const BASE_URL = `https://${BRAND.domain}`;

/** Default metadata for every page — merge with page-specific overrides */
export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title =
    (overrides.title as string) ??
    `${BRAND.name} — Voice of Customer & Mystery Shopping Platform | Morocco`;
  const description =
    (overrides.description as string) ??
    "JABB is Morocco's first citizen-powered Voice of Customer platform. Share 30-second reviews, earn Coins & XP, and help businesses improve. Download the free app today.";

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [
      "JABB",
      "voice of customer Morocco",
      "mystery shopping Maroc",
      "customer experience platform",
      "avis clients Maroc",
      "CX intelligence",
      "earn rewards reviews",
      "GPS verified audits",
      "Casablanca mystery shopping",
      "restaurant evaluation Morocco",
      "retail audit Maroc",
      "customer feedback app",
      "application avis client",
      "تقييم تجربة العميل المغرب",
      "تسوق خفي",
    ],
    authors: [{ name: BRAND.name, url: BASE_URL }],
    creator: BRAND.name,
    publisher: BRAND.name,
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: "website",
      url: BASE_URL,
      siteName: BRAND.name,
      locale: "en_US",
      alternateLocale: ["fr_MA", "ar_MA"],
      images: [
        {
          url: "/images/og-cover.png",
          width: 1200,
          height: 630,
          alt: "JABB — Your voice matters. Make it heard.",
        },
      ],
      ...(overrides.openGraph ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      site: "@jabbpro",
      creator: "@jabbpro",
      title,
      description,
      images: ["/images/og-cover.png"],
      ...(overrides.twitter ?? {}),
    },
    alternates: {
      canonical: BASE_URL,
      languages: {
        "en": BASE_URL,
        "fr": `${BASE_URL}?lang=fr`,
        "ar": `${BASE_URL}?lang=ar`,
      },
      ...(overrides.alternates ?? {}),
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    other: {
      "geo.region": "MA",
      "geo.placename": "Casablanca, Morocco",
      "geo.position": "33.5731;-7.5898",
      "ICBM": "33.5731, -7.5898",
      "content-language": "en, fr, ar",
    },
    ...overrides,
  };
}

/**
 * JSON-LD structured data for the homepage.
 * Helps Google AND AI models (Gemini, GPT, Claude) understand the business.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    alternateName: ["Just A Better Business", "JABB Pro", "جاب"],
    url: `https://${BRAND.domain}`,
    logo: `https://${BRAND.domain}/images/logo-full.png`,
    description: BRAND.description,
    email: BRAND.email,
    foundingDate: "2024",
    sameAs: [LINKS.linkedin, LINKS.instagram, LINKS.x],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
      alternateName: ["Maroc", "المغرب"],
    },
    knowsAbout: [
      "Voice of Customer",
      "Mystery Shopping",
      "Customer Experience Management",
      "Field Intelligence",
      "GPS-verified Audits",
      "Retail CX Analytics",
      "AI-powered Customer Feedback",
    ],
    slogan: "Your voice matters. Make it heard.",
  };
}

export function softwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: `${BRAND.name}`,
    operatingSystem: "Android, iOS",
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
    downloadUrl: LINKS.playStore,
    installUrl: LINKS.appStore,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
    },
    description:
      "Share 30-second reviews, earn JABB Coins & XP, and help businesses improve. Morocco's first Voice of Customer app.",
    screenshot: `https://${BRAND.domain}/images/screen-home.jpg`,
    featureList:
      "30-second reviews, Audio feedback, AI-guided Q&A, GPS verification, Coins & XP rewards, Mystery client missions",
    availableOnDevice: "Mobile",
    countriesSupported: "MA",
    inLanguage: ["en", "fr", "ar"],
  };
}

/** Local Business JSON-LD for GEO optimization */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    description: BRAND.description,
    url: `https://${BRAND.domain}`,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5731,
      longitude: -7.5898,
    },
    areaServed: CITIES.map((city) => ({
      "@type": "City",
      name: city,
    })),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList for better SERP display */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
