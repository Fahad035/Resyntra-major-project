import PageLayout from "@/layouts/PageLayout";

import {
  WorkspaceHero,
  WorkspacePreview,
} from "@/components/workspace";

const Workspace = () => {
  return (
    <PageLayout>
      <WorkspaceHero />

      <WorkspacePreview />
    </PageLayout>
  );
};

export default Workspace;