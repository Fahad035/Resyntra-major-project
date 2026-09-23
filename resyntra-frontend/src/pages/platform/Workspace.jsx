import PageLayout from "@/layouts/PageLayout";

import {
  WorkspaceHero,
  FeatureSection,
  WorkspaceCTA,
} from "@/components/workspace";

const Workspace = () => {
  return (
    <PageLayout>
      <WorkspaceHero />

      <FeatureSection />

      <WorkspaceCTA />
    </PageLayout>
  );
};

export default Workspace;