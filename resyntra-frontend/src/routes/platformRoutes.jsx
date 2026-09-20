// src/routes/platformRoutes.js
import Workspace from "@/pages/platform/Workspace";
import AISummarizer from "@/pages/platform/AISummarizer";
import ChatWithPapers from "@/pages/platform/ChatWithPapers";
import SemanticSearch from "@/pages/platform/SemanticSearch";
import PptGenerator from "@/pages/platform/PptGenerator";
import Analytics from "@/pages/platform/Analytics";
import { Outlet } from "react-router-dom";

const platformRoutes = [
  /*
  |--------------------------------------------------------------------------
  | 1. Nested Scoped Directory Routes (e.g., /platform/...)
  |--------------------------------------------------------------------------
  */
  {
    path: "platform", 
    element: <Outlet />, 
    children: [
      { path: "workspace", element: <Workspace /> },
      { path: "ai-summarizer", element: <AISummarizer /> },
      { path: "chat-with-papers", element: <ChatWithPapers /> },
      { path: "semantic-search", element: <SemanticSearch /> },
      { path: "ppt-generator", element: <PptGenerator /> },
      { path: "analytics", element: <Analytics /> },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | 2. Root Shortlink Fallback Mirror Routes (e.g., /...)
  |--------------------------------------------------------------------------
  | This mirrors the paths straight onto the root domain namespace so that
  | if the user trims down the URL bar, React Router will still successfully
  | capture and render the page instead of throwing a 404 block graphic!
  |
  */
  { path: "workspace", element: <Workspace /> },
  { path: "ai-summarizer", element: <AISummarizer /> },
  { path: "chat-with-papers", element: <ChatWithPapers /> },
  { path: "semantic-search", element: <SemanticSearch /> },
  { path: "ppt-generator", element: <PptGenerator /> },
  { path: "analytics", element: <Analytics /> },
];

export default platformRoutes;


// // src/routes/platformRoutes.js
// import Workspace from "@/pages/platform/Workspace";
// import AISummarizer from "@/pages/platform/AISummarizer";
// import ChatWithPapers from "@/pages/platform/ChatWithPapers";
// import SemanticSearch from "@/pages/platform/SemanticSearch";
// import PptGenerator from "@/pages/platform/PptGenerator";
// import Analytics from "@/pages/platform/Analytics";
// import ProtectedRoute from "@/components/auth/ProtectedRoute";
// import { Outlet } from "react-router-dom";

// const authedChatWithPapers = (
//   <ProtectedRoute>
//     <ChatWithPapers />
//   </ProtectedRoute>
// );

// const platformRoutes = [
//   /*
//   |--------------------------------------------------------------------------
//   | 1. Nested Scoped Directory Routes (e.g., /platform/...)
//   |--------------------------------------------------------------------------
//   */
//   {
//     path: "platform", 
//     element: <Outlet />, 
//     children: [
//       { path: "workspace", element: <Workspace /> },
//       { path: "ai-summarizer", element: <AISummarizer /> },
//       { path: "chat-with-papers", element: authedChatWithPapers },
//       { path: "semantic-search", element: <SemanticSearch /> },
//       { path: "ppt-generator", element: <PptGenerator /> },
//       { path: "analytics", element: <Analytics /> },
//     ],
//   },

//   /*
//   |--------------------------------------------------------------------------
//   | 2. Root Shortlink Fallback Mirror Routes (e.g., /...)
//   |--------------------------------------------------------------------------
//   | This mirrors the paths straight onto the root domain namespace so that
//   | if the user trims down the URL bar, React Router will still successfully
//   | capture and render the page instead of throwing a 404 block graphic!
//   |
//   */
//   { path: "workspace", element: <Workspace /> },
//   { path: "ai-summarizer", element: <AISummarizer /> },
//   { path: "chat-with-papers", element: authedChatWithPapers },
//   { path: "semantic-search", element: <SemanticSearch /> },
//   { path: "ppt-generator", element: <PptGenerator /> },
//   { path: "analytics", element: <Analytics /> },
// ];

// export default platformRoutes;