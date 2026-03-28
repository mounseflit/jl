"use client";

const MARQUEE_ITEMS = [
  "COMMUNITY DRIVEN",
  "REAL-TIME DASHBOARDS",
  "GOLDEN PROOF PROTOCOL",
  "ANTI-FRAUD QA",
  "DENSITY-FIRST",
  "MYSTERY SHOPPING REIMAGINED",
  "VERIFIED FIELD DATA",
  "ACTIONABLE INSIGHTS",
  "PRIVACY BY DESIGN",
];

export default function MarqueeTicker() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-ticker">
      <div className="marquee-ticker__track">
        {items.map((item, i) => (
          <span key={i} className="marquee-ticker__item">
            <span className="marquee-ticker__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
