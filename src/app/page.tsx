import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import WhatYouGet from "@/components/WhatYouGet";
import OrbitVisual from "@/components/OrbitVisual";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeContent />
        <CTABanner />
        <WhatYouGet />
        <OrbitVisual />
        <Partners />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
