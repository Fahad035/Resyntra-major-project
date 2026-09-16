import {
  BrainCircuit,
  Search,
  FileText,
  Lightbulb,
  GitBranch,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const ResearchGapContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <BrainCircuit className="h-4 w-4 text-(--primary)" />
          AI Features
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Research Gap Detection
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Explore existing literature and identify areas where additional
          research may be needed.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Research Gap Detection helps you examine a body of literature and
          identify potential areas that appear underexplored, unresolved, or
          insufficiently addressed by existing research.
        </p>
      </section>

      {/* What is a research gap */}
      <section id="what-is-a-research-gap" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          What is a research gap?
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A research gap is an area where existing literature does not fully
          answer a research question or where additional investigation may
          contribute useful evidence. Gaps can appear in methods, datasets,
          populations, applications, findings, or the scope of existing work.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: Search,
              title: "Underexplored topics",
              description:
                "Areas that have received comparatively limited investigation within the literature being reviewed.",
            },
            {
              icon: GitBranch,
              title: "Methodological gaps",
              description:
                "Situations where existing methods leave unanswered questions or have notable limitations.",
            },
            {
              icon: FileText,
              title: "Evidence gaps",
              description:
                "Questions where available studies provide incomplete, inconsistent, or limited evidence.",
            },
            {
              icon: Lightbulb,
              title: "New directions",
              description:
                "Potential research directions suggested by patterns or limitations in existing work.",
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

      {/* Preparing */}
      <section id="preparing-literature" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Preparing the literature
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Gap identification becomes more useful when the literature being
          analyzed is relevant to a clearly defined research question. Gather
          and organize the papers that provide evidence about your topic.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Define the research question",
              description:
                "Start with a focused question or research problem that you want to investigate.",
            },
            {
              number: "02",
              title: "Collect relevant literature",
              description:
                "Use uploaded papers and research discovery tools to build a relevant literature set.",
            },
            {
              number: "03",
              title: "Review existing evidence",
              description:
                "Understand the methods, findings, limitations, and conclusions across the selected literature.",
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
      </section>

      {/* Detection process */}
      <section id="detection-process" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Detection process
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The analysis can be approached by examining patterns across the
          available literature and looking for areas where existing work does
          not completely address the research problem.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Research question",
            "Literature",
            "Analyze",
            "Compare",
            "Potential gaps",
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

      {/* Areas */}
      <section id="gap-areas" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Areas to examine
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: FileText,
              title: "Methods",
              description:
                "Examine whether existing methodologies leave limitations or unanswered questions.",
            },
            {
              icon: Search,
              title: "Datasets and evidence",
              description:
                "Look for datasets, populations, or evidence that have received limited attention.",
            },
            {
              icon: GitBranch,
              title: "Research scope",
              description:
                "Consider whether existing studies are limited to particular contexts or conditions.",
            },
            {
              icon: Lightbulb,
              title: "Future directions",
              description:
                "Identify research directions suggested by limitations and unresolved questions.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <Icon className="h-4 w-4" />
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
            );
          })}
        </div>
      </section>

      {/* AI assistance */}
      <section id="ai-assisted-analysis" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          AI-assisted gap analysis
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          AI can help compare information across papers and surface possible
          patterns or unanswered questions. These outputs should be treated as
          research leads that require validation against the underlying
          literature.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Validate potential gaps
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                A potential gap identified by AI is not automatically a
                confirmed research gap. Check recent literature and the
                original sources before using it to define a research problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From gap to topic */}
      <section id="from-gap-to-topic" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          From research gap to research topic
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Once a potential gap has been identified, refine it into a specific
          research question. Consider the available evidence, methodology,
          dataset, scope, and expected contribution before defining the final
          research direction.
        </p>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Collect literature",
            "Review",
            "Compare",
            "Identify gaps",
            "Validate",
            "Define topic",
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
          onClick={() => onSectionChange("notes")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Notes
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default ResearchGapContent;