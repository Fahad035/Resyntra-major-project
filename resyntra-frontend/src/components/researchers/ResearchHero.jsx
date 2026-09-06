import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Database, Network, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "100M+",
    label: "Research Papers",
  },
  {
    value: "12M+",
    label: "Citations Indexed",
  },
  {
    value: "98%",
    label: "AI Accuracy",
  },
];

const ResearchHero = () => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-linear-to-br from-cyan-500/10 via-background to-emerald-500/10" />

      <div className="absolute left-0 top-0 h-105 w-105 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-105 w-105 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">

            <Sparkles size={16} />

            For Researchers

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

            Your Complete

            <br />

            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">

              AI Research OS

            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">

            Discover literature, analyze papers, identify research
            gaps, visualize knowledge graphs and publish faster with
            one intelligent research workspace.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105"
            >

              Start Researching

              <ArrowRight size={18} />

            </Link>

            <Link
              to="/platform/workspace"
              className="rounded-2xl border border-border px-7 py-4 font-semibold transition hover:border-cyan-500"
            >
              Explore Workspace
            </Link>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">

            {stats.map((item) => (

              <div key={item.label}>

                <h3 className="text-4xl font-black text-cyan-400">

                  {item.value}

                </h3>

                <p className="mt-2 text-muted">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
        >

          <div className="overflow-hidden rounded-[36px] border border-border bg-background/80 backdrop-blur-xl">

            {/* Top */}

            <div className="flex items-center justify-between border-b border-border px-8 py-6">

              <div>

                <h3 className="text-xl font-semibold">

                  Active Research Project

                </h3>

                <p className="mt-1 text-sm text-muted">

                  Large Language Models for Healthcare

                </p>

              </div>

              <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-400">

                Live

              </span>

            </div>

            <div className="space-y-5 p-8">

              <div className="rounded-2xl border border-border p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <FileSearch className="text-cyan-400" />

                    <div>

                      <h4 className="font-semibold">

                        Literature Search

                      </h4>

                      <p className="text-sm text-muted">

                        1,248 papers collected

                      </p>

                    </div>

                  </div>

                  <span className="font-semibold text-cyan-400">

                    Complete

                  </span>

                </div>

              </div>

              <div className="rounded-2xl border border-border p-5">

                <div className="flex items-center gap-4">

                  <Network className="text-violet-400" />

                  <div>

                    <h4 className="font-semibold">

                      Knowledge Graph

                    </h4>

                    <p className="text-sm text-muted">

                      18 research clusters identified

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-border p-5">

                <div className="flex items-center gap-4">

                  <Database className="text-emerald-400" />

                  <div>

                    <h4 className="font-semibold">

                      Research Gap Detection

                    </h4>

                    <p className="text-sm text-muted">

                      6 high-impact opportunities discovered

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-3xl bg-linear-to-r from-cyan-500/10 to-emerald-500/10 p-6">

                <p className="text-sm text-muted">

                  AI Recommendation

                </p>

                <h4 className="mt-3 text-xl font-semibold">

                  Compare recent multimodal LLM papers published after 2024.

                </h4>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ResearchHero;