import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FounderBar from "@/components/FounderBar";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip bg-foam">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <FounderBar />
        <Features />
        <Process />
        <Showcase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
