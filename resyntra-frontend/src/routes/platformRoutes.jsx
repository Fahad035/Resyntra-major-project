// src/routes/platformRoutes.js
import Workspace from "@/pages/platform/Workspace";
import AISummarizer from "@/pages/platform/AISummarizer";
import ChatWithPapers from "@/pages/platform/ChatWithPapers";
import SemanticSearch from "@/pages/platform/SemanticSearch";
import KnowledgeGraph from "@/pages/platform/KnowledgeGraph";
import Analytics from "@/pages/platform/Analytics";
import { Outlet } from "react-router-dom"; // Import Outlet

const platformRoutes = [
  {
    path: "platform", //  This groups everything under /platform/...
    element: <Outlet />, // Acts as a passthrough placeholder for your layout container
    children: [
      {
        path: "workspace", // Resolves to /platform/workspace
        element: <Workspace />,
      },
      {
        path: "ai-summarizer", // Resolves to /platform/ai-summarizer
        element: <AISummarizer />,
      },
      {
        path: "chat-with-papers", // Resolves to /platform/chat-with-papers
        element: <ChatWithPapers />,
      },
      {
        path: "semantic-search", // Resolves to /platform/semantic-search
        element: <SemanticSearch />,
      },
      {
        path: "knowledge-graph", // Resolves to /platform/knowledge-graph
        element: <KnowledgeGraph />,
      },
      {
        path: "analytics", // Resolves to /platform/analytics
        element: <Analytics />,
      },
    ],
  },
];

export default platformRoutes;
