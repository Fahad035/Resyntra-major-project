import {
  BarChart3,
  TrendingUp,
  FileText,
  FolderKanban,
  StickyNote,
  Quote,
  Activity,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const AnalyticsContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <BarChart3 className="h-4 w-4 text-(--primary)" />
          Research Tools
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Research Analytics
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Monitor your research activity and understand how your papers,
          projects, notes, collections, and citations are progressing.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Research Analytics provides an overview of activity across your
          Resyntra workspace. It brings key research metrics together so you
          can quickly understand the current state of your research workflow.
        </p>
      </section>

      {/* Metrics */}
      <section id="research-metrics" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Research metrics
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Analytics can summarize activity across several areas of your
          research workspace.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: FolderKanban,
              title: "Projects",
              description:
                "Track the number of research projects associated with your workspace.",
            },
            {
              icon: FileText,
              title: "Papers",
              description:
                "Monitor the research papers available in your workspace.",
            },
            {
              icon: StickyNote,
              title: "Notes",
              description:
                "Understand how many research notes have been created.",
            },
            {
              icon: Quote,
              title: "Citations",
              description:
                "Track citation records associated with your research workflow.",
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

      {/* Activity */}
      <section id="activity" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Research activity
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Activity metrics help you understand how actively your research
          workspace is being used over time. For example, monthly paper and
          note counts can provide a simple view of recent research activity.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <Activity className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Recent activity
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                Use recent activity metrics to see how your research collection
                and supporting notes are developing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Analytics dashboard
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The Research Analytics dashboard brings your workspace metrics into
          a single view. It can help you monitor your overall research
          activity without checking each area individually.
        </p>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: BarChart3,
              title: "Overview metrics",
              description:
                "Review high-level counts for projects, collections, papers, notes, and citations.",
            },
            {
              icon: TrendingUp,
              title: "Activity trends",
              description:
                "Use recent activity information to understand changes in your research workflow.",
            },
            {
              icon: FileText,
              title: "Paper activity",
              description:
                "Monitor the number of papers added during the current period.",
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

      {/* Monthly metrics */}
      <section id="monthly-metrics" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Monthly metrics
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Monthly metrics provide a focused view of recent activity. They can
          be useful for tracking progress during an active research period,
          semester, thesis, or project phase.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-(--border) bg-(--surface) p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-(--primary)" />

              <span className="text-sm font-semibold text-(--foreground)">
                Papers this month
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-(--muted-foreground)">
              Shows how many papers have been added during the current month.
            </p>
          </div>

          <div className="rounded-xl border border-(--border) bg-(--surface) p-4">
            <div className="flex items-center gap-3">
              <StickyNote className="h-4 w-4 text-(--primary)" />

              <span className="text-sm font-semibold text-(--foreground)">
                Notes this month
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-(--muted-foreground)">
              Shows how many research notes have been created during the
              current month.
            </p>
          </div>
        </div>
      </section>

      {/* Refresh */}
      <section id="refreshing-data" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Refreshing analytics
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Analytics are based on the research activity associated with your
          workspace. Refresh the dashboard when you want to retrieve the
          latest available metrics.
        </p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4">
          <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

          <div>
            <h3 className="text-sm font-semibold text-(--foreground)">
              Keep metrics current
            </h3>

            <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
              If you have recently added papers or notes, refresh the analytics
              view to retrieve updated counts.
            </p>
          </div>
        </div>
      </section>

      {/* Using analytics */}
      <section id="using-analytics" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Using analytics during research
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Analytics are most useful when combined with the rest of your
          research workflow. Use them to monitor activity while continuing to
          collect papers, organize literature, create notes, and develop your
          research work.
        </p>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Research",
            "Organize",
            "Analyze",
            "Monitor",
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

      {/* Next */}
      <div className="border-t border-(--border) pt-6">
        <button
          type="button"
          onClick={() => onSectionChange("ppt-generator")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              PPT Generator
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default AnalyticsContent;