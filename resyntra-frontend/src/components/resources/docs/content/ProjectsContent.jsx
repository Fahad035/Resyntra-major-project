import {
  FolderKanban,
  FileText,
  Library,
  BrainCircuit,
  BarChart3,
  Plus,
  ArrowRight,
} from "lucide-react";

const ProjectsContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <FolderKanban className="h-4 w-4 text-(--primary)" />
          Research
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Projects
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Organize your research around dedicated projects and keep papers,
          literature, AI analysis, and research activity connected in one
          workspace.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Projects provide a broader organizational layer for your research.
          A project can represent a research topic, academic assignment,
          thesis, paper, or another long-running research objective.
        </p>
      </section>

      {/* What are projects */}
      <section id="what-are-projects" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          What are projects?
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A project brings together the research material and activities
          associated with a specific objective. Instead of keeping papers and
          research tasks disconnected, projects provide a dedicated context
          for working with them.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: FileText,
              title: "Research papers",
              description:
                "Keep the papers relevant to a particular research objective together.",
            },
            {
              icon: Library,
              title: "Collections",
              description:
                "Use focused literature collections to organize groups of related papers.",
            },
            {
              icon: BrainCircuit,
              title: "AI analysis",
              description:
                "Use AI-powered research capabilities while working within your research context.",
            },
            {
              icon: BarChart3,
              title: "Research activity",
              description:
                "Track and understand research activity through the available workspace tools.",
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

      {/* Creating */}
      <section id="creating-projects" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Creating a project
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Create a project when you want a dedicated space for a research
          objective that may involve multiple papers, collections, and AI
          research tasks.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Open Projects",
              description:
                "Navigate to the Projects area in your research workspace.",
            },
            {
              number: "02",
              title: "Create a project",
              description:
                "Use the project creation action and provide a clear name that identifies the research objective.",
            },
            {
              number: "03",
              title: "Add research material",
              description:
                "Connect relevant papers and collections to the project as you build your research library.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-xs font-semibold text-(--primary)">
                {step.number}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-(--foreground)">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-(--muted-foreground)">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <Plus className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <p className="text-xs leading-5 text-(--muted-foreground)">
            Give each project a clear scope. This makes it easier to decide
            which papers and research activities belong inside it.
          </p>
        </div>
      </section>

      {/* Projects and collections */}
      <section id="projects-and-collections" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Projects and collections
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Projects and collections complement each other. Projects are useful
          for broader research objectives, while collections provide focused
          groups of related papers.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-(--border)">
          <div className="grid grid-cols-2 border-b border-(--border) bg-(--surface)">
            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Project
            </div>

            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Collection
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="border-r border-(--border) px-4 py-4">
              <p className="text-xs leading-5 text-(--muted-foreground)">
                Represents a broader research objective or workflow.
              </p>
            </div>

            <div className="px-4 py-4">
              <p className="text-xs leading-5 text-(--muted-foreground)">
                Represents a focused group of related research papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research workflow */}
      <section id="project-workflow" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Working with a project
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A project can act as the central context for your research workflow.
          Start by defining the objective, gather relevant literature, and
          progressively analyze and organize the material.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Define objective",
            "Collect papers",
            "Organize literature",
            "Analyze",
            "Review",
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

      {/* AI research */}
      <section id="ai-in-projects" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          AI-powered research inside projects
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Once the relevant literature is available, use Resyntra's AI
          capabilities to summarize papers, ask questions, search research,
          identify research gaps, and support literature review activities.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <BrainCircuit className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Keep analysis connected to your literature
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Organize the relevant papers before using AI research tools so
                that your workflow remains structured and easier to review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Build",
              description:
                "Create the project and gather relevant research papers.",
            },
            {
              number: "02",
              title: "Organize",
              description:
                "Use collections and project structure to manage literature.",
            },
            {
              number: "03",
              title: "Analyze",
              description:
                "Apply AI research tools to understand and explore the literature.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <span className="text-xs font-semibold text-(--primary)">
                {item.number}
              </span>

              <h3 className="mt-2 text-sm font-semibold text-(--foreground)">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next */}
      <div className="border-t border-(--border) pt-6">
        <button
          type="button"
          onClick={() => onSectionChange("ai-summarizer")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              AI Summarizer
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default ProjectsContent;