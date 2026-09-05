import { motion } from "framer-motion";
import {
  Search,
  BrainCircuit,
  XCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const keywordResults = [
  "Transformer Toy",
  "Electrical Transformer",
  "Transformer Movie",
  "Transformer Robot",
];

const semanticResults = [
  {
    title: "Attention Is All You Need",
    score: "99%",
  },
  {
    title: "Vision Transformer (ViT)",
    score: "97%",
  },
  {
    title: "BERT: Pre-training of Transformers",
    score: "95%",
  },
  {
    title: "Scaling Laws for LLMs",
    score: "93%",
  },
];

const SemanticComparison = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Why Semantic Search?
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Search by
            <span className="text-cyan-400"> meaning</span>,
            not exact words.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Traditional keyword search only matches text. Resyntra understands
            concepts, intent and relationships between research papers.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Keyword */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-border bg-card p-8"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-500/10 p-3">
                <Search className="h-6 w-6 text-red-400" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Keyword Search
                </h3>

                <p className="text-sm text-muted">
                  Matches only identical words
                </p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-background p-5">
              <p className="font-medium">
                Search:
              </p>

              <div className="mt-3 rounded-xl border border-border bg-card px-4 py-3">
                transformer
              </div>
            </div>

            <div className="mt-8 space-y-4">

              {keywordResults.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-border p-4"
                >

                  <span>{item}</span>

                  <XCircle className="h-5 w-5 text-red-400" />

                </div>
              ))}

            </div>

          </motion.div>

          {/* Semantic */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-cyan-500/20 bg-linear-to-b from-cyan-500/5 to-card p-8"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">
                <BrainCircuit className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Semantic Search
                </h3>

                <p className="text-sm text-muted">
                  Understands research intent
                </p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-background p-5">

              <p className="font-medium">
                Search:
              </p>

              <div className="mt-3 rounded-xl border border-cyan-500/20 bg-card px-4 py-3">
                transformer
              </div>

              <div className="mt-5 rounded-xl bg-cyan-500/10 p-4">

                <p className="text-sm font-medium text-cyan-400">
                  AI Interpretation
                </p>

                <p className="mt-2 text-sm text-muted leading-7">
                  Neural architecture • Self-attention • Language Models • Deep Learning
                </p>

              </div>

            </div>

            <div className="mt-8 space-y-4">

              {semanticResults.map((paper) => (

                <motion.div
                  whileHover={{ x: 5 }}
                  key={paper.title}
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-4"
                >

                  <div>

                    <h4 className="font-medium">
                      {paper.title}
                    </h4>

                    <p className="mt-1 text-xs text-muted">
                      Semantically related
                    </p>

                  </div>

                  <div className="flex items-center gap-4">

                    <span className="font-semibold text-cyan-400">
                      {paper.score}
                    </span>

                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-4xl border border-border bg-card p-8 lg:flex lg:items-center lg:justify-between"
        >

          <div>

            <h3 className="text-3xl font-bold">
              AI finds concepts,
              not just matching text.
            </h3>

            <p className="mt-4 max-w-3xl leading-8 text-muted">
              Even if your query doesn't contain the exact keywords,
              Resyntra understands the meaning and retrieves the most
              relevant research papers using semantic embeddings.
            </p>

          </div>

          <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 lg:mt-0">

            Learn More

            <ArrowRight className="h-5 w-5" />

          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default SemanticComparison;