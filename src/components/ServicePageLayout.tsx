import MobileNav from "./MobileNav";
import Footer from "./Footer";
import { LINKS } from "@/lib/constants";
import Image from "next/image";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ServicePageProps {
  /** Page title shown in hero */
  title: string;
  /** Subtitle / tagline */
  subtitle: string;
  /** Longer description paragraph */
  description: string;
  /** Gradient for the hero accent — CSS gradient string */
  gradient: string;
  /** Icon shown in the hero badge */
  heroIcon: React.ReactNode;
  /** Feature list (3 items recommended) */
  features: Feature[];
  /** How it works steps (3-4 items) */
  steps: { title: string; desc: string }[];
  /** CTA button text */
  ctaText: string;
  /** CTA link — defaults to /go */
  ctaHref?: string;
  /** Optional image path for the showcase section */
  image?: string;
  /** Who benefits — array of audience descriptions */
  audiences?: { label: string; desc: string }[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  gradient,
  heroIcon,
  features,
  steps,
  ctaText,
  ctaHref = "/go",
  image,
  audiences,
}: ServicePageProps) {
  return (
    <>
      {/* ── Hero ── */}
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <MobileNav />
        <div className="page-header" style={{ paddingBottom: "3rem" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            {/* Icon badge */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ background: gradient }}
            >
              {heroIcon}
            </div>
            <h1 className="!text-3xl sm:!text-4xl md:!text-5xl">{title}</h1>
            <p className="!text-base sm:!text-lg !max-w-[600px] !mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ── Description + Image ── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-2" : ""} gap-10 lg:gap-16 items-center`}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-5 leading-tight">
                What is {title}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[0.95rem] mb-6">
                {description}
              </p>
              <a
                href={ctaHref}
                className="button"
              >
                {ctaText}
              </a>
            </div>
            {image && (
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src={image}
                  alt={`${title} — JABB platform`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ background: gradient }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-[900px] px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              How It Works
            </h2>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-5 sm:gap-8">
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ background: gradient }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-[48px] bg-[#EAF0FF]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[500px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Benefits (optional) ── */}
      {audiences && audiences.length > 0 && (
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-[1100px] px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                Who Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((a) => (
                <div
                  key={a.label}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-4"
                    style={{ background: gradient }}
                  >
                    {a.label}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container mx-auto max-w-[900px] px-6 lg:px-8 relative z-10">
          <div className="cta-banner__card">
            {/* Decorative dots */}
            <div className="cta-banner__dots cta-banner__dots--tl" />
            <div className="cta-banner__dots cta-banner__dots--br" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
              Ready to get started?
            </h2>
            <p className="text-white/60 mb-8 max-w-[440px] mx-auto text-sm sm:text-base leading-relaxed">
              Download JABB and start experiencing the future of customer
              experience intelligence.
            </p>

            {/* Store buttons — white style on dark bg */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href={LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-store-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-none opacity-60">Download on the</span>
                  <span className="text-sm font-bold leading-snug">App Store</span>
                </div>
              </a>
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-store-btn"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Google_Play_2016_icon.svg/1920px-Google_Play_2016_icon.svg.png"
                  alt=""
                  width={22}
                  height={22}
                />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-none opacity-60">Get it on</span>
                  <span className="text-sm font-bold leading-snug">Google Play</span>
                </div>
              </a>
            </div>

            <a
              href={LINKS.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-sm transition-colors inline-flex items-center gap-1"
            >
              Or access the web dashboard
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
