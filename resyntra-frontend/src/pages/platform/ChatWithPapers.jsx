import PageLayout from "@/layouts/PageLayout";

import {
  ChatHero,
  ResearchWorkspace,
  ResearchCapabilities,
  CitationExplorer,
  ResearchComparison,
  ChatCTA,
} from "@/components/chat";

const ChatWithPapers = () => {
  return (
    <PageLayout>
      <ChatHero />

      <ResearchWorkspace />

      <ResearchCapabilities />

      <CitationExplorer />

      <ResearchComparison />

      <ChatCTA />
    </PageLayout>
  );
};

export default ChatWithPapers;