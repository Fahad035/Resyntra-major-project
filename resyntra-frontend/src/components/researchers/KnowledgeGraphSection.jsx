import { motion } from "framer-motion";
import {
  BrainCircuit,
  Network,
  FileText,
  Users,
  Database,
} from "lucide-react";

const nodes = [
  {
    title: "LLMs",
    icon: BrainCircuit,
    top: "8%",
    left: "42%",
    color: "bg-cyan-500",
    delay: 0,
  },
  {
    title: "Healthcare",
    icon: Database,
    top: "28%",
    left: "12%",
    color: "bg-emerald-500",
    delay: .1,
  },
  {
    title: "BioNLP",
    icon: FileText,
    top: "28%",
    left: "72%",
    color: "bg-violet-500",
    delay: .2,
  },
  {
    title: "Clinical AI",
    icon: Network,
    top: "68%",
    left: "22%",
    color: "bg-orange-500",
    delay: .3,
  },
  {
    title: "Researchers",
    icon: Users,
    top: "68%",
    left: "66%",
    color: "bg-pink-500",
    delay: .4,
  },
];

const stats = [
  {
    value: "4.8M",
    label: "Research Connections",
  },
  {
    value: "96K",
    label: "Authors Linked",
  },
  {
    value: "12M",
    label: "Citation Relations",
  },
];

const KnowledgeGraphSection = () => {
  return (
    <section className="py-32">

      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Knowledge Graph
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Discover hidden
            <br />
            research connections.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted">
            Resyntra automatically builds a living knowledge graph
            connecting authors, papers, institutions, citations and
            research topics so you can identify trends and unexplored
            opportunities.
          </p>

          <div className="mt-12 space-y-6">

            {stats.map((item) => (

              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-border bg-background/60 p-6"
              >

                <h3 className="text-3xl font-black text-cyan-400">
                  {item.value}
                </h3>

                <span className="text-muted">
                  {item.label}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-155 overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5"
        >

          {/* Glow */}

          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

          {/* Lines */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              x1="45"
              y1="15"
              x2="18"
              y2="34"
              stroke="#22d3ee"
              strokeOpacity=".25"
            />
            <line
              x1="45"
              y1="15"
              x2="78"
              y2="34"
              stroke="#22d3ee"
              strokeOpacity=".25"
            />
            <line
              x1="45"
              y1="15"
              x2="28"
              y2="73"
              stroke="#22d3ee"
              strokeOpacity=".25"
            />
            <line
              x1="45"
              y1="15"
              x2="70"
              y2="73"
              stroke="#22d3ee"
              strokeOpacity=".25"
            />
            <line
              x1="18"
              y1="34"
              x2="28"
              y2="73"
              stroke="#22d3ee"
              strokeOpacity=".2"
            />
            <line
              x1="78"
              y1="34"
              x2="70"
              y2="73"
              stroke="#22d3ee"
              strokeOpacity=".2"
            />
          </svg>

          {nodes.map((node) => {

            const Icon = node.icon;

            return (

              <motion.div
                key={node.title}
                initial={{
                  opacity: 0,
                  scale: .5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: node.delay,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                style={{
                  top: node.top,
                  left: node.left,
                }}
                className="absolute"
              >

                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full ${node.color} shadow-[0_0_40px_rgba(34,211,238,.35)]`}
                  >
                    <Icon className="h-9 w-9 text-white" />
                  </div>

                  <div className="mt-4 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-semibold backdrop-blur">
                    {node.title}
                  </div>

                </div>

              </motion.div>

            );

          })}

          {/* Center */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-violet-500"
          >

            <Network className="h-12 w-12 text-white" />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default KnowledgeGraphSection;