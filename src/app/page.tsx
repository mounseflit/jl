import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import WhatYouGet from "@/components/WhatYouGet";
import OrbitVisual from "@/components/OrbitVisual";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeContent />
        <WhatYouGet />
        <OrbitVisual />
        <Partners />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
