import {
  BrainCircuit,
  FileText,
  MessageSquare,
  Search,
  Network,
  BarChart3,
  GraduationCap,
  Microscope,
  Building2,
  BookOpen,
  Newspaper,
  Code2,
  LifeBuoy,
  MapIcon,
} from "lucide-react";

export const NAVBAR_ITEMS = [
  {
    label: "Platform",
    type: "mega",
    explore: {
      title: "Explore Platform",
      href: "/workspace",
    },
    sections: [
      {
        title: "Research Tools",
        items: [
          {
            title: "Workspace",
            description: "Upload and organize papers",
            path: "/workspace",
            icon: BrainCircuit,
          },
          {
            title: "AI Summarizer",
            description: "Generate concise summaries",
            path: "/ai-summarizer",
            icon: FileText,
          },
          {
            title: "Chat with Papers",
            description: "Ask questions from PDFs",
            path: "/chat-with-papers",
            icon: MessageSquare,
          },
        ],
      },
      {
        title: "Discovery",
        items: [
          {
            title: "Semantic Search",
            description: "Search by meaning",
            path: "/semantic-search",
            icon: Search,
          },
          {
            title: "Knowledge Graph",
            description: "Visualize connections",
            path: "/knowledge-graph",
            icon: Network,
          },
          {
            title: "Analytics",
            description: "Research insights",
            path: "/analytics",
            icon: BarChart3,
          },
        ],
      },
    ],
  },

  {
    label: "Solutions",
    type: "mega",
    explore: {
      title: "Explore Solutions",
      href: "/solutions/students",
    },
    sections: [
      {
        title: "Who It's For",
        items: [
          {
            title: "Students",
            description: "Study smarter",
            path: "/solutions/students",
            icon: GraduationCap,
          },
          {
            title: "Researchers",
            description: "Accelerate literature review",
            path: "/solutions/researchers",
            icon: Microscope,
          },
          {
            title: "Universities",
            description: "Institutional research",
            path: "/solutions/universities",
            icon: Building2,
          },
          {
            title: "Professors",
            description: "Academic collaboration",
            path: "/solutions/professors",
            icon: BookOpen,
          },
        ],
      },
    ],
  },

  {
    label: "Resources",
    type: "mega",
    explore: {
      title: "Explore Resources",
      href: "/resources/documentation",
    },
    sections: [
      {
        title: "Learn",
        items: [
          {
            title: "Documentation",
            description: "Learn every feature",
            path: "/resources/documentation",
            icon: BookOpen,
          },
          {
            title: "Tutorials",
            description: "Step-by-step guides",
            path: "/resources/tutorials",
            icon: GraduationCap,
          },
          {
            title: "Blog",
            description: "Research & AI articles",
            path: "/resources/blog",
            icon: Newspaper,
          },
        ],
      },
      {
        title: "Developer",
        items: [
          {
            title: "API Reference",
            description: "REST APIs",
            path: "/resources/api-reference",
            icon: Code2,
          },
          {
            title: "Roadmap",
            description: "Upcoming features",
            path: "/resources/roadmap",
            icon: MapIcon,
          },
          {
            title: "Support",
            description: "Get help",
            path: "/resources/support",
            icon: LifeBuoy,
          },
        ],
      },
    ],
  },

  {
    label: "Pricing",
    href: "/pricing",
  },

  {
    label: "About",
    href: "/about",
  },
];
