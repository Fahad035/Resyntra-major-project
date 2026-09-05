import Workspace from "@/pages/platform/Workspace";
import AISummarizer from "@/pages/platform/AISummarizer";
import ChatWithPapers from "@/pages/platform/ChatWithPapers";
import SemanticSearch from "@/pages/platform/SemanticSearch";
import KnowledgeGraph from "@/pages/platform/KnowledgeGraph";
import Analytics from "@/pages/platform/Analytics";

const platformRoutes = [
  {
    path: "workspace",
    element: <Workspace />,
  },
  {
    path: "ai-summarizer",
    element: <AISummarizer />,
  },
  {
    path: "chat-with-papers",
    element: <ChatWithPapers />,
  },
  {
    path: "semantic-search",
    element: <SemanticSearch />,
  },
  {
    path: "knowledge-graph",
    element: <KnowledgeGraph />,
  },
  {
    path: "analytics",
    element: <Analytics />,
  },
];

export default platformRoutes;