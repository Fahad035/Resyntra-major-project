import PageLayout from "@/layouts/PageLayout";

import {
  ResearchHero,
  ResearchPipeline,
  LiteratureDiscovery,
  ResearchWorkspace,
  KnowledgeGraphSection,
  GapDetection,
  PublicationTimeline,
  ResearchCollaboration,
  ResearchCTA,
} from "@/components/researchers";

const Researchers = () => {
  return (
    <PageLayout>

      <ResearchHero />

      <ResearchPipeline />

      <LiteratureDiscovery />

      <ResearchWorkspace />

      <KnowledgeGraphSection />

      <GapDetection />

      <PublicationTimeline />

      <ResearchCollaboration />

      <ResearchCTA />

    </PageLayout>
  );
};

export default Researchers;