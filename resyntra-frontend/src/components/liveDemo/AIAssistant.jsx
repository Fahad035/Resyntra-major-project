import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  BookOpen,
  Search,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const suggestions = [
  {
    icon: BrainCircuit,
    title: "Executive Summary",
    description:
      "Transformer architecture replaces recurrence using self-attention.",
    color: "text-cyan-400",
  },
  {
    icon: Search,
    title: "Research Gap",
    description:
      "Limited evaluation on multimodal datasets detected.",
    color: "text-violet-400",
  },
  {
    icon: BookOpen,
    title: "Suggested Citations",
    description:
      "12 highly relevant papers discovered.",
    color: "text-emerald-400",
  },
];

const AIAssistant = () => {
  return (
    <aside className="flex h-full flex-col bg-(--surface)/40">

      {/* Header */}

      <div className="border-b border-border px-6 py-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

              <Sparkles className="h-6 w-6 text-cyan-400" />

            </div>

            <div>

              <h3 className="font-semibold text-foreground">
                Resyntra AI
              </h3>

              <p className="text-sm text-muted">
                Research Assistant
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-xs font-semibold text-green-400">
              ONLINE
            </span>

          </div>

        </div>

      </div>

      {/* Thinking */}

      <div className="border-b border-border px-6 py-5">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          AI Processing
        </p>

        <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <BrainCircuit className="h-6 w-6 text-cyan-400" />
            </motion.div>

            <div>

              <p className="text-sm font-medium text-foreground">
                Analyzing Paper...
              </p>

              <p className="mt-1 text-xs text-muted">
                Extracting key concepts
              </p>

            </div>

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-(--foreground)/10">

            <motion.div
              animate={{
                width: ["20%", "75%", "95%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
            />

          </div>

        </div>

      </div>

      {/* AI Results */}

      <div className="flex-1 overflow-y-auto px-6 py-6">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          AI Insights
        </p>

        <div className="space-y-4">

          {suggestions.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -3,
                }}
                className="rounded-2xl border border-border bg-(--foreground)/3 p-5 transition hover:border-cyan-500/20"
              >

                <div className="flex items-start gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--foreground)/5">

                    <Icon className={`h-5 w-5 ${item.color}`} />

                  </div>

                  <div className="flex-1">

                    <h4 className="font-medium text-foreground">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-border px-6 py-5">

        <div className="rounded-2xl bg-linear-to-r from-cyan-500/10 to-indigo-500/10 p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-widest text-cyan-400">
                Confidence
              </p>

              <h3 className="mt-2 text-3xl font-bold text-foreground">
                98%
              </h3>

            </div>

            <CheckCircle2 className="h-10 w-10 text-green-400" />

          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">

            View Full Report

            <ArrowRight className="h-4 w-4" />

          </button>

        </div>

      </div>

    </aside>
  );
};

export default AIAssistant;