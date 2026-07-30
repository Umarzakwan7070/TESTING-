import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip bg-background">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <StatsBar />
        <Features />
        <Process />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
