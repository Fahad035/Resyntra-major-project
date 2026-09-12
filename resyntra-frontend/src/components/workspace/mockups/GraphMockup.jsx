import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Network,
  FileText,
  User,
  Database,
  Search,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const INITIAL_NODES = [
  {
    id: 1,
    title: "Transformer",
    type: "Architecture",
    icon: Brain,
    color: "bg-cyan-500",
    x: "50%",
    y: "16%",
  },
  {
    id: 2,
    title: "BERT",
    type: "Research Paper",
    icon: FileText,
    color: "bg-violet-500",
    x: "18%",
    y: "42%",
  },
  {
    id: 3,
    title: "GPT-4",
    type: "Research Paper",
    icon: FileText,
    color: "bg-emerald-500",
    x: "82%",
    y: "42%",
  },
  {
    id: 4,
    title: "RAG",
    type: "Technique",
    icon: Network,
    color: "bg-orange-500",
    x: "28%",
    y: "78%",
  },
  {
    id: 5,
    title: "Knowledge",
    type: "Concept",
    icon: Brain,
    color: "bg-pink-500",
    x: "72%",
    y: "78%",
  },
  {
    id: 6,
    title: "Authors",
    type: "Researchers",
    icon: User,
    color: "bg-sky-500",
    x: "50%",
    y: "55%",
  },
];

const INITIAL_LINES = [
  [1, 2],
  [1, 3],
  [2, 6],
  [3, 6],
  [6, 4],
  [6, 5],
  [4, 5],
];

const ACTIVITY_MESSAGES = [
  "Analyzing paper relationships...",
  "Discovering semantic connections...",
  "Mapping research concepts...",
  "Linking related papers...",
  "Updating knowledge graph...",
];

const getNode = (nodes, id) => nodes.find((node) => node.id === id);

const GraphMockup = () => {
  const [nodes, setNodes] = useState(INITIAL_NODES);
  const [lines, setLines] = useState(INITIAL_LINES);
  const [relationshipCount, setRelationshipCount] = useState(1284);
  const [activeLine, setActiveLine] = useState(null);
  const [activityIndex, setActivityIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  /*
   * Simulated real-time AI activity.
   * This will later be replaced by WebSocket/backend events.
   */
  useEffect(() => {
    const activityTimer = setInterval(() => {
      setActivityIndex((current) => (current + 1) % ACTIVITY_MESSAGES.length);
    }, 2800);

    return () => clearInterval(activityTimer);
  }, []);

  /*
   * Simulate relationships being discovered in real time.
   */
  useEffect(() => {
    const relationshipTimer = setInterval(() => {
      const possibleConnections = [
        [1, 6],
        [2, 4],
        [2, 5],
        [3, 5],
        [3, 4],
      ];

      const availableConnections = possibleConnections.filter(
        ([a, b]) =>
          !lines.some(
            ([x, y]) =>
              (x === a && y === b) ||
              (x === b && y === a)
          )
      );

      if (availableConnections.length === 0) {
        setLines(INITIAL_LINES);
        return;
      }

      const connection =
        availableConnections[
          Math.floor(Math.random() * availableConnections.length)
        ];

      setLines((current) => [...current, connection]);

      setActiveLine(connection);

      setRelationshipCount((current) => current + Math.floor(Math.random() * 4) + 1);

      setTimeout(() => {
        setActiveLine(null);
      }, 1800);
    }, 4200);

    return () => clearInterval(relationshipTimer);
  }, [lines]);

  /*
   * Small simulated graph refresh.
   */
  useEffect(() => {
    const analysisTimer = setInterval(() => {
      setIsAnalyzing(true);

      setTimeout(() => {
        setIsAnalyzing(false);
      }, 1400);
    }, 5000);

    return () => clearInterval(analysisTimer);
  }, []);

  const visibleNodes = useMemo(() => nodes, [nodes]);

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

      <div className="relative z-30 flex items-center justify-between border-b border-border bg-card/95 px-6 py-5 backdrop-blur">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">
              Knowledge Graph
            </h3>

            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-emerald-400"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activityIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-1 text-sm text-muted"
            >
              {ACTIVITY_MESSAGES[activityIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />

          Live
        </div>
      </div>

      {/* Graph Canvas */}

      <div className="absolute inset-x-0 bottom-0 top-22.25">
        {/* Background glow */}

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />

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

        {/* Animated connection glow */}

        <motion.div
          animate={{
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-cyan-500/2"
        />

        {/* SVG Connections */}

        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <filter
              id="graphGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                stdDeviation="3"
                result="coloredBlur"
              />

              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {lines.map(([a, b], index) => {
            const nodeA = getNode(nodes, a);
            const nodeB = getNode(nodes, b);

            if (!nodeA || !nodeB) return null;

            const isActive =
              activeLine &&
              ((activeLine[0] === a && activeLine[1] === b) ||
                (activeLine[0] === b && activeLine[1] === a));

            return (
              <g key={`${a}-${b}-${index}`}>
                {/* Base line */}

                <motion.line
                  x1={nodeA.x}
                  y1={nodeA.y}
                  x2={nodeB.x}
                  y2={nodeB.y}
                  stroke="currentColor"
                  className={
                    isActive
                      ? "text-cyan-400"
                      : "text-border"
                  }
                  strokeWidth={isActive ? "3" : "1.5"}
                  filter={isActive ? "url(#graphGlow)" : undefined}
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: isActive ? 1 : 0.55,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                />

                {/* Moving data particle */}

                {isActive && (
                  <motion.circle
                    r="4"
                    fill="currentColor"
                    className="text-cyan-400"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: 1,
                    }}
                  >
                    <animateMotion
                      dur="1.2s"
                      repeatCount="1"
                      path={`M ${
                        nodeA.x
                      } ${nodeA.y} L ${nodeB.x} ${nodeB.y}`}
                    />
                  </motion.circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes */}

        {visibleNodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.id}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.45,
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
              {/* Node pulse */}

              <motion.div
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.12, 0.25, 0.12],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
                className={`
                  absolute
                  -inset-2
                  rounded-full
                  ${node.color}
                `}
              />

              {/* Node card */}

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  flex
                  min-w-36
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-border
                  bg-background/95
                  px-4
                  py-3
                  shadow-xl
                  backdrop-blur
                "
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    text-white
                    shadow-lg
                    ${node.color}
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    {node.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-muted">
                    {node.type}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* AI scanning indicator */}

        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
                absolute
                bottom-24
                left-1/2
                -translate-x-1/2
              "
            >
              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-background/90 px-4 py-2 text-xs text-cyan-400 shadow-lg backdrop-blur">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Search className="h-3.5 w-3.5" />
                </motion.div>

                AI analyzing relationships
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom statistics */}

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div className="rounded-xl border border-border bg-background/90 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4 text-cyan-400" />

              <p className="text-sm font-semibold text-foreground">
                {relationshipCount.toLocaleString()} Relationships
              </p>
            </div>

            <p className="mt-1 text-xs text-muted">
              Continuously discovered by AI
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-border bg-background/90 px-4 py-3 backdrop-blur sm:flex">
            <Database className="h-4 w-4 text-violet-400" />

            <div>
              <p className="text-xs font-semibold text-foreground">
                Semantic Index
              </p>

              <p className="text-[10px] text-muted">
                Live synchronized
              </p>
            </div>

            <Sparkles className="ml-1 h-4 w-4 text-cyan-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GraphMockup;