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
    path: "/platform",
  },
    sections: [
      {
        title: "Research Tools",
        items: [
          {
            title: "Workspace",
            description: "Upload and organize papers",
            path: "/platform/workspace",
            icon: BrainCircuit,
          },
          {
            title: "AI Summarizer",
            description: "Generate concise summaries",
            path: "/platform/summarizer",
            icon: FileText,
          },
          {
            title: "Chat with Papers",
            description: "Ask questions from PDFs",
            path: "/platform/chat",
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
            path: "/platform/discovery",
            icon: Search,
          },
          {
            title: "Knowledge Graph",
            description: "Visualize connections",
            path: "/platform/knowledge-graph",
            icon: Network,
          },
          {
            title: "Analytics",
            description: "Research insights",
            path: "/platform/analytics",
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
    path: "/solutions",
  },
    sections: [
      {
        title: "Who It's For",
        items: [
          {
            title: "Students",
            description: "Study smarter",
            path: "/solution/students",
            icon: GraduationCap,
          },
          {
            title: "Researchers",
            description: "Accelerate literature review",
            path: "/solution/researchers",
            icon: Microscope,
          },
          {
            title: "Universities",
            description: "Institutional research",
            path: "/solution/universities",
            icon: Building2,
          },
          {
            title: "Professors",
            description: "Academic collaboration",
            path: "/solution/professors",
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
    path: "/resources",
  },
  sections: [
    {
      title: "Learn",
      items: [
        {
          title: "Documentation",
          description: "Learn every feature",
          path: "/resources/docs",
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
          path: "/resources/blogs",
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
          path: "/resources/reference",
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
    href: "#pricing",
  },

  {
    label: "About",
    href: "#about",
  },
];