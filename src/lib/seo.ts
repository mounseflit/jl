import type { Metadata } from "next";
import { BRAND, LINKS } from "./constants";

const BASE_URL = `https://${BRAND.domain}`;

/** Default metadata for every page — merge with page-specific overrides */
export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const title =
    (overrides.title as string) ??
    `${BRAND.name} — Mystery Shopping & CX Intelligence`;
  const description =
    (overrides.description as string) ??
    `${BRAND.name} transforms citizen field observations into verified, GPS-locked business intelligence. Download the app and start earning today.`;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [
      "mystery shopping",
      "customer experience",
      "CX intelligence",
      "field intel",
      "JABB",
      "Morocco",
      "GPS verified",
      "restaurant evaluation",
      "retail audit",
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
      images: [
        {
          url: "/images/hero-bg.png",
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — Field Intel. Verified.`,
        },
      ],
      ...(overrides.openGraph ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-bg.png"],
      ...(overrides.twitter ?? {}),
    },
    alternates: {
      canonical: BASE_URL,
      ...(overrides.alternates ?? {}),
    },
    icons: { icon: "/favicon.ico" },
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
    alternateName: BRAND.tagline,
    url: `https://${BRAND.domain}`,
    logo: `https://${BRAND.domain}/images/logo-full.png`,
    description: BRAND.description,
    email: BRAND.email,
    sameAs: [LINKS.linkedin, LINKS.instagram, LINKS.x],
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    knowsAbout: [
      "Mystery Shopping",
      "Customer Experience Management",
      "Field Intelligence",
      "GPS-verified Audits",
      "Retail CX Analytics",
    ],
  };
}

export function softwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${BRAND.name} Mobile`,
    operatingSystem: "Android, iOS",
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "MAD" },
    downloadUrl: LINKS.playStore,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
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
