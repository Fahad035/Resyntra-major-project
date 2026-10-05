import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { evalMetrics, evalQuestions } from "./evalData";

const Bar = ({ value }) => (
  <div className="h-2 w-full overflow-hidden rounded-full bg-(--foreground)/10">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${value}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="h-full rounded-full bg-linear-to-r from-cyan-500 to-indigo-500"
    />
  </div>
);

const EvaluationSection = () => (
  <div>
    <SectionHeading
      eyebrow="Measured, Not Claimed"
      title="We evaluate our RAG pipeline"
      description="Retrieval precision and answer quality are scored against a hand-written question set (scripts/evaluate_rag.py)."
    />

    <div className="grid gap-8 lg:grid-cols-5">
      <div className="space-y-6 lg:col-span-2">
        {evalMetrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-border bg-(--foreground)/2 p-6"
          >
            <p className="text-sm text-muted">{m.label}</p>
            <p className="mt-1 text-4xl font-bold text-foreground">{m.value.toFixed(1)}%</p>
            <div className="mt-4"><Bar value={m.value} /></div>
          </div>
        ))}
        <p className="text-xs text-muted">
          10 questions across 2 papers. A small set — we treat these numbers as a baseline, not a benchmark.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-(--foreground)/2 p-6 lg:col-span-3">
        <p className="mb-5 text-sm font-semibold text-foreground">Sample questions</p>
        <div className="space-y-5">
          {evalQuestions.map((row) => (
            <div key={row.q}>
              <p className="text-sm text-foreground">{row.q}</p>
              <div className="mt-2 grid grid-cols-2 gap-4 text-xs text-muted">
                <div>
                  <div className="mb-1 flex justify-between"><span>Retrieval</span><span>{row.precision}%</span></div>
                  <Bar value={row.precision} />
                </div>
                <div>
                  <div className="mb-1 flex justify-between"><span>Answer</span><span>{row.answer}%</span></div>
                  <Bar value={row.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default EvaluationSection;