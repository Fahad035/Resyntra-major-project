import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  GitBranch,
  Quote,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const metrics = [
  {
    title: "Total Citations",
    value: "2.84M",
    detail: "Across indexed research",
    icon: Quote,
  },
  {
    title: "H-Index",
    value: "184",
    detail: "Research influence score",
    icon: Award,
  },
  {
    title: "Collaborations",
    value: "12.8K",
    detail: "Research connections",
    icon: Users,
  },
  {
    title: "Research Growth",
    value: "+38%",
    detail: "Five-year trend",
    icon: TrendingUp,
  },
];

const timeline = [
  {
    year: "2019",
    value: 20,
  },
  {
    year: "2020",
    value: 35,
  },
  {
    year: "2021",
    value: 52,
  },
  {
    year: "2022",
    value: 74,
  },
  {
    year: "2023",
    value: 92,
  },
];

const CitationAnalytics = () => {
  return (
    <section className="relative overflow-hidden pb-32">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-125
          w-200
          -translate-x-1/2
          rounded-full
          bg-(--primary)/5
          blur-[120px]
        "
      />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* =======================================================
            SECTION INTRO
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-(--primary)/20
                bg-(--primary)/10
                text-(--primary)
              "
            >
              <Quote className="h-4 w-4" />
            </div>

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-(--primary)
              "
            >
              Citation Intelligence
            </span>
          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-tight
              text-(--foreground)
              sm:text-5xl
            "
          >
            Measure the impact
            <br />
            behind the research.
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-(--muted-foreground)
              sm:text-base
            "
          >
            Explore citation influence, research growth and
            collaboration patterns through a global academic
            intelligence view.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN INTELLIGENCE PANEL
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-(--border)
            bg-(--surface)
            shadow-(--shadow)
          "
        >
          {/* Decorative grid */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
            "
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Top accent */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-(--primary)/40
            "
          />

          <div className="relative p-6 sm:p-8 lg:p-10">

            {/* ===================================================
                PANEL HEADER
            ==================================================== */}

            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-(--border)
                pb-8
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />

                  <span className="text-xs font-medium text-emerald-500">
                    Global research index
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    text-(--foreground)
                    sm:text-3xl
                  "
                >
                  Citation Impact Overview
                </h3>

                <p className="mt-2 text-sm text-(--muted-foreground)">
                  Snapshot of research influence and
                  collaboration activity.
                </p>
              </div>

              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-(--border)
                  bg-(--surface-secondary)
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-(--muted-foreground)
                "
              >
                <Sparkles className="h-3.5 w-3.5 text-(--primary)" />

                AI analyzed
              </div>
            </div>

            {/* ===================================================
                KPI GRID
            ==================================================== */}

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.title}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-(--border)
                      bg-(--background)
                      p-5
                      transition-all
                      duration-300
                      hover:border-(--primary)/30
                    "
                  >
                    {/* Hover glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-(--primary)/5
                        blur-2xl
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-(--border)
                            bg-(--surface-secondary)
                            text-(--primary)
                          "
                        >
                          <Icon className="h-5 w-5" />
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
                      </div>

                      <p
                        className="
                          mt-7
                          text-3xl
                          font-semibold
                          tracking-tight
                          text-(--foreground)
                        "
                      >
                        {metric.value}
                      </p>

                      <p className="mt-1 text-sm font-medium text-(--foreground)">
                        {metric.title}
                      </p>

                      <p className="mt-2 text-xs text-(--muted-foreground)">
                        {metric.detail}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ===================================================
                ANALYTICS SPLIT
            ==================================================== */}

            <div className="mt-6 grid gap-6 lg:grid-cols-5">

              {/* -------------------------------------------------
                  CITATION TREND
              -------------------------------------------------- */}

              <div
                className="
                  rounded-[28px]
                  border
                  border-(--border)
                  bg-(--background)
                  p-6
                  sm:p-7
                  lg:col-span-3
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-(--muted-foreground)
                      "
                    >
                      Impact trajectory
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                      Citation Growth
                    </h3>

                    <p className="mt-1 text-sm text-(--muted-foreground)">
                      Relative citation impact over time
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      bg-(--primary)/10
                      p-2.5
                      text-(--primary)
                    "
                  >
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>

                {/* Chart */}

                <div
                  className="
                    relative
                    mt-8
                    h-72
                    overflow-hidden
                    rounded-2xl
                    border
                    border-(--border)
                    bg-(--surface)
                    p-5
                  "
                >
                  {/* Grid lines */}

                  <div className="pointer-events-none absolute inset-x-5 top-5 bottom-14 flex flex-col justify-between">
                    {[1, 2, 3, 4].map((line) => (
                      <div
                        key={line}
                        className="border-t border-dashed border-(--border)"
                      />
                    ))}
                  </div>

                  {/* Bars */}

                  <div className="relative z-10 flex h-full items-end justify-around gap-3 pb-9">
                    {timeline.map((item, index) => {
                      const isLatest =
                        index === timeline.length - 1;

                      return (
                        <div
                          key={item.year}
                          className="
                            group
                            flex
                            h-full
                            flex-1
                            flex-col
                            items-center
                            justify-end
                          "
                        >
                          <div className="relative flex h-[82%] w-full max-w-12 items-end justify-center">
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              whileInView={{
                                height: `${item.value}%`,
                                opacity: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                              }}
                              className={`
                                relative
                                w-full
                                rounded-t-xl
                                transition-all
                                duration-300
                                ${
                                  isLatest
                                    ? "bg-(--primary)"
                                    : "bg-(--primary)/30"
                                }
                              `}
                            >
                              {/* Value */}

                              <span
                                className="
                                  absolute
                                  -top-7
                                  left-1/2
                                  -translate-x-1/2
                                  whitespace-nowrap
                                  text-[10px]
                                  font-semibold
                                  text-(--foreground)
                                "
                              >
                                {item.value}
                              </span>
                            </motion.div>
                          </div>

                          <span
                            className={`
                              mt-4
                              text-[11px]
                              font-medium
                              ${
                                isLatest
                                  ? "text-(--primary)"
                                  : "text-(--muted-foreground)"
                              }
                            `}
                          >
                            {item.year}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Chart footer */}

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-(--primary)" />

                    <span className="text-xs text-(--muted-foreground)">
                      Current trajectory
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-(--primary)">
                    +38% growth
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------
                  IMPACT SCORE
              -------------------------------------------------- */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-(--border)
                  bg-(--background)
                  p-6
                  sm:p-7
                  lg:col-span-2
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -right-20
                    h-56
                    w-56
                    rounded-full
                    bg-(--primary)/5
                    blur-3xl
                  "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-(--muted-foreground)
                        "
                      >
                        Influence score
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                        Research Influence
                      </h3>
                    </div>

                    <Award className="h-5 w-5 text-(--primary)" />
                  </div>

                  {/* Circular score */}

                  <div className="mt-8 flex justify-center">
                    <div
                      className="
                        relative
                        flex
                        h-48
                        w-48
                        items-center
                        justify-center
                        rounded-full
                      "
                      style={{
                        background:
                          "conic-gradient(var(--primary) 0deg, var(--primary) 298deg, var(--surface-secondary) 298deg, var(--surface-secondary) 360deg)",
                      }}
                    >
                      <div
                        className="
                          flex
                          h-36
                          w-36
                          flex-col
                          items-center
                          justify-center
                          rounded-full
                          bg-(--background)
                        "
                      >
                        <span
                          className="
                            text-4xl
                            font-semibold
                            tracking-tight
                            text-(--foreground)
                          "
                        >
                          82.8
                        </span>

                        <span className="mt-1 text-xs text-(--muted-foreground)">
                          impact index
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Score details */}

                  <div className="mt-8 space-y-3">
                    <ScoreRow
                      label="Citation strength"
                      value="92%"
                    />

                    <ScoreRow
                      label="Research visibility"
                      value="86%"
                    />

                    <ScoreRow
                      label="Collaboration depth"
                      value="74%"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                COLLABORATION NETWORK
            ==================================================== */}

            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              {/* Network */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-(--border)
                  bg-(--background)
                  p-6
                  sm:p-7
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-(--muted-foreground)
                      "
                    >
                      Research connections
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                      Collaboration Network
                    </h3>
                  </div>

                  <GitBranch className="h-5 w-5 text-(--primary)" />
                </div>

                <div className="relative mt-8 h-64 overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
                  {/* Orbit rings */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 35,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-52
                      w-52
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      border-(--primary)/15
                    "
                  />

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-36
                      w-36
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      border-(--primary)/10
                    "
                  />

                  {/* Connection lines */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-px
                      w-48
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-45
                      bg-(--primary)/15
                    "
                  />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-px
                      w-48
                      -translate-x-1/2
                      -translate-y-1/2
                      -rotate-45
                      bg-(--primary)/15
                    "
                  />

                  {/* Nodes */}

                  <NetworkNode
                    className="left-[16%] top-[25%]"
                  />

                  <NetworkNode
                    className="right-[17%] top-[25%]"
                  />

                  <NetworkNode
                    className="bottom-[18%] left-[28%]"
                  />

                  <NetworkNode
                    className="bottom-[18%] right-[28%]"
                  />

                  {/* Center */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-20
                      w-20
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-(--primary)/30
                      bg-(--primary)/10
                      text-(--primary)
                      shadow-[0_0_40px_rgba(6,182,212,.12)]
                    "
                  >
                    <Users className="h-8 w-8" />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xs text-(--muted-foreground)">
                    Researchers connected
                  </p>

                  <span className="text-sm font-semibold text-(--foreground)">
                    12.8K
                  </span>
                </div>
              </div>

              {/* Insight */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-(--primary)/15
                  bg-(--primary)/5
                  p-6
                  sm:p-7
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-72
                    w-72
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
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-(--primary)/15
                        bg-(--surface)
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-(--primary)
                      "
                    >
                      AI Insight
                    </span>
                  </div>

                  <h3
                    className="
                      mt-8
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-(--foreground)
                    "
                  >
                    Research influence is accelerating.
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-7
                      text-(--muted-foreground)
                    "
                  >
                    Citation activity has shown a sustained
                    upward trajectory, while researcher
                    collaboration continues to expand across
                    institutions and disciplines.
                  </p>

                  {/* Insight metrics */}

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <InsightMetric
                      value="+38%"
                      label="Growth"
                    />

                    <InsightMetric
                      value="12.8K"
                      label="Connections"
                    />
                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-(--muted-foreground)
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    Based on indexed research activity
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================
                FOOTER
            ==================================================== */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3
                border-t
                border-(--border)
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="text-xs text-(--muted-foreground)">
                Citation intelligence provides a high-level
                view of academic research influence.
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-(--primary)">
                Explore research impact

                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ================================================================
   SCORE ROW
================================================================ */

const ScoreRow = ({
  label,
  value,
}) => {
  const numericValue = Number.parseInt(
    value,
    10
  );

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
            width: `${numericValue}%`,
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
   NETWORK NODE
================================================================ */

const NetworkNode = ({
  className,
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        h-3
        w-3
        rounded-full
        border
        border-(--primary)/40
        bg-(--primary)
        shadow-[0_0_16px_rgba(6,182,212,.45)]
        ${className}
      `}
    />
  );
};

/* ================================================================
   INSIGHT METRIC
================================================================ */

const InsightMetric = ({
  value,
  label,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-(--primary)/10
        bg-(--surface)
        p-4
      "
    >
      <p className="text-xl font-semibold text-(--foreground)">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-(--muted-foreground)">
        {label}
      </p>
    </div>
  );
};

export default CitationAnalytics;