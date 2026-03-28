import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import OrbitVisual from "@/components/OrbitVisual";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeContent />
        <OrbitVisual />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
