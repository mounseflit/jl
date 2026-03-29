/** SVG pro icons for each service — clean, consistent, no emojis */

function SearchIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      <path d="M11 8a3 3 0 0 0-3 3" />
    </svg>
  );
}

function ClipboardCheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function LayoutDashboardIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

/* TrophyIcon removed — no longer used after rewards section was replaced */

const services = [
  {
    icon: <SearchIcon />,
    gradient: "linear-gradient(135deg, #1d1597 0%, #3028C0 100%)",
    title: "JABB App",
    desc: "Deploy citizen shoppers to evaluate real customer experiences across your locations. GPS-verified, unbiased, and actionable insights delivered fast.",
    cta: "Start Evaluating",
    href: "/services/jabb-app",
  },
  {
    icon: <MicIcon />,
    gradient: "linear-gradient(135deg, #1d1597 0%, #38B2AC 100%)",
    title: "Voice of Customer",
    desc: "Capture authentic customer feedback through surveys, interviews, and sentiment analysis. Monitor your brand health in real time.",
    cta: "Capture Feedback",
    href: "/services/voice-of-customer",
  },
  {
    icon: <BrainIcon />,
    gradient: "linear-gradient(135deg, #9F7AEA 0%, #1d1597 100%)",
    title: "JABB Report",
    desc: "AI-powered reports with sentiment scoring, trend detection, and prioritized action items from every piece of customer feedback.",
    cta: "See Reports",
    href: "/services/voice-of-customer",
  },
  {
    icon: <LayoutDashboardIcon />,
    gradient: "linear-gradient(135deg, #38B2AC 0%, #1d1597 100%)",
    title: "QR Codes",
    desc: "NFC-enabled stands, stickers, and cards for effortless review collection at your point of sale. No app download required.",
    cta: "View Products",
    href: "/services/qr-codes",
  },
  {
    icon: <ClipboardCheckIcon />,
    gradient: "linear-gradient(135deg, #3028C0 0%, #9F7AEA 100%)",
    title: "JABB CX",
    desc: "Deploy mystery shoppers to evaluate your locations with structured scoring, GPS verification, and detailed audit reports.",
    cta: "Launch a Mission",
    href: "/services/cx-audits",
  },
];

export default function Services() {
  return (
    <section id="section-services" className="section">
      <div className="container">
        <div className="services grid-3 grid-2-lg gap-8">
          {services.map((s) => (
            <div key={s.title} className="service-card fade-up">
              <div className="service-card__content">
                <div
                  className="service-card__content__thumbnail"
                  style={{ background: s.gradient }}
                >
                  {s.icon}
                </div>
                <h4>{s.title}</h4>
                <div className="service-card__content__desc">{s.desc}</div>
                <a href={s.href} className="button">
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
