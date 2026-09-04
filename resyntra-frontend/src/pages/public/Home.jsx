import Hero from "@/components/hero/Hero";
import LiveDemo from "@/components/liveDemo";
import ResearchStory from "@/components/researchStory";
import Workflow from "@/components/workflow";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";

const Home = () => {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />

      <LiveDemo />

      <ResearchStory />

      <Workflow />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />
    </main>
  );
};

export default Home;