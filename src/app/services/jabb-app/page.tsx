"use client";

import { LINKS } from "@/lib/constants";

import IPhoneFrame from "@/components/IPhoneFrame";
import StoreButtons from "@/components/StoreButtons";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

/* ── SVG Icon Components ── */

function DownloadIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function UserCheckIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  );
}

function MapPinIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClipboardCheckIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function WalletIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <path d="M1 10h22" />
      <circle cx="18" cy="15" r="1" />
    </svg>
  );
}

function CameraIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UtensilsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function ShoppingBagIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function BuildingIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}

/* ── Data ── */

const steps = [
  {
    num: "01",
    title: "Download the App",
    desc: "Get the JABB app from the App Store or Google Play and create your free account in minutes.",
    icon: <DownloadIcon />,
  },
  {
    num: "02",
    title: "Complete Your Profile",
    desc: "Verify your identity, set your location preferences, and unlock missions near you.",
    icon: <UserCheckIcon />,
  },
  {
    num: "03",
    title: "Accept a Mission",
    desc: "Browse available missions on the map, pick one that suits you, and head to the location.",
    icon: <MapPinIcon />,
  },
  {
    num: "04",
    title: "Submit & Get Paid",
    desc: "Complete the checklist, upload photo evidence, and receive payment directly to your wallet.",
    icon: <WalletIcon />,
  },
];

const features = [
  {
    title: "GPS-Powered Missions",
    desc: "Discover missions near you on an interactive map. The app automatically verifies your presence at each location.",
    gradient: "from-primary to-primary-light",
    icon: <MapPinIcon className="w-7 h-7" />,
  },
  {
    title: "Guided Checklists",
    desc: "Step-by-step evaluation forms walk you through each mission so you never miss a detail.",
    gradient: "from-[#3028C0] to-[#9F7AEA]",
    icon: <ClipboardCheckIcon className="w-7 h-7" />,
  },
  {
    title: "In-App Photo Capture",
    desc: "Take timestamped, geotagged photos directly within the app as evidence for every evaluation.",
    gradient: "from-[#38B2AC] to-[#1d1597]",
    icon: <CameraIcon className="w-7 h-7" />,
  },
];

const audiences = [
  {
    label: "Food & Dining",
    desc: "Evaluate restaurants, cafes, and fast-food chains. Rate food quality, service, cleanliness, and more.",
    icon: <UtensilsIcon className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50 border-orange-200",
  },
  {
    label: "Retail & Shopping",
    desc: "Visit retail stores and assess product displays, staff helpfulness, checkout speed, and store ambiance.",
    icon: <ShoppingBagIcon className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50 border-blue-200",
  },
  {
    label: "Professional Services",
    desc: "Review banks, clinics, hotels, and service centers for professionalism, wait times, and customer care.",
    icon: <BuildingIcon className="w-8 h-8 text-green-500" />,
    color: "bg-green-50 border-green-200",
  },
];

/* ── Page ── */

export default function JabbAppPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Split layout ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-primary-bg)] to-[var(--color-surface)] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left text */}
              <div className="max-w-xl">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                  JABB App
                </span>
                <h1 className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-6xl">
                  Earn money as a{" "}
                  <span className="text-primary">mystery shopper</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-light)]">
                  Download the JABB app, pick missions near you, and get paid to
                  share honest feedback about real customer experiences. No
                  experience needed — just be yourself.
                </p>
                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={LINKS.webApp}
                      className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
                    >
                      <ShieldCheckIcon className="mr-2 w-4 h-4" />
                      Get Started Free
                    </a>
                    <a
                      href="/services/cx-audits"
                      className="inline-flex items-center rounded-xl border border-ink-faint bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:border-primary hover:text-primary"
                    >
                      For Businesses
                    </a>
                  </div>
                  <StoreButtons />
                </div>
              </div>

              {/* Right phone mockup */}
              <div className="relative mx-auto flex justify-center lg:justify-end">
                <div className="animate-float relative">
                  <IPhoneFrame
                    src="/images/screen-missions.jpg"
                    alt="JABB App missions map showing available mystery shopping tasks"
                    priority
                  />
                  {/* Decorative blurs */}
                  <div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-xl" />
                  <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#38B2AC]/10 blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-display text-2xl font-bold text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
                From download to payout in four simple steps.
              </p>
            </div>

            {/* Steps with connecting line */}
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-primary-light to-[#38B2AC]" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <div key={step.num} className="relative text-center">
                    {/* Icon circle */}
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white border-2 border-primary shadow-md text-primary">
                      {step.icon}
                    </div>
                    <span className="mt-3 inline-block font-display text-xs font-bold tracking-wider text-primary/60 uppercase">
                      Step {step.num}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-light)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-16 sm:py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-display text-2xl font-bold text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                Built for JABBers
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
                Everything you need to complete missions quickly and accurately.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-text)]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who It's For (Industries) ── */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-display text-2xl font-bold text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                Missions Across Industries
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
                Choose from a wide variety of mystery shopping missions.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map((a) => (
                <div
                  key={a.label}
                  className={`rounded-2xl border p-8 ${a.color} transition hover:shadow-md`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                    {a.icon}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-text)]">
                    {a.label}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary to-primary-light">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to start earning as a JABBer?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Download the JABB app today and turn everyday shopping into a
              paid opportunity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={LINKS.webApp}
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
              >
                Download Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
