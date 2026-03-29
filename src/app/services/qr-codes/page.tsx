"use client";

import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

/* ------------------------------------------------------------------ */
/*  Product catalog data                                               */
/* ------------------------------------------------------------------ */

const products = [
  {
    name: "NFC Review Stand",
    desc: "A premium countertop stand with embedded NFC chip and printed QR code. Place it at the register or checkout and let customers tap or scan to leave a review instantly.",
    cta: "Order Now",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <rect x="8" y="6" width="8" height="8" rx="1" />
        <line x1="8" x2="16" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    name: "NFC Stickers",
    desc: "Durable, waterproof NFC stickers you can place anywhere -- on windows, counters, menus, or receipts. Customers simply tap with their phone to open your review page.",
    cta: "Learn More",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
    ),
  },
  {
    name: "NFC Table Cards",
    desc: "Elegant tabletop cards designed for restaurants, cafes, and salons. Each card features your branding and an NFC chip for one-tap review access.",
    cta: "Learn More",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
        <path d="M12 2L2 7l10 5 10-5L12 2z" />
      </svg>
    ),
  },
  {
    name: "NFC Key Fobs",
    desc: "Compact, portable key fobs that your staff can carry. Hand them to customers or attach to lanyards for mobile review collection on the go.",
    cta: "Learn More",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    name: "NFC Smart Buttons",
    desc: "Thin, sleek NFC buttons that stick to the back of any phone or phone case. Perfect for field staff who collect reviews face-to-face.",
    cta: "Learn More",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <circle cx="12" cy="18" r="1" />
        <line x1="12" x2="12" y1="6" y2="10" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  How It Works steps                                                 */
/* ------------------------------------------------------------------ */

const steps = [
  {
    num: "01",
    title: "Choose Your Product",
    desc: "Pick the NFC product that fits your business -- stands for counters, stickers for surfaces, or cards for tables.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Program It",
    desc: "We configure each NFC chip with your unique review link, branded to your business and ready to use out of the box.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" x2="10" y1="4" y2="20" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Start Collecting Reviews",
    desc: "Place your products, and customers start tapping or scanning. Reviews flow directly into your JABB dashboard.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Features list                                                      */
/* ------------------------------------------------------------------ */

const features = [
  {
    title: "Branded to Your Business",
    desc: "Every product is customized with your logo, colors, and review link so it feels like an extension of your brand.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Works With Any Smartphone",
    desc: "NFC is supported on all modern iPhones and Android devices. The QR code provides a universal fallback.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" x2="12.01" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    title: "No App Needed for Customers",
    desc: "Your customers never need to download an app. A single tap or scan opens a mobile-friendly review form in their browser.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Instant Review Submission",
    desc: "Customers complete their review in under 30 seconds. No sign-ups, no friction -- just honest feedback delivered to your dashboard.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

/* ================================================================== */
/*  Page Component                                                     */
/* ================================================================== */

export default function QrCodesPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A1B] to-[#1d1597] pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Glow orbs */}
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[140px]" />
          <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-[#9F7AEA]/20 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-sm mb-6">
              QR Codes &amp; NFC Products
            </span>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Smart Review Collection,{" "}
              <span className="bg-gradient-to-r from-primary-light via-[#9F7AEA] to-[#38B2AC] bg-clip-text text-transparent">
                One Tap Away
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              NFC-enabled products that make it effortless for your customers to leave reviews. Tap, scan, done.
            </p>

            <a
              href="/partner"
              className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-[#9F7AEA] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:opacity-90"
            >
              Get Your QR Kit
            </a>
          </div>
        </section>

        {/* ── Products Grid ── */}
        <section className="py-20 lg:py-28 bg-[#0F0F1A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Our NFC Product Range
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Physical products designed to capture customer reviews at every touchpoint.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition hover:border-primary/50 hover:bg-slate-800/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition group-hover:bg-primary/20">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                  <a
                    href="/partner"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-light transition hover:text-white"
                  >
                    {p.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 lg:py-28 bg-[#13132A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Three simple steps from order to collecting your first review.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.num} className="relative text-center">
                  {/* Step number */}
                  <span className="inline-block font-display text-5xl font-extrabold text-primary/20">
                    {s.num}
                  </span>

                  <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[#9F7AEA]/10 text-primary-light">
                    {s.icon}
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-20 lg:py-28 bg-[#0F0F1A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Why JABB NFC Products
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Built for simplicity, designed for results.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:border-primary/50 hover:bg-slate-800/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary-light transition group-hover:bg-primary/20">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#3028C0]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Get Your Custom JABB QR Kit
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Ready to turn every customer interaction into a review? Order your
              branded NFC products today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/partner"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
              >
                Order Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
