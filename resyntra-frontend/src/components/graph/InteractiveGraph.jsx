import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileText,
  User,
  Network,
  Database,
  Microscope,
  Sparkles,
} from "lucide-react";

const nodes = [
  {
    id: 1,
    title: "Large Language Models",
    x: 50,
    y: 45,
    size: "lg",
    color: "bg-cyan-500",
    icon: BrainCircuit,
  },
  {
    id: 2,
    title: "Transformer",
    x: 26,
    y: 25,
    color: "bg-violet-500",
    icon: Network,
  },
  {
    id: 3,
    title: "Attention",
    x: 74,
    y: 24,
    color: "bg-emerald-500",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "BERT",
    x: 18,
    y: 63,
    color: "bg-orange-500",
    icon: FileText,
  },
  {
    id: 5,
    title: "GPT",
    x: 82,
    y: 60,
    color: "bg-pink-500",
    icon: Database,
  },
  {
    id: 6,
    title: "Research Papers",
    x: 42,
    y: 80,
    color: "bg-sky-500",
    icon: Microscope,
  },
  {
    id: 7,
    title: "Authors",
    x: 63,
    y: 82,
    color: "bg-indigo-500",
    icon: User,
  },
];

const lines = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [5, 6],
  [4, 6],
  [6, 7],
  [2, 4],
  [3, 5],
];

const getNode = (id) => nodes.find((n) => n.id === id);

const InteractiveGraph = () => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Interactive Visualization
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Every paper is connected.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Explore how authors, concepts, citations and publications
            relate inside one intelligent research network.
          </p>

        </div>

        <div className="relative h-190 overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5">

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-size-[45px_45px]" />

          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {lines.map(([a, b], i) => {
              const from = getNode(a);
              const to = getNode(b);

              return (
                <motion.line
                  key={i}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="rgba(6,182,212,.35)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.08,
                  }}
                />
              );
            })}
          </svg>

          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                whileHover={{
                  scale: 1.08,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
              >
                <div className="group rounded-3xl border border-border bg-background/90 p-5 shadow-2xl backdrop-blur transition hover:border-cyan-500/40">

                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${node.color}`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {node.title}
                      </h4>

                      <p className="mt-1 text-sm text-muted">
                        Connected Knowledge
                      </p>

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}

          <div className="absolute left-10 bottom-10 rounded-3xl border border-border bg-background/90 p-6 backdrop-blur">

            <p className="text-3xl font-bold text-cyan-400">
              12,482
            </p>

            <p className="mt-2 text-muted">
              Active Relationships
            </p>

          </div>

          <div className="absolute right-10 top-10 rounded-3xl border border-border bg-background/90 p-6 backdrop-blur">

            <p className="text-3xl font-bold text-cyan-400">
              2.4M
            </p>

            <p className="mt-2 text-muted">
              Knowledge Connections
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default InteractiveGraph;