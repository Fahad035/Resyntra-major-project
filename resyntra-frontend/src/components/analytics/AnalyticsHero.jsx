import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "2.4M",
    label: "Research Papers",
  },
  {
    value: "87K",
    label: "Authors",
  },
  {
    value: "98%",
    label: "AI Accuracy",
  },
  {
    value: "312",
    label: "Research Fields",
  },
];

const bars = [65, 90, 55, 82, 72, 98, 76, 58];

const AnalyticsHero = () => {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,.12),transparent_45%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <BarChart3 className="h-4 w-4" />
              AI Research Analytics
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
              Understand
              <span className="text-cyan-400"> research trends</span>
              <br />
              with AI.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Analyze publications, citations, author influence,
              collaboration networks and emerging research topics from
              one intelligent dashboard.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                to="/register"
                className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950"
              >
                Start Analysis
              </Link>

              <button className="rounded-2xl border border-border px-8 py-4">
                Live Demo
              </button>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-8"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">
                  Research Growth
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  +38%
                </h3>

              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-4">

                <TrendingUp className="h-8 w-8 text-cyan-400" />

              </div>

            </div>

            <div className="mt-10 flex h-60 items-end justify-between gap-3">

              {bars.map((bar, index) => (

                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${bar}%` }}
                  transition={{
                    duration: .7,
                    delay: index * .08,
                  }}
                  className="flex-1 rounded-t-xl bg-linear-to-t from-cyan-500 to-violet-500"
                />

              ))}

            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-background/70 p-5 backdrop-blur"
                >

                  <p className="text-3xl font-bold text-cyan-400">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm text-muted">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-emerald-500/10 p-4 text-emerald-400">

              <Activity className="h-5 w-5" />

              AI Analytics Engine Running

              <ArrowRight className="ml-auto h-5 w-5" />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AnalyticsHero;