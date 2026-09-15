import { ArrowRight, CheckCircle2, Copy, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const DocsContent = () => {
  return (
    <article className="min-w-0 max-w-3xl">
      {/* Overview */}
      <section id="overview" className="scroll-mt-24">
        <div className="mb-4 inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-2.5 py-1 text-xs font-medium text-(--muted-foreground)">
          Documentation
        </div>

        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-(--foreground) sm:text-5xl">
          Resyntra Documentation
        </h1>

        <p className="mt-5 text-base leading-7 text-(--muted-foreground) sm:text-lg sm:leading-8">
          Everything you need to understand and use Resyntra for
          AI-powered academic research, from discovering literature to
          analyzing papers and creating research outputs.
        </p>

        <div className="mt-8 rounded-xl border border-(--border) bg-(--surface) p-5">
          <p className="text-sm leading-6 text-(--muted-foreground)">
            Resyntra brings research discovery, paper analysis, semantic
            search, AI assistance, citation management, and research
            productivity into one connected workspace.
          </p>
        </div>
      </section>

      {/* What is Resyntra */}
      <section
        id="what-is-resyntra"
        className="mt-16 scroll-mt-24 border-t border-(--border) pt-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          What is Resyntra?
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          Resyntra is an intelligent research assistant designed to help
          students and researchers work with academic literature more
          efficiently. Instead of switching between multiple tools,
          researchers can use a connected environment to organize papers,
          understand complex content, search by meaning, and interact with
          their research using AI.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          The platform is designed around the complete research workflow:
          discovering relevant information, collecting research papers,
          analyzing literature, connecting ideas, and turning research
          findings into useful outputs.
        </p>
      </section>

      {/* Getting Started */}
      <section
        id="getting-started"
        className="mt-16 scroll-mt-24 border-t border-(--border) pt-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Getting started
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          A typical Resyntra workflow begins with creating a research
          workspace and adding the papers you want to study.
        </p>

        <div className="mt-7 space-y-3">
          {[
            {
              number: "01",
              title: "Create a workspace",
              description:
                "Create a focused environment for a research project and keep related work organized.",
            },
            {
              number: "02",
              title: "Upload your papers",
              description:
                "Add academic papers to your research library for AI-assisted analysis.",
            },
            {
              number: "03",
              title: "Explore and analyze",
              description:
                "Summarize papers, ask questions, search semantically, and explore relationships between research.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="flex gap-4 rounded-xl border border-(--border) p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-xs font-semibold text-(--primary)">
                {step.number}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-(--foreground)">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-(--muted-foreground)">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Link
            to="/workspace"
            className="group inline-flex items-center gap-2 text-sm font-medium text-(--primary)"
          >
            Open Research Workspace
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Research Workflow */}
      <section
        id="research-workflow"
        className="mt-16 scroll-mt-24 border-t border-(--border) pt-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Research workflow
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          Resyntra is structured around the stages researchers commonly move
          through when working with academic literature.
        </p>

        <div className="mt-7 overflow-hidden rounded-xl border border-(--border)">
          {[
            "Discover relevant research",
            "Upload and organize papers",
            "Understand complex literature",
            "Ask questions about papers",
            "Connect related research",
            "Generate research outputs",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 border-b border-(--border) px-4 py-3.5 last:border-b-0"
            >
              <span className="w-6 text-xs font-medium text-(--muted-foreground)">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-sm text-(--foreground)">
                {item}
              </span>

              <CheckCircle2 className="ml-auto h-4 w-4 text-(--muted-foreground)" />
            </div>
          ))}
        </div>
      </section>

      {/* AI Research */}
      <section
        id="ai-powered-research"
        className="mt-16 scroll-mt-24 border-t border-(--border) pt-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          AI-powered research
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          Resyntra provides AI-powered capabilities that help reduce the
          effort required to understand and work with academic literature.
        </p>

        <div className="mt-7 space-y-3">
          {[
            {
              title: "AI Summarizer",
              description:
                "Generate concise summaries from lengthy academic papers.",
              href: "/ai-summarizer",
            },
            {
              title: "Chat with Papers",
              description:
                "Ask questions and interact with information contained in your research papers.",
              href: "/chat-with-papers",
            },
            {
              title: "Semantic Search",
              description:
                "Find research based on meaning and context rather than relying only on exact keywords.",
              href: "/semantic-search",
            },
            {
              title: "Literature Review",
              description:
                "Support the process of organizing and understanding related research.",
              href: "/literature-review",
            },
            {
              title: "Research Gap Detection",
              description:
                "Explore potential gaps and opportunities across the research you are analyzing.",
              href: "/research-gap",
            },
          ].map((feature) => (
            <Link
              key={feature.title}
              to={feature.href}
              className="group block rounded-xl border border-(--border) p-4 transition-colors hover:bg-(--surface)"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold text-(--foreground)">
                  {feature.title}
                </h3>

                <ArrowRight className="h-3.5 w-3.5 text-(--muted-foreground) transition-transform group-hover:translate-x-1 group-hover:text-(--primary)" />
              </div>

              <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Example */}
      <section className="mt-16 border-t border-(--border) pt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Example workflow
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          A simple example of how a researcher can use Resyntra during a
          literature study.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
          <div className="flex items-center justify-between border-b border-(--border) px-4 py-3">
            <span className="text-xs font-medium text-(--muted-foreground)">
              Research workflow
            </span>

            <button
              type="button"
              className="rounded-md p-1.5 text-(--muted-foreground) transition-colors hover:bg-(--foreground)/5 hover:text-(--foreground)"
              aria-label="Copy workflow"
            >
              <Copy className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-1 p-4 font-mono text-xs leading-6 text-(--muted-foreground)">
            <p>
              <span className="text-(--primary)">1.</span>{" "}
              Upload relevant papers
            </p>

            <p>
              <span className="text-(--primary)">2.</span>{" "}
              Generate paper summaries
            </p>

            <p>
              <span className="text-(--primary)">3.</span>{" "}
              Ask questions about the literature
            </p>

            <p>
              <span className="text-(--primary)">4.</span>{" "}
              Search for related research
            </p>

            <p>
              <span className="text-(--primary)">5.</span>{" "}
              Identify useful research insights
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section
        id="next-steps"
        className="mt-16 scroll-mt-24 border-t border-(--border) pt-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Next steps
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground) sm:text-base">
          Continue exploring Resyntra through the guides and resources
          available across the platform.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <Link
            to="/resources/tutorials"
            className="group rounded-xl border border-(--border) p-4 transition-colors hover:bg-(--surface)"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-(--foreground)">
                Tutorials
              </h3>

              <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform group-hover:translate-x-1 group-hover:text-(--primary)" />
            </div>

            <p className="mt-1.5 text-sm text-(--muted-foreground)">
              Follow practical guides for using Resyntra.
            </p>
          </Link>

          <Link
            to="/resources/api-reference"
            className="group rounded-xl border border-(--border) p-4 transition-colors hover:bg-(--surface)"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-(--foreground)">
                API Reference
              </h3>

              <ExternalLink className="h-4 w-4 text-(--muted-foreground) transition-colors group-hover:text-(--primary)" />
            </div>

            <p className="mt-1.5 text-sm text-(--muted-foreground)">
              Explore the developer resources and available APIs.
            </p>
          </Link>
        </div>
      </section>

      {/* Previous / Next */}
      <div className="mt-16 grid gap-3 border-t border-(--border) pt-8 sm:grid-cols-2">
        <Link
          to="/resources"
          className="group rounded-xl border border-(--border) p-4 transition-colors hover:bg-(--surface)"
        >
          <p className="text-xs text-(--muted-foreground)">Previous</p>

          <div className="mt-1 flex items-center gap-2 text-sm font-medium text-(--foreground)">
            Resources
            <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
          </div>
        </Link>

        <Link
          to="/resources/tutorials"
          className="group rounded-xl border border-(--border) p-4 text-right transition-colors hover:bg-(--surface)"
        >
          <p className="text-xs text-(--muted-foreground)">Next</p>

          <div className="mt-1 flex items-center justify-end gap-2 text-sm font-medium text-(--foreground)">
            Tutorials
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default DocsContent;