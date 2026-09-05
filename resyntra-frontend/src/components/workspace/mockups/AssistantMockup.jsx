import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Send,
  FileText,
  Quote,
  BrainCircuit,
} from "lucide-react";

const AssistantMockup = () => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        shadow-[0_30px_80px_rgba(0,0,0,.18)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/15 p-3">
            <Bot className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <h3 className="font-semibold text-foreground">
              AI Research Assistant
            </h3>

            <p className="text-xs text-emerald-500">
              ● Ready to assist
            </p>
          </div>
        </div>

        <Sparkles className="h-5 w-5 text-cyan-400" />
      </div>

      {/* User Question */}

      <div className="px-6 pt-6">
        <div className="ml-auto max-w-md rounded-2xl bg-cyan-500 px-5 py-4 text-sm font-medium text-slate-950">
          Summarize the main contribution of this paper and identify
          possible research gaps.
        </div>
      </div>

      {/* AI Response */}

      <div className="space-y-5 px-6 py-6">

        <div className="rounded-2xl border border-border bg-background p-5">

          <div className="mb-4 flex items-center gap-2">

            <BrainCircuit className="h-5 w-5 text-cyan-400" />

            <span className="font-semibold">
              AI Summary
            </span>

          </div>

          <p className="leading-7 text-muted">
            This paper introduces a transformer-based architecture
            that replaces recurrent networks with self-attention,
            improving parallelization while achieving state-of-the-art
            performance across multiple NLP benchmarks.
          </p>

        </div>

        {/* Key Findings */}

        <div className="rounded-2xl border border-border bg-background p-5">

          <div className="mb-4 flex items-center gap-2">

            <FileText className="h-5 w-5 text-cyan-400" />

            <span className="font-semibold">
              Key Findings
            </span>

          </div>

          <ul className="space-y-3 text-muted">

            <li>• Self-attention replaces recurrence.</li>

            <li>• Faster training through parallelization.</li>

            <li>• Better BLEU scores on translation tasks.</li>

          </ul>

        </div>

        {/* Research Gap */}

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

          <div className="mb-3 flex items-center gap-2">

            <Quote className="h-5 w-5 text-cyan-400" />

            <span className="font-semibold">
              Suggested Research Gap
            </span>

          </div>

          <p className="leading-7 text-muted">
            The paper does not investigate long-context efficiency,
            memory optimization, or retrieval-augmented reasoning,
            leaving opportunities for future work.
          </p>

        </div>

      </div>

      {/* Input */}

      <div className="border-t border-border bg-background px-6 py-5">

        <div className="flex items-center gap-3 rounded-2xl border border-border px-4 py-3">

          <input
            type="text"
            placeholder="Ask anything about this paper..."
            readOnly
            className="
              flex-1
              bg-transparent
              text-sm
              text-foreground
              outline-none
              placeholder:text-muted
            "
          />

          <button className="rounded-xl bg-cyan-500 p-3 text-slate-950 transition hover:scale-105">

            <Send className="h-4 w-4" />

          </button>

        </div>

      </div>

    </motion.div>
  );
};

export default AssistantMockup;