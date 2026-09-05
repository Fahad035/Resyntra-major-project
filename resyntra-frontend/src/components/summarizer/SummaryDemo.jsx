import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  Bookmark,
  Quote,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const tabs = [
  "Overview",
  "Key Findings",
  "Methodology",
  "Limitations",
  "Research Gaps",
];

const SummaryDemo = () => {
  return (
    <section className="pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Interactive Demo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            AI reads every page so you don't have to.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Upload any research paper and receive structured summaries,
            key findings, methodologies, limitations and research gaps.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
          >

            {/* Toolbar */}

            <div className="flex items-center justify-between border-b border-border px-6 py-5">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/10 p-3">
                  <FileText className="h-5 w-5 text-cyan-400" />
                </div>

                <div>

                  <h3 className="font-semibold text-foreground">
                    Attention Is All You Need.pdf
                  </h3>

                  <p className="text-sm text-muted">
                    15 Pages
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                AI Processed
              </span>

            </div>

            {/* PDF */}

            <div className="space-y-6 p-8">

              <div className="space-y-3">

                <div className="h-3 w-52 rounded bg-border" />

                <div className="h-3 w-full rounded bg-border" />

                <div className="h-3 w-full rounded bg-border" />

                <div className="h-3 w-5/6 rounded bg-border" />

              </div>

              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">

                <div className="mb-3 flex items-center gap-2">

                  <Sparkles className="h-5 w-5 text-cyan-400" />

                  <span className="font-medium text-cyan-400">
                    AI Highlight
                  </span>

                </div>

                <p className="leading-7 text-foreground">
                  The Transformer architecture replaces recurrence
                  entirely with self-attention mechanisms, enabling
                  significantly faster training while improving
                  translation quality.
                </p>

              </div>

              <div className="space-y-3">

                <div className="h-3 rounded bg-border" />

                <div className="h-3 rounded bg-border" />

                <div className="h-3 w-11/12 rounded bg-border" />

                <div className="h-3 w-10/12 rounded bg-border" />

                <div className="h-3 w-9/12 rounded bg-border" />

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
          >

            <div className="border-b border-border p-6">

              <h3 className="text-lg font-semibold">
                AI Summary
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    className={`rounded-xl px-4 py-2 text-sm transition ${
                      index === 0
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-background text-muted"
                    }`}
                  >
                    {tab}
                  </button>
                ))}

              </div>

            </div>

            <div className="space-y-6 p-6">

              <div className="flex gap-4">

                <Bookmark className="mt-1 h-5 w-5 text-cyan-400" />

                <div>

                  <h4 className="font-semibold">
                    Objective
                  </h4>

                  <p className="mt-2 text-muted leading-7">
                    Introduces the Transformer architecture for
                    sequence modeling using self-attention.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />

                <div>

                  <h4 className="font-semibold">
                    Main Contribution
                  </h4>

                  <p className="mt-2 text-muted leading-7">
                    Removes recurrent layers and enables efficient
                    parallel training.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Quote className="mt-1 h-5 w-5 text-violet-500" />

                <div>

                  <h4 className="font-semibold">
                    Important Citation
                  </h4>

                  <p className="mt-2 text-muted leading-7">
                    "Attention mechanisms alone can achieve superior
                    sequence transduction performance."
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <AlertTriangle className="mt-1 h-5 w-5 text-orange-500" />

                <div>

                  <h4 className="font-semibold">
                    Limitation
                  </h4>

                  <p className="mt-2 text-muted leading-7">
                    The study does not evaluate extremely long-context
                    sequences.
                  </p>

                </div>

              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-5">

                <div className="flex gap-3">

                  <Lightbulb className="mt-1 h-5 w-5 text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      Suggested Research Gap
                    </h4>

                    <p className="mt-2 leading-7 text-muted">
                      Explore memory-efficient transformers and
                      retrieval-augmented architectures for long
                      documents.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SummaryDemo;