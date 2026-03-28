import { buildMetadata } from "@/lib/seo";
import { LINKS } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Reward System — JABB",
  description:
    "Motivate your JABBers with a gamified reward system. Earn points, unlock badges, and cash out for completing quality evaluations.",
});

const howYouEarn = [
  {
    num: "1",
    title: "Complete Missions",
    desc: "Each validated mission earns JABB coins based on difficulty, distance, and your quality score. The better your work, the more you earn.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    bg: "bg-primary/10",
    text: "text-primary",
  },
  {
    num: "2",
    title: "Level Up",
    desc: "Accumulate coins and maintain high quality scores to progress through Standard, Pro, and Elite tiers with better rewards.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    bg: "bg-amber-100",
    text: "text-amber-600",
  },
  {
    num: "3",
    title: "Cash Out",
    desc: "Convert JABB coins to real money and withdraw via bank transfer or mobile payment instantly. No minimum, no waiting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
];

const tiers = [
  {
    name: "Standard",
    tagline: "Getting Started",
    border: "border-slate-200",
    headerBg: "bg-slate-100",
    headerText: "text-slate-700",
    badge: "bg-slate-200 text-slate-600",
    perks: [
      "Access to local missions",
      "Standard payout rates",
      "Basic badges & streaks",
      "Community access",
    ],
  },
  {
    name: "Pro",
    tagline: "Rising Star",
    border: "border-primary/40",
    headerBg: "bg-gradient-to-r from-primary to-primary-light",
    headerText: "text-white",
    badge: "bg-primary text-white",
    perks: [
      "Priority mission access",
      "1.5x payout multiplier",
      "Exclusive Pro badges",
      "Premium mission types",
      "Monthly bonus rewards",
    ],
    featured: true,
  },
  {
    name: "Elite",
    tagline: "Top JABBer",
    border: "border-amber-300",
    headerBg: "bg-gradient-to-r from-amber-500 to-amber-400",
    headerText: "text-white",
    badge: "bg-amber-500 text-white",
    perks: [
      "First access to all missions",
      "2x payout multiplier",
      "Gold Elite badge",
      "VIP high-value missions",
      "Quarterly bonus payouts",
      "Direct support line",
    ],
  },
];

const stats = [
  { value: "500+", label: "Active JABBers" },
  { value: "50K+", label: "Missions Completed" },
  { value: "$150K+", label: "Paid Out" },
];

export default function RewardsPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Colorful gradient ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#667eea] to-[#38B2AC] pt-28 pb-20 lg:pt-36 lg:pb-28">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">
            🪙
          </div>
          <div className="absolute top-32 right-16 text-5xl opacity-20 animate-float" aria-hidden="true">
            🏆
          </div>
          <div className="absolute bottom-16 left-1/4 text-4xl opacity-20 animate-float" aria-hidden="true">
            ⭐
          </div>
          <div className="absolute bottom-24 right-1/3 text-5xl opacity-20 animate-float" aria-hidden="true">
            💰
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm mb-6">
              Reward System
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get paid to improve{" "}
              <span className="text-yellow-300">customer experiences</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Complete mystery shopping missions, earn JABB coins, level up
              through tiers, and cash out your earnings instantly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
              >
                Start Earning
              </a>
              <a
                href={LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Download App
              </a>
            </div>
          </div>
        </section>

        {/* ── How You Earn ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                How You Earn
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                Three simple steps from mission to money.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {howYouEarn.map((step) => (
                <div
                  key={step.num}
                  className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center transition hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Large background number */}
                  <span className="absolute top-4 right-6 font-display text-7xl font-black text-slate-100">
                    {step.num}
                  </span>

                  <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl ${step.bg} ${step.text}`}>
                    {step.icon}
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="relative mt-3 text-ink-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JABBer Tiers ── */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                JABBer Tiers
              </h2>
              <p className="mt-4 text-ink-light max-w-2xl mx-auto">
                The more you contribute, the more you unlock. Progress through
                three tiers of rewards.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 items-start">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative overflow-hidden rounded-2xl border ${tier.border} bg-white shadow-sm transition hover:shadow-lg ${
                    tier.featured ? "ring-2 ring-primary/30 md:-mt-4 md:mb-4" : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute top-0 right-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-bold text-white">
                      Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className={`px-6 py-6 ${tier.headerBg}`}>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${tier.badge}`}>
                      {tier.tagline}
                    </span>
                    <h3 className={`mt-3 font-display text-2xl font-extrabold ${tier.headerText}`}>
                      {tier.name}
                    </h3>
                  </div>

                  {/* Perks */}
                  <div className="px-6 py-6">
                    <ul className="space-y-3">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-3 text-sm text-ink-light">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── By The Numbers ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                By The Numbers
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center rounded-2xl bg-gradient-to-br from-primary to-[#667eea] p-10 shadow-lg shadow-primary/20"
                >
                  <span className="font-display text-5xl font-extrabold text-white">
                    {s.value}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/70 uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-r from-[#38B2AC] via-[#667eea] to-primary">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to start earning?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Download the JABB app, complete your first mission, and get paid.
              It&apos;s that simple.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition hover:bg-slate-50"
              >
                Google Play
              </a>
              <a
                href={LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                App Store
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
