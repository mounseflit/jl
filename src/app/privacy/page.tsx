import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Privacy Policy — JABB",
  description: "Learn how JABB collects, uses, and protects your personal data.",
});

export default function PrivacyPage() {
  return (
    <>
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <MobileNav />
        <div className="page-header">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>Last updated: March 2026</p>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2>1. Information We Collect</h2>
          <p>
            When you use {BRAND.name}, we collect information you provide directly
            (name, email, phone number, location data during missions) and
            information collected automatically (device type, app usage data,
            IP address).
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>Provide and improve our mystery shopping platform</li>
            <li>Verify GPS-locked mission completions</li>
            <li>Process payments and rewards for JABBers</li>
            <li>Generate anonymized CX reports for business partners</li>
            <li>Communicate important updates about your account</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>
            We never sell your personal data. Business partners receive
            anonymized evaluation reports — your identity as a JABBer is always
            protected. We may share data with service providers who help us
            operate the platform (payment processors, cloud hosting).
          </p>

          <h2>4. GPS and Location Data</h2>
          <p>
            Location data is collected only during active missions to verify
            your presence at evaluation locations. You can disable location
            services at any time, though this will prevent mission completion.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We use industry-standard encryption (TLS 1.3) for data in transit
            and AES-256 for data at rest. Access to personal data is restricted
            to authorized personnel on a need-to-know basis.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data
            at any time. Contact us at {BRAND.email} to exercise these rights.
          </p>

          <h2>7. Contact</h2>
          <p>
            For privacy-related inquiries, contact our Data Protection Officer
            at <a href={`mailto:${BRAND.email}`} style={{ color: "var(--color-primary)" }}>{BRAND.email}</a>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
