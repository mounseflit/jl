import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeContent />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
