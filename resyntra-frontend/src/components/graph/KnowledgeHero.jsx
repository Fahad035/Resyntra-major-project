import { motion } from "framer-motion";
import {
  Network,
  Sparkles,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";

const nodes = [
  { label: "Transformer", x: "50%", y: "45%" },
  { label: "Attention", x: "24%", y: "28%" },
  { label: "LLMs", x: "76%", y: "30%" },
  { label: "BERT", x: "25%", y: "70%" },
  { label: "RAG", x: "75%", y: "70%" },
];

const KnowledgeHero = () => {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,.10),transparent_45%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <Network className="h-4 w-4" />
            AI Knowledge Graph
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
            Visualize how
            <span className="text-cyan-400"> ideas connect.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            Discover relationships between papers, authors, concepts,
            citations and research topics through an interactive
            AI-powered knowledge graph.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              to="/register"
              className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950"
            >
              Explore Graph
            </Link>

            <button className="rounded-2xl border border-border px-8 py-4">
              Live Demo
            </button>

          </div>

        </motion.div>

        {/* Graph Preview */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .2 }}
          className="relative mt-24 h-155 overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5"
        >

          {/* Connection Lines */}

          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <line
              x1="50%"
              y1="45%"
              x2="24%"
              y2="28%"
              stroke="currentColor"
              className="text-cyan-500/30"
            />

            <line
              x1="50%"
              y1="45%"
              x2="76%"
              y2="30%"
              stroke="currentColor"
              className="text-cyan-500/30"
            />

            <line
              x1="50%"
              y1="45%"
              x2="25%"
              y2="70%"
              stroke="currentColor"
              className="text-cyan-500/30"
            />

            <line
              x1="50%"
              y1="45%"
              x2="75%"
              y2="70%"
              stroke="currentColor"
              className="text-cyan-500/30"
            />
          </svg>

          {nodes.map((node, i) => (

            <motion.div
              key={node.label}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: i * .4,
              }}
              style={{
                left: node.x,
                top: node.y,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >

              <div className="rounded-2xl border border-cyan-500/20 bg-background/90 px-6 py-4 shadow-xl backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="rounded-lg bg-cyan-500/10 p-2">
                    <BrainCircuit className="h-5 w-5 text-cyan-400" />
                  </div>

                  <span className="font-medium">
                    {node.label}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

          {/* Center */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_80px_rgba(6,182,212,.35)]">

              <Sparkles className="h-10 w-10 text-slate-950" />

            </div>

          </motion.div>

          {/* Floating Stats */}

          <div className="absolute left-10 top-10 rounded-2xl border border-border bg-background/80 p-5 backdrop-blur">
            <p className="text-3xl font-bold text-cyan-400">1.2M</p>
            <p className="text-sm text-muted">Connected Concepts</p>
          </div>

          <div className="absolute bottom-10 right-10 rounded-2xl border border-border bg-background/80 p-5 backdrop-blur">
            <p className="text-3xl font-bold text-cyan-400">95%</p>
            <p className="text-sm text-muted">Relationship Accuracy</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default KnowledgeHero;