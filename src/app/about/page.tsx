import { buildMetadata } from "@/lib/seo";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "About JABB — Mystery Shopping & CX Intelligence Platform",
  description:
    "JABB is the first citizen-powered mystery shopping platform in Morocco, delivering GPS-verified field intelligence to businesses across the country.",
});

export default function AboutPage() {
  return (
    <>
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <MobileNav />
        <div className="page-header">
          <div className="container">
            <h1>About JABB</h1>
            <p>
              The first citizen-powered mystery shopping platform in Morocco,
              turning everyday experiences into actionable business intelligence.
            </p>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2>Our Mission</h2>
          <p>
            JABB stands for &ldquo;Just A Better Business.&rdquo; We believe
            every business deserves honest, verified feedback from real
            customers — not anonymous online reviews or expensive consulting
            firms. Our platform empowers citizens to become field evaluators,
            providing GPS-verified, timestamped intelligence that helps
            businesses improve their customer experience.
          </p>

          <h2>How It Works</h2>
          <p>
            Citizens (JABBers) download our app, accept mystery shopping
            missions, visit locations incognito, and evaluate the experience
            using structured checklists. Every evaluation is GPS-locked,
            photo-verified, and processed through our AI quality engine before
            reaching business partners.
          </p>

          <h2>For Businesses</h2>
          <p>
            Restaurant owners, retailers, banks, and hospitality brands use
            JABB to monitor service quality across all their locations in real
            time. Our dashboard delivers actionable KPIs, trend analysis, and
            AI-generated recommendations — no more guesswork.
          </p>

          <div style={{ margin: "3rem 0" }}>
            <Image
              src="/images/dashboard.png"
              alt="JABB Business Dashboard showing performance metrics"
              width={800}
              height={500}
              style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
            />
          </div>

          <h2>Our Values</h2>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li><strong>Proof before opinion</strong> — Every data point is GPS-verified and timestamped.</li>
            <li><strong>Citizen-constructive</strong> — We empower people to earn while helping businesses grow.</li>
            <li><strong>Meritocracy</strong> — JABBers advance through tiers based on quality, not quantity.</li>
            <li><strong>Privacy first</strong> — We protect evaluator identity and business data equally.</li>
          </ul>

          <h2>Based in Morocco, Built for Scale</h2>
          <p>
            Headquartered in Casablanca, JABB is currently active in 10+
            Moroccan cities with plans to expand across North Africa and the
            MENA region.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
