import { motion } from "framer-motion";
import {
  BrainCircuit,
  Users,
  BookOpen,
  Quote,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

const papers = [
  {
    title: "Attention Is All You Need",
    year: "2017",
    citations: "128K",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    year: "2018",
    citations: "94K",
  },
  {
    title: "Language Models are Few-Shot Learners",
    year: "2020",
    citations: "68K",
  },
];

const NodeInspector = () => {
  return (
    <section className="pb-28">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-violet-500/5 via-background to-cyan-500/5"
        >
          <div className="grid lg:grid-cols-[380px_1fr]">

            {/* Left */}

            <div className="border-r border-border p-8">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500 text-slate-950">
                <BrainCircuit size={36} />
              </div>

              <h2 className="mt-8 text-3xl font-bold">
                Transformer
              </h2>

              <p className="mt-4 leading-8 text-muted">
                The Transformer architecture introduced self-attention,
                revolutionizing NLP and becoming the foundation of modern
                large language models.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-5">
                  <span className="text-muted">Research Papers</span>
                  <span className="font-bold text-cyan-400">4,286</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-5">
                  <span className="text-muted">Authors</span>
                  <span className="font-bold text-cyan-400">18,902</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-border bg-background p-5">
                  <span className="text-muted">Citations</span>
                  <span className="font-bold text-cyan-400">2.8M</span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="p-8">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    Most Influential Papers
                  </h3>

                  <p className="mt-2 text-muted">
                    Ranked by citation impact and semantic relevance.
                  </p>

                </div>

              </div>

              <div className="space-y-5">

                {papers.map((paper, index) => (

                  <motion.div
                    key={paper.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-border bg-background p-6"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <div className="flex items-center gap-3">

                          <BookOpen className="h-5 w-5 text-cyan-400" />

                          <h4 className="text-lg font-semibold">
                            {paper.title}
                          </h4>

                        </div>

                        <div className="mt-5 flex flex-wrap gap-6">

                          <div className="flex items-center gap-2 text-muted">

                            <Calendar size={16} />

                            {paper.year}

                          </div>

                          <div className="flex items-center gap-2 text-muted">

                            <Quote size={16} />

                            {paper.citations}

                          </div>

                          <div className="flex items-center gap-2 text-muted">

                            <Users size={16} />

                            Multiple Authors

                          </div>

                        </div>

                      </div>

                      <button className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950">

                        <ArrowUpRight />

                      </button>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NodeInspector;