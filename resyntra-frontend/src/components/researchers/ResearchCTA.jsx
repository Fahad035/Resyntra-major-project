import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  BookOpen,
  Quote,
  Users,
  Rocket,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "250M+",
    label: "Research Papers",
  },
  {
    icon: Quote,
    value: "3.8B+",
    label: "Citation Links",
  },
  {
    icon: Users,
    value: "18K+",
    label: "Researchers",
  },
];

const authors = [
  "Akari Asai",
  "Graham Neubig",
  "Luke Zettlemoyer",
  "Hannaneh Hajishirzi",
  "Daniel S. Weld",
];

const ResearchCTA = () => {
  return (
    <section className="pb-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[42px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10 p-12 lg:p-16"
        >

          {/* Background Glow */}

          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute -bottom-40 -right-32 h-105 w-105 rounded-full bg-violet-500/10 blur-[150px]" />

          <div className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">

            {/* Left */}

            <div>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                AI for Scientific Discovery
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
                Build the next
                <br />
                breakthrough with AI.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
                Search millions of papers, synthesize scientific
                literature, discover research gaps, and collaborate
                with researchers across the world—all from one
                intelligent research workspace.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">

                  Start Researching

                  <ArrowRight size={18} />

                </button>

                <button className="rounded-2xl border border-border px-8 py-4 transition hover:border-cyan-500">

                  Explore Publications

                </button>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-border bg-background/60 p-7 backdrop-blur">

                <div className="flex items-center gap-3">

                  <BrainCircuit className="text-cyan-400" />

                  <h3 className="font-bold">
                    Featured Research Inspiration
                  </h3>

                </div>

                <h4 className="mt-6 text-2xl font-bold leading-snug">
                  Synthesizing Scientific Literature with
                  Retrieval-Augmented Language Models
                </h4>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Inspired by recent advances in AI-assisted scientific
                  literature synthesis and retrieval-augmented reasoning.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {authors.map((author) => (

                    <span
                      key={author}
                      className="rounded-full bg-cyan-500/10 px-3 py-2 text-sm text-cyan-400"
                    >
                      {author}
                    </span>

                  ))}

                  <span className="rounded-full border border-border px-3 py-2 text-sm">
                    +20 Authors
                  </span>

                </div>

              </div>

              <div className="grid grid-cols-3 gap-4">

                {stats.map((item) => {

                  const Icon = item.icon;

                  return (

                    <motion.div
                      key={item.label}
                      whileHover={{
                        y: -6,
                      }}
                      className="rounded-2xl border border-border bg-background/60 p-5 text-center backdrop-blur"
                    >

                      <Icon className="mx-auto text-cyan-400" />

                      <h4 className="mt-4 text-3xl font-black">
                        {item.value}
                      </h4>

                      <p className="mt-2 text-xs text-muted">
                        {item.label}
                      </p>

                    </motion.div>

                  );

                })}

              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-linear-to-r from-emerald-500/10 to-cyan-500/10 p-5">

                <div className="flex items-center gap-3">

                  <Sparkles className="text-emerald-400" />

                  <Rocket className="text-cyan-400" />

                </div>

                <p className="mt-4 leading-7 text-muted">
                  Your next influential publication could begin with a
                  single AI-powered literature search.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ResearchCTA;