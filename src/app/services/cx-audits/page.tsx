import { buildMetadata } from "@/lib/seo";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "CX Audits — JABB",
  description:
    "Comprehensive audits of your customer journey, from first impression to final checkout. Identify gaps and improve satisfaction scores.",
});

const auditCategories = [
  { label: "Cleanliness", score: 4.3 },
  { label: "Ambiance", score: 4.5 },
  { label: "Staff Interaction", score: 3.9 },
  { label: "Wait Time", score: 3.6 },
  { label: "Product Quality", score: 4.7 },
  { label: "Value for Money", score: 4.1 },
  { label: "Accessibility", score: 4.0 },
  { label: "Overall Experience", score: 4.2 },
];

const comparisonRows = [
  { feature: "GPS-Verified Visits", jabb: true, traditional: false },
  { feature: "Real-Time Reporting", jabb: true, traditional: false },
  { feature: "AI-Powered Analysis", jabb: true, traditional: false },
  { feature: "Photo Evidence", jabb: true, traditional: false },
  { feature: "Citizen Evaluators", jabb: true, traditional: false },
  { feature: "Affordable Pricing", jabb: true, traditional: false },
  { feature: "Multi-Location Coverage", jabb: true, traditional: true },
  { feature: "Custom Checklists", jabb: true, traditional: true },
];

export default function CxAuditsPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Full-width gradient ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-xl">
                <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm mb-6">
                  CX Audits
                </span>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  360-degree view of your{" "}
                  <span className="text-white/90">customer journey</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Go beyond a single visit. Evaluate every touchpoint from
                  discovery to post-purchase with comprehensive CX audits.
                </p>
                <a
                  href="/partner"
                  className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
                >
                  Request an Audit
                </a>
              </div>

              {/* Floating screenshot */}
              <div className="relative mx-auto lg:mx-0">
                <div className="animate-float relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                  <Image
                    src="/images/screen-new-4.jpg"
                    alt="JABB CX Performance Metrics dashboard"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Audit: 4x2 grid ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                What We Audit
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                Eight core dimensions evaluated in every CX audit, scored on a 10-point scale.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {auditCategories.map((cat) => {
                const pct = (cat.score / 10) * 100;
                const circumference = 2 * Math.PI * 36;
                const offset = circumference - (pct / 100) * circumference;

                return (
                  <div
                    key={cat.label}
                    className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                  >
                    {/* Circular progress */}
                    <div className="relative h-24 w-24">
                      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 80 80">
                        <circle
                          cx="40" cy="40" r="36"
                          stroke="#E2E8F0" strokeWidth="6" fill="none"
                        />
                        <circle
                          cx="40" cy="40" r="36"
                          stroke="#4942F8" strokeWidth="6" fill="none"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-ink">
                        {cat.score}
                      </span>
                    </div>
                    <span className="mt-4 text-sm font-semibold text-ink">
                      {cat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Alternating sections ── */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
            {/* Row 1: image left, text right */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/screen-analytics.jpg"
                  alt="Dashboard analytics overview"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  Full Journey Mapping
                </h3>
                <p className="mt-4 text-ink-light leading-relaxed">
                  We map every touchpoint from discovery to post-purchase,
                  identifying where customers drop off or disengage. Our
                  evaluators follow a structured framework that covers digital,
                  physical, and post-visit interactions.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Online presence review", "In-store experience audit", "Post-purchase follow-up analysis"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-light">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2: text left, image right */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  Benchmark Scoring
                </h3>
                <p className="mt-4 text-ink-light leading-relaxed">
                  Your CX performance scored against industry benchmarks so you
                  know exactly where you stand versus competitors. We compile
                  data from hundreds of evaluations to provide meaningful
                  comparisons.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Industry-standard frameworks", "Competitor benchmarking", "Trend analysis over time"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-light">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/screen-business.jpg"
                  alt="JABB Business dashboard with reviews"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                JABB vs Traditional Audits
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                See why leading businesses choose JABB for their CX auditing needs.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-4 text-sm font-semibold text-ink">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                      JABB CX Audits
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-ink-muted">
                      Traditional Audits
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                    >
                      <td className="px-6 py-4 text-sm text-ink">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.jabb ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.traditional ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-500">
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-primary to-[#6C66FF]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Get a complete picture of your customer experience
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Our audits cover every touchpoint. Stop guessing, start knowing.
            </p>
            <a
              href="/partner"
              className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
            >
              Request an Audit
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
