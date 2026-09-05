import PageLayout from "@/layouts/PageLayout";

import {
  KnowledgeHero,
  InteractiveGraph,
  NodeInspector,
  GraphTimeline,
  GraphCapabilities,
} from "@/components/graph";

const KnowledgeGraph = () => {
  return (
    <PageLayout>
      <KnowledgeHero />
      <InteractiveGraph />
      <NodeInspector />
      <GraphTimeline />
      <GraphCapabilities />
    </PageLayout>
  );
};

export default KnowledgeGraph;