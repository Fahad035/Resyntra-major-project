import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChevronUp,
  CircleDot,
  Flame,
  Network,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const trendData = [34, 42, 38, 51, 48, 63, 58, 72, 68, 84, 79, 94];

const researchDomains = [
  {
    name: "Artificial Intelligence",
    value: 82,
  },
  {
    name: "Machine Learning",
    value: 74,
  },
  {
    name: "Computer Vision",
    value: 61,
  },
  {
    name: "Natural Language Processing",
    value: 56,
  },
];

const signals = [
  {
    label: "Research Momentum",
    value: "+38.4%",
    icon: TrendingUp,
  },
  {
    label: "Emerging Topics",
    value: "24",
    icon: Flame,
  },
  {
    label: "Connected Fields",
    value: "18",
    icon: Network,
  },
];

const AnalyticsHero = () => {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            -top-40
            h-130
            w-130
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-60
            -right-40
            h-150
            w-150
            rounded-full
            bg-violet-500/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-100
            w-100
            -translate-x-1/2
            rounded-full
            bg-cyan-400/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)]
            bg-size-[72px_72px]
          "
        />
      </div>

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* =========================================================
            TOP INTRO
        ========================================================== */}

        <div className="max-w-4xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-(--primary)/20
              bg-(--primary)/5
              px-4
              py-2
              text-sm
              font-medium
              text-(--primary)
            "
          >
            <Sparkles className="h-4 w-4" />

            Research Intelligence Layer

            <span className="h-1 w-1 rounded-full bg-(--primary)" />

            Analytics
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="
              mt-8
              max-w-5xl
              text-5xl
              font-semibold
              leading-[1.02]
              tracking-[-0.04em]
              text-(--foreground)
              sm:text-6xl
              lg:text-[80px]
            "
          >
            See where
            <span className="text-(--primary)">
              {" "}
              research
            </span>
            <br />
            is heading next.
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
            className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-(--muted-foreground)
              sm:text-lg
            "
          >
            Resyntra transforms complex research activity into
            clear intelligence — helping researchers understand
            momentum, identify emerging directions, and uncover
            connections across the academic landscape.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.24,
            }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/register"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-(--foreground)
                px-6
                py-3.5
                text-sm
                font-semibold
                text-(--background)
                transition-all
                duration-200
                hover:bg-(--primary)
                hover:text-white
              "
            >
              Explore Research Intelligence

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>

            <a
              href="#research-analytics"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-(--border)
                px-6
                py-3.5
                text-sm
                font-medium
                text-(--muted-foreground)
                transition-all
                duration-200
                hover:border-(--primary)
                hover:text-(--primary)
              "
            >
              View Workspace Analytics
            </a>
          </motion.div>
        </div>

        {/* =========================================================
            INTELLIGENCE VISUALIZATION
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="relative mt-20 lg:mt-24"
        >
          {/* Decorative floating labels */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-4
              top-10
              z-20
              hidden
              rounded-2xl
              border
              border-(--border)
              bg-(--surface)
              p-4
              shadow-(--shadow)
              xl:block
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/10
                  text-emerald-500
                "
              >
                <ChevronUp className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-(--muted-foreground)">
                  Signal
                </p>

                <p className="mt-0.5 text-sm font-semibold text-(--foreground)">
                  Emerging
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-4
              bottom-16
              z-20
              hidden
              rounded-2xl
              border
              border-(--border)
              bg-(--surface)
              p-4
              shadow-(--shadow)
              xl:block
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/10
                  text-violet-500
                "
              >
                <Network className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-(--muted-foreground)">
                  Connections
                </p>

                <p className="mt-0.5 text-sm font-semibold text-(--foreground)">
                  18 Fields
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main visualization */}

          <div
            className="
              overflow-hidden
              rounded-4xl
              border
              border-(--border)
              bg-(--surface)
              shadow-(--shadow)
              lg:rounded-[40px]
            "
          >
            {/* Top bar */}

            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-(--border)
                px-6
                py-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-8
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-(--primary)/10
                    text-(--primary)
                  "
                >
                  <BrainCircuit className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-(--foreground)">
                    Research Intelligence
                  </p>

                  <p className="text-xs text-(--muted-foreground)">
                    Global research signal simulation
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  self-start
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/5
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-emerald-500
                  sm:self-auto
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>

                Intelligence Active
              </div>
            </div>

            {/* Main visualization grid */}

            <div className="grid lg:grid-cols-[1.35fr_0.65fr]">

              {/* =====================================================
                  TREND AREA
              ====================================================== */}

              <div className="border-b border-(--border) p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-(--muted-foreground)">
                      Research Momentum
                    </p>

                    <div className="mt-3 flex items-end gap-3">
                      <h2 className="text-4xl font-bold tracking-tight text-(--foreground)">
                        +38.4%
                      </h2>

                      <span className="mb-1 flex items-center gap-1 text-sm font-medium text-emerald-500">
                        <ChevronUp className="h-4 w-4" />
                        12.8%
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-(--muted-foreground)">
                      Research activity signal
                    </p>
                  </div>

                  <div
                    className="
                      hidden
                      rounded-xl
                      border
                      border-(--border)
                      bg-(--surface-secondary)
                      p-3
                      sm:block
                    "
                  >
                    <BarChart3 className="h-5 w-5 text-(--primary)" />
                  </div>
                </div>

                {/* Graph */}

                <div className="relative mt-10 h-64">
                  {/* Grid */}

                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map(
                      (line) => (
                        <div
                          key={line}
                          className="border-t border-(--border)"
                        />
                      )
                    )}
                  </div>

                  {/* Area */}

                  <div className="absolute inset-x-0 bottom-0 top-2 flex items-end gap-1.5 sm:gap-2">
                    {trendData.map(
                      (value, index) => (
                        <div
                          key={index}
                          className="relative flex h-full flex-1 items-end"
                        >
                          <motion.div
                            initial={{
                              height: 0,
                            }}
                            whileInView={{
                              height: `${value}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay:
                                index * 0.05,
                            }}
                            className="
                              w-full
                              rounded-t-lg
                              bg-(--primary)/20
                            "
                          />

                          {index ===
                            trendData.length -
                              1 && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                scale: 0,
                              }}
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay: 1,
                              }}
                              className="
                                absolute
                                -top-2
                                left-1/2
                                h-3
                                w-3
                                -translate-x-1/2
                                rounded-full
                                border-2
                                border-(--surface)
                                bg-(--primary)
                                shadow-[0_0_16px_rgba(6,182,212,.6)]
                              "
                            />
                          )}
                        </div>
                      )
                    )}
                  </div>

                  {/* Trend line */}

                  <svg
                    viewBox="0 0 600 200"
                    preserveAspectRatio="none"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      h-full
                      w-full
                      overflow-visible
                    "
                  >
                    <motion.polyline
                      points="
                        10,165
                        65,145
                        120,154
                        175,120
                        230,130
                        285,92
                        340,104
                        395,66
                        450,78
                        505,42
                        550,54
                        590,18
                      "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-(--primary)"
                      initial={{
                        pathLength: 0,
                      }}
                      whileInView={{
                        pathLength: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.6,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </div>

                {/* Timeline */}

                <div className="mt-4 flex justify-between text-[10px] text-(--muted-foreground)">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>

              {/* =====================================================
                  INTELLIGENCE PANEL
              ====================================================== */}

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-(--primary)" />

                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-(--muted-foreground)">
                    Intelligence Signal
                  </p>
                </div>

                <div className="mt-7">
                  <div className="flex items-end justify-between">
                    <span className="text-sm text-(--muted-foreground)">
                      Research Opportunity
                    </span>

                    <span className="text-2xl font-bold text-(--foreground)">
                      84
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-(--surface-secondary)">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "84%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-(--primary)
                      "
                    />
                  </div>
                </div>

                {/* AI Insight */}

                <div
                  className="
                    mt-8
                    rounded-2xl
                    border
                    border-(--primary)/15
                    bg-(--primary)/5
                    p-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-(--primary)/10
                        text-(--primary)
                      "
                    >
                      <BrainCircuit className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-(--primary)">
                        AI Insight
                      </p>

                      <p className="mt-2 text-sm leading-6 text-(--foreground)">
                        Multimodal AI and autonomous
                        research systems are showing
                        strong momentum across connected
                        research fields.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Signals */}

                <div className="mt-7 space-y-3">
                  {signals.map((signal) => {
                    const Icon = signal.icon;

                    return (
                      <div
                        key={signal.label}
                        className="
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
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-(--muted-foreground)" />

                          <span className="text-xs text-(--muted-foreground)">
                            {signal.label}
                          </span>
                        </div>

                        <span className="text-sm font-semibold text-(--foreground)">
                          {signal.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =====================================================
                DOMAIN SIGNALS
            ====================================================== */}

            <div className="border-t border-(--border) p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-(--muted-foreground)">
                    Research Landscape
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-(--foreground)">
                    Emerging domain signals
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-(--muted-foreground)">
                  <CircleDot className="h-3.5 w-3.5 text-(--primary)" />
                  Signal strength
                </div>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {researchDomains.map(
                  (domain, index) => (
                    <motion.div
                      key={domain.name}
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
                        delay: index * 0.08,
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="truncate text-xs font-medium text-(--foreground)">
                          {domain.name}
                        </span>

                        <span className="text-xs text-(--muted-foreground)">
                          {domain.value}%
                        </span>
                      </div>

                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-(--surface-secondary)">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${domain.value}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                          }}
                          className="
                            h-full
                            rounded-full
                            bg-(--primary)
                          "
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM MICRO TRUST BAR
        ========================================================== */}

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
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3
            text-xs
            text-(--muted-foreground)
          "
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Continuous research monitoring
          </span>

          <span className="hidden h-3 w-px bg-(--border) sm:block" />

          <span className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5" />
            AI-powered pattern detection
          </span>

          <span className="hidden h-3 w-px bg-(--border) sm:block" />

          <span className="flex items-center gap-2">
            <Network className="h-3.5 w-3.5" />
            Connected research intelligence
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsHero;