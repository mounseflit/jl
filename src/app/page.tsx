import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cities from "@/components/Cities";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

/* ── SVG Icons for "What You Get" section ── */

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

/* ── How It Works data ── */
const steps = [
  {
    num: "01",
    title: "Download the App",
    desc: "Get JABB from the App Store or Google Play and create your free account in under two minutes.",
  },
  {
    num: "02",
    title: "Accept a Mission",
    desc: "Browse available mystery shopping missions near you and choose the ones that fit your schedule.",
  },
  {
    num: "03",
    title: "Evaluate & Submit",
    desc: "Visit the location, complete the GPS-verified checklist, and submit your evaluation with photos.",
  },
  {
    num: "04",
    title: "Get Paid",
    desc: "Once your report is validated, earnings go to your JABB wallet. Cash out anytime.",
  },
];

/* ── What You Get data ── */
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
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto max-w-[1260px] px-8">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="!text-[#4942F8] text-sm font-bold uppercase tracking-widest mb-3">
                How It Works
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Start earning in 4 simple steps
              </h2>
            </div>

            <div className="relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden lg:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-[#EEEDFF]" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                {steps.map((step) => (
                  <div key={step.num} className="relative flex flex-col items-center text-center">
                    {/* Number circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#4942F8] text-white flex items-center justify-center font-bold text-sm mb-5 shadow-lg shadow-[#4942F8]/20">
                      {step.num}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[260px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* ── What You Get ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-[1260px] px-8">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="!text-[#4942F8] text-sm font-bold uppercase tracking-widest mb-3">
                What You Get
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Benefits for everyone
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* For JABBers */}
              <div className="bg-[#F5F5FF] rounded-2xl p-8 md:p-10">
                <div className="inline-flex items-center gap-2 bg-[#4942F8] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                  For JABBers
                </div>
                <div className="flex flex-col gap-6">
                  {jabberBenefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#4942F8] shadow-sm">
                        {b.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">{b.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Businesses */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
                  For Businesses
                </div>
                <div className="flex flex-col gap-6">
                  {businessBenefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-900 shadow-sm">
                        {b.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">{b.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cities />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
