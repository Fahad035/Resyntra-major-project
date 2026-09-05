import PageLayout from "@/layouts/PageLayout";

import {
  SummarizerHero,
  SummaryDemo,
  SummaryModes,
  QualitySection,
  SummarizerCTA,
} from "@/components/summarizer";

const AISummarizer = () => {
  return (
    <PageLayout>
      <SummarizerHero />

      <SummaryDemo />

      <SummaryModes />

      <QualitySection />

      <SummarizerCTA />
    </PageLayout>
  );
};

export default AISummarizer;