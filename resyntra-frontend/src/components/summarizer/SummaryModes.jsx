import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ListChecks,
  FlaskConical,
  BarChart3,
  Lightbulb,
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
  },
];

const SummaryModes = () => {
  const [active, setActive] = useState(modes[0]);

  const Icon = active.icon;

  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Summary Modes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            Choose the summary that matches your workflow.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Whether you need a quick overview or a complete methodology
            breakdown, Resyntra adapts the summary to your research needs.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

          {/* Sidebar */}

          <div className="space-y-3">

            {modes.map((mode) => {
              const MenuIcon = mode.icon;

              return (
                <button
                  key={mode.id}
                  onClick={() => setActive(mode)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    active.id === mode.id
                      ? "border-cyan-500 bg-cyan-500/10"
                      : "border-border bg-card hover:border-cyan-500/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-cyan-500/10 p-3">
                      <MenuIcon className="h-5 w-5 text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">
                        {mode.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        AI Generated
                      </p>
                    </div>
                  </div>
                </button>
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
              transition={{ duration: .25 }}
              className="rounded-3xl border border-border bg-card p-10"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-cyan-500/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-foreground">
                    {active.heading}
                  </h3>

                  <p className="mt-3 text-lg leading-8 text-muted">
                    {active.description}
                  </p>

                </div>

              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">

                {active.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <div className="flex items-center gap-3">

                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                      <p className="font-medium text-foreground">
                        {item}
                      </p>

                    </div>
                  </div>
                ))}

              </div>

              <div className="mt-12 rounded-2xl bg-cyan-500/10 p-6">

                <p className="font-medium text-cyan-400">
                  AI Preview
                </p>

                <p className="mt-4 leading-8 text-muted">
                  This summary mode automatically extracts the most relevant
                  information while preserving academic context, citations,
                  methodology, and important findings from the original paper.
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