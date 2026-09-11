import PageLayout from "@/layouts/PageLayout";

import {
  WorkspaceHero,
  FeatureSection,
  WorkflowTimeline,
  CollaborationSection,
  WorkspaceCTA,
} from "@/components/workspace";

const Workspace = () => {
  return (
    <PageLayout>
      <WorkspaceHero />

      <FeatureSection />

      <WorkflowTimeline />

      <CollaborationSection />

      <WorkspaceCTA />
    </PageLayout>
  );
};

export default Workspace;