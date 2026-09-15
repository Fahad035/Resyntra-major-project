import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  Code2,
  FileText,
  FolderKanban,
  GraduationCap,
  Library,
  MessageSquare,
  Network,
  Search,
  Settings2,
  Sparkles,
  Upload,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sections = [
  {
    title: "GETTING STARTED",
    items: [
      {
        title: "Introduction",
        path: "/resources/documentation",
        icon: BookOpen,
      },
      {
        title: "Quickstart",
        path: "/resources/documentation/quickstart",
        icon: Sparkles,
      },
      {
        title: "Research Workspace",
        path: "/resources/documentation/workspace",
        icon: BrainCircuit,
      },
    ],
  },
  {
    title: "RESEARCH",
    items: [
      {
        title: "Upload Papers",
        path: "/resources/documentation/upload-papers",
        icon: Upload,
      },
      {
        title: "Paper Management",
        path: "/resources/documentation/paper-management",
        icon: FileText,
      },
      {
        title: "Collections",
        path: "/resources/documentation/collections",
        icon: Library,
      },
      {
        title: "Projects",
        path: "/resources/documentation/projects",
        icon: FolderKanban,
      },
    ],
  },
  {
    title: "AI FEATURES",
    items: [
      {
        title: "AI Summarizer",
        path: "/resources/documentation/ai-summarizer",
        icon: FileText,
      },
      {
        title: "Chat with Papers",
        path: "/resources/documentation/chat",
        icon: MessageSquare,
      },
      {
        title: "Semantic Search",
        path: "/resources/documentation/semantic-search",
        icon: Search,
      },
      {
        title: "Literature Review",
        path: "/resources/documentation/literature-review",
        icon: Network,
      },
      {
        title: "Research Gap Detection",
        path: "/resources/documentation/research-gap",
        icon: BrainCircuit,
      },
    ],
  },
  {
    title: "RESEARCH TOOLS",
    items: [
      {
        title: "Notes",
        path: "/resources/documentation/notes",
        icon: FileText,
      },
      {
        title: "Citations",
        path: "/resources/documentation/citations",
        icon: BookOpen,
      },
      {
        title: "Research Analytics",
        path: "/resources/documentation/analytics",
        icon: BarChart3,
      },
      {
        title: "PPT Generator",
        path: "/resources/documentation/ppt-generator",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "DEVELOPER",
    items: [
      {
        title: "API Reference",
        path: "/resources/api-reference",
        icon: Code2,
      },
      {
        title: "Authentication",
        path: "/resources/documentation/authentication",
        icon: Settings2,
      },
    ],
  },
];

const DocsSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="w-full">
        <div className=" pr-5">
          {/* Sidebar heading */}
          <div className="pb-5">
            <Link
              to="/resources/documentation"
              className="group flex items-center gap-2 text-sm font-semibold text-(--foreground)"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                <BookOpen className="h-3.5 w-3.5" />
              </div>

              <span>Documentation</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="space-y-7">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="mb-2 px-2 text-[10px] font-semibold tracking-[0.16em] text-(--muted-foreground)">
                  {section.title}
                </p>

                <nav className="space-y-0.5">
                  {section.items.map((item) => {
                    const Icon = item.icon;

                    const isActive =
                      location.pathname === item.path;

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`
                          group
                          flex
                          items-center
                          gap-2.5
                          rounded-lg
                          px-2.5
                          py-1.5
                          text-sm
                          transition-all
                          duration-150
                          ${
                            isActive
                              ? "bg-(--foreground)/5 font-medium text-(--foreground)"
                              : "text-(--muted-foreground) hover:bg-(--foreground)/5 hover:text-(--foreground)"
                          }
                        `}
                      >
                        <Icon
                          className={`
                            h-3.5
                            w-3.5
                            shrink-0
                            transition-colors
                            ${
                              isActive
                                ? "text-(--primary)"
                                : "text-(--muted-foreground) group-hover:text-(--foreground)"
                            }
                          `}
                        />

                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>

          {/* Tutorials */}
          <div className="mt-8 border-t border-(--border) pt-5">
            <Link
              to="/resources/tutorials"
              className="group flex items-center gap-3 rounded-xl border border-(--border) bg-(--surface) p-3 transition-all duration-200 hover:border-(--primary)/30"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                <GraduationCap className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium text-(--foreground)">
                  Tutorials
                </p>

                <p className="mt-0.5 truncate text-[11px] text-(--muted-foreground)">
                  Learn Resyntra step by step
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DocsSidebar;