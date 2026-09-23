import {
  Activity,
  ArrowUpRight,
  Database,
  FileSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WorkspaceCTA = () => {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-card
          "
        >
          {/* Background */}

          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
              bg-size-[36px_36px]
            "
          />

          <div className="relative grid lg:grid-cols-[1fr_auto]">
            {/* Main */}

            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Workspace operational
                </span>
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-black tracking-tight text-foreground lg:text-4xl">
                Your research environment is ready.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Upload papers whenever you need them. Resyntra will
                process your documents and prepare them for AI-powered
                research workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/platform/chat-with-papers"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-950
                    transition
                    hover:-translate-y-0.5
                  "
                >
                  Open Research Assistant

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Status */}

            <div className="grid border-t border-border sm:grid-cols-2 lg:w-105 lg:grid-cols-1 lg:border-l lg:border-t-0">
              <div className="border-b border-border p-7 sm:border-r lg:border-r-0">
                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 text-cyan-400" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Vector Engine
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-sm font-semibold text-foreground">
                    Ready
                  </span>
                </div>
              </div>

              <div className="border-b border-border p-7">
                <div className="flex items-center gap-3">
                  <FileSearch className="h-4 w-4 text-violet-400" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Research Discovery
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    60+ curated papers
                  </span>
                </div>
              </div>

              <div className="border-b border-border p-7 sm:border-b-0">
                <div className="flex items-center gap-3">
                  <Activity className="h-4 w-4 text-orange-400" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    AI Processing
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-sm font-semibold text-foreground">
                    Online
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Research Workspace
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />

                  <span className="text-sm font-semibold text-foreground">
                    AI Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceCTA;