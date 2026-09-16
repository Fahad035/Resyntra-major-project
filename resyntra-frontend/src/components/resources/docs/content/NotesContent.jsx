import {
  FileText,
  Plus,
  Search,
  Pencil,
  FolderKanban,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const NotesContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <FileText className="h-4 w-4 text-(--primary)" />
          Research Tools
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Notes
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Capture research ideas, observations, findings, and important
          information while working with your literature.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Notes provide a dedicated place to record information during your
          research workflow. Use them to capture ideas from papers, document
          observations, prepare literature review material, or keep track of
          research questions.
        </p>
      </section>

      {/* Why notes */}
      <section id="why-use-notes" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Why use research notes?
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: Lightbulb,
              title: "Capture ideas",
              description:
                "Record new research ideas and observations while exploring literature.",
            },
            {
              icon: FileText,
              title: "Save important information",
              description:
                "Keep useful findings and concepts available for later reference.",
            },
            {
              icon: FolderKanban,
              title: "Support projects",
              description:
                "Maintain notes alongside the projects and research topics they belong to.",
            },
            {
              icon: Search,
              title: "Review later",
              description:
                "Create a personal research record that can be revisited during analysis and writing.",
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

      {/* Creating notes */}
      <section id="creating-notes" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Creating a note
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Create a note whenever you want to preserve an observation or idea
          during your research process.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Open Notes",
              description:
                "Navigate to the Notes area from your research workspace.",
            },
            {
              number: "02",
              title: "Create a note",
              description:
                "Use the create-note action and provide a meaningful title.",
            },
            {
              number: "03",
              title: "Write your content",
              description:
                "Record the research information, observation, question, or idea you want to preserve.",
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
            Give notes descriptive titles so you can quickly understand their
            purpose when returning to them later.
          </p>
        </div>
      </section>

      {/* Editing */}
      <section id="editing-notes" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Editing notes
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Research notes often evolve as your understanding of a topic
          develops. Update existing notes when new evidence, findings, or
          research ideas become available.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <Pencil className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Keep notes current
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
              Review and update notes as your research progresses instead of
              creating duplicate notes for every small change.
            </p>
          </div>
        </div>
      </section>

      {/* Useful note types */}
      <section id="useful-note-types" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Useful note types
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              title: "Paper observations",
              description:
                "Record important findings, methods, limitations, or questions from individual papers.",
            },
            {
              title: "Research ideas",
              description:
                "Capture possible research directions or ideas that emerge during literature exploration.",
            },
            {
              title: "Literature review notes",
              description:
                "Record themes and relationships that appear across multiple research papers.",
            },
            {
              title: "Research questions",
              description:
                "Maintain questions that require further investigation as you explore the literature.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <h3 className="text-sm font-semibold text-(--foreground)">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Notes and papers */}
      <section id="notes-and-papers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Notes and research papers
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Notes become more useful when they are created as part of your paper
          analysis workflow. While reading a paper, capture important
          observations and later use them when comparing literature or
          developing your research direction.
        </p>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Best practices
        </h2>

        <div className="mt-5 space-y-3">
          {[
            "Use clear and descriptive note titles.",
            "Keep each note focused on a specific idea or observation.",
            "Record enough context to understand the note later.",
            "Review notes regularly as your research develops.",
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
            "Read",
            "Capture",
            "Organize",
            "Review",
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
          onClick={() => onSectionChange("citations")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Citations
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default NotesContent;