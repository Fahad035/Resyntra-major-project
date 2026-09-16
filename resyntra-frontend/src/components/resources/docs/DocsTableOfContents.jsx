import {
  BookOpen,
  CheckCircle2,
  FileText,
  Lightbulb,
  List,
  Search,
  Sparkles,
} from "lucide-react";

const tableOfContents = {
  introduction: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "What is Resyntra?", id: "what-is-resyntra", icon: Sparkles },
    { title: "Getting started", id: "getting-started", icon: List },
    { title: "Research workflow", id: "research-workflow", icon: FileText },
    { title: "AI-powered research", id: "ai-powered-research", icon: Search },
    { title: "Next steps", id: "next-steps", icon: CheckCircle2 },
  ],

  quickstart: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Before you begin", id: "before-you-begin", icon: List },
    { title: "Create an account", id: "create-account", icon: Sparkles },
    { title: "Open the workspace", id: "open-workspace", icon: FileText },
    { title: "Upload your first paper", id: "upload-paper", icon: FileText },
    { title: "Processing", id: "processing", icon: Search },
    { title: "AI features", id: "ai-features", icon: Sparkles },
    { title: "Organize your research", id: "organize-research", icon: List },
    { title: "Continue your workflow", id: "continue-workflow", icon: CheckCircle2 },
  ],

  workspace: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Workspace areas", id: "workspace-areas", icon: List },
    { title: "Working with papers", id: "working-with-papers", icon: FileText },
    { title: "Organizing research", id: "organizing-research", icon: List },
    { title: "Using AI", id: "using-ai", icon: Sparkles },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "upload-papers": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Supported papers", id: "supported-papers", icon: FileText },
    { title: "Upload process", id: "upload-process", icon: UploadIcon },
    { title: "Processing status", id: "processing-status", icon: Search },
    { title: "After upload", id: "after-upload", icon: CheckCircle2 },
    { title: "Recommended workflow", id: "recommended-workflow", icon: Lightbulb },
  ],

  "paper-management": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Paper library", id: "paper-library", icon: FileText },
    { title: "Paper metadata", id: "paper-metadata", icon: List },
    { title: "Processing status", id: "processing-status", icon: Search },
    { title: "Paper actions", id: "paper-actions", icon: CheckCircle2 },
    { title: "Organization", id: "organization", icon: List },
    { title: "Recommended workflow", id: "recommended-workflow", icon: Lightbulb },
  ],

  collections: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Creating collections", id: "creating-collections", icon: Sparkles },
    { title: "Organizing papers", id: "organizing-papers", icon: FileText },
    { title: "Collection workflow", id: "collection-workflow", icon: CheckCircle2 },
  ],

  projects: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Project workspace", id: "project-workspace", icon: FileText },
    { title: "Organizing research", id: "organizing-research", icon: List },
    { title: "Research context", id: "research-context", icon: Search },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "ai-summarizer": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "How it works", id: "how-it-works", icon: Sparkles },
    { title: "Summarization workflow", id: "summarization-workflow", icon: FileText },
    { title: "Reviewing summaries", id: "reviewing-summaries", icon: Search },
    { title: "Best practices", id: "best-practices", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  chat: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "How paper chat works", id: "how-paper-chat-works", icon: Sparkles },
    { title: "Getting started", id: "getting-started", icon: FileText },
    { title: "Example questions", id: "example-questions", icon: List },
    { title: "Retrieval context", id: "retrieval-context", icon: Search },
    { title: "Best practices", id: "best-practices", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "semantic-search": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Semantic search workflow", id: "semantic-search-workflow", icon: Search },
    { title: "Semantic vs keyword", id: "semantic-vs-keyword", icon: List },
    { title: "Writing effective queries", id: "writing-effective-queries", icon: FileText },
    { title: "Understanding results", id: "understanding-results", icon: Search },
    { title: "Use cases", id: "use-cases", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "literature-review": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Purpose", id: "purpose", icon: Lightbulb },
    { title: "Preparing literature", id: "preparing-literature", icon: FileText },
    { title: "Review workflow", id: "review-workflow", icon: List },
    { title: "Analysis", id: "analysis", icon: Search },
    { title: "AI assistance", id: "ai-assistance", icon: Sparkles },
    { title: "Synthesis", id: "synthesis", icon: FileText },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "research-gap": [
    { title: "Overview", id: "overview", icon: BookOpen },
    {
      title: "What is a research gap?",
      id: "what-is-a-research-gap",
      icon: Lightbulb,
    },
    { title: "Preparing literature", id: "preparing-literature", icon: FileText },
    { title: "Gap detection", id: "gap-detection", icon: Search },
    { title: "Research areas", id: "research-areas", icon: List },
    { title: "AI-assisted analysis", id: "ai-assisted-analysis", icon: Sparkles },
    { title: "From gap to topic", id: "from-gap-to-topic", icon: FileText },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  notes: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Why research notes", id: "why-research-notes", icon: Lightbulb },
    { title: "Creating notes", id: "creating-notes", icon: FileText },
    { title: "Editing notes", id: "editing-notes", icon: List },
    { title: "Useful note types", id: "useful-note-types", icon: Sparkles },
    { title: "Notes and papers", id: "notes-and-papers", icon: Search },
    { title: "Best practices", id: "best-practices", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  citations: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Why citations matter", id: "why-citations-matter", icon: Lightbulb },
    { title: "Creating citations", id: "creating-citations", icon: FileText },
    { title: "Citation information", id: "citation-information", icon: List },
    { title: "Citation styles", id: "citation-styles", icon: Search },
    { title: "Copying citations", id: "copying-citations", icon: CheckCircle2 },
    { title: "Verification", id: "verification", icon: Search },
    { title: "Best practices", id: "best-practices", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  analytics: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Research metrics", id: "research-metrics", icon: BarChartIcon },
    { title: "Activity", id: "activity", icon: List },
    { title: "Dashboard", id: "dashboard", icon: FileText },
    { title: "Monthly metrics", id: "monthly-metrics", icon: Search },
    { title: "Refreshing data", id: "refreshing-data", icon: CheckCircle2 },
    { title: "Using analytics", id: "using-analytics", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "ppt-generator": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "How it works", id: "how-it-works", icon: Sparkles },
    { title: "Paper selection", id: "paper-selection", icon: FileText },
    { title: "Presentation settings", id: "presentation-settings", icon: List },
    { title: "Generated presentation", id: "generated-presentation", icon: Search },
    { title: "Exporting", id: "exporting", icon: CheckCircle2 },
    { title: "Academic use cases", id: "academic-use-cases", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  "api-reference": [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "API areas", id: "api-areas", icon: List },
    { title: "Base URL", id: "base-url", icon: CodeIcon },
    { title: "Request methods", id: "request-methods", icon: CodeIcon },
    { title: "Papers API", id: "papers-api", icon: FileText },
    { title: "Search API", id: "search-api", icon: Search },
    { title: "AI API", id: "ai-api", icon: Sparkles },
    { title: "Analytics API", id: "analytics-api", icon: BarChartIcon },
    { title: "PPT API", id: "ppt-api", icon: FileText },
    { title: "Authentication", id: "authentication", icon: CheckCircle2 },
    { title: "Errors", id: "errors", icon: Lightbulb },
    { title: "Recommended workflow", id: "recommended-workflow", icon: CheckCircle2 },
  ],

  authentication: [
    { title: "Overview", id: "overview", icon: BookOpen },
    { title: "Registration", id: "registration", icon: FileText },
    { title: "Login", id: "login", icon: CheckCircle2 },
    { title: "Access token", id: "access-token", icon: CodeIcon },
    { title: "Refresh token", id: "refresh-token", icon: CodeIcon },
    { title: "Protected requests", id: "protected-requests", icon: Search },
    { title: "Security", id: "security", icon: Lightbulb },
    { title: "Authentication flow", id: "authentication-flow", icon: List },
    { title: "Best practices", id: "best-practices", icon: CheckCircle2 },
  ],
};

function UploadIcon(props) {
  return <FileText {...props} />;
}

function BarChartIcon(props) {
  return <List {...props} />;
}

function CodeIcon(props) {
  return <FileText {...props} />;
}

const DocsTableOfContents = ({
  activeSection,
  scrollContainerRef,
}) => {
  const sections =
    tableOfContents[activeSection] ||
    tableOfContents.introduction;

  const handleScroll = (id) => {
    const container = scrollContainerRef?.current;

    if (!container) {
      return;
    }

    const element = container.querySelector(`#${id}`);

    if (!element) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const scrollTop =
      container.scrollTop +
      (elementRect.top - containerRect.top) -
      32;

    container.scrollTo({
      top: Math.max(scrollTop, 0),
      behavior: "smooth",
    });
  };

  return (
    <aside className="w-full">
      <p className="mb-4 text-xs font-semibold text-(--foreground)">
        On this page
      </p>

      <nav className="border-l border-(--border)">
        <div className="space-y-0.5">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => handleScroll(section.id)}
                className={`
                  group relative flex w-full items-center gap-2
                  border-l py-1.5 pl-4 pr-2 text-left text-xs
                  leading-5 transition-colors duration-150
                  -ml-px
                  ${
                    index === 0
                      ? "border-(--primary) font-medium text-(--foreground)"
                      : "border-transparent text-(--muted-foreground) hover:border-(--primary)/40 hover:text-(--foreground)"
                  }
                `}
              >
                <Icon className="h-3 w-3 shrink-0 opacity-70" />
                <span>{section.title}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default DocsTableOfContents;