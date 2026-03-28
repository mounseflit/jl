import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";

/* ── SVG Icons ── */

function MoneyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BrainSmallIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    </svg>
  );
}

/* ── How It Works ── */
const steps = [
  { num: "01", title: "Download the App", desc: "Get JABB from the App Store or Google Play and create your free account in under two minutes." },
  { num: "02", title: "Accept a Mission", desc: "Browse available mystery shopping missions near you and choose the ones that fit your schedule." },
  { num: "03", title: "Evaluate & Submit", desc: "Visit the location, complete the GPS-verified checklist, and submit your evaluation with photos." },
  { num: "04", title: "Get Paid", desc: "Once your report is validated, earnings go to your JABB wallet. Cash out anytime." },
];

/* ── Services data for individual sections ── */
const services = [
  {
    tag: "Mystery Shopping",
    title: "See your business through your customer\u2019s eyes",
    desc: "Deploy citizen shoppers to evaluate real customer experiences across your locations. GPS-verified, unbiased, and actionable insights delivered fast.",
    cta: "Start Evaluating",
    href: "/services/mystery-shopping",
    image: "/images/screen-missions.jpg",
    gradient: "from-[#4942F8] to-[#6C66FF]",
    phone: true,
  },
  {
    tag: "CX Audits",
    title: "360\u00b0 view of your entire customer journey",
    desc: "Comprehensive audits from first impression to final checkout. Identify gaps, benchmark against competitors, and improve satisfaction scores.",
    cta: "Request an Audit",
    href: "/services/cx-audits",
    image: "/images/screen-new-4.jpg",
    gradient: "from-[#6C66FF] to-[#9F7AEA]",
    phone: false,
  },
  {
    tag: "Voice of Customer",
    title: "Hear what the silent majority really thinks",
    desc: "Capture authentic customer feedback through in-person interviews, post-visit surveys, and AI sentiment analysis. Go beyond online reviews.",
    cta: "Capture Feedback",
    href: "/services/voice-of-customer",
    image: "/images/screen-business.jpg",
    gradient: "from-[#4942F8] to-[#38B2AC]",
    phone: false,
  },
  {
    tag: "Business Dashboard",
    title: "Your CX command center, always on",
    desc: "Track KPIs, monitor trends, and visualize performance data in real time. One dashboard for all your CX intelligence needs.",
    cta: "View Dashboard",
    href: "/services/dashboard",
    image: "/images/screen-new-5.jpg",
    gradient: "from-[#38B2AC] to-[#4942F8]",
    phone: false,
  },
  {
    tag: "AI Reports",
    title: "From scattered data to strategic clarity",
    desc: "Leverage artificial intelligence to transform raw field data into strategic recommendations. Faster analysis, smarter decisions.",
    cta: "Generate Report",
    href: "/services/ai-reports",
    image: "/images/screen-ai-report.jpg",
    gradient: "from-[#9F7AEA] to-[#4942F8]",
    phone: false,
  },
  {
    tag: "Reward System",
    title: "Get paid for sharing honest experiences",
    desc: "Complete missions, earn JABB coins, level up through tiers, and cash out instantly. The more you evaluate, the more you earn.",
    cta: "Earn Rewards",
    href: "/services/rewards",
    image: "/images/screen-home.jpg",
    gradient: "from-[#4942F8] to-[#667eea]",
    phone: true,
  },
];

/* ── What You Get ── */
const jabberBenefits = [
  { icon: <MoneyIcon />, title: "Earn Money", desc: "Get paid for every validated mission you complete." },
  { icon: <CalendarIcon />, title: "Flexible Schedule", desc: "Work when you want, where you want. No fixed hours." },
  { icon: <CheckCircleIcon />, title: "Easy Missions", desc: "Simple checklists guide you through each evaluation." },
];

