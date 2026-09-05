import PageLayout from "@/layouts/PageLayout";

import {
  WorkspaceHero,
  WorkspacePreview,
  FeatureSection,
  WorkflowTimeline,
  CollaborationSection,
  WorkspaceCTA,
} from "@/components/workspace";

const Workspace = () => {
  return (
    <PageLayout>
      <WorkspaceHero />

      <WorkspacePreview />

      <FeatureSection />

      <WorkflowTimeline />

      <CollaborationSection />

      <WorkspaceCTA />
    </PageLayout>
  );
};

export default Workspace;