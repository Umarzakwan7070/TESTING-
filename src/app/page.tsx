import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import PainPoints from "@/components/PainPoints";
import ResearchStats from "@/components/ResearchStats";
import AlwaysAvailable from "@/components/AlwaysAvailable";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Process from "@/components/Process";
import FounderBar from "@/components/FounderBar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip bg-foam">
      <Nav />
      <main id="main-content" className="flex flex-1 flex-col">
        <Hero />
        <ProofStrip />
        <PainPoints />
        <ResearchStats
          heading="The gap between businesses with a real online presence — and businesses without one"
          intro="Your customers don't always contact you first. Many look you up, compare their options and form an impression before you ever know they were there."
          includeLocal
        />
        <AlwaysAvailable />
        <Showcase />
        <Features />
        <Process />
        <FounderBar />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
