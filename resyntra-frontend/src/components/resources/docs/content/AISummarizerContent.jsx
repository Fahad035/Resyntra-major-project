import {
  FileText,
  Sparkles,
  ListChecks,
  BrainCircuit,
  Clock3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const AISummarizerContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <Sparkles className="h-4 w-4 text-(--primary)" />
          AI Features
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          AI Summarizer
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Quickly understand the key ideas, findings, methods, and conclusions
          of a research paper with AI-assisted summarization.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The AI Summarizer analyzes an uploaded research paper and produces a
          concise representation of its important content. It can help you
          understand a paper before reading it in depth and identify the areas
          that deserve closer attention.
        </p>
      </section>

      {/* What it analyzes */}
      <section id="what-it-analyzes" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          What the summarizer analyzes
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The summarizer uses the content of the selected research paper to
          identify the information most useful for understanding the study.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: BrainCircuit,
              title: "Main ideas",
              description:
                "Understand the central topic and ideas presented by the paper.",
            },
            {
              icon: ListChecks,
              title: "Key findings",
              description:
                "Identify important results and conclusions reported by the study.",
            },
            {
              icon: FileText,
              title: "Research approach",
              description:
                "Get a concise view of the methodology and approach used in the research.",
            },
            {
              icon: Sparkles,
              title: "Important insights",
              description:
                "Surface useful information that can help you decide what to read in detail.",
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

      {/* How to use */}
      <section id="how-to-use" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          How to use AI Summarizer
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Select a paper",
              description:
                "Choose a processed research paper from your workspace.",
            },
            {
              number: "02",
              title: "Open the summarizer",
              description:
                "Use the AI Summarizer feature for the selected paper.",
            },
            {
              number: "03",
              title: "Generate the summary",
              description:
                "Start the summarization process and allow the AI system to analyze the paper.",
            },
            {
              number: "04",
              title: "Review the result",
              description:
                "Read the generated summary and return to the original paper when deeper analysis is required.",
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

      {/* Best use */}
      <section id="best-use" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          When to use it
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: Clock3,
              title: "Initial paper screening",
              description:
                "Use summaries to quickly understand papers before deciding which ones require detailed reading.",
            },
            {
              icon: ListChecks,
              title: "Literature review preparation",
              description:
                "Create a quick understanding of individual papers while building a broader literature review.",
            },
            {
              icon: BrainCircuit,
              title: "Research exploration",
              description:
                "Use summaries to identify useful concepts, methods, and findings across your research library.",
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

      {/* Important note */}
      <section id="review-summary" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Review AI-generated summaries
        </h2>

        <div className="mt-4 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <p className="text-xs leading-5 text-(--muted-foreground)">
              AI-generated summaries are intended to support research
              exploration. For important academic claims, verify the relevant
              information against the original paper.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Upload paper",
            "Process",
            "Summarize",
            "Review",
            "Analyze",
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
          onClick={() => onSectionChange("chat")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Chat with Papers
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default AISummarizerContent;