import {
  Network,
  FileText,
  Search,
  BrainCircuit,
  Layers3,
  ListChecks,
  ArrowRight,
} from "lucide-react";

const LiteratureReviewContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <Network className="h-4 w-4 text-(--primary)" />
          AI Features
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Literature Review
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Analyze and organize research literature to build a clearer
          understanding of existing work around a research topic.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The Literature Review capability helps researchers work through a
          collection of relevant papers and identify important themes, methods,
          findings, and relationships across the literature.
        </p>
      </section>

      {/* Purpose */}
      <section id="purpose" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Purpose of a literature review
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A literature review provides a structured understanding of what has
          already been studied. It can help identify established approaches,
          recurring findings, areas of disagreement, and opportunities for
          further investigation.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: FileText,
              title: "Understand existing work",
              description:
                "Review the important ideas and findings reported across relevant papers.",
            },
            {
              icon: Layers3,
              title: "Identify themes",
              description:
                "Group related research into broader topics and areas of investigation.",
            },
            {
              icon: BrainCircuit,
              title: "Compare approaches",
              description:
                "Examine different methods and perspectives used by researchers.",
            },
            {
              icon: Search,
              title: "Find opportunities",
              description:
                "Use the literature to identify areas that may require further research.",
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
          Preparing your literature
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Start with a focused research question and gather papers that are
          relevant to that question. Semantic Search can help discover
          additional literature when your initial collection is incomplete.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Define the research topic",
              description:
                "Identify the research problem or topic that the review should address.",
            },
            {
              number: "02",
              title: "Gather relevant papers",
              description:
                "Upload or discover papers that contribute to the research topic.",
            },
            {
              number: "03",
              title: "Organize the literature",
              description:
                "Use projects and collections to keep related research structured.",
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

      {/* Review workflow */}
      <section id="review-workflow" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Literature review workflow
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A structured workflow helps turn a collection of individual papers
          into a coherent understanding of the research area.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Research question",
            "Literature",
            "Organize",
            "Compare",
            "Synthesize",
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

      {/* Analysis */}
      <section id="literature-analysis" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Analyzing the literature
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          When reviewing multiple papers, focus on how studies relate to one
          another. Compare their research questions, methodologies, findings,
          and limitations rather than examining each paper in isolation.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: ListChecks,
              title: "Compare methodologies",
              description:
                "Identify how different studies approach similar research problems.",
            },
            {
              icon: FileText,
              title: "Compare findings",
              description:
                "Look for consistent findings, differences, and areas of uncertainty.",
            },
            {
              icon: BrainCircuit,
              title: "Identify relationships",
              description:
                "Connect ideas across papers to build a broader understanding of the topic.",
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
      <section id="ai-assistance" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          AI-assisted literature analysis
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Resyntra's AI capabilities can support different stages of literature
          analysis. Use summaries to understand individual papers, Chat with
          Papers to investigate specific details, and Semantic Search to
          discover related research.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <BrainCircuit className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Use AI as research support
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                AI-generated analysis can accelerate exploration, but important
                academic interpretations and claims should be checked against
                the original research papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Synthesis */}
      <section id="synthesis" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Synthesizing findings
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The final stage is to connect the evidence across the literature.
          Instead of producing a list of individual paper summaries, organize
          the findings around themes, methods, results, and research questions.
        </p>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Define question",
            "Discover papers",
            "Summarize",
            "Compare",
            "Synthesize",
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
          onClick={() => onSectionChange("research-gap")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Research Gap Detection
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default LiteratureReviewContent;