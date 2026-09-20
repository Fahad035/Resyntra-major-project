import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const papers = [
  {
    title: "Attention Is All You Need",
    color: "bg-cyan-500",
  },
  {
    title: "BERT",
    color: "bg-violet-500",
  },
  {
    title: "GPT-4 Technical Report",
    color: "bg-emerald-500",
  },
];

const comparison = [
  {
    title: "Architecture",
    left: "Encoder-Decoder",
    middle: "Encoder Only",
    right: "Decoder Transformer",
  },
  {
    title: "Training",
    left: "Parallel",
    middle: "Masked LM",
    right: "Large-scale RLHF",
  },
  {
    title: "Strength",
    left: "Translation",
    middle: "Language Understanding",
    right: "Reasoning & Generation",
  },
];

const ResearchComparison = () => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            AI Comparison Engine
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Compare multiple research papers instantly.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Discover similarities, differences, strengths and research
            gaps without manually reading dozens of papers.
          </p>

        </div>

        {/* Papers */}

        <div className="mt-20 grid gap-6 lg:grid-cols-3">

          {papers.map((paper, index) => (

            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-border bg-linear-to-br from-background to-cyan-500/5 p-7"
            >

              <div className={`h-2 rounded-full ${paper.color}`} />

              <h3 className="mt-6 text-2xl font-bold">
                {paper.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                AI extracts methodology, experiments, limitations,
                datasets and contributions automatically.
              </p>

            </motion.div>

          ))}

        </div>

        {/* Comparison */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-4xl border border-border"
        >

          <div className="grid grid-cols-4 border-b border-border bg-background/80">

            <div className="p-6 font-semibold">
              Criteria
            </div>

            <div className="p-6 text-cyan-400 font-semibold">
              Transformer
            </div>

            <div className="p-6 text-violet-400 font-semibold">
              BERT
            </div>

            <div className="p-6 text-emerald-400 font-semibold">
              GPT-4
            </div>

          </div>

          {comparison.map((row) => (

            <div
              key={row.title}
              className="grid grid-cols-4 border-b border-border hover:bg-background/60"
            >

              <div className="p-6 font-medium">
                {row.title}
              </div>

              <div className="p-6 text-muted">
                {row.left}
              </div>

              <div className="p-6 text-muted">
                {row.middle}
              </div>

              <div className="p-6 text-muted">
                {row.right}
              </div>

            </div>

          ))}

        </motion.div>

        {/* AI Summary */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[30px] border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 via-background to-background p-8">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="text-emerald-400" />

              <h3 className="text-2xl font-bold">
                Shared Findings
              </h3>

            </div>

            <ul className="mt-8 space-y-4 text-muted">

              <li>• Transformer architecture dominates modern NLP.</li>

              <li>• Self-attention improves contextual understanding.</li>

              <li>• Larger datasets significantly improve performance.</li>

              <li>• Scaling laws remain consistent across models.</li>

            </ul>

          </div>

          <div className="rounded-[30px] border border-orange-500/20 bg-linear-to-br from-orange-500/10 via-background to-background p-8">

            <div className="flex items-center gap-3">

              <XCircle className="text-orange-400" />

              <h3 className="text-2xl font-bold">
                Research Gaps
              </h3>

            </div>

            <ul className="mt-8 space-y-4 text-muted">

              <li>• Limited energy efficiency evaluation.</li>

              <li>• Few multilingual benchmark comparisons.</li>

              <li>• Long-context reasoning remains challenging.</li>

              <li>• Hallucination mitigation needs improvement.</li>

            </ul>

          </div>

        </div>

        {/* AI Insight */}

        <div className="mt-16 rounded-[36px] border border-border bg-linear-to-r from-cyan-500/10 via-background to-violet-500/10 p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400" />

                <h3 className="text-3xl font-bold">
                  AI Research Insight
                </h3>

              </div>

              <p className="mt-5 max-w-3xl leading-8 text-muted">
                Resyntra identifies emerging trends, conflicting findings,
                and unexplored research directions across multiple papers,
                helping researchers accelerate literature reviews.
              </p>

            </div>

            <button className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105">

              <Lightbulb size={20} />

              Discover Research Gaps

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ResearchComparison;