import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  BookOpen,
  Quote,
  Sparkles,
  ChevronRight,
  Clock3,
} from "lucide-react";

const papers = [
  {
    title: "Large Language Models for Healthcare Diagnostics",
    authors: "Sarah Kim • Michael Ross • Emily Carter",
    year: "2025",
    citations: 428,
    score: "98%",
    tags: ["Healthcare", "LLM", "Diagnostics"],
  },
  {
    title: "Multimodal Foundation Models in Clinical Decision Making",
    authors: "A. Patel • Y. Wang • David Lee",
    year: "2024",
    citations: 312,
    score: "95%",
    tags: ["Multimodal", "Medical AI"],
  },
  {
    title: "Transformer Architectures for Biomedical NLP",
    authors: "J. Wilson • Anna Moore",
    year: "2024",
    citations: 186,
    score: "92%",
    tags: ["Transformer", "BioNLP"],
  },
];

const filters = [
  "Healthcare AI",
  "Large Language Models",
  "Clinical NLP",
  "Transformers",
  "Systematic Reviews",
];

const LiteratureDiscovery = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            AI Literature Discovery
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Search research by meaning,
            <br />
            not just keywords.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Semantic AI understands your research intent and surfaces
            the most relevant publications automatically.
          </p>

        </div>

        <div className="mt-20 grid gap-8 xl:grid-cols-[320px_1fr]">

          {/* Sidebar */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-border bg-background/70 p-8 backdrop-blur"
          >

            <div className="flex items-center gap-3">

              <SlidersHorizontal className="text-cyan-400" />

              <h3 className="text-xl font-semibold">
                AI Filters
              </h3>

            </div>

            <div className="mt-8 space-y-4">

              {filters.map((item) => (

                <button
                  key={item}
                  className="w-full rounded-xl border border-border px-4 py-3 text-left transition hover:border-cyan-500 hover:bg-cyan-500/5"
                >
                  {item}
                </button>

              ))}

            </div>

            <div className="mt-10 rounded-2xl bg-linear-to-br from-cyan-500/10 to-emerald-500/10 p-6">

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400" />

                <h4 className="font-semibold">
                  AI Suggestion
                </h4>

              </div>

              <p className="mt-4 leading-7 text-muted">
                Include papers published after 2023 to capture the
                latest advances in multimodal healthcare models.
              </p>

            </div>

          </motion.div>

          {/* Results */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[30px] border border-border bg-background/70 p-8 backdrop-blur"
          >

            {/* Search */}

            <div className="flex flex-col gap-5 lg:flex-row">

              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-border px-5 py-4">

                <Search className="text-cyan-400" />

                <input
                  readOnly
                  value="Large language models for healthcare"
                  className="w-full bg-transparent outline-none"
                />

              </div>

              <button className="rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105">

                Search

              </button>

            </div>

            <div className="mt-10 space-y-6">

              {papers.map((paper, index) => (

                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-3xl border border-border p-7 transition hover:border-cyan-500/30"
                >

                  <div className="flex flex-wrap items-start justify-between gap-6">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {paper.title}
                      </h3>

                      <p className="mt-3 text-muted">
                        {paper.authors}
                      </p>

                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">

                      {paper.score} Match

                    </span>

                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">

                    {paper.tags.map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

                    <div className="flex gap-8 text-sm text-muted">

                      <div className="flex items-center gap-2">

                        <Clock3 size={16} />

                        {paper.year}

                      </div>

                      <div className="flex items-center gap-2">

                        <Quote size={16} />

                        {paper.citations} Citations

                      </div>

                      <div className="flex items-center gap-2">

                        <BookOpen size={16} />

                        Journal Article

                      </div>

                    </div>

                    <button className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-3">

                      View Paper

                      <ChevronRight size={18} />

                    </button>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default LiteratureDiscovery;