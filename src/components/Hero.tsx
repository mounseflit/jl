import Image from "next/image";
import JabbLogo from "./JabbLogo";
import StoreButtons from "./StoreButtons";
import MobileNav from "./MobileNav";

/**
 * Hero — done.ma style:
 * - Diagonal background via ::before (rotated, rounded bottom-right corner)
 * - Phone OVERLAPS the bottom edge of the diagonal, extending below
 * - 60/40 text-left phone-right layout
 * - Stats bar below
 *
 * The diagonal bg is in globals.css as .hero-done::before
 * The phone uses negative margin-bottom to overlap into the next section
 */

const stats = [
  { value: "500+", label: "JABBers" },
  { value: "50K+", label: "Evaluations" },
  { value: "10+", label: "Cities" },
  { value: "98%", label: "Accuracy" },
];

export default function Hero() {
  return (
    <>
      {/* ── Hero with diagonal background ── */}
      <section className="hero-done">
        <MobileNav />

        {/* Content — sits above the ::before bg */}
        <div className="hero-done__content">
          <div className="container mx-auto max-w-[1060px] px-6 lg:px-8">
            <div className="hero-done__grid">
              {/* TEXT SIDE */}
              <div className="hero-done__text">
                {/* Brand mark — desktop only (MobileNav has one for mobile) */}
                <div className="brand hidden lg:block" style={{ width: "9.5rem" }}>
                  <a href="/" aria-label="JABB Home">
                    <JabbLogo size={40} />
                    <span className="brand__text">JABB</span>
                  </a>
                </div>

                <h1 className="font-display text-white font-extrabold leading-[1.1] tracking-tight text-[clamp(1.6rem,3.8vw,2.6rem)]">
                  All your CX insights&hellip;
                  <br />
                  in one single app
                </h1>

                <p className="text-white/70 text-[clamp(0.78rem,0.95vw,0.9rem)] leading-relaxed max-w-[420px]">
                  JABB, the 1st citizen-powered mystery shopping platform,
                  delivers GPS&#8209;verified field intelligence to your
                  dashboard &mdash; fast, reliable, and professional.
                </p>

                <StoreButtons />

                <a
                  href="https://app.jabb.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  Or access the web dashboard &rarr;
                </a>
              </div>

              {/* PHONE SIDE — overlaps bottom edge */}
              <div className="hero-done__phone">
                <Image
                  src="/images/screen-home.jpg"
                  alt="JABB mystery shopping app — tap to start evaluating"
                  width={320}
                  height={660}
                  className="hero-done__phone-img floating"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-[1060px] px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-center gap-3 px-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4942F8]">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
