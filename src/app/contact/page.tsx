import { buildMetadata } from "@/lib/seo";
import { BRAND, LINKS } from "@/lib/constants";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
  title: "Contact JABB — Get in Touch",
  description:
    "Have questions about JABB? Contact our team for support, partnership inquiries, or press requests.",
});

export default function ContactPage() {
  return (
    <>
      <div className="hero-section" style={{ minHeight: "auto" }}>
        <MobileNav />
        <div className="page-header">
          <div className="container">
            <h1>Contact Us</h1>
            <p>
              Have questions, feedback, or want to partner with us?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="grid-2 grid-1-md gap-8">
            {/* Contact info */}
            <div>
              <h2>Get in Touch</h2>
              <p>
                Whether you&apos;re a business looking for CX intelligence
                or a potential JABBer with questions, we&apos;re here to help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
                <div>
                  <strong style={{ display: "block", marginBottom: "0.25rem", color: "var(--color-text)" }}>
                    Email
                  </strong>
                  <a href={`mailto:${BRAND.email}`} style={{ color: "var(--color-primary)", textDecoration: "none" }}>
                    {BRAND.email}
                  </a>
                </div>
                <div>
                  <strong style={{ display: "block", marginBottom: "0.25rem", color: "var(--color-text)" }}>
                    Location
                  </strong>
                  <span style={{ color: "var(--color-text-light)" }}>Casablanca, Morocco</span>
                </div>
                <div>
                  <strong style={{ display: "block", marginBottom: "0.25rem", color: "var(--color-text)" }}>
                    Social
                  </strong>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)", textDecoration: "none" }}>LinkedIn</a>
                    <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Instagram</a>
                    <a href={LINKS.x} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)", textDecoration: "none" }}>X</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div>
              <h2>Quick Links</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                <a href="/partner" className="button" style={{ justifyContent: "flex-start" }}>
                  Become a Business Partner →
                </a>
                <a href="/go" className="button" style={{ justifyContent: "flex-start", background: "var(--color-primary-bg)", color: "var(--color-primary)" }}>
                  Download the App →
                </a>
                <a href="#section-faqs" className="button" style={{ justifyContent: "flex-start", background: "transparent", color: "var(--color-text)", border: "1px solid var(--color-border)" }}>
                  Read the FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
