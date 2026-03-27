import MobileNav from "./MobileNav";
import Footer from "./Footer";
import StoreButtons from "./StoreButtons";
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
                    <div className="w-0.5 flex-1 min-h-[48px] bg-[#EEEDFF]" />
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-[800px] px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-gray-500 mb-8 max-w-[500px] mx-auto">
            Download JABB and start experiencing the future of customer experience intelligence.
          </p>
          <StoreButtons />
          <div className="mt-6">
            <a
              href={LINKS.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-[#4942F8] transition-colors"
            >
              Or access the web dashboard &rarr;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
