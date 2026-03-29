import { buildMetadata } from "@/lib/seo";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "AI Reports — JABB",
  description:
    "Leverage artificial intelligence to transform raw field data into strategic recommendations. Faster analysis, smarter decisions.",
});

const capabilities = [
  {
    title: "Pattern Detection",
    desc: "AI identifies recurring themes across hundreds of evaluations that humans would miss — like declining greeting scores at specific hours.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" x2="12" y1="22.08" y2="12" />
      </svg>
    ),
  },
  {
    title: "Predictive Insights",
    desc: "Based on trend data, the AI flags potential issues before they become critical, giving you time to act proactively.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Executive Summaries",
    desc: "One-page summaries designed for leadership — key findings, scores, and recommended actions, ready to present.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
      </svg>
    ),
  },
];

const rawDataItems = [
  { label: "Cleanliness Score", value: "7.2 / 10" },
  { label: "Staff Greeting", value: "62% pass rate" },
  { label: "Wait Time", value: "Avg 4.3 min" },
  { label: "Repeat Issues", value: "23 flagged" },
];

const aiInsights = [
  "Staff greeting scores drop 31% after 6 PM — consider evening shift training.",
  "Cleanliness scores at Location B consistently 2 points below average.",
  "Wait time correlates with 40% lower satisfaction — prioritize queue management.",
  "Top 3 locations share common trait: proactive manager engagement.",
];

export default function AiReportsPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Dark gradient with glow ── */}
        <section className="relative overflow-hidden bg-[#0A0A1B] pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          {/* Purple glow orbs */}
          <div className="absolute top-1/4 left-1/3 h-80 w-80 rounded-full bg-primary/25 blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#9F7AEA]/20 blur-[120px]" />
          <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-[#38B2AC]/15 blur-[80px]" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light backdrop-blur-sm mb-6">
              AI-Powered Reports
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              From raw data to{" "}
              <span className="bg-gradient-to-r from-primary-light via-[#9F7AEA] to-[#38B2AC] bg-clip-text text-transparent">
                strategic insight
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Our AI engine processes thousands of evaluation data points and
              distills them into clear, actionable reports with strategic
              recommendations.
            </p>
            <a
              href="/partner"
              className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-[#9F7AEA] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:opacity-90"
            >
              Generate Your First Report
            </a>
          </div>
        </section>

        {/* ── Before/After: Raw Data → AI Insight ── */}
        <section className="py-20 lg:py-28 bg-[#0F0F20]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                From Raw Data to Strategy
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                See how AI transforms scattered data points into executive-ready recommendations.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
              {/* Before: Raw Data */}
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" x2="9" y1="9" y2="15" />
                      <line x1="9" x2="15" y1="9" y2="15" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-red-400">
                    Raw Data
                  </span>
                </div>

                <div className="space-y-4">
                  {rawDataItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg bg-slate-800/50 px-4 py-3"
                    >
                      <span className="text-sm text-slate-400">{item.label}</span>
                      <span className="font-mono text-sm font-semibold text-slate-300">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-500 italic">
                  Numbers without context — what do they mean for your business?
                </p>
              </div>

              {/* After: AI Insight */}
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-[#9F7AEA]/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                    AI Insights
                  </span>
                </div>

                <div className="space-y-4">
                  {aiInsights.map((insight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-lg bg-white/5 px-4 py-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary-light">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {insight}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-primary-light/60 italic">
                  Clear, actionable recommendations backed by data.
                </p>
              </div>
            </div>

            {/* Arrow between cards on mobile */}
            <div className="flex justify-center my-4 lg:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3028C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" x2="12" y1="5" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── 3 Capabilities with gradient borders ── */}
        <section className="py-20 lg:py-28 bg-[#0A0A1B]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                AI Capabilities
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Three powerful engines working together to deliver insights that matter.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-[#9F7AEA]/30 to-transparent transition hover:from-primary hover:via-[#9F7AEA]/60 hover:to-[#38B2AC]/30"
                >
                  <div className="rounded-2xl bg-[#0F0F22] p-8 h-full">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[#9F7AEA]/10 text-primary-light">
                      {cap.icon}
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-white">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-slate-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Real AI Report Screenshot ── */}
        <section className="py-20 lg:py-28 bg-[#0F0F20]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                See a Real AI Report
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Actual AI-generated analysis with recommended actions from a JABB evaluation.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl shadow-primary/10">
                <Image
                  src="/images/screen-ai-report.jpg"
                  alt="AI Analysis report with recommended actions"
                  width={1000}
                  height={600}
                  className="h-auto w-full"
                />
              </div>
              {/* Glow behind the screenshot */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-[#9F7AEA]/10 blur-2xl" />
            </div>

            <p className="mt-6 text-center text-sm text-slate-500">
              AI Analysis showing recommended actions based on field evaluation data.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-[#9F7AEA] to-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Let AI do the heavy lifting
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Stop spending hours reading evaluations. Get instant, strategic insights.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/partner"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
              >
                Get AI Reports
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                See a Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
