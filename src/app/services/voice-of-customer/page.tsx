import { buildMetadata } from "@/lib/seo";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = buildMetadata({
  title: "Voice of Customer — JABB",
  description:
    "Capture authentic customer feedback through surveys, interviews, and sentiment analysis. Understand what your customers truly think.",
});

export default function VoiceOfCustomerPage() {
  return (
    <ServicePageLayout
      title="Voice of Customer"
      subtitle="Capture authentic customer feedback through surveys, interviews, and sentiment analysis."
      description="Traditional feedback methods give you a skewed picture — only the most satisfied or most frustrated customers leave reviews. JABB's Voice of Customer program captures the silent majority. We deploy structured feedback collection through in-person interviews, post-visit surveys, and sentiment analysis across your digital channels. The result is a complete, unbiased picture of how your customers feel about every aspect of your business, giving you the clarity to make informed decisions."
      gradient="linear-gradient(135deg, #4942F8 0%, #38B2AC 100%)"
      heroIcon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      }
      features={[
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
          title: "In-Person Interviews",
          desc: "Trained JABBers conduct brief, structured interviews with real customers on-site for genuine, in-the-moment feedback.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
          title: "Post-Visit Surveys",
          desc: "Targeted surveys delivered after customer interactions capture detailed feedback while the experience is still fresh.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>,
          title: "Sentiment Analysis",
          desc: "AI-powered analysis of online reviews, social mentions, and survey responses to quantify customer sentiment trends.",
        },
      ]}
      steps={[
        { title: "Define Feedback Goals", desc: "Identify what you want to learn — service quality, product satisfaction, brand perception, or competitive positioning." },
        { title: "Deploy Collection Methods", desc: "We activate the right mix of interviews, surveys, and digital monitoring based on your customer touchpoints." },
        { title: "Aggregate & Analyze", desc: "All feedback is compiled, categorized, and analyzed for patterns, themes, and sentiment trends." },
        { title: "Insights Report", desc: "Receive a clear report with customer sentiment scores, verbatim highlights, and strategic recommendations." },
      ]}
      audiences={[
        { label: "Product Teams", desc: "Understand what customers love and hate about your offerings to guide product development priorities." },
        { label: "Customer Support", desc: "Identify recurring pain points and training opportunities to improve resolution rates and satisfaction." },
        { label: "Brand & Marketing", desc: "Discover how customers describe your brand in their own words to refine messaging and positioning." },
      ]}
      ctaText="Capture Feedback"
      ctaHref="/partner"
    />
  );
}
