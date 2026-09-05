import { motion } from "framer-motion";
import {
  BrainCircuit,
  Search,
  Sparkles,
  Network,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const concepts = [
  "Transformer",
  "Attention",
  "LLMs",
  "RAG",
  "Embeddings",
  "Vector Search",
  "Knowledge Graph",
];

const metrics = [
  {
    value: "18,426",
    label: "Relevant Papers",
  },
  {
    value: "97%",
    label: "Average Match",
  },
  {
    value: "2.8M",
    label: "Citations",
  },
];

const SearchInsights = () => {
  return (
    <section className="pb-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-border bg-card"
        >

          {/* Header */}

          <div className="border-b border-border p-10">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <BrainCircuit className="h-4 w-4" />
              AI Intelligence Engine
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Understand your research
              <br />
              before you even open a paper.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Resyntra analyzes concepts, relationships, citations,
              and research trends to help you discover exactly what
              matters.
            </p>

          </div>

          {/* Dashboard */}

          <div className="grid gap-8 p-8 lg:grid-cols-3">

            {/* Panel 1 */}

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-border bg-background p-6"
            >

              <div className="flex items-center gap-3">

                <Search className="h-6 w-6 text-cyan-400" />

                <h3 className="text-xl font-semibold">
                  Query Understanding
                </h3>

              </div>

              <div className="mt-8 rounded-2xl bg-card p-5">

                <p className="text-sm text-muted">
                  User Query
                </p>

                <p className="mt-2 font-medium">
                  Efficient Transformer models for edge devices
                </p>

              </div>

              <div className="mt-6 space-y-3">

                {[
                  "Edge AI",
                  "Transformer",
                  "Model Compression",
                  "Efficiency",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-cyan-500/10 px-4 py-3 text-sm text-cyan-400"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

            {/* Panel 2 */}

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-border bg-background p-6"
            >

              <div className="flex items-center gap-3">

                <Network className="h-6 w-6 text-cyan-400" />

                <h3 className="text-xl font-semibold">
                  Related Concepts
                </h3>

              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                {concepts.map((concept, index) => (
                  <motion.div
                    key={concept}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                  >
                    {concept}
                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* Panel 3 */}

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-border bg-background p-6"
            >

              <div className="flex items-center gap-3">

                <BarChart3 className="h-6 w-6 text-cyan-400" />

                <h3 className="text-xl font-semibold">
                  Discovery Metrics
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {metrics.map((metric) => (

                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border p-5"
                  >

                    <p className="text-4xl font-bold text-cyan-400">
                      {metric.value}
                    </p>

                    <p className="mt-2 text-sm text-muted">
                      {metric.label}
                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

          {/* Footer */}

          <div className="border-t border-border bg-background/40 px-8 py-12">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>

                <div className="flex items-center gap-3">

                  <Sparkles className="h-6 w-6 text-cyan-400" />

                  <h3 className="text-3xl font-bold">
                    Ready to discover your next breakthrough?
                  </h3>

                </div>

                <p className="mt-4 max-w-2xl leading-8 text-muted">
                  Search millions of academic papers using AI-powered
                  semantic understanding and uncover insights faster
                  than traditional keyword search.
                </p>

              </div>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105"
              >
                Start Searching

                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SearchInsights;