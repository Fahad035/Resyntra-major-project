import PageLayout from "@/layouts/PageLayout";

import {
  ChatHero,
  ChatDemo,
  ChatFeatures,
  CitationSection,
  ChatCTA,
} from "@/components/chat";

const ChatWithPapers = () => {
  return (
    <PageLayout>
      <ChatHero />

      <ChatDemo />

      <ChatFeatures />

      <CitationSection />

      <ChatCTA />
    </PageLayout>
  );
};

export default ChatWithPapers;