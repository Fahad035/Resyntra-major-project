import { motion } from "framer-motion";
import {
  BrainCircuit,
  Search,
  Sparkles,
  Network,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Target,
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
    <section className="relative overflow-hidden pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-150 w-150 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] border border-border bg-card shadow-2xl"
        >
          {/* =========================================================
              HEADER
          ========================================================= */}

          <div className="relative overflow-hidden border-b border-border px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-cyan-400" />

                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Research Intelligence
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                  <BrainCircuit className="h-4 w-4" />
                  AI Intelligence Engine
                </div>

                <h2 className="mt-7 text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                  Understand the
                  <br />
                  <span className="text-muted">
                    research landscape.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
                  Resyntra connects concepts, research papers, citations,
                  and emerging ideas to reveal the knowledge behind your
                  search.
                </p>
              </div>

              <div className="hidden max-w-xs lg:block">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <Zap className="h-5 w-5 text-cyan-400" />

                  <span>
                    Semantic understanding
                    <br />
                    beyond keywords
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              INTELLIGENCE DASHBOARD
          ========================================================= */}

          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            {/* =======================================================
                LEFT — QUERY INTELLIGENCE
            ======================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[28px] border border-border bg-background"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

              <div className="relative p-7 sm:p-8">
                {/* Panel header */}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                        <Search className="h-5 w-5 text-cyan-400" />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                          AI analysis
                        </p>

                        <h3 className="mt-1 text-xl font-semibold text-foreground">
                          Query Understanding
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Analyzing
                  </div>
                </div>

                {/* Query */}

                <div className="mt-8 rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Research query
                    </p>

                    <Target className="h-4 w-4 text-cyan-400" />
                  </div>

                  <p className="mt-3 text-base font-medium leading-7 text-foreground">
                    Efficient Transformer models for edge devices
                  </p>
                </div>

                {/* Processing line */}

                <div className="my-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />

                  <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                    Concepts identified
                  </span>

                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Concept list */}

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Edge AI",
                    "Transformer",
                    "Model Compression",
                    "Efficiency",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.4,
                      }}
                      className="group flex items-center gap-3 rounded-xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-3 transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-semibold text-cyan-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-foreground">
                        {item}
                      </span>

                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted opacity-0 transition group-hover:text-cyan-400 group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* =======================================================
                RIGHT — DISCOVERY METRICS
            ======================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[28px] border border-border bg-background"
            >
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />

              <div className="relative p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <BarChart3 className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      Search output
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      Discovery Metrics
                    </h3>
                  </div>
                </div>

                {/* Metrics */}

                <div className="mt-8 space-y-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                      }}
                      className="group rounded-2xl border border-border bg-card p-5 transition hover:border-cyan-500/20"
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {metric.value}
                          </p>

                          <p className="mt-2 text-sm text-muted">
                            {metric.label}
                          </p>
                        </div>

                        <div className="h-10 w-20 overflow-hidden rounded-lg bg-cyan-500/5">
                          <div
                            className="mt-6 h-1 rounded-full bg-cyan-400 transition-all duration-700 group-hover:w-full"
                            style={{
                              width:
                                index === 0
                                  ? "78%"
                                  : index === 1
                                  ? "94%"
                                  : "68%",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Status */}

                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-3">
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan-400" />

                  <p className="text-xs leading-5 text-muted">
                    AI ranking prioritizes relevance, context, and
                    semantic similarity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
              RELATED CONCEPTS
          ========================================================= */}

          <div className="border-t border-border px-6 py-10 sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              {/* Text */}

              <div>
                <div className="flex items-center gap-3">
                  <Network className="h-5 w-5 text-cyan-400" />

                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    Knowledge connections
                  </p>
                </div>

                <h3 className="mt-5 text-3xl font-bold text-foreground">
                  See how ideas
                  <br />
                  connect.
                </h3>

                <p className="mt-4 max-w-md leading-7 text-muted">
                  Instead of returning isolated keywords, Resyntra
                  identifies the concepts and relationships surrounding
                  your research question.
                </p>
              </div>

              {/* Concepts */}

              <div className="relative min-h-55 overflow-hidden rounded-[28px] border border-border bg-background p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

                {/* Connection lines */}

                <div className="pointer-events-none absolute left-[20%] right-[20%] top-1/2 h-px bg-cyan-500/10" />

                <div className="pointer-events-none absolute bottom-[25%] left-1/2 top-[25%] w-px bg-cyan-500/10" />

                {/* Central node */}

                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyan-400/30 bg-card shadow-lg shadow-cyan-500/10"
                >
                  <BrainCircuit className="h-7 w-7 text-cyan-400" />
                </motion.div>

                {/* Concept nodes */}

                {concepts.map((concept, index) => {
                  const positions = [
                    "left-[6%] top-[18%]",
                    "left-[38%] top-[8%]",
                    "right-[6%] top-[18%]",
                    "left-[4%] bottom-[14%]",
                    "left-[39%] bottom-[7%]",
                    "right-[5%] bottom-[14%]",
                    "right-[35%] top-[43%]",
                  ];

                  return (
                    <motion.div
                      key={concept}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.4,
                      }}
                      animate={{
                        y: [0, index % 2 === 0 ? -4 : 4, 0],
                      }}
                      className={`absolute ${positions[index]} rounded-full border border-cyan-500/15 bg-card px-3 py-2 text-xs font-medium text-cyan-400 shadow-sm`}
                    >
                      {concept}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}

          <div className="relative overflow-hidden border-t border-border bg-background/50 px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>

                  <span className="text-sm font-semibold text-cyan-400">
                    Research smarter
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
                  Ready to discover your next breakthrough?
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-muted">
                  Search millions of academic papers using AI-powered
                  semantic understanding and uncover the research that
                  matters to you.
                </p>
              </div>

              <Link
                to="/register"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Start Searching

                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchInsights;