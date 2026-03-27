import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Terms of Service — JABB",
  description: "Read the terms and conditions for using the JABB platform.",
});

export default function TermsPage() {
  return (
    <>
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <MobileNav />
        <div className="page-header">
          <div className="container">
            <h1>Terms of Service</h1>
            <p>Last updated: March 2026</p>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the {BRAND.name} platform (mobile app, web app,
            or website), you agree to be bound by these Terms of Service. If you
            do not agree, please do not use our services.
          </p>

          <h2>2. Platform Description</h2>
          <p>
            {BRAND.name} is a mystery shopping and customer experience intelligence
            platform that connects businesses with citizen evaluators
            (&ldquo;JABBers&rdquo;). JABBers complete evaluation missions and
            receive compensation; businesses receive anonymized CX reports.
          </p>

          <h2>3. JABBer Responsibilities</h2>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>Provide accurate, honest evaluations based on real experiences</li>
            <li>Never reveal your identity as an evaluator during a mission</li>
            <li>Submit GPS-verified evidence as required by each mission</li>
            <li>Maintain confidentiality of mission details and business data</li>
          </ul>

          <h2>4. Business Partner Responsibilities</h2>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>Use evaluation data only for internal quality improvement</li>
            <li>Never attempt to identify individual JABBers</li>
            <li>Maintain active subscription and timely payment</li>
          </ul>

          <h2>5. Payment Terms</h2>
          <p>
            JABBer compensation is credited to your in-app wallet upon mission
            validation. Withdrawal is available via bank transfer or mobile
            payment. {BRAND.name} reserves the right to withhold payment for
            fraudulent or low-quality submissions.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, branding, and technology on the {BRAND.name} platform
            are owned by {BRAND.name}. You may not copy, modify, or distribute
            any part of our platform without written permission.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            {BRAND.name} provides the platform &ldquo;as is&rdquo; without
            warranties of any kind. We are not liable for decisions made by
            businesses based on evaluation data, nor for any indirect damages
            arising from platform use.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${BRAND.email}`} style={{ color: "var(--color-primary)" }}>
              {BRAND.email}
            </a>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
