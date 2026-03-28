import { buildMetadata } from "@/lib/seo";
import { LINKS } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Business Dashboard — JABB",
  description:
    "Track KPIs, monitor trends, and visualize performance data in real time. One dashboard for all your CX intelligence needs.",
});

const miniFeatures = [
  {
    title: "Real-Time Scores",
    desc: "See evaluation scores and alerts as they happen, no more waiting for monthly reports.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Multi-Location View",
    desc: "Compare performance across all your locations with heat maps and ranking tables.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Trend Analysis",
    desc: "Track improvements over time with detailed trend charts and before/after comparisons.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
  },
  {
    title: "Export & Share",
    desc: "Download reports as PDF or Excel and schedule automated email summaries for your team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    ),
  },
  {
    title: "Team Permissions",
    desc: "Give managers access to their location data only, while executives see the full picture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
      </svg>
    ),
  },
  {
    title: "Smart Alerts",
    desc: "Get notified instantly when scores drop below thresholds or new evaluations arrive.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

const screenshots = [
  { src: "/images/screen-analytics.jpg", alt: "Dashboard analytics overview with charts and scores" },
  { src: "/images/screen-business.jpg", alt: "Business dashboard with reviews and ratings" },
  { src: "/images/screen-new-5.jpg", alt: "Full CX dashboard with performance score" },
];

export default function DashboardPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Dark tech ── */}
        <section className="relative overflow-hidden bg-[#0F0F1A] pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Gradient accent orbs */}
          <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#38B2AC]/15 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-sm mb-6">
              Business Dashboard
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
              Your CX intelligence,{" "}
              <span className="bg-gradient-to-r from-primary-light to-[#38B2AC] bg-clip-text text-transparent">
                all in one place
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Track KPIs, monitor trends, and visualize performance data in real
              time. One dashboard for all your customer experience needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={LINKS.webApp}
                className="inline-flex items-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
              >
                Open Dashboard
              </a>
              <a
                href="/partner"
                className="inline-flex items-center rounded-xl border border-slate-700 bg-white/5 px-8 py-4 text-sm font-bold text-slate-300 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
              >
                Request Demo
              </a>
            </div>

            {/* Hero screenshot */}
            <div className="mt-16 animate-fade-up">
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-primary/10">
                <Image
                  src="/images/screen-new-5.jpg"
                  alt="JABB Business Dashboard with 85% CX score"
                  width={1200}
                  height={700}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Your Command Center: 3x2 grid ── */}
        <section className="py-20 lg:py-28 bg-[#0F0F1A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Your Command Center
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Everything you need to monitor and improve customer experience, all in one dashboard.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {miniFeatures.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:border-primary/50 hover:bg-slate-800/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary/20">
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

        {/* ── Screenshot Gallery ── */}
        <section className="py-20 lg:py-28 bg-[#13132A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Designed for Clarity
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Every screen is optimized for fast insights and deep drill-downs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {screenshots.map((ss, i) => (
                <div key={i} className="group">
                  {/* Browser frame mockup */}
                  <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 transition group-hover:border-primary/40">
                    {/* Title bar */}
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-3 text-xs text-slate-500 truncate">
                        app.jabb.pro
                      </span>
                    </div>
                    <Image
                      src={ss.src}
                      alt={ss.alt}
                      width={600}
                      height={400}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Available Everywhere ── */}
        <section className="py-20 lg:py-24 bg-[#0F0F1A]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Available Everywhere
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Access your CX intelligence from any device, anytime.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {/* Web */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="text-sm font-semibold text-white">Web App</span>
              </div>
              {/* iOS */}
              <a
                href={LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-4 transition hover:border-primary/50"
              >
                <svg width="20" height="24" viewBox="0 0 384 512" fill="#A78BFA">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span className="text-sm font-semibold text-white">iOS</span>
              </a>
              {/* Android */}
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-4 transition hover:border-primary/50"
              >
                <svg width="20" height="22" viewBox="0 0 24 24" fill="#A78BFA">
                  <path d="M17.523 15.342l2.497-4.449c.17-.301.052-.682-.263-.852-.315-.17-.71-.058-.88.243l-2.528 4.504c-1.926-.857-4.085-1.338-6.349-1.338s-4.423.48-6.35 1.338L1.123 10.284c-.17-.301-.565-.414-.88-.243-.314.17-.432.55-.262.852l2.497 4.449C.934 16.764 0 18.665 0 20.786h24c0-2.121-.934-4.022-2.477-5.444zM6.5 18.786a1 1 0 110-2 1 1 0 010 2zm11 0a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                <span className="text-sm font-semibold text-white">Android</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA (dark variant) ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#3028C0]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Take control of your customer experience
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Sign up for free and start monitoring your CX performance today.
            </p>
            <a
              href={LINKS.webApp}
              className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
            >
              Open Dashboard
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
