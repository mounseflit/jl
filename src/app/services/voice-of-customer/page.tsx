import { buildMetadata } from "@/lib/seo";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Voice of Customer — JABB",
  description:
    "Capture authentic customer feedback through surveys, interviews, and sentiment analysis. Understand what your customers truly think.",
});

const channels = [
  {
    title: "In-Person Interviews",
    desc: "Trained JABBers conduct brief, structured interviews with real customers on-site for genuine, in-the-moment feedback.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "from-[#F5F5FF] to-[#EEEDFF]",
    border: "border-primary/20",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    title: "Post-Visit Surveys",
    desc: "Targeted surveys delivered after customer interactions capture detailed feedback while the experience is still fresh.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: "from-[#FFF5F5] to-[#FFF0F0]",
    border: "border-rose-200",
    iconBg: "bg-rose-50 text-rose-500",
  },
  {
    title: "Sentiment Analysis",
    desc: "AI-powered analysis of online reviews, social mentions, and survey responses to quantify customer sentiment trends.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
    color: "from-[#F0FFF4] to-[#E6FFED]",
    border: "border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-500",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Customer, Casablanca",
    stars: 5,
    text: "The staff was incredibly welcoming. From the moment I walked in, I felt valued. The checkout was quick and efficient.",
  },
  {
    name: "Youssef K.",
    role: "Customer, Rabat",
    stars: 4,
    text: "Good overall experience. Product quality was excellent but the wait time for service could be improved.",
  },
  {
    name: "Amina R.",
    role: "Customer, Marrakech",
    stars: 5,
    text: "Best experience I've had at any location. The cleanliness was impeccable and the staff truly understood the product.",
  },
  {
    name: "Karim B.",
    role: "Customer, Tanger",
    stars: 3,
    text: "The ambiance is great but I felt the pricing doesn't match the quality. Staff needs more training on newer products.",
  },
  {
    name: "Fatima Z.",
    role: "Customer, Fes",
    stars: 5,
    text: "Outstanding service quality. They went above and beyond to help me find exactly what I needed. Will definitely return.",
  },
  {
    name: "Omar T.",
    role: "Customer, Agadir",
    stars: 4,
    text: "Very satisfied with the service. The store layout is intuitive and the staff was friendly and knowledgeable.",
  },
];

const metrics = [
  { value: "1,200+", label: "Reviews Collected" },
  { value: "4.2", label: "Avg Rating" },
  { value: "89%", label: "Response Rate" },
];

export default function VoiceOfCustomerPage() {
  return (
    <>
      <MobileNav />

      <main className="font-body">
        {/* ── Hero: Soft warm gradient ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-[var(--color-bg)] pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
              Voice of Customer
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-6xl">
              Hear what your customers{" "}
              <span className="text-primary">really think</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-light)]">
              Traditional feedback only captures extremes. JABB captures the
              silent majority through structured interviews, surveys, and AI
              sentiment analysis.
            </p>
            <a
              href="/partner"
              className="mt-8 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Capture Feedback
            </a>
          </div>
        </section>

        {/* ── 3 Feedback Channels ── */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
                Three Channels, One Truth
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
                We collect feedback through multiple channels to give you the complete picture.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {channels.map((ch) => (
                <div
                  key={ch.title}
                  className={`group relative rounded-2xl border ${ch.border} bg-gradient-to-b ${ch.color} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                >
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${ch.iconBg}`}>
                    {ch.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-[var(--color-text)]">
                    {ch.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Customers Say — masonry-like ── */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[var(--color-bg)] to-primary-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
                What Customers Say
              </h2>
              <p className="mt-4 text-[var(--color-text-light)] max-w-2xl mx-auto">
                Real feedback captured through JABB, helping businesses understand their customers.
              </p>
            </div>

            {/* Masonry-like grid using columns */}
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="mb-6 break-inside-avoid rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill={s < t.stars ? "#FBBF24" : "#E2E8F0"}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-[var(--color-text-light)] leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">{t.name}</p>
                      <p className="text-xs text-ink-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Metrics ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="text-center rounded-2xl bg-primary-50 p-10"
                >
                  <span className="font-display text-5xl font-extrabold text-primary">
                    {m.value}
                  </span>
                  <p className="mt-2 text-sm font-medium text-[var(--color-text-light)] uppercase tracking-wide">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-primary to-[#38B2AC]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Start listening to your customers today
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Capture the feedback that matters. Understand, improve, and grow.
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
