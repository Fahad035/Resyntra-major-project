import {
  Presentation,
  FileText,
  Settings2,
  Sparkles,
  LayoutTemplate,
  Download,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const PPTGeneratorContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <Presentation className="h-4 w-4 text-(--primary)" />
          Research Tools
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          PPT Generator
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Transform research papers into structured academic presentations
          with AI-assisted slide generation.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The PPT Generator helps turn the information contained in a research
          paper into a presentation structure. Select a paper, configure the
          presentation, generate the slides, and export the resulting
          presentation for academic use.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          How it works
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              icon: FileText,
              title: "Select a research paper",
              description:
                "Choose the paper that will provide the source material for the presentation.",
            },
            {
              number: "02",
              icon: Settings2,
              title: "Configure the presentation",
              description:
                "Set the required presentation options, including the number of slides.",
            },
            {
              number: "03",
              icon: Sparkles,
              title: "Generate slides",
              description:
                "Resyntra processes the selected research content and generates a structured presentation.",
            },
            {
              number: "04",
              icon: Download,
              title: "Export the presentation",
              description:
                "Download the generated presentation for editing, presenting, or sharing.",
            },
          ].map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-wider text-(--primary)">
                      {step.number}
                    </span>

                    <h3 className="text-sm font-semibold text-(--foreground)">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Paper selection */}
      <section id="paper-selection" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Selecting a paper
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Start by selecting a research paper from your available papers.
          The selected paper acts as the primary source for the generated
          presentation.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Choose the relevant source
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Select a paper that contains the research findings,
                methodology, results, and other information you want to
                present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation settings */}
      <section id="presentation-settings" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Presentation settings
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Configure the presentation before generating it. One important
          setting is the number of slides required for the presentation.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: LayoutTemplate,
              title: "Slide structure",
              description:
                "Use a structured sequence to organize the major parts of the research paper.",
            },
            {
              icon: Settings2,
              title: "Slide count",
              description:
                "Choose the number of slides appropriate for the intended presentation.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <Icon className="h-4 w-4 text-(--primary)" />

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

      {/* Generated presentation */}
      <section id="generated-presentation" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Generated presentation
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          After generation, review the presentation structure and content.
          Generated slides are intended to provide a starting point that can
          be refined for the specific academic audience and presentation
          requirements.
        </p>

        <div className="mt-5 space-y-3">
          {[
            "Review the slide titles and structure.",
            "Check that important research findings are represented correctly.",
            "Verify technical terminology, numbers, and conclusions.",
            "Adjust the presentation for your audience and time limit.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Export */}
      <section id="exporting" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Exporting the presentation
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Once the generated presentation has been reviewed, export it for
          further editing or presentation. You can refine the generated
          content using your preferred presentation software.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <Download className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Review before presenting
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
              AI-generated presentations should be reviewed and edited to
              ensure that the final material accurately represents the source
              research.
            </p>
          </div>
        </div>
      </section>

      {/* Academic use cases */}
      <section id="academic-use-cases" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Academic use cases
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Research paper presentations",
            "Project reviews",
            "Seminar presentations",
            "Thesis discussions",
          ].map((useCase) => (
            <div
              key={useCase}
              className="rounded-xl border border-(--border) bg-(--surface) px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Presentation className="h-4 w-4 text-(--primary)" />

                <span className="text-xs font-medium text-(--foreground)">
                  {useCase}
                </span>
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
            "Select paper",
            "Configure",
            "Generate",
            "Review",
            "Edit",
            "Present",
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

      {/* Previous / next */}
      <div className="border-t border-(--border) pt-6">
        <button
          type="button"
          onClick={() => onSectionChange("api-reference")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              API Reference
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default PPTGeneratorContent;