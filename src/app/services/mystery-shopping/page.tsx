import { buildMetadata } from "@/lib/seo";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = buildMetadata({
  title: "Mystery Shopping — JABB",
  description:
    "Deploy citizen shoppers to evaluate real customer experiences across your locations. GPS-verified, unbiased, and actionable insights delivered fast.",
});

function SearchIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      <path d="M11 8a3 3 0 0 0-3 3" />
    </svg>
  );
}

export default function MysteryShoppingPage() {
  return (
    <ServicePageLayout
      title="Mystery Shopping"
      subtitle="Deploy citizen shoppers to evaluate real customer experiences across your locations."
      description="JABB's mystery shopping service connects businesses with everyday citizens who visit your locations incognito. Each evaluation follows a structured checklist, is GPS-verified to confirm presence, and produces timestamped evidence. You get unfiltered, honest insights about what your customers actually experience — from first impression to checkout. Unlike traditional mystery shopping firms that charge premium rates, JABB makes CX intelligence affordable and scalable for businesses of every size."
      gradient="linear-gradient(135deg, #4942F8 0%, #6C66FF 100%)"
      heroIcon={<SearchIcon size={32} />}
      image="/images/screen-missions.jpg"
      features={[
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
          title: "GPS-Verified Visits",
          desc: "Every evaluation is geotagged within 50 meters of your location, ensuring the shopper was physically present.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></svg>,
          title: "Structured Checklists",
          desc: "Custom evaluation forms tailored to your brand standards, covering service, cleanliness, speed, and more.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /></svg>,
          title: "Photo Evidence",
          desc: "Shoppers capture timestamped photos as proof, giving you visual documentation of every visit.",
        },
      ]}
      steps={[
        { title: "Define Your Criteria", desc: "Work with our team to create a custom evaluation checklist that reflects your brand standards and priorities." },
        { title: "JABBers Visit Your Location", desc: "Verified citizen shoppers visit your business incognito, following the checklist as a normal customer would." },
        { title: "GPS-Verified Submission", desc: "Each evaluation is submitted with GPS coordinates, timestamps, and photo evidence for full verification." },
        { title: "Receive Your Report", desc: "Get detailed reports with scores, trends, and actionable recommendations within 24 hours of each visit." },
      ]}
      audiences={[
        { label: "Restaurants", desc: "Monitor food quality, service speed, staff friendliness, and hygiene across all your locations." },
        { label: "Retail", desc: "Evaluate store presentation, staff knowledge, checkout experience, and product availability." },
        { label: "Services", desc: "Assess customer handling, wait times, professionalism, and overall satisfaction at service centers." },
      ]}
      ctaText="Start Evaluating"
      ctaHref="/go"
    />
  );
}
