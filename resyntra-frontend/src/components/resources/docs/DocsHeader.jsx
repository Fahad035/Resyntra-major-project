import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Command,
  Search,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const documentationSections = [
  {
    title: "Introduction",
    description: "Learn what Resyntra is and how the research assistant works.",
    category: "Getting Started",
    id: "introduction",
    keywords: "resyntra introduction research assistant overview",
  },
  {
    title: "Quickstart",
    description: "Get started with Resyntra and complete your first research workflow.",
    category: "Getting Started",
    id: "quickstart",
    keywords: "quickstart getting started setup account",
  },
  {
    title: "Research Workspace",
    description: "Learn how to organize papers, projects, and AI research tools.",
    category: "Getting Started",
    id: "workspace",
    keywords: "workspace research papers projects organize",
  },
  {
    title: "Upload Papers",
    description: "Upload and process academic research papers.",
    category: "Research",
    id: "upload-papers",
    keywords: "upload pdf papers documents files processing",
  },
  {
    title: "Paper Management",
    description: "Manage your uploaded papers and research metadata.",
    category: "Research",
    id: "paper-management",
    keywords: "papers library metadata management organize",
  },
  {
    title: "Collections",
    description: "Group and organize related research papers into collections.",
    category: "Research",
    id: "collections",
    keywords: "collections papers organize library",
  },
  {
    title: "Projects",
    description: "Organize your research work into dedicated projects.",
    category: "Research",
    id: "projects",
    keywords: "projects research organization workspace",
  },
  {
    title: "AI Summarizer",
    description: "Generate AI-powered summaries of academic papers.",
    category: "AI Features",
    id: "ai-summarizer",
    keywords: "ai summarize summarization paper summary",
  },
  {
    title: "Chat with Papers",
    description: "Ask questions and interact with your research papers using AI.",
    category: "AI Features",
    id: "chat",
    keywords: "chat papers rag questions ai research",
  },
  {
    title: "Semantic Search",
    description: "Discover relevant research using semantic similarity.",
    category: "AI Features",
    id: "semantic-search",
    keywords: "semantic search research discovery similarity",
  },
  {
    title: "Literature Review",
    description: "Use AI to analyze and synthesize academic literature.",
    category: "AI Features",
    id: "literature-review",
    keywords: "literature review research papers synthesis ai",
  },
  {
    title: "Research Gap Detection",
    description: "Identify potential research gaps across academic literature.",
    category: "AI Features",
    id: "research-gap",
    keywords: "research gap detection gaps literature ai",
  },
  {
    title: "Notes",
    description: "Create and organize research notes while studying papers.",
    category: "Research Tools",
    id: "notes",
    keywords: "notes research note taking papers",
  },
  {
    title: "Citations",
    description: "Generate and manage citations for academic research.",
    category: "Research Tools",
    id: "citations",
    keywords: "citations references bibliography citation styles",
  },
  {
    title: "Research Analytics",
    description: "Understand your research activity and metrics.",
    category: "Research Tools",
    id: "analytics",
    keywords: "analytics dashboard research metrics activity",
  },
  {
    title: "PPT Generator",
    description: "Turn research papers into academic presentations.",
    category: "Research Tools",
    id: "ppt-generator",
    keywords: "ppt powerpoint presentation slides generator",
  },
  {
    title: "API Reference",
    description: "Explore Resyntra API endpoints and integration details.",
    category: "Developer",
    id: "api-reference",
    keywords: "api endpoints developer integration reference",
  },
  {
    title: "Authentication",
    description: "Understand registration, login, tokens, and protected requests.",
    category: "Developer",
    id: "authentication",
    keywords: "authentication login register jwt token security",
  },
];

