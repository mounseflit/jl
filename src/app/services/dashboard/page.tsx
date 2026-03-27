import { buildMetadata } from "@/lib/seo";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = buildMetadata({
  title: "Business Dashboard — JABB",
  description:
    "Track KPIs, monitor trends, and visualize performance data in real time. One dashboard for all your CX intelligence needs.",
});

export default function DashboardPage() {
  return (
    <ServicePageLayout
      title="Business Dashboard"
      subtitle="Track KPIs, monitor trends, and visualize performance data in real time."
      description="The JABB Business Dashboard is your single pane of glass for all customer experience data. See scores across locations, track trends over time, compare branches, and drill into individual evaluations — all in real time. The dashboard is designed for operators who need actionable data at a glance, with drill-down capabilities for those who want to go deeper. Available on web and mobile, your CX intelligence is always at your fingertips."
      gradient="linear-gradient(135deg, #38B2AC 0%, #4942F8 100%)"
      heroIcon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      }
      image="/images/screen-new-5.jpg"
      features={[
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" /></svg>,
          title: "Real-Time Analytics",
          desc: "See evaluation scores, trends, and alerts as they happen. No more waiting for monthly reports to spot issues.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
          title: "Multi-Location View",
          desc: "Compare performance across all your locations on a single screen with heat maps and ranking tables.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" /><polyline points="14 2 14 8 20 8" /><path d="m3 15 2 2 4-4" /></svg>,
          title: "Export & Share",
          desc: "Download reports as PDF or Excel, schedule automated email summaries, and share dashboards with your team.",
        },
      ]}
      steps={[
        { title: "Connect Your Account", desc: "Sign up for a JABB Business account and your dashboard is ready instantly. No setup or integration required." },
        { title: "Customize Your View", desc: "Choose which metrics matter most to you and arrange widgets to create your personalized command center." },
        { title: "Monitor in Real Time", desc: "As evaluations come in, your dashboard updates live with scores, photos, and trend analysis." },
        { title: "Act on Insights", desc: "Use drill-down views to identify specific issues, then track improvement over time with before/after comparisons." },
      ]}
      ctaText="View Dashboard"
      ctaHref="https://app.jabb.pro/"
    />
  );
}
