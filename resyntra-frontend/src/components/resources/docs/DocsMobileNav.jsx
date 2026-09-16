import { useState } from "react";
import {
  ChevronDown,
  BookOpen,
  Sparkles,
  BrainCircuit,
  Upload,
  FileText,
  Library,
  FolderKanban,
  MessageSquare,
  Search,
  Network,
  BarChart3,
  GraduationCap,
  Code2,
  Settings2,
} from "lucide-react";

const sections = [
  {
    title: "GETTING STARTED",
    items: [
      {
        title: "Introduction",
        id: "introduction",
        icon: BookOpen,
      },
      {
        title: "Quickstart",
        id: "quickstart",
        icon: Sparkles,
      },
      {
        title: "Research Workspace",
        id: "workspace",
        icon: BrainCircuit,
      },
    ],
  },
  {
    title: "RESEARCH",
    items: [
      {
        title: "Upload Papers",
        id: "upload-papers",
        icon: Upload,
      },
      {
        title: "Paper Management",
        id: "paper-management",
        icon: FileText,
      },
      {
        title: "Collections",
        id: "collections",
        icon: Library,
      },
      {
        title: "Projects",
        id: "projects",
        icon: FolderKanban,
      },
    ],
  },
  {
    title: "AI FEATURES",
    items: [
      {
        title: "AI Summarizer",
        id: "ai-summarizer",
        icon: FileText,
      },
      {
        title: "Chat with Papers",
        id: "chat",
        icon: MessageSquare,
      },
      {
        title: "Semantic Search",
        id: "semantic-search",
        icon: Search,
      },
      {
        title: "Literature Review",
        id: "literature-review",
        icon: Network,
      },
      {
        title: "Research Gap Detection",
        id: "research-gap",
        icon: BrainCircuit,
      },
    ],
  },
  {
    title: "RESEARCH TOOLS",
    items: [
      {
        title: "Notes",
        id: "notes",
        icon: FileText,
      },
      {
        title: "Citations",
        id: "citations",
        icon: BookOpen,
      },
      {
        title: "Research Analytics",
        id: "analytics",
        icon: BarChart3,
      },
      {
        title: "PPT Generator",
        id: "ppt-generator",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "DEVELOPER",
    items: [
      {
        title: "API Reference",
        id: "api-reference",
        icon: Code2,
      },
      {
        title: "Authentication",
        id: "authentication",
        icon: Settings2,
      },
    ],
  },
];

const DocsMobileNav = ({
  activeSection,
  onSectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState([
    "GETTING STARTED",
  ]);

  const toggleSection = (sectionTitle) => {
    setOpenSections((previous) =>
      previous.includes(sectionTitle)
        ? previous.filter((item) => item !== sectionTitle)
        : [...previous, sectionTitle]
    );
  };

  const handleSectionChange = (sectionId) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  const activeItem = sections
    .flatMap((section) => section.items)
    .find((item) => item.id === activeSection);

  return (
    <div className="relative">
      {/* Mobile selector */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-(--border)
          bg-(--surface)
          px-4
          py-3
          text-left
          transition-all
          duration-200
          hover:border-(--primary)/30
        "
        aria-expanded={isOpen}
      >
        <div className="flex min-w-0 items-center gap-3">
          {activeItem && (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
              <activeItem.icon className="h-4 w-4" />
            </div>
          )}

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-(--foreground)">
              {activeItem?.title || "Documentation"}
            </p>

            <p className="mt-0.5 text-[11px] text-(--muted-foreground)">
              Browse documentation
            </p>
          </div>
        </div>

        <ChevronDown
          className={`
            h-4
            w-4
            shrink-0
            text-(--muted-foreground)
            transition-transform
            duration-200
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Navigation panel */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-40 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-(--border) bg-(--surface) p-3 shadow-2xl">
          <div className="space-y-3">
            {sections.map((section) => {
              const isSectionOpen = openSections.includes(
                section.title
              );

              return (
                <div key={section.title}>
                  <button
                    type="button"
                    onClick={() =>
                      toggleSection(section.title)
                    }
                    className="flex w-full items-center justify-between px-2 py-2 text-left"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-(--muted-foreground)">
                      {section.title}
                    </span>

                    <ChevronDown
                      className={`
                        h-3.5
                        w-3.5
                        text-(--muted-foreground)
                        transition-transform
                        duration-200
                        ${isSectionOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {isSectionOpen && (
                    <div className="space-y-0.5">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive =
                          activeSection === item.id;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() =>
                              handleSectionChange(item.id)
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              gap-3
                              rounded-lg
                              px-3
                              py-2
                              text-left
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
                                h-4
                                w-4
                                shrink-0
                                ${
                                  isActive
                                    ? "text-(--primary)"
                                    : "text-(--muted-foreground)"
                                }
                              `}
                            />

                            <span>{item.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocsMobileNav;