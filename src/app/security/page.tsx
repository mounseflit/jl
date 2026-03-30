import { buildMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Security — JABB",
  description:
    "Learn how JABB protects your data with encryption, secure infrastructure, and compliance with App Store and Google Play data safety requirements.",
});

export default function SecurityPage() {
  return (
    <>
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <MobileNav />
        <div className="page-header">
          <div className="container">
            <h1>Security</h1>
            <p>How we protect your data and maintain trust</p>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="container" style={{ maxWidth: 800 }}>
          {/* ── App Store & Play Store Data Safety ── */}
          <h2>1. Data Collection &amp; Usage</h2>
          <p>
            In compliance with Apple App Store and Google Play Store data safety
            requirements, here is a transparent summary of the data {BRAND.name}{" "}
            collects and how it is used.
          </p>

          <h3 style={{ marginTop: "1.5rem", fontSize: "1.15rem", fontWeight: 600 }}>
            Data we collect
          </h3>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>Account information</strong> — name, email address, and
              phone number provided during registration.
            </li>
            <li>
              <strong>Location data</strong> — GPS coordinates collected only
              during active missions to verify on-site presence (Golden Proof
              Protocol).
            </li>
            <li>
              <strong>User-generated content</strong> — reviews, audio notes,
              photos, and survey responses you submit.
            </li>
            <li>
              <strong>Device information</strong> — device model, OS version,
              and app version for compatibility and diagnostics.
            </li>
            <li>
              <strong>Usage analytics</strong> — anonymized interaction patterns
              to improve the app experience.
            </li>
          </ul>

          <h3 style={{ marginTop: "1.5rem", fontSize: "1.15rem", fontWeight: 600 }}>
            How we use your data
          </h3>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>Verify mission completions with GPS-locked proof</li>
            <li>Generate anonymized CX reports for business partners</li>
            <li>Process JABB Coin rewards and wallet transactions</li>
            <li>Send account notifications and mission updates</li>
            <li>Improve app performance and user experience</li>
          </ul>

          <h3 style={{ marginTop: "1.5rem", fontSize: "1.15rem", fontWeight: 600 }}>
            Data we do NOT collect
          </h3>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>Financial information (credit cards, bank accounts)</li>
            <li>Health or fitness data</li>
            <li>Contact lists or address books</li>
            <li>Browsing history outside the app</li>
            <li>Background location tracking when not on a mission</li>
          </ul>

          {/* ── Data Sharing ── */}
          <h2>2. Data Sharing &amp; Third Parties</h2>
          <p>
            {BRAND.name} never sells your personal data. Business partners only
            receive anonymized, structured evaluation reports — your identity as
            a JABBer is always protected.
          </p>
          <p>We share limited data only with:</p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>Cloud infrastructure providers</strong> — for secure
              hosting and storage (encrypted at rest and in transit).
            </li>
            <li>
              <strong>Payment processors</strong> — for processing reward
              redemptions (minimal data shared under PCI-DSS compliance).
            </li>
            <li>
              <strong>Analytics services</strong> — anonymized usage data only,
              with no personal identifiers.
            </li>
          </ul>
          <p>
            We do not share data with advertising networks or data brokers.
          </p>

          {/* ── Encryption & Infrastructure ── */}
          <h2>3. Encryption &amp; Infrastructure Security</h2>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>In transit</strong> — all communications encrypted with
              TLS 1.3. Certificate pinning enforced on mobile clients.
            </li>
            <li>
              <strong>At rest</strong> — all stored data encrypted with AES-256.
              Database backups are encrypted and access-controlled.
            </li>
            <li>
              <strong>Authentication</strong> — secure token-based
              authentication with automatic session expiry and refresh rotation.
            </li>
            <li>
              <strong>Infrastructure</strong> — hosted on enterprise-grade cloud
              infrastructure with firewall protection, DDoS mitigation, and
              regular security patching.
            </li>
          </ul>

          {/* ── Golden Proof Protocol ── */}
          <h2>4. Golden Proof Protocol</h2>
          <p>
            Every mission and review submitted through {BRAND.name} is verified
            by our Golden Proof Protocol, which ensures data integrity through:
          </p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>GPS verification</strong> — confirms physical presence at
              the evaluated location.
            </li>
            <li>
              <strong>Timestamp validation</strong> — records exact time of
              review submission.
            </li>
            <li>
              <strong>Photo evidence</strong> — optional photo proof with EXIF
              metadata verification.
            </li>
            <li>
              <strong>Device fingerprinting</strong> — prevents duplicate or
              fraudulent submissions.
            </li>
          </ul>

          {/* ── Data Retention & Deletion ── */}
          <h2>5. Data Retention &amp; Deletion</h2>
          <p>
            We retain your personal data only for as long as your account is
            active and as needed to provide our services. Specifically:
          </p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>Account data</strong> — retained while your account is
              active. Deleted within 30 days of account deletion request.
            </li>
            <li>
              <strong>Mission data</strong> — anonymized and retained for
              reporting purposes after account deletion. Personal identifiers
              are removed.
            </li>
            <li>
              <strong>Location data</strong> — purged within 90 days of mission
              completion. Not retained beyond verification needs.
            </li>
            <li>
              <strong>Usage analytics</strong> — anonymized data may be retained
              indefinitely for product improvement.
            </li>
          </ul>
          <p>
            You can request full deletion of your data at any time by contacting{" "}
            <a
              href={`mailto:${BRAND.email}`}
              style={{ color: "var(--color-primary)" }}
            >
              {BRAND.email}
            </a>{" "}
            or through the app&apos;s Settings &gt; Privacy &gt; Delete Account.
          </p>

          {/* ── User Rights ── */}
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>Access</strong> — request a copy of all data we hold about
              you.
            </li>
            <li>
              <strong>Correction</strong> — update or correct inaccurate
              personal information.
            </li>
            <li>
              <strong>Deletion</strong> — request permanent deletion of your
              account and associated data.
            </li>
            <li>
              <strong>Portability</strong> — receive your data in a
              machine-readable format.
            </li>
            <li>
              <strong>Opt-out</strong> — disable optional data collection
              (analytics, location) at any time through app settings.
            </li>
          </ul>

          {/* ── App Permissions ── */}
          <h2>7. App Permissions</h2>
          <p>
            {BRAND.name} requests only the permissions necessary for core
            functionality:
          </p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              <strong>Location (when in use)</strong> — required for GPS
              verification during missions. Never tracked in the background.
            </li>
            <li>
              <strong>Camera</strong> — optional, for photo evidence during
              reviews and missions.
            </li>
            <li>
              <strong>Microphone</strong> — optional, for audio review
              recordings.
            </li>
            <li>
              <strong>Notifications</strong> — optional, for mission alerts and
              reward updates.
            </li>
            <li>
              <strong>Internet</strong> — required for syncing reviews and
              accessing the platform.
            </li>
          </ul>
          <p>
            All optional permissions can be revoked at any time through your
            device settings without affecting core app functionality.
          </p>

          {/* ── Children's Privacy ── */}
          <h2>8. Children&apos;s Privacy</h2>
          <p>
            {BRAND.name} is not intended for children under 16. We do not
            knowingly collect personal information from children. If we learn
            that we have collected data from a child under 16, we will promptly
            delete it. Parents or guardians who believe their child has provided
            us with personal data can contact us at{" "}
            <a
              href={`mailto:${BRAND.email}`}
              style={{ color: "var(--color-primary)" }}
            >
              {BRAND.email}
            </a>
            .
          </p>

          {/* ── Vulnerability Reporting ── */}
          <h2>9. Security Vulnerability Reporting</h2>
          <p>
            We take security seriously. If you discover a vulnerability in our
            platform, please report it responsibly:
          </p>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>
              Email{" "}
              <a
                href={`mailto:${BRAND.email}`}
                style={{ color: "var(--color-primary)" }}
              >
                {BRAND.email}
              </a>{" "}
              with the subject line &quot;Security Vulnerability Report&quot;.
            </li>
            <li>
              Include a detailed description of the vulnerability and steps to
              reproduce.
            </li>
            <li>
              Allow us reasonable time to investigate and patch before public
              disclosure.
            </li>
          </ul>

          {/* ── Contact ── */}
          <h2>10. Contact</h2>
          <p>
            For security-related questions or concerns, contact our team at{" "}
            <a
              href={`mailto:${BRAND.email}`}
              style={{ color: "var(--color-primary)" }}
            >
              {BRAND.email}
            </a>
            .
          </p>
          <p style={{ marginTop: "2rem", color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
            Last updated: March 2026
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
