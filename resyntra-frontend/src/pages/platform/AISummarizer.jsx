import PageLayout from "@/layouts/PageLayout";

import {
  SummarizerHero,
  SummaryDemo,
  ResearchGapFinder,
  SummaryModes,
  QualitySection,
  SummarizerCTA,
} from "@/components/summarizer";

const AISummarizer = () => {
  return (
    <PageLayout>
      <SummarizerHero />

      <SummaryDemo />

      <ResearchGapFinder />

      <SummaryModes />

      <QualitySection />

      <SummarizerCTA />
    </PageLayout>
  );
};

export default AISummarizer;