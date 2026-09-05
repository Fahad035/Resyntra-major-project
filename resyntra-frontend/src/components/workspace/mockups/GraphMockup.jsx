import { motion } from "framer-motion";
import {
  Brain,
  Network,
  FileText,
  User,
} from "lucide-react";

const nodes = [
  {
    id: 1,
    title: "Transformer",
    icon: Brain,
    color: "bg-cyan-500",
    x: "50%",
    y: "15%",
    delay: 0,
  },
  {
    id: 2,
    title: "BERT",
    icon: FileText,
    color: "bg-violet-500",
    x: "18%",
    y: "42%",
    delay: 0.2,
  },
  {
    id: 3,
    title: "GPT-4",
    icon: FileText,
    color: "bg-emerald-500",
    x: "82%",
    y: "42%",
    delay: 0.4,
  },
  {
    id: 4,
    title: "RAG",
    icon: Network,
    color: "bg-orange-500",
    x: "28%",
    y: "78%",
    delay: 0.6,
  },
  {
    id: 5,
    title: "Knowledge",
    icon: Brain,
    color: "bg-pink-500",
    x: "72%",
    y: "78%",
    delay: 0.8,
  },
  {
    id: 6,
    title: "Authors",
    icon: User,
    color: "bg-sky-500",
    x: "50%",
    y: "55%",
    delay: 1,
  },
];

const lines = [
  [1, 2],
  [1, 3],
  [2, 6],
  [3, 6],
  [6, 4],
  [6, 5],
  [4, 5],
];

const getNode = (id) => nodes.find((n) => n.id === id);

const GraphMockup = () => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        relative
        h-130
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        shadow-[0_30px_80px_rgba(0,0,0,.18)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-border px-6 py-5">

        <div>

          <h3 className="text-lg font-semibold text-foreground">
            Knowledge Graph
          </h3>

          <p className="mt-1 text-sm text-muted">
            AI automatically discovers relationships.
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          Live
        </div>

      </div>

      {/* Canvas */}

      <div className="relative h-full">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
            bg-size-[40px_40px]
          "
        />

        {/* SVG Lines */}

        <svg
          className="absolute inset-0 h-full w-full"
        >
          {lines.map(([a, b], index) => {
            const n1 = getNode(a);
            const n2 = getNode(b);

            return (
              <motion.line
                key={index}
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="currentColor"
                className="text-border"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.15,
                }}
              />
            );
          })}
        </svg>

        {/* Nodes */}

        {nodes.map((node) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.id}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: node.delay,
                duration: 0.4,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              style={{
                left: node.x,
                top: node.y,
              }}
              className="
                absolute
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* Pulse */}

              <motion.div
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: node.delay,
                }}
                className={`
                  absolute
                  inset-0
                  rounded-full
                  ${node.color}
                `}
              />

              {/* Card */}

              <div
                className="
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  px-4
                  py-3
                  shadow-lg
                "
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    text-white
                    ${node.color}
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>

                  <p className="font-medium text-foreground">
                    {node.title}
                  </p>

                  <p className="text-xs text-muted">
                    Connected
                  </p>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom */}

      <div className="absolute bottom-6 left-6 rounded-xl border border-border bg-background/90 px-4 py-3 backdrop-blur">

        <p className="text-sm font-semibold text-foreground">
          1,284 Relationships
        </p>

        <p className="text-xs text-muted">
          Updated automatically by AI
        </p>

      </div>

    </motion.div>
  );
};

export default GraphMockup;