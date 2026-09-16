import {
  BookOpen,
  Quote,
  FileText,
  Copy,
  CheckCircle2,
  Search,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const CitationsContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <BookOpen className="h-4 w-4 text-(--primary)" />
          Research Tools
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Citations
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Generate and manage academic citations from research papers while
          keeping your references organized.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The Citations tool helps researchers work with bibliographic
          information from papers and prepare references for academic writing,
          reports, literature reviews, and research projects.
        </p>
      </section>

      {/* Why citations */}
      <section id="why-citations-matter" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Why citations matter
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: Quote,
              title: "Credit original work",
              description:
                "Citations identify the research and ideas that support your academic work.",
            },
            {
              icon: Search,
              title: "Support claims",
              description:
                "References allow readers to trace important statements back to their sources.",
            },
            {
              icon: FileText,
              title: "Build references",
              description:
                "Bibliographic information can be organized into references for academic documents.",
            },
            {
              icon: GraduationCap,
              title: "Improve academic writing",
              description:
                "Consistent referencing helps maintain a structured and traceable research workflow.",
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

      {/* Creating citation */}
      <section id="creating-citations" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Creating a citation
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Start with a research paper that contains the bibliographic
          information required for the reference you want to create.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Select a paper",
              description:
                "Choose the research paper whose bibliographic information you want to reference.",
            },
            {
              number: "02",
              title: "Choose a citation format",
              description:
                "Select the citation style required by your academic document or institution.",
            },
            {
              number: "03",
              title: "Generate the citation",
              description:
                "Generate the formatted reference using the available paper metadata.",
            },
            {
              number: "04",
              title: "Copy and use",
              description:
                "Copy the generated citation and add it to your academic document.",
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

      {/* Citation information */}
      <section id="citation-information" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Citation information
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A citation may use bibliographic information such as the paper title,
          authors, publication year, journal or conference information, and
          DOI when available.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="space-y-3">
            {[
              "Authors",
              "Paper title",
              "Publication year",
              "Journal or conference",
              "DOI or available identifier",
            ].map((field) => (
              <div
                key={field}
                className="flex items-center gap-3 text-xs"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-(--primary)" />

                <span className="text-(--muted-foreground)">
                  {field}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation styles */}
      <section id="citation-styles" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Citation styles
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Different academic disciplines and institutions use different
          citation formats. Select the style required for your assignment,
          paper, thesis, or publication.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "APA",
            "MLA",
            "Chicago",
            "IEEE",
          ].map((style) => (
            <div
              key={style}
              className="rounded-xl border border-(--border) bg-(--surface) px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-(--primary)" />

                <span className="text-sm font-medium text-(--foreground)">
                  {style}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Copying */}
      <section id="copying-citations" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Copying citations
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Once a citation has been generated, use the copy action to transfer
          the formatted reference into your research document or reference
          manager.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <Copy className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Check the copied reference
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
              Always verify that the generated bibliographic information
              matches the original source before submitting academic work.
            </p>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section id="verification" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Verification
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Citation formatting depends on the quality and completeness of the
          available metadata. Check important references against the original
          publication, especially when information such as authors, dates, or
          identifiers is incomplete.
        </p>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Best practices
        </h2>

        <div className="mt-5 space-y-3">
          {[
            "Use the citation style required by your institution or publication.",
            "Verify bibliographic information against the original paper.",
            "Check author names, publication year, title, and DOI when available.",
            "Keep citation formatting consistent throughout your document.",
          ].map((practice) => (
            <div
              key={practice}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {practice}
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
            "Select paper",
            "Review metadata",
            "Choose style",
            "Generate",
            "Verify",
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
          onClick={() => onSectionChange("analytics")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Research Analytics
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default CitationsContent;