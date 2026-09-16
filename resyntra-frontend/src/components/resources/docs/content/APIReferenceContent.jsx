import {
  Code2,
  Search,
  ShieldCheck,
  FileText,
  MessageSquare,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const APIReferenceContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <Code2 className="h-4 w-4 text-(--primary)" />
          Developer
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          API Reference
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Explore the API endpoints used by Resyntra for research papers,
          search, AI analysis, citations, analytics, and other research
          workflows.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The Resyntra API provides programmatic access to core research
          workflows. Applications can use API endpoints to work with papers,
          search research content, interact with AI features, and retrieve
          research information.
        </p>
      </section>

      {/* API areas */}
      <section id="api-areas" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          API areas
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          API functionality is organized around the major capabilities of the
          Resyntra research platform.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: FileText,
              title: "Papers",
              description:
                "Create, retrieve, manage, and process research paper resources.",
            },
            {
              icon: Search,
              title: "Search",
              description:
                "Search and discover relevant academic research using available search capabilities.",
            },
            {
              icon: MessageSquare,
              title: "AI Research",
              description:
                "Interact with AI-powered workflows such as paper chat and research analysis.",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              description:
                "Retrieve research activity and workspace analytics.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="mt-3 text-sm font-semibold text-(--foreground)">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Base URL */}
      <section id="base-url" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          API base URL
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          API requests are made relative to the base URL configured for the
          Resyntra backend environment.
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-(--border) bg-(--surface) p-4">
          <code className="text-xs text-(--foreground)">
            /api
          </code>
        </div>

        <p className="mt-3 text-xs leading-5 text-(--muted-foreground)">
          The exact deployment URL depends on the environment in which the
          Resyntra backend is running.
        </p>
      </section>

      {/* Request methods */}
      <section id="request-methods" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Request methods
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              method: "GET",
              title: "Retrieve data",
              description:
                "Used when retrieving existing resources or information.",
            },
            {
              method: "POST",
              title: "Create or process",
              description:
                "Used for creating resources or sending data for processing.",
            },
            {
              method: "DELETE",
              title: "Remove resources",
              description:
                "Used where an API resource supports deletion.",
            },
          ].map((item) => (
            <div
              key={item.method}
              className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <div className="flex h-8 min-w-14 items-center justify-center rounded-lg bg-(--foreground)/5 px-2">
                <code className="text-[10px] font-semibold text-(--primary)">
                  {item.method}
                </code>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-(--foreground)">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-(--muted-foreground)">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Papers API */}
      <section id="papers-api" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Papers API
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Paper endpoints support operations around research papers stored in
          the Resyntra workspace.
        </p>

        <div className="mt-5 space-y-2">
          {[
            "Create or upload a research paper.",
            "Retrieve paper information.",
            "Retrieve papers belonging to the current user.",
            "Delete a paper when supported by the workspace.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <FileText className="h-4 w-4 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Search API */}
      <section id="search-api" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Search API
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Search endpoints provide access to research discovery functionality,
          including semantic and hybrid search workflows.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="space-y-3">
            {[
              "Search academic research using a query.",
              "Use semantic search to find conceptually related papers.",
              "Combine available search approaches through hybrid search.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Search className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

                <span className="text-xs leading-5 text-(--muted-foreground)">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI API */}
      <section id="ai-api" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          AI research API
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          AI endpoints support research workflows such as summarization,
          paper-based conversations, literature review generation, and
          research gap analysis.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Paper summarization",
            "Chat with research papers",
            "Literature review",
            "Research gap analysis",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-(--primary)" />

                <span className="text-xs font-medium text-(--foreground)">
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics API */}
      <section id="analytics-api" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Analytics API
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Analytics endpoints expose research activity metrics associated with
          the current workspace.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Workspace overview
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Analytics can include project, collection, paper, note, and
                citation counts together with recent activity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PPT API */}
      <section id="ppt-api" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          PPT Generator API
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The PPT Generator API accepts a selected paper and presentation
          configuration and returns the generated presentation output.
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-(--border) bg-(--surface) p-4">
          <code className="text-xs text-(--foreground)">
            POST /ppt-generator
          </code>
        </div>

        <div className="mt-4 rounded-xl border border-(--border) bg-(--surface) p-4">
          <p className="text-xs font-medium text-(--foreground)">
            Example request fields
          </p>

          <div className="mt-3 space-y-2">
            {["paper_id", "slides"].map((field) => (
              <div
                key={field}
                className="flex items-center gap-3 text-xs"
              >
                <Code2 className="h-3.5 w-3.5 text-(--primary)" />

                <code className="text-(--muted-foreground)">
                  {field}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section id="authentication" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Authentication
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Protected API operations use the authentication mechanism configured
          by the Resyntra backend. Client applications should provide valid
          authentication credentials when authentication is enabled.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Keep credentials secure
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
              Never expose authentication credentials or secret API
              configuration in client-side source code or public repositories.
            </p>
          </div>
        </div>
      </section>

      {/* Errors */}
      <section id="errors" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Handling errors
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Applications should handle unsuccessful API responses and display
          appropriate feedback to users. Check the response status and
          returned error information before continuing with dependent
          operations.
        </p>

        <div className="mt-5 space-y-2">
          {[
            "Validate required request data before sending requests.",
            "Handle network and server errors gracefully.",
            "Show meaningful feedback when an operation cannot be completed.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Authenticate",
            "Request",
            "Process",
            "Validate",
            "Use",
          ].map((step, index, array) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-(--border) bg-(--surface) px-3 py-2 text-(--foreground)">
                {step}
              </span>

              {index !== array.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-(--muted-foreground)" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Next */}
      <div className="border-t border-(--border) pt-6">
        <button
          type="button"
          onClick={() => onSectionChange("authentication")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Authentication
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default APIReferenceContent;