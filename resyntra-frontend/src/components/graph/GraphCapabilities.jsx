import { motion } from "framer-motion";
import {
  BrainCircuit,
  Network,
  Sparkles,
  Database,
 GitBranch,
  ShieldCheck,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Semantic Relationships",
    description:
      "AI discovers hidden relationships between concepts beyond keyword matching.",
    icon: BrainCircuit,
  },
  {
    title: "Citation Network",
    description:
      "Track citation flow and identify influential publications instantly.",
    icon: Network,
  },
  {
    title: "Trend Detection",
    description:
      "Identify emerging research areas before they become mainstream.",
    icon: Activity,
  },
  {
    title: "Knowledge Clustering",
    description:
      "Automatically group related papers into meaningful research domains.",
    icon: GitBranch,
  },
];

const stats = [
  {
    value: "12.8M",
    label: "Knowledge Nodes",
  },
  {
    value: "97.8%",
    label: "Relationship Accuracy",
  },
  {
    value: "4.1M",
    label: "Citation Links",
  },
];

const GraphCapabilities = () => {
  return (
    <section className="pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5"
        >

          {/* Header */}

          <div className="border-b border-border p-10">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <Sparkles className="h-4 w-4" />
              AI Knowledge Engine
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Turn research into
              <span className="text-cyan-400"> connected knowledge.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Resyntra continuously analyzes millions of publications,
              citations and concepts to build an evolving knowledge graph
              that helps researchers discover meaningful insights faster.
            </p>

          </div>

          {/* Body */}

          <div className="grid gap-10 p-10 lg:grid-cols-[1.2fr_.8fr]">

            {/* Left */}

            <div>

              <div className="grid gap-6 md:grid-cols-2">

                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        y: -6,
                      }}
                      className="rounded-3xl border border-border bg-background/70 p-6 backdrop-blur"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                        <Icon className="h-7 w-7 text-cyan-400" />
                      </div>

                      <h3 className="mt-6 text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-muted">
                        {item.description}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>

            {/* Right */}

            <div className="rounded-[30px] border border-border bg-background/70 p-8 backdrop-blur">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    System Status
                  </h3>

                  <p className="mt-2 text-muted">
                    Live AI Knowledge Network
                  </p>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                  Operational
                </div>

              </div>

              <div className="mt-10 space-y-5">

                {stats.map((stat) => (

                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    key={stat.label}
                    className="rounded-2xl border border-border p-5"
                  >

                    <p className="text-4xl font-bold text-cyan-400">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-muted">
                      {stat.label}
                    </p>

                  </motion.div>

                ))}

              </div>

              <div className="mt-10 rounded-3xl bg-cyan-500/10 p-6">

                <div className="flex items-center gap-3">

                  <Database className="h-7 w-7 text-cyan-400" />

                  <div>

                    <h4 className="font-semibold">
                      AI Sync Engine
                    </h4>

                    <p className="text-sm text-muted">
                      Updated every few minutes
                    </p>

                  </div>

                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-border">

                  <motion.div
                    animate={{
                      width: ["18%", "82%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="h-full rounded-full bg-cyan-500"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t border-border bg-background/40 p-10">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>

                <h3 className="text-3xl font-bold">
                  Explore research as an interconnected ecosystem.
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-muted">
                  Navigate concepts, authors, publications and citations
                  with AI-powered knowledge graphs built specifically for
                  academic research.
                </p>

              </div>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105"
              >
                Start Exploring

                <ArrowRight className="h-5 w-5" />

              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default GraphCapabilities;