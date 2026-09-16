import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  FileSearch,
  FolderKanban,
  MessageSquare,
  Presentation,
  Search,
  StickyNote,
  Upload,
  Code2,
} from "lucide-react";

import TutorialCard from "./TutorialCard";

const tutorials = [
  {
    title: "Getting Started with Resyntra",
    description:
      "Learn the essential workflow for setting up your research workspace and starting your first project.",
    category: "Getting started",
    categoryId: "getting-started",
    difficulty: "Beginner",
    duration: "5 min",
    icon: BookOpen,
    path: "/resources/documentation",
    featured: true,
  },
  {
    title: "Build Your Research Workspace",
    description:
      "Understand how to organize papers, projects, collections, and AI-assisted research in one workspace.",
    category: "Getting started",
    categoryId: "getting-started",
    difficulty: "Beginner",
    duration: "7 min",
    icon: FolderKanban,
    path: "/resources/documentation",
  },
  {
    title: "Upload and Manage Research Papers",
    description:
      "Upload academic papers, monitor processing, and manage your research library efficiently.",
    category: "Research",
    categoryId: "research",
    difficulty: "Beginner",
    duration: "6 min",
    icon: Upload,
    path: "/resources/documentation",
  },
  {
    title: "Search Research Semantically",
    description:
      "Discover relevant literature using meaning-based search instead of relying only on exact keywords.",
    category: "Research",
    categoryId: "research",
    difficulty: "Intermediate",
    duration: "8 min",
    icon: Search,
    path: "/resources/documentation",
  },
  {
    title: "Summarize Academic Papers with AI",
    description:
      "Learn how Resyntra extracts and presents the important ideas from research papers.",
    category: "AI features",
    categoryId: "ai",
    difficulty: "Beginner",
    duration: "6 min",
    icon: BrainCircuit,
    path: "/resources/documentation",
  },
  {
    title: "Chat with Your Research Papers",
    description:
      "Ask questions about indexed papers and use AI-powered retrieval to explore specific research content.",
    category: "AI features",
    categoryId: "ai",
    difficulty: "Intermediate",
    duration: "8 min",
    icon: MessageSquare,
    path: "/resources/documentation",
  },
  {
    title: "Generate a Literature Review",
    description:
      "Use your research collection as the foundation for structured literature review workflows.",
    category: "AI features",
    categoryId: "ai",
    difficulty: "Advanced",
    duration: "10 min",
    icon: FileSearch,
    path: "/resources/documentation",
  },
  {
    title: "Identify Research Gaps",
    description:
      "Explore existing literature and use AI-assisted analysis to identify potential research gaps.",
    category: "AI features",
    categoryId: "ai",
    difficulty: "Advanced",
    duration: "10 min",
    icon: BrainCircuit,
    path: "/resources/documentation",
  },
  {
    title: "Create and Organize Research Notes",
    description:
      "Capture ideas, observations, findings, and connections while working through academic literature.",
    category: "Organization",
    categoryId: "organization",
    difficulty: "Beginner",
    duration: "5 min",
    icon: StickyNote,
    path: "/resources/documentation",
  },
  {
    title: "Understand Research Analytics",
    description:
      "Use your research metrics and activity information to understand your academic workflow.",
    category: "Organization",
    categoryId: "organization",
    difficulty: "Intermediate",
    duration: "7 min",
    icon: BarChart3,
    path: "/resources/documentation",
  },
  {
    title: "Create Presentations from Research",
    description:
      "Turn research papers into structured academic presentations using the PPT generation workflow.",
    category: "Research",
    categoryId: "research",
    difficulty: "Intermediate",
    duration: "8 min",
    icon: Presentation,
    path: "/resources/documentation",
  },
];

const TutorialGrid = ({
  activeCategory = "all",
}) => {
  const filteredTutorials =
    activeCategory === "all"
      ? tutorials
      : tutorials.filter(
          (tutorial) =>
            tutorial.categoryId === activeCategory
        );

  return (
    <section className="bg-(--background)">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              Tutorials
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
              Learn by doing
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-(--muted-foreground)">
              Follow practical guides for the core workflows
              available across the Resyntra research platform.
            </p>
          </div>

          <p className="text-xs text-(--muted-foreground)">
            {filteredTutorials.length}{" "}
            {filteredTutorials.length === 1
              ? "tutorial"
              : "tutorials"}
          </p>
        </div>

        {filteredTutorials.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredTutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.title}
                {...tutorial}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-(--border) bg-(--surface) px-6 py-16 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-(--primary)/10 text-(--primary)">
              <Code2 className="h-5 w-5" />
            </div>

            <h3 className="mt-4 text-sm font-semibold text-(--foreground)">
              No tutorials available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-(--muted-foreground)">
              Tutorials for this category will appear here when
              they are available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TutorialGrid;