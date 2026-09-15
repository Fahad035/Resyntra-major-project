import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  FileText,
  FolderKanban,
  Layers3,
  Quote,
  RefreshCw,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import analyticsApi from "@/api/analytics";

const ResearchDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await analyticsApi.getOverview();

      setAnalytics(data);
    } catch (err) {
      console.error("Analytics fetch error:", err);

      setError(
        err?.response?.data?.detail ||
          "Unable to load research analytics."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  /*
   * ------------------------------------------------------------
   * REAL BACKEND ANALYTICS
   * ------------------------------------------------------------
   */

  const activityData = useMemo(() => {
    if (!analytics) {
      return [];
    }

    return [
      {
        label: "Projects",
        shortLabel: "PRO",
        value: analytics.total_projects || 0,
      },
      {
        label: "Collections",
        shortLabel: "COL",
        value: analytics.total_collections || 0,
      },
      {
        label: "Notes",
        shortLabel: "NOT",
        value: analytics.total_notes || 0,
      },
      {
        label: "Notes / Month",
        shortLabel: "N/M",
        value: analytics.notes_this_month || 0,
      },
      {
        label: "Papers",
        shortLabel: "PAP",
        value: analytics.total_papers || 0,
      },
      {
        label: "Papers / Month",
        shortLabel: "P/M",
        value: analytics.papers_this_month || 0,
      },
      {
        label: "Citations",
        shortLabel: "CIT",
        value: analytics.total_citations || 0,
      },
    ];
  }, [analytics]);

  const maxActivity = Math.max(
    ...activityData.map((item) => item.value),
    1
  );

  const totalResearchItems =
    (analytics?.total_papers || 0) +
    (analytics?.total_notes || 0);

  const monthlyItems =
    (analytics?.papers_this_month || 0) +
    (analytics?.notes_this_month || 0);

  const paperShare =
    totalResearchItems > 0
      ? Math.round(
          ((analytics?.total_papers || 0) /
            totalResearchItems) *
            100
        )
      : 0;

  const noteShare =
    totalResearchItems > 0
      ? Math.round(
          ((analytics?.total_notes || 0) /
            totalResearchItems) *
            100
        )
      : 0;

  /*
   * ------------------------------------------------------------
   * LOADING STATE
   * ------------------------------------------------------------
   */

  if (loading && !analytics) {
    return (
      <section
        id="research-analytics"
        className="py-24 lg:py-32"
      >
        <div className="mx-auto w-[92%] max-w-7xl">

          <div className="mb-10">
            <div className="h-4 w-32 animate-pulse rounded bg-(--surface-secondary)" />

            <div className="mt-4 h-10 w-80 animate-pulse rounded-xl bg-(--surface-secondary)" />

            <div className="mt-4 h-5 w-full max-w-xl animate-pulse rounded bg-(--surface-secondary)" />
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="h-72 animate-pulse rounded-4xl bg-(--surface)" />
            <div className="h-72 animate-pulse rounded-4xl bg-(--surface)" />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-48 animate-pulse rounded-[28px] bg-(--surface)"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /*
   * ------------------------------------------------------------
   * ERROR STATE
   * ------------------------------------------------------------
   */

  if (error && !analytics) {
    return (
      <section
        id="research-analytics"
        className="py-24 lg:py-32"
      >
        <div className="mx-auto w-[92%] max-w-7xl">
          <div
            className="
              rounded-4xl
              border
              border-(--danger)/20
              bg-(--danger)/5
              p-8
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-(--danger)/10
                text-(--danger)
              "
            >
              <Activity className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-(--foreground)">
              Analytics unavailable
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-(--muted-foreground)">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchAnalytics}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-(--primary)
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-(--primary-hover)
              "
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="research-analytics"
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* ========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-(--primary)
                  shadow-[0_0_12px_rgba(6,182,212,.6)]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-(--primary)
                "
              >
                Workspace Intelligence
              </span>
            </div>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                tracking-tight
                text-(--foreground)
                sm:text-5xl
              "
            >
              Your research,
              <span className="text-(--primary)">
                {" "}
                quantified.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-(--muted-foreground)
                sm:text-base
              "
            >
              A live overview of the research activity
              recorded inside your Resyntra workspace.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchAnalytics}
            disabled={loading}
            className="
              group
              inline-flex
              items-center
              gap-2
              self-start
              rounded-xl
              border
              border-(--border)
              bg-(--surface)
              px-4
              py-2.5
              text-sm
              font-medium
              text-(--foreground)
              shadow-sm
              transition-all
              duration-200
              hover:border-(--primary)
              hover:text-(--primary)
              disabled:cursor-not-allowed
              disabled:opacity-50
              lg:self-auto
            "
          >
            <RefreshCw
              className={`h-4 w-4 transition-transform ${
                loading ? "animate-spin" : ""
              }`}
            />

            Refresh Data
          </button>
        </div>

        {/* ========================================================
            FEATURED ANALYTICS
        ========================================================= */}

        <div className="grid gap-6 lg:grid-cols-12">

          {/* ------------------------------------------------------
              PRIMARY RESEARCH CARD
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              relative
              overflow-hidden
              rounded-4xl
              border
              border-(--border)
              bg-(--surface)
              p-7
              shadow-(--shadow)
              lg:col-span-7
              lg:p-9
            "
          >
            {/* Background decoration */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-(--primary)/5
                blur-3xl
              "
            />

            <div className="relative">

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-(--primary)/10
                        text-(--primary)
                      "
                    >
                      <BookOpen className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-medium text-(--muted-foreground)">
                      Research Library
                    </span>
                  </div>

                  <div className="mt-7 flex items-end gap-3">
                    <span
                      className="
                        text-6xl
                        font-semibold
                        tracking-tighter
                        text-(--foreground)
                        sm:text-7xl
                      "
                    >
                      {analytics.total_papers}
                    </span>

                    <span className="mb-2 text-sm text-(--muted-foreground)">
                      papers
                    </span>
                  </div>

                  <p className="mt-3 max-w-md text-sm leading-6 text-(--muted-foreground)">
                    Research papers currently available
                    inside your workspace.
                  </p>
                </div>

                <div
                  className="
                    hidden
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/5
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-emerald-500
                    sm:flex
                    sm:items-center
                    sm:gap-2
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  Live
                </div>
              </div>

              {/* Activity comparison */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div
                  className="
                    rounded-2xl
                    border
                    border-(--border)
                    bg-(--surface-secondary)
                    p-5
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-(--muted-foreground)">
                      Added this month
                    </span>

                    <TrendingUp className="h-4 w-4 text-(--primary)" />
                  </div>

                  <p className="mt-4 text-2xl font-semibold text-(--foreground)">
                    {analytics.papers_this_month}
                  </p>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-(--background)">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width:
                          analytics.total_papers > 0
                            ? `${Math.min(
                                (analytics.papers_this_month /
                                  analytics.total_papers) *
                                  100,
                                100
                              )}%`
                            : "0%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="h-full rounded-full bg-(--primary)"
                    />
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-(--border)
                    bg-(--surface-secondary)
                    p-5
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-(--muted-foreground)">
                      Total citations
                    </span>

                    <Quote className="h-4 w-4 text-(--primary)" />
                  </div>

                  <p className="mt-4 text-2xl font-semibold text-(--foreground)">
                    {analytics.total_citations}
                  </p>

                  <p className="mt-3 text-xs text-(--muted-foreground)">
                    Recorded across your workspace
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------------
              ACTIVITY VISUALIZATION
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
            className="
              rounded-4xl
              border
              border-(--border)
              bg-(--surface)
              p-7
              shadow-(--shadow)
              lg:col-span-5
              lg:p-9
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted-foreground)">
                  Activity Matrix
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-(--foreground)">
                  Workspace Pulse
                </h3>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-(--primary)/10
                  text-(--primary)
                "
              >
                <Activity className="h-5 w-5" />
              </div>
            </div>

            {/* Bars */}

            <div className="mt-9 flex h-52 items-end gap-2">
              {activityData.map(
                (item, index) => {
                  const height =
                    item.value === 0
                      ? 5
                      : Math.max(
                          (item.value /
                            maxActivity) *
                            100,
                          10
                        );

                  return (
                    <div
                      key={item.label}
                      className="group relative flex h-full flex-1 items-end"
                    >
                      <div className="absolute inset-x-0 bottom-0 top-0 rounded-t-xl bg-(--surface-secondary)" />

                      <motion.div
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.65,
                          delay: index * 0.06,
                        }}
                        className="
                          relative
                          z-10
                          w-full
                          rounded-t-xl
                          bg-(--primary)
                          opacity-80
                          transition-opacity
                          duration-200
                          group-hover:opacity-100
                        "
                      />

                      {/* Value */}

                      <span
                        className="
                          absolute
                          -top-7
                          left-1/2
                          z-20
                          -translate-x-1/2
                          text-[10px]
                          font-semibold
                          text-(--foreground)
                          opacity-0
                          transition-opacity
                          duration-200
                          group-hover:opacity-100
                        "
                      >
                        {item.value}
                      </span>
                    </div>
                  );
                }
              )}
            </div>

            {/* Labels */}

            <div className="mt-4 grid grid-cols-7 gap-2">
              {activityData.map((item) => (
                <span
                  key={item.label}
                  className="
                    text-center
                    text-[9px]
                    font-medium
                    text-(--muted-foreground)
                  "
                  title={item.label}
                >
                  {item.shortLabel}
                </span>
              ))}
            </div>

            <div
              className="
                mt-7
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-(--border)
                bg-(--surface-secondary)
                px-4
                py-3
              "
            >
              <span className="text-xs text-(--muted-foreground)">
                Research items
              </span>

              <span className="text-sm font-semibold text-(--foreground)">
                {totalResearchItems}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            METRIC STRIP
        ========================================================= */}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <MetricTile
            icon={FolderKanban}
            label="Projects"
            value={analytics.total_projects}
            index={0}
          />

          <MetricTile
            icon={Layers3}
            label="Collections"
            value={analytics.total_collections}
            index={1}
          />

          <MetricTile
            icon={FileText}
            label="Notes"
            value={analytics.total_notes}
            index={2}
          />

          <MetricTile
            icon={Quote}
            label="Citations"
            value={analytics.total_citations}
            index={3}
          />
        </div>

        {/* ========================================================
            LOWER ANALYTICS
        ========================================================= */}

        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* ------------------------------------------------------
              MONTHLY RESEARCH
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              rounded-[28px]
              border
              border-(--border)
              bg-(--surface)
              p-7
              shadow-(--shadow)
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted-foreground)">
                  Monthly Activity
                </p>

                <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                  This Month
                </h3>
              </div>

              <TrendingUp className="h-5 w-5 text-(--primary)" />
            </div>

            <div className="mt-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-4xl font-semibold text-(--foreground)">
                    {monthlyItems}
                  </p>

                  <p className="mt-1 text-xs text-(--muted-foreground)">
                    new research items
                  </p>
                </div>

                <span className="text-xs font-medium text-(--primary)">
                  Current month
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <ProgressRow
                  label="Papers"
                  value={analytics.papers_this_month}
                  total={monthlyItems}
                />

                <ProgressRow
                  label="Notes"
                  value={analytics.notes_this_month}
                  total={monthlyItems}
                />
              </div>
            </div>
          </motion.div>

          {/* ------------------------------------------------------
              KNOWLEDGE MIX
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.08,
            }}
            className="
              rounded-[28px]
              border
              border-(--border)
              bg-(--surface)
              p-7
              shadow-(--shadow)
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted-foreground)">
                  Knowledge Mix
                </p>

                <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                  Workspace Composition
                </h3>
              </div>

              <BookOpen className="h-5 w-5 text-(--primary)" />
            </div>

            {/* Donut */}

            <div className="mt-8 flex items-center justify-center">
              <div
                className="
                  relative
                  flex
                  h-40
                  w-40
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  background: `conic-gradient(
                    var(--primary) 0% ${paperShare}%,
                    color-mix(in srgb, var(--primary) 20%, transparent)
                    ${paperShare}% 100%
                  )`,
                }}
              >
                <div
                  className="
                    flex
                    h-28
                    w-28
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-(--surface)
                  "
                >
                  <span className="text-2xl font-semibold text-(--foreground)">
                    {totalResearchItems}
                  </span>

                  <span className="text-[10px] text-(--muted-foreground)">
                    items
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <CompositionItem
                label="Papers"
                value={analytics.total_papers}
                percentage={paperShare}
              />

              <CompositionItem
                label="Notes"
                value={analytics.total_notes}
                percentage={noteShare}
              />
            </div>
          </motion.div>

          {/* ------------------------------------------------------
              AI INSIGHT
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.16,
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-(--primary)/20
              bg-(--primary)/5
              p-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                bg-(--primary)/10
                blur-3xl
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-(--primary)/10
                    text-(--primary)
                  "
                >
                  <BrainCircuit className="h-5 w-5" />
                </div>

                <Sparkles className="h-5 w-5 text-(--primary)" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-(--primary)">
                Research Insight
              </p>

              <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                Your workspace signal
              </h3>

              <p className="mt-5 text-sm leading-7 text-(--muted-foreground)">
                {analytics.total_papers > 0
                  ? `Your workspace contains ${analytics.total_papers} ${
                      analytics.total_papers === 1
                        ? "research paper"
                        : "research papers"
                    } and ${analytics.total_notes} ${
                      analytics.total_notes === 1
                        ? "research note"
                        : "research notes"
                    }. ${
                      monthlyItems > 0
                        ? `${monthlyItems} new ${
                            monthlyItems === 1
                              ? "research item has"
                              : "research items have"
                          } been added this month.`
                        : "No new research items have been added this month yet."
                    }`
                  : "Your workspace is ready for research. Upload your first paper to begin building your knowledge base."}
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-(--primary)/15
                  bg-(--surface)
                  px-4
                  py-3
                "
              >
                <span className="text-xs text-(--muted-foreground)">
                  Analytics status
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================
            FOOTER SUMMARY
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-(--border)
            bg-(--surface)
            px-5
            py-4
            shadow-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-(--primary)/10
                text-(--primary)
              "
            >
              <Activity className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-medium text-(--foreground)">
                Resyntra Research Analytics
              </p>

              <p className="text-[11px] text-(--muted-foreground)">
                Live workspace metrics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-(--muted-foreground)">
            <span>
              {analytics.total_projects} projects
            </span>

            <span className="text-(--border)">•</span>

            <span>
              {analytics.total_collections} collections
            </span>

            <span className="text-(--border)">•</span>

            <span>
              {analytics.total_papers} papers
            </span>

            <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-(--primary)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ================================================================
   METRIC TILE
================================================================ */

const MetricTile = ({
  icon: Icon,
  label,
  value,
  index,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-(--border)
        bg-(--surface)
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:border-(--primary)/30
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-(--surface-secondary)
            text-(--primary)
            transition-colors
            duration-200
            group-hover:bg-(--primary)/10
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-xs text-(--muted-foreground)">
            {label}
          </p>

          <p className="mt-1 text-xl font-semibold text-(--foreground)">
            {value}
          </p>
        </div>
      </div>

      <ArrowUpRight
        className="
          h-4
          w-4
          text-(--muted-foreground)
          transition-colors
          duration-200
          group-hover:text-(--primary)
        "
      />
    </motion.div>
  );
};

/* ================================================================
   PROGRESS ROW
================================================================ */

const ProgressRow = ({
  label,
  value,
  total,
}) => {
  const percentage =
    total > 0
      ? Math.min((value / total) * 100, 100)
      : 0;

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-(--muted-foreground)">
          {label}
        </span>

        <span className="text-xs font-semibold text-(--foreground)">
          {value}
        </span>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-(--surface-secondary)">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${percentage}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="h-full rounded-full bg-(--primary)"
        />
      </div>
    </div>
  );
};

/* ================================================================
   COMPOSITION ITEM
================================================================ */

const CompositionItem = ({
  label,
  value,
  percentage,
}) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-(--border)
        bg-(--surface-secondary)
        p-4
      "
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-(--muted-foreground)">
          {label}
        </span>

        <span className="text-xs font-semibold text-(--foreground)">
          {percentage}%
        </span>
      </div>

      <p className="mt-2 text-lg font-semibold text-(--foreground)">
        {value}
      </p>
    </div>
  );
};

export default ResearchDashboard;