const DocsHeader = ({
  activeSection,
  onSectionChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery("");
  };

  const handleResultClick = (sectionId) => {
    onSectionChange(sectionId);
    closeSearch();
  };

  useEffect(() => {
    if (isSearchOpen) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      const isCommandKey = event.metaKey || event.ctrlKey;

      if (isCommandKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }

      if (event.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return documentationSections;
    }

    return documentationSections.filter((section) => {
      const searchableText = `
        ${section.title}
        ${section.description}
        ${section.category}
        ${section.keywords}
      `.toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <header className="sticky top-0 z-30 border-b border-(--border) bg-(--background)/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-10">

        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          <Link
            to="/resources/documentation"
            className="shrink-0 text-sm font-semibold text-(--foreground)"
          >
            Resyntra Docs
          </Link>

          <span className="text-(--muted-foreground)">
            /
          </span>

          <span className="hidden truncate text-sm text-(--muted-foreground) sm:block">
            Documentation
          </span>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-md">
          {!isSearchOpen ? (
            <button
              type="button"
              onClick={openSearch}
              className="
                group
                flex
                h-9
                w-full
                items-center
                gap-3
                rounded-lg
                border
                border-(--border)
                bg-(--surface)
                px-3
                text-left
                transition-all
                duration-200
                hover:border-(--primary)/40
                hover:bg-(--surface-secondary)
              "
            >
              <Search className="h-4 w-4 shrink-0 text-(--muted-foreground)" />

              <span className="flex-1 text-sm text-(--muted-foreground)">
                Search documentation...
              </span>

              <span className="hidden items-center gap-1 rounded-md border border-(--border) bg-(--background) px-1.5 py-0.5 text-[10px] font-medium text-(--muted-foreground) sm:flex">
                <Command className="h-2.5 w-2.5" />
                K
              </span>
            </button>
          ) : (
            <>
              <div
                className="
                  flex
                  h-9
                  items-center
                  gap-3
                  rounded-lg
                  border
                  border-(--primary)/40
                  bg-(--surface)
                  px-3
                  shadow-sm
                "
              >
                <Search className="h-4 w-4 shrink-0 text-(--primary)" />

                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search documentation..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-(--foreground)
                    outline-none
                    placeholder:text-(--muted-foreground)
                  "
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="rounded-md p-1 text-(--muted-foreground) transition hover:bg-(--foreground)/5 hover:text-(--foreground)"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={closeSearch}
                  className="hidden rounded-md border border-(--border) px-1.5 py-0.5 text-[10px] font-medium text-(--muted-foreground) transition hover:text-(--foreground) sm:block"
                >
                  ESC
                </button>
              </div>

              {/* Search Results */}
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-full
                  z-50
                  mt-2
                  max-h-[70vh]
                  overflow-y-auto
                  rounded-xl
                  border
                  border-(--border)
                  bg-(--surface)
                  p-2
                  shadow-2xl
                "
              >
                {filteredSections.length > 0 ? (
                  <div className="space-y-1">
                    {filteredSections.map((section) => {
                      const isActive =
                        activeSection === section.id;

                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() =>
                            handleResultClick(section.id)
                          }
                          className={`
                            group
                            flex
                            w-full
                            items-start
                            gap-3
                            rounded-lg
                            p-3
                            text-left
                            transition-all
                            duration-150
                            ${
                              isActive
                                ? "bg-(--foreground)/5"
                                : "hover:bg-(--foreground)/5"
                            }
                          `}
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                            {section.category === "Developer" ? (
                              <CodeIcon />
                            ) : section.category === "AI Features" ? (
                              <SparkIcon />
                            ) : (
                              <BookOpen className="h-4 w-4" />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-(--foreground)">
                                {section.title}
                              </p>

                              <span className="text-[10px] text-(--muted-foreground)">
                                {section.category}
                              </span>
                            </div>

                            <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-(--muted-foreground)">
                              {section.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-(--foreground)/5 text-(--muted-foreground)">
                      <Search className="h-4 w-4" />
                    </div>

                    <p className="mt-3 text-sm font-medium text-(--foreground)">
                      No results found
                    </p>

                    <p className="mt-1 text-xs text-(--muted-foreground)">
                      Try searching for papers, AI, citations, analytics, or API.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Right */}
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <Link
            to="/resources/tutorials"
            className="text-sm text-(--muted-foreground) transition-colors hover:text-(--foreground)"
          >
            Tutorials
          </Link>

          <Link
            to="/resources/api-reference"
            className="inline-flex items-center gap-1.5 text-sm text-(--muted-foreground) transition-colors hover:text-(--foreground)"
          >
            API Reference
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

/*
  Small inline icons kept here so DocsHeader
  does not need additional component files.
*/

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m8 9-3 3 3 3" />
    <path d="m16 9 3 3-3 3" />
    <path d="m14 5-4 14" />
  </svg>
);

const SparkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
    <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" />
  </svg>
);

export default DocsHeader;