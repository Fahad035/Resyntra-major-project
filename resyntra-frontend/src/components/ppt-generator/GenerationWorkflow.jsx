import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpenText,
  Brain,
  Check,
  FileCheck2,
  LayoutTemplate,
  ListTree,
  Loader2,
} from "lucide-react";

// Purely a UI simulation of progress - the backend does this as one
// call with no granular progress events. Steps 0..N-2 advance on a
// timer; the last step waits for `isComplete` (the real API response)
// rather than faking a finish time we can't actually guarantee.
const STEPS = [
  { icon: BookOpenText, label: "Reading paper content", duration: 1600 },
  { icon: Brain, label: "Analyzing key sections", duration: 2400 },
  { icon: ListTree, label: "Structuring slide outline", duration: 2200 },
  { icon: LayoutTemplate, label: "Designing slides", duration: 1800 },
  { icon: FileCheck2, label: "Converting to PDF", duration: 2000 },
];

const GenerationWorkflow = ({ isActive, isComplete }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setActiveIndex(0);
      return undefined;
    }

    if (isComplete) {
      setActiveIndex(STEPS.length);
      return undefined;
    }

    if (activeIndex >= STEPS.length - 1) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setActiveIndex((i) => i + 1);
    }, STEPS[activeIndex].duration);

    return () => clearTimeout(timer);
  }, [isActive, isComplete, activeIndex]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Generating your presentation
            </p>

            <div className="space-y-3">
              {STEPS.map((step, index) => {
                const isDone = index < activeIndex;
                const isCurrent = index === activeIndex && !isDone;
                const Icon = step.icon;

                return (
                  <div key={step.label} className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isDone
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : isCurrent
                          ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-400"
                          : "border-border bg-(--foreground)/2 text-muted"
                      }`}
                    >
                      {isDone ? (
                        <Check className="h-4 w-4" />
                      ) : isCurrent ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                    </span>

                    <span
                      className={`text-sm transition-colors ${
                        isDone
                          ? "text-foreground"
                          : isCurrent
                          ? "font-medium text-foreground"
                          : "text-muted"
                      }`}
                    >
                      {step.label}
                    </span>

                    {isCurrent && (
                      <span className="ml-auto flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="h-1 w-1 rounded-full bg-cyan-400"
                            style={{
                              animation: "resyntra-bounce 1.2s ease-in-out infinite",
                              animationDelay: `${i * 0.15}s`,
                            }}
                          />
                        ))}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <style>{`
              @keyframes resyntra-bounce {
                0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                30% { transform: translateY(-3px); opacity: 1; }
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GenerationWorkflow;