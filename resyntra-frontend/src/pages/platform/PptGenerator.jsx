import PageLayout from "@/layouts/PageLayout";

import {
  PPTGeneratorHero,
  PaperSelector,
  PresentationBuilder,
  PPTCapabilities,
  GenerationWorkflow,
} from "@/components/ppt-generator";

const PptGenerator = () => {
  return (
    <PageLayout>
      <PPTGeneratorHero />
      <PaperSelector />
      <PresentationBuilder />
      <PPTCapabilities />
      <GenerationWorkflow />
    
    </PageLayout>
  );
};

export default PptGenerator;