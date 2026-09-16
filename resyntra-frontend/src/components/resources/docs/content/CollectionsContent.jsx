import {
  Library,
  FolderKanban,
  FileText,
  Search,
  Plus,
  Tags,
  ArrowRight,
} from "lucide-react";

const CollectionsContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <Library className="h-4 w-4 text-(--primary)" />
          Research
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Collections
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Organize related research papers into collections so your literature
          stays structured, searchable, and easier to work with.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Collections provide a focused way to group papers that share a
          research topic, methodology, subject area, or any other relationship
          that is useful to your workflow.
        </p>
      </section>

      {/* What are collections */}
      <section id="what-are-collections" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          What are collections?
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A collection is a group of research papers maintained together inside
          your research workspace. Instead of managing every paper as an
          isolated document, collections let you create logical groups for
          specific research areas.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: FileText,
              title: "Related papers",
              description:
                "Keep papers covering the same topic or research question together.",
            },
            {
              icon: Tags,
              title: "Research themes",
              description:
                "Create groups around themes, methods, technologies, or study areas.",
            },
            {
              icon: FolderKanban,
              title: "Project organization",
              description:
                "Use collections to maintain focused literature sets within larger projects.",
            },
            {
              icon: Search,
              title: "Faster discovery",
              description:
                "Reduce the effort required to locate papers belonging to a specific research group.",
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
      <section id="creating-collections" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Creating a collection
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Create a collection when you want to maintain a dedicated group of
          papers for a particular research purpose.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Open Collections",
              description:
                "Navigate to the Collections area of your research workspace.",
            },
            {
              number: "02",
              title: "Create a collection",
              description:
                "Use the collection creation action and provide a meaningful name.",
            },
            {
              number: "03",
              title: "Add papers",
              description:
                "Add relevant papers to the collection so they can be managed together.",
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

      {/* Adding papers */}
      <section id="adding-papers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Adding papers to a collection
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Collections become useful when their papers represent a clear
          research context. Add papers that contribute to the same question,
          topic, methodology, or literature review.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <Plus className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Keep collection scope focused
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                A focused collection makes it easier to understand the
                literature and use the grouped papers during research analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections and projects */}
      <section id="collections-and-projects" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Collections and projects
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Collections and projects serve different organizational purposes.
          Projects represent broader research objectives, while collections
          can be used to group specific sets of literature within your
          research workflow.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-(--border)">
          <div className="grid grid-cols-2 border-b border-(--border) bg-(--surface)">
            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Projects
            </div>

            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Collections
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="border-r border-(--border) px-4 py-4">
              <p className="text-xs leading-5 text-(--muted-foreground)">
                Used for broader research objectives, workflows, and
                organization.
              </p>
            </div>

            <div className="px-4 py-4">
              <p className="text-xs leading-5 text-(--muted-foreground)">
                Used for focused groups of related research papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research workflow */}
      <section id="collection-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A practical workflow is to upload your papers first, review their
          content, and then organize related documents into focused
          collections.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Upload papers",
            "Review",
            "Group literature",
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
          onClick={() => onSectionChange("projects")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Projects
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default CollectionsContent;