const businessBenefits = [
  { icon: <ChartIcon />, title: "Real-Time CX Data", desc: "Monitor customer experience metrics as they happen." },
  { icon: <MapPinIcon />, title: "GPS-Verified Reports", desc: "Every evaluation is geotagged for total authenticity." },
  { icon: <BrainSmallIcon />, title: "AI-Powered Insights", desc: "Smart analytics transform raw data into strategy." },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* ── How It Works ── */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="container mx-auto max-w-[1060px] px-6">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[#4942F8] text-xs font-bold uppercase tracking-widest mb-2 block">
                How It Works
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Start earning in 4 simple steps
              </h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[#EEEDFF]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                {steps.map((step) => (
                  <div key={step.num} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#4942F8] text-white flex items-center justify-center font-bold text-xs mb-4 shadow-lg shadow-[#4942F8]/20">
                      {step.num}
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1.5">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
           SERVICES — 6 alternating left/right mini-sections
           ══════════════════════════════════════════════════════ */}
        <section id="section-services">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            const bgClass = isEven ? "bg-white" : "bg-gray-50";

            return (
              <div key={s.tag} className={`py-12 md:py-16 ${bgClass}`}>
                <div className="container mx-auto max-w-[1060px] px-6">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${!isEven ? "direction-rtl" : ""}`}>
                    {/* Text side */}
                    <div className={`${!isEven ? "lg:order-2" : ""}`}>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white bg-gradient-to-r ${s.gradient} mb-3`}>
                        {s.tag}
                      </span>
                      <h3 className="!text-xl sm:!text-2xl font-extrabold text-gray-900 leading-snug !mb-3">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-[440px]">
                        {s.desc}
                      </p>
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#4942F8] hover:text-[#3730DB] transition-colors group"
                      >
                        {s.cta}
                        <svg
                          width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    {/* Image side */}
                    <div className={`${!isEven ? "lg:order-1" : ""} flex justify-center`}>
                      {s.phone ? (
                        /* iPhone frame for mobile screenshots */
                        <div className="relative w-[180px] sm:w-[200px]">
                          <div className="relative rounded-[2rem] border-[5px] border-gray-900 bg-gray-900 p-1 shadow-2xl shadow-black/20">
                            {/* Notch */}
                            <div className="absolute left-1/2 top-1.5 h-3.5 w-16 -translate-x-1/2 rounded-full bg-gray-900 z-10" />
                            <div className="overflow-hidden rounded-[1.6rem]">
                              <Image
                                src={s.image}
                                alt={`${s.tag} — JABB app`}
                                width={200}
                                height={433}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                          {/* Subtle glow behind phone */}
                          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-[#4942F8]/5 blur-2xl" />
                        </div>
                      ) : (
                        /* Browser frame for dashboard screenshots */
                        <div className="relative w-full max-w-[480px] rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                          {/* Browser dots */}
                          <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-100">
                            <span className="h-2 w-2 rounded-full bg-red-400/60" />
                            <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                            <span className="h-2 w-2 rounded-full bg-green-400/60" />
                            <span className="ml-2 text-[9px] text-gray-400 truncate">app.jabb.pro</span>
                          </div>
                          <Image
                            src={s.image}
                            alt={`${s.tag} — JABB platform`}
                            width={560}
                            height={380}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ── What You Get ── */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto max-w-[1060px] px-6">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[#4942F8] text-xs font-bold uppercase tracking-widest mb-2 block">
                What You Get
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Benefits for everyone
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* For JABBers */}
              <div className="bg-[#F5F5FF] rounded-xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-[#4942F8] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                  For JABBers
                </div>
                <div className="flex flex-col gap-4">
                  {jabberBenefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#4942F8] shadow-sm">
                        {b.icon}
                      </div>
                      <div>
                        <h4 className="!text-sm font-bold text-gray-900 !mb-0.5">{b.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Businesses */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
                  For Businesses
                </div>
                <div className="flex flex-col gap-4">
                  {businessBenefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-900 shadow-sm">
                        {b.icon}
                      </div>
                      <div>
                        <h4 className="!text-sm font-bold text-gray-900 !mb-0.5">{b.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Partners />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
