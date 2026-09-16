import {
  FileText,
  FolderKanban,
  Library,
  Search,
  MessageSquare,
  Trash2,
  Settings2,
  ArrowRight,
} from "lucide-react";

const PaperManagementContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <FileText className="h-4 w-4 text-(--primary)" />
          Research
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Paper Management
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Manage your research papers, organize your literature, and keep
          important research material accessible from one workspace.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Paper Management provides a central place for the papers you have
          added to Resyntra. Each paper can be processed for AI-powered
          analysis and used across features such as summarization, chat,
          semantic search, citations, and research discovery.
        </p>
      </section>

      {/* Paper Library */}
      <section id="paper-library" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Paper library
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Your uploaded papers are organized in the research workspace so you
          can quickly find and work with the documents that matter to your
          research.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: FileText,
              title: "Paper details",
              description:
                "View document information such as title, authors, file details, and processing status.",
            },
            {
              icon: Search,
              title: "Find papers",
              description:
                "Locate papers in your research library and continue working with them.",
            },
            {
              icon: Library,
              title: "Collections",
              description:
                "Group related papers into collections for easier literature organization.",
            },
            {
              icon: FolderKanban,
              title: "Projects",
              description:
                "Organize papers around specific research projects and workflows.",
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

      {/* Processing */}
      <section id="paper-processing" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Paper processing
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          After a paper is uploaded, Resyntra processes the document so that
          its content can be used by the platform's AI research features.
          Processing status helps you understand when a paper is ready.
        </p>

        <div className="mt-5 overflow-hidden rounded-xl border border-(--border)">
          <div className="grid grid-cols-[120px_1fr] border-b border-(--border) bg-(--surface)">
            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Status
            </div>
            <div className="px-4 py-3 text-xs font-semibold text-(--foreground)">
              Meaning
            </div>
          </div>

          {[
            [
              "Pending",
              "The paper has been added but processing has not started.",
            ],
            [
              "Processing",
              "The document is currently being processed.",
            ],
            [
              "Completed",
              "The paper is ready to be used with supported research features.",
            ],
            [
              "Failed",
              "Processing encountered an error and the document needs attention.",
            ],
          ].map(([status, description], index, array) => (
            <div
              key={status}
              className={`
                grid grid-cols-[120px_1fr]
                ${
                  index !== array.length - 1
                    ? "border-b border-(--border)"
                    : ""
                }
              `}
            >
              <div className="px-4 py-3 text-xs font-medium text-(--foreground)">
                {status}
              </div>

              <div className="px-4 py-3 text-xs leading-5 text-(--muted-foreground)">
                {description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Working with papers */}
      <section id="working-with-papers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Working with papers
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Once a paper is available in your workspace, you can use it as the
          starting point for several research tasks.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: FileText,
              title: "Summarize",
              description:
                "Generate an AI-assisted summary to understand the main ideas of a research paper.",
            },
            {
              icon: MessageSquare,
              title: "Chat with the paper",
              description:
                "Ask questions about the indexed paper and retrieve relevant information from its content.",
            },
            {
              icon: Search,
              title: "Search semantically",
              description:
                "Use semantic search to discover concepts and research related to the meaning of your query.",
            },
            {
              icon: Library,
              title: "Organize research",
              description:
                "Add papers to collections and projects to maintain a structured research library.",
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

      {/* Organizing */}
      <section id="organizing-papers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Organizing papers
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          A structured paper library makes it easier to manage literature as
          your research grows. Resyntra supports organizing research around
          collections and projects so related papers can stay together.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <Settings2 className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Recommended organization
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Use projects for broader research objectives and collections
                for focused groups of related papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Removing papers */}
      <section id="removing-papers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Removing papers
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Papers that are no longer required can be removed from your research
          library. Before deleting a paper, make sure you no longer need it for
          your current research workflow.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <Trash2 className="mt-0.5 h-4 w-4 shrink-0 text-(--muted-foreground)" />

          <p className="text-xs leading-5 text-(--muted-foreground)">
            Deleting a paper should be treated as a library-management action.
            Keep a copy of important research documents outside the platform
            when appropriate.
          </p>
        </div>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Upload",
            "Process",
            "Review",
            "Organize",
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
          onClick={() => onSectionChange("collections")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Collections
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default PaperManagementContent;