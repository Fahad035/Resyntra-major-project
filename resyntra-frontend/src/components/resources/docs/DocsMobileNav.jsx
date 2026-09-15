import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sections = [
  {
    title: "GETTING STARTED",
    items: [
      {
        title: "Introduction",
        path: "/resources/documentation",
      },
      {
        title: "Quickstart",
        path: "/resources/documentation/quickstart",
      },
      {
        title: "Research Workspace",
        path: "/resources/documentation/workspace",
      },
    ],
  },
  {
    title: "RESEARCH",
    items: [
      {
        title: "Upload Papers",
        path: "/resources/documentation/upload-papers",
      },
      {
        title: "Paper Management",
        path: "/resources/documentation/paper-management",
      },
      {
        title: "Collections",
        path: "/resources/documentation/collections",
      },
      {
        title: "Projects",
        path: "/resources/documentation/projects",
      },
    ],
  },
  {
    title: "AI FEATURES",
    items: [
      {
        title: "AI Summarizer",
        path: "/resources/documentation/ai-summarizer",
      },
      {
        title: "Chat with Papers",
        path: "/resources/documentation/chat",
      },
      {
        title: "Semantic Search",
        path: "/resources/documentation/semantic-search",
      },
      {
        title: "Literature Review",
        path: "/resources/documentation/literature-review",
      },
      {
        title: "Research Gap Detection",
        path: "/resources/documentation/research-gap",
      },
    ],
  },
  {
    title: "RESEARCH TOOLS",
    items: [
      {
        title: "Notes",
        path: "/resources/documentation/notes",
      },
      {
        title: "Citations",
        path: "/resources/documentation/citations",
      },
      {
        title: "Research Analytics",
        path: "/resources/documentation/analytics",
      },
      {
        title: "PPT Generator",
        path: "/resources/documentation/ppt-generator",
      },
    ],
  },
  {
    title: "DEVELOPER",
    items: [
      {
        title: "API Reference",
        path: "/resources/api-reference",
      },
      {
        title: "Authentication",
        path: "/resources/documentation/authentication",
      },
    ],
  },
];

const DocsMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState("GETTING STARTED");

  const location = useLocation();

  const toggleSection = (section) => {
    setOpenSection((previous) =>
      previous === section ? null : section
    );
  };

  return (
    <div className="lg:hidden">
      {/* Mobile trigger */}
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
          text-sm
          font-medium
          text-(--foreground)
          transition-colors
          hover:bg-(--surface-secondary)
        "
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? "Close documentation navigation"
            : "Open documentation navigation"
        }
      >
        <span className="flex items-center gap-2.5">
          {isOpen ? (
            <X className="h-4 w-4 text-(--primary)" />
          ) : (
            <Menu className="h-4 w-4 text-(--primary)" />
          )}

          Documentation
        </span>

        <ChevronDown
          className={`
            h-4
            w-4
            text-(--muted-foreground)
            transition-transform
            duration-200
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Navigation */}
      {isOpen && (
        <div className="mt-2 overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
          <div className="max-h-[65vh] overflow-y-auto p-3">
            {sections.map((section) => {
              const isSectionOpen =
                openSection === section.title;

              return (
                <div
                  key={section.title}
                  className="border-b border-(--border) last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleSection(section.title)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-2
                      py-3
                      text-left
                      text-[10px]
                      font-semibold
                      tracking-[0.16em]
                      text-(--muted-foreground)
                    "
                  >
                    {section.title}

                    <ChevronDown
                      className={`
                        h-3.5
                        w-3.5
                        transition-transform
                        duration-200
                        ${
                          isSectionOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  {isSectionOpen && (
                    <nav className="space-y-0.5 pb-2">
                      {section.items.map((item) => {
                        const isActive =
                          location.pathname === item.path;

                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`
                              block
                              rounded-lg
                              px-3
                              py-2
                              text-sm
                              transition-colors
                              ${
                                isActive
                                  ? "bg-(--foreground)/5 font-medium text-(--foreground)"
                                  : "text-(--muted-foreground) hover:bg-(--foreground)/5 hover:text-(--foreground)"
                              }
                            `}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </nav>
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