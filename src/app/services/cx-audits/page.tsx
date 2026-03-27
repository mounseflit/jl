import { buildMetadata } from "@/lib/seo";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = buildMetadata({
  title: "CX Audits — JABB",
  description:
    "Comprehensive audits of your customer journey, from first impression to final checkout. Identify gaps and improve satisfaction scores.",
});

export default function CxAuditsPage() {
  return (
    <ServicePageLayout
      title="CX Audits"
      subtitle="Comprehensive audits of your customer journey, from first impression to final checkout."
      description="A JABB CX Audit goes beyond a single mystery shopping visit. It provides a 360-degree evaluation of your entire customer journey — from the moment a customer discovers your business online, to their in-store experience, post-purchase follow-up, and everything in between. Our trained evaluators assess every touchpoint using industry-standard frameworks, identifying friction points, missed opportunities, and areas where competitors outperform you. The result is a detailed roadmap for improvement with prioritized action items."
      gradient="linear-gradient(135deg, #6C66FF 0%, #9F7AEA 100%)"
      heroIcon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      }
      image="/images/screen-new-4.jpg"
      features={[
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
          title: "Full Journey Mapping",
          desc: "We map every touchpoint from discovery to post-purchase, identifying where customers drop off or disengage.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" /></svg>,
          title: "Benchmark Scoring",
          desc: "Your CX performance scored against industry benchmarks so you know exactly where you stand versus competitors.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>,
          title: "Actionable Recommendations",
          desc: "Prioritized improvement roadmap with quick wins and long-term strategies, ranked by impact and effort.",
        },
      ]}
      steps={[
        { title: "Scope Definition", desc: "We work with you to define which touchpoints, locations, and channels to audit based on your priorities." },
        { title: "Multi-Channel Evaluation", desc: "Evaluators assess your physical locations, website, app, phone support, and social media presence." },
        { title: "Data Analysis", desc: "Our team compiles findings, benchmarks your scores, and identifies patterns across all touchpoints." },
        { title: "Delivery & Action Plan", desc: "You receive a comprehensive report with prioritized recommendations and a timeline for implementation." },
      ]}
      audiences={[
        { label: "CFO / Finance", desc: "Understand the ROI of CX improvements with data-backed projections tied to revenue impact." },
        { label: "Ops / COO", desc: "Get a clear operational roadmap for staff training, process optimization, and service standard enforcement." },
        { label: "Marketing / CX", desc: "Identify brand perception gaps and leverage CX wins in your marketing and retention strategies." },
      ]}
      ctaText="Request an Audit"
      ctaHref="/partner"
    />
  );
}
