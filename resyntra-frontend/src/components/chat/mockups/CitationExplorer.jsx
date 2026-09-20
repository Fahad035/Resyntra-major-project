import { motion } from "framer-motion";
import {
  BookOpen,
  Quote,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const sources = [
  {
    title: "Attention Is All You Need",
    page: "Page 5",
    section: "3.2 Self-Attention",
    confidence: "98%",
    color: "cyan",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    page: "Page 8",
    section: "Methodology",
    confidence: "95%",
    color: "violet",
  },
  {
    title: "GPT-4 Technical Report",
    page: "Page 17",
    section: "Scaling Laws",
    confidence: "97%",
    color: "emerald",
  },
];

const CitationExplorer = () => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Source Verification
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Every answer is backed by citations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Unlike generic AI assistants, every response links directly
            to the supporting research paper and page reference.
          </p>

        </div>

        <div className="mt-20 space-y-6">

          {sources.map((source, index) => (

            <motion.div
              key={source.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-[28px] border border-border bg-linear-to-r from-background via-background to-cyan-500/5 p-7"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                    <BookOpen className="h-7 w-7 text-cyan-400" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {source.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">

                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                        {source.page}
                      </span>

                      <span className="rounded-full border border-border px-3 py-1 text-sm">
                        {source.section}
                      </span>

                    </div>

                  </div>

                </div>

                <div className="flex flex-wrap items-center gap-3">

                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">

                    <CheckCircle2 className="h-4 w-4" />

                    {source.confidence}

                  </span>

                  <button className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 transition hover:border-cyan-500">

                    View Source

                    <ExternalLink className="h-4 w-4" />

                  </button>

                </div>

              </div>

              <div className="mt-8 rounded-2xl border border-border bg-background/70 p-5">

                <div className="flex items-center gap-3">

                  <Quote className="h-5 w-5 text-cyan-400" />

                  <span className="font-medium">
                    Referenced Passage
                  </span>

                </div>

                <p className="mt-5 leading-8 text-muted italic">
                  "Self-attention enables the model to relate different
                  positions of a sequence directly, allowing parallel
                  computation and improved long-range dependency
                  modeling."
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-16 rounded-4xl border border-border bg-linear-to-r from-cyan-500/10 via-background to-violet-500/10 p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <ShieldCheck className="h-7 w-7 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  AI Trust Layer
                </h3>

              </div>

              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Every generated answer is verified against uploaded
                research papers before being presented to the user.
              </p>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 text-slate-950">

              <Sparkles className="h-5 w-5" />

              Verified AI Response

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CitationExplorer;