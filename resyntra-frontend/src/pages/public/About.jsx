import { Container } from "@/components/ui";

import AboutHero from "@/components/about/AboutHero";
import StatsSection from "@/components/about/StatsSection";
import MissionSection from "@/components/about/MissionSection";
import PipelineSection from "@/components/about/PipelineSection";
import CapabilitiesSection from "@/components/about/CapabilitiesSection";
import EvaluationSection from "@/components/about/EvaluationSection";
import TechStackSection from "@/components/about/TechStackSection";
import ValuesGrid from "@/components/about/ValuesGrid";
import TeamSection from "@/components/about/TeamSection";

import CTA from "@/components/cta";

const sections = [
  MissionSection,
  CapabilitiesSection,
  PipelineSection,
  EvaluationSection,
  TechStackSection,
  ValuesGrid,
  TeamSection,
];

const About = () => {
  return (
    <main className="bg-surface text-foreground">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <Container className="relative">
          <AboutHero />
        </Container>
      </section>

      <Container>
        <StatsSection />
      </Container>

      {sections.map((Section, i) => (
        <section key={i} className="py-20 sm:py-24">
          <Container>
            <Section />
          </Container>
        </section>
      ))}

      <CTA />
    </main>
  );
};

export default About;