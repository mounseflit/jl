import { buildMetadata } from "@/lib/seo";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = buildMetadata({
  title: "Reward System — JABB",
  description:
    "Motivate your JABBers with a gamified reward system. Earn points, unlock badges, and cash out for completing quality evaluations.",
});

export default function RewardsPage() {
  return (
    <ServicePageLayout
      title="Reward System"
      subtitle="Earn points, unlock badges, and cash out for completing quality evaluations."
      description="JABB's reward system is designed to keep evaluators motivated and ensure consistently high-quality submissions. Every completed mission earns you JABB coins that can be converted to real money. But it goes beyond simple payments — our gamified system includes tiered ranks (Standard, Pro, Elite), achievement badges, streak bonuses, and referral rewards. The more missions you complete and the higher your quality scores, the more you earn. Top JABBers unlock premium missions with higher payouts."
      gradient="linear-gradient(135deg, #4942F8 0%, #667eea 100%)"
      heroIcon={
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      }
      features={[
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>,
          title: "Instant Cashout",
          desc: "Withdraw earnings anytime via bank transfer or mobile payment. No minimum threshold, no waiting periods.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
          title: "Tiered Ranks",
          desc: "Progress from Standard to Pro to Elite as you complete more missions. Higher tiers unlock premium opportunities.",
        },
        {
          icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>,
          title: "Referral Bonuses",
          desc: "Invite friends to join JABB and earn bonus coins for every referred JABBer who completes their first mission.",
        },
      ]}
      steps={[
        { title: "Complete Missions", desc: "Each validated mission earns JABB coins based on difficulty, distance, and your quality score." },
        { title: "Level Up", desc: "Accumulate coins and maintain high quality scores to progress through Standard, Pro, and Elite tiers." },
        { title: "Unlock Bonuses", desc: "Hit streak milestones, earn achievement badges, and unlock premium high-payout missions." },
        { title: "Cash Out", desc: "Convert JABB coins to real money and withdraw via bank transfer or mobile payment instantly." },
      ]}
      audiences={[
        { label: "Students", desc: "Earn extra income between classes with flexible missions that fit around your university schedule." },
        { label: "Freelancers", desc: "Add a reliable income stream alongside your freelance work — missions take 15-30 minutes each." },
        { label: "Detail-Oriented People", desc: "If you notice the small things others miss, your observation skills are exactly what businesses need." },
      ]}
      ctaText="Earn Rewards"
      ctaHref="/go"
    />
  );
}
