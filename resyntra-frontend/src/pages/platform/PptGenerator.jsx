import { useState } from "react";
import PageLayout from "@/layouts/PageLayout";

import {
  PPTGeneratorHero,
  PaperSelector,
  PresentationBuilder,
  ResearchToPresentation,
  AcademicUseCases,
} from "@/components/ppt-generator";

const PptGenerator = () => {
  const [selectedPaper, setSelectedPaper] = useState(null);

  return (
    <PageLayout>
      <PPTGeneratorHero />

      <PaperSelector
        selectedPaper={selectedPaper}
        setSelectedPaper={setSelectedPaper}
      />

      <PresentationBuilder selectedPaper={selectedPaper} />

      <ResearchToPresentation />

      <AcademicUseCases />
    </PageLayout>
  );
};

export default PptGenerator;