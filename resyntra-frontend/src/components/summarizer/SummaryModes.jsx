import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ListChecks,
  FlaskConical,
  BarChart3,
  Lightbulb,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const modes = [
  {
    id: "quick",
    title: "Quick Summary",
    icon: FileText,
    heading: "Understand the paper in under one minute.",
    description:
      "A concise overview highlighting the objective, approach, contributions, and final conclusion.",
    bullets: [
      "Research objective",
      "Main contribution",
      "Final conclusion",
      "Publication information",
    ],
    preview:
      "Resyntra condenses the paper into its most important ideas, helping you understand the research direction without reading every page.",
  },
  {
    id: "detailed",
    title: "Detailed Analysis",
    icon: ListChecks,
    heading: "Comprehensive section-by-section explanation.",
    description:
      "Perfect for researchers who need a complete understanding before reading the entire paper.",
    bullets: [
      "Introduction",
      "Related work",
      "Architecture",
      "Experiments",
      "Discussion",
    ],
    preview:
      "The detailed mode is designed to organize the paper into its major sections and explain how the research progresses from the problem statement to the final results.",
  },
  {
    id: "methodology",
    title: "Methodology",
    icon: FlaskConical,
    heading: "Focus only on the research methodology.",
    description:
      "Extract datasets, algorithms, evaluation metrics, and implementation details.",
    bullets: [
      "Datasets",
      "Algorithms",
      "Evaluation",
      "Implementation",
    ],
    preview:
      "Resyntra focuses the analysis on the experimental methodology, including the datasets, algorithms, evaluation strategy, and implementation approach.",
  },
  {
    id: "findings",
    title: "Key Findings",
    icon: BarChart3,
    heading: "Important results without unnecessary details.",
    description:
      "Identify the major discoveries, performance improvements, and practical impact.",
    bullets: [
      "Performance gains",
      "Major discoveries",
      "Comparison",
      "Applications",
    ],
    preview:
      "This mode focuses on the results and discoveries that matter most, making it easier to understand the paper's practical and research impact.",
  },
  {
    id: "gaps",
    title: "Research Gaps",
    icon: Lightbulb,
    heading: "Discover opportunities for future work.",
    description:
      "AI identifies limitations, unanswered questions, and potential research directions.",
    bullets: [
      "Limitations",
      "Open problems",
      "Future work",
      "Novel opportunities",
    ],
    preview:
      "Research-gap analysis can highlight limitations, unresolved questions, and possible directions for extending the work.",
  },
];

const SummaryModes = () => {
  const [active, setActive] = useState(modes[0]);

  const Icon = active.icon;

  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            Summary Modes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            Choose the summary that matches your workflow.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Whether you need a quick overview or a complete methodology
            breakdown, Resyntra adapts the analysis to your research needs.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}

          <div className="space-y-3">
            {modes.map((mode) => {
              const MenuIcon = mode.icon;
              const isActive = active.id === mode.id;

              return (
                <motion.button
                  key={mode.id}
                  type="button"
                  whileHover={{ x: 4 }}
                  onClick={() => setActive(mode)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-cyan-500 bg-cyan-500/10 shadow-[0_10px_30px_rgba(6,182,212,.08)]"
                      : "border-border bg-card hover:border-cyan-500/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-xl p-3 transition ${
                        isActive
                          ? "bg-cyan-500 text-slate-950"
                          : "bg-cyan-500/10"
                      }`}
                    >
                      <MenuIcon
                        className={`h-5 w-5 ${
                          isActive
                            ? "text-slate-950"
                            : "text-cyan-400"
                        }`}
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">
                        {mode.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {isActive ? "Selected" : "AI Generated"}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Content */}

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-border bg-card p-8 lg:p-10"
            >
              {/* Mode Header */}

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-fit rounded-2xl bg-cyan-500/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    {active.title}
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">
                    {active.heading}
                  </h3>

                  <p className="mt-3 text-lg leading-8 text-muted">
                    {active.description}
                  </p>
                </div>
              </div>

              {/* Extraction Areas */}

              <div className="mt-12">
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                  Analysis includes
                </h4>

                <div className="grid gap-4 sm:grid-cols-2">
                  {active.bullets.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      className="rounded-2xl border border-border bg-background p-5"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />

                        <p className="font-medium text-foreground">
                          {item}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Preview */}

              <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/15 p-2">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">
                      AI Preview
                    </p>

                    <p className="text-xs text-cyan-400">
                      {active.title}
                    </p>
                  </div>
                </div>

                <p className="mt-4 leading-8 text-muted">
                  {active.preview}
                </p>
              </div>

              {/* Backend Status */}

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <p className="text-xs text-muted">
                  Resyntra summarization engine is ready for paper analysis.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SummaryModes;