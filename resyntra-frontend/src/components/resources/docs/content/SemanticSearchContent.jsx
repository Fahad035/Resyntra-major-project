import {
  Search,
  BrainCircuit,
  Sparkles,
  FileText,
  SlidersHorizontal,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const SemanticSearchContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <Search className="h-4 w-4 text-(--primary)" />
          AI Features
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Semantic Search
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Discover research by meaning rather than relying only on exact
          keyword matches.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Semantic Search helps you discover research that is conceptually
          related to your query. Instead of requiring the exact words used in
          a paper, the search system represents the meaning of your query and
          compares it with indexed research content.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          How semantic search works
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A semantic search workflow converts the search query into a numerical
          representation and compares it with representations of indexed
          research content. Results are then returned according to their
          semantic similarity to the query.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: Search,
              number: "01",
              title: "Enter a query",
              description:
                "Describe the research topic, problem, or concept you want to explore.",
            },
            {
              icon: BrainCircuit,
              number: "02",
              title: "Understand meaning",
              description:
                "The query is represented as an embedding for semantic comparison.",
            },
            {
              icon: Sparkles,
              number: "03",
              title: "Find related research",
              description:
                "Relevant research is returned based on semantic similarity.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-[10px] font-semibold text-(--muted-foreground)">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-semibold text-(--foreground)">
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

      {/* Semantic vs keyword */}
      <section id="semantic-vs-keyword" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Semantic search vs. keyword search
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Traditional keyword search primarily looks for matching terms,
          whereas semantic search focuses on the relationship between the
          meaning of the query and the indexed research content.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-(--border)">
          <div className="grid grid-cols-2 border-b border-(--border) bg-(--surface)">
            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Keyword search
            </div>

            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Semantic search
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="border-r border-(--border) px-4 py-4">
              <p className="text-xs leading-5 text-(--muted-foreground)">
                Primarily depends on matching words or phrases.
              </p>
            </div>

            <div className="px-4 py-4">
              <p className="text-xs leading-5 text-(--muted-foreground)">
                Uses semantic representations to identify conceptually related
                content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Query writing */}
      <section id="writing-queries" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Writing effective queries
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Semantic search works well with natural-language descriptions of
          your research intent. Describe what you are looking for instead of
          relying only on a short keyword.
        </p>

        <div className="mt-5 space-y-2">
          {[
            "Methods for detecting misinformation in social media",
            "Machine learning approaches for predicting crop production",
            "Deep learning techniques for medical image classification",
            "Research methods for intelligent traffic forecasting",
          ].map((query) => (
            <div
              key={query}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <Lightbulb className="h-3.5 w-3.5 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {query}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="understanding-results" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Understanding results
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Search results can help you identify research that is related to your
          query. Review the returned paper information and open relevant
          research for deeper reading.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: FileText,
              title: "Review paper information",
              description:
                "Check the title, authors, abstract, and other available metadata.",
            },
            {
              icon: SlidersHorizontal,
              title: "Refine your query",
              description:
                "If the results are too broad or narrow, adjust the wording of your research question.",
            },
            {
              icon: Search,
              title: "Explore related research",
              description:
                "Use relevant results as starting points for discovering additional literature.",
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

      {/* Use cases */}
      <section id="use-cases" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Research use cases
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Discover literature around a research topic",
            "Find papers using different terminology",
            "Explore related research methods",
            "Identify potentially relevant papers for a review",
          ].map((useCase) => (
            <div
              key={useCase}
              className="rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <div className="flex items-start gap-3">
                <Search className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

                <p className="text-xs leading-5 text-(--muted-foreground)">
                  {useCase}
                </p>
              </div>
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
            "Define topic",
            "Search",
            "Review results",
            "Refine",
            "Explore",
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
          onClick={() => onSectionChange("literature-review")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Literature Review
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default SemanticSearchContent;