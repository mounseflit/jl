import { buildMetadata } from "@/lib/seo";
import { LINKS } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "JABB App — JABB",
  description:
    "Deploy citizen shoppers to evaluate real customer experiences across your locations. GPS-verified, unbiased, and actionable insights delivered fast.",
});

const steps = [
  {
    num: "01",
    title: "Define Your Criteria",
    desc: "Work with our team to create a custom evaluation checklist that reflects your brand standards.",
  },
  {
    num: "02",
    title: "JABBers Visit Incognito",
    desc: "Verified citizen shoppers visit your business as regular customers, following the checklist.",
  },
  {
    num: "03",
    title: "GPS-Verified Submission",
    desc: "Each evaluation is submitted with GPS coordinates, timestamps, and photo evidence.",
  },
  {
    num: "04",
    title: "Receive Your Report",
    desc: "Get detailed reports with scores, trends, and actionable recommendations within 24 hours.",
  },
];

const features = [
  {
    title: "GPS Verified",
    desc: "Every evaluation is geotagged within 50 meters of your location, ensuring physical presence.",
    gradient: "from-primary to-primary-light",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Structured Checklists",
    desc: "Custom evaluation forms tailored to your brand standards covering service, cleanliness, speed, and more.",
    gradient: "from-[#3028C0] to-[#9F7AEA]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Photo Evidence",
    desc: "Shoppers capture timestamped photos as proof, giving you visual documentation of every visit.",
    gradient: "from-[#38B2AC] to-[#1d1597]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

const audiences = [
  {
    label: "Restaurants",
    desc: "Monitor food quality, service speed, staff friendliness, and hygiene across all your locations.",
    emoji: "🍽️",
    color: "bg-orange-50 border-orange-200",
  },
  {
    label: "Retail",
    desc: "Evaluate store presentation, staff knowledge, checkout experience, and product availability.",
    emoji: "🛍️",
    color: "bg-blue-50 border-blue-200",
  },
  {
    label: "Services",
    desc: "Assess customer handling, wait times, professionalism, and overall satisfaction at service centers.",
    emoji: "🏢",
    color: "bg-green-50 border-green-200",
  },
];

export default function MysteryShoppingPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Split layout ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50 to-primary-bg pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left text */}
              <div className="max-w-xl">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                  JABB App
                </span>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  See your business through{" "}
                  <span className="text-primary">your customer&apos;s eyes</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-ink-light">
                  Deploy citizen shoppers to evaluate real customer experiences
                  across your locations. GPS-verified, unbiased, and actionable
                  insights delivered fast.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/partner"
                    className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
                  >
                    Start Evaluating
                  </a>
                  <a
                    href={LINKS.webApp}
                    className="inline-flex items-center rounded-xl border border-ink-faint bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
                  >
                    View Demo
                  </a>
                </div>
              </div>

              {/* Right phone mockup */}
              <div className="relative mx-auto flex justify-center lg:justify-end">
                <div className="animate-float relative">
                  {/* Phone frame */}
                  <div className="relative w-[280px] rounded-[2.5rem] border-[8px] border-ink bg-ink p-1.5 shadow-2xl sm:w-[300px]">
                    <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
                    <div className="overflow-hidden rounded-[2rem]">
                      <Image
                        src="/images/screen-missions.jpg"
                        alt="JABB Mystery Shopping missions list"
                        width={284}
                        height={616}
                        className="h-auto w-full"
                        priority
                      />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-xl" />
                  <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#38B2AC]/10 blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The JABB Process ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                The JABB Process
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                From setup to insight in four simple steps.
              </p>
            </div>

            {/* Steps with connecting line */}
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-primary-light to-[#38B2AC]" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <div key={step.num} className="relative text-center">
                    {/* Number circle */}
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-primary shadow-md">
                      <span className="font-display text-2xl font-extrabold text-primary">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Built for Accuracy
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                Every evaluation is backed by technology that ensures data integrity.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-white shadow-md`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-ink-light leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Who It&apos;s For
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                Mystery shopping solutions tailored to your industry.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {audiences.map((a) => (
                <div
                  key={a.label}
                  className={`rounded-2xl border p-8 ${a.color} transition hover:shadow-md`}
                >
                  <span className="text-4xl">{a.emoji}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    {a.label}
                  </h3>
                  <p className="mt-3 text-ink-light leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-primary-light">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to uncover the truth about your CX?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Deploy your first mystery shoppers today and get real, unbiased
              insights within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/partner"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
