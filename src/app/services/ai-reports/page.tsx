import { buildMetadata } from "@/lib/seo";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = buildMetadata({
  title: "AI Reports — JABB",
  description:
    "Leverage artificial intelligence to transform raw field data into strategic recommendations. Faster analysis, smarter decisions.",
});

export default function AiReportsPage() {
  return (
    <ServicePageLayout
      title="AI Reports"
      subtitle="Leverage artificial intelligence to transform raw field data into strategic recommendations."
      description="Raw data is only useful if you can extract meaning from it. JABB's AI engine processes thousands of evaluation data points — scores, comments, photos, trends — and distills them into clear, actionable reports. Instead of spending hours reading through individual evaluations, you get an instant executive summary with the patterns that matter most: recurring issues, improvement trajectories, staff performance outliers, and competitive blind spots. Our AI doesn't just summarize — it recommends."
      gradient="linear-gradient(135deg, #9F7AEA 0%, #4942F8 100%)"
      heroIcon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        </svg>
      }
      image="/images/screen-ai-report.jpg"
      features={[
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg>,
          title: "Pattern Detection",
          desc: "AI identifies recurring themes across hundreds of evaluations that humans would miss — like a slow decline in greeting scores at specific hours.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
          title: "Predictive Insights",
          desc: "Based on trend data, the AI flags potential issues before they become critical, giving you time to act proactively.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /></svg>,
          title: "Executive Summaries",
          desc: "One-page summaries designed for leadership — key findings, scores, and recommended actions, ready to present.",
        },
      ]}
      steps={[
        { title: "Data Collection", desc: "As evaluations are submitted, all data flows into the AI engine automatically — no manual input needed." },
        { title: "AI Processing", desc: "The engine analyzes scores, text comments, photo evidence, and historical trends to find meaningful patterns." },
        { title: "Report Generation", desc: "Within minutes, a comprehensive report is generated with findings organized by severity and impact." },
        { title: "Strategic Recommendations", desc: "Each report concludes with prioritized, actionable recommendations tied to specific data points." },
      ]}
      audiences={[
        { label: "Executives", desc: "Get boardroom-ready summaries that translate field data into strategic decisions and investment priorities." },
        { label: "Operations Managers", desc: "Receive specific, location-level recommendations for staff training, process changes, and service improvements." },
        { label: "Marketing Teams", desc: "Understand customer sentiment trends to time campaigns, adjust messaging, and highlight genuine strengths." },
      ]}
      ctaText="Generate Report"
      ctaHref="/partner"
    />
  );
}
