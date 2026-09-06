import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionHero = ({ data }) => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10" />

      <div className="absolute left-20 top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-16 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            {data.badge}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            {data.title}
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {data.highlight}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            {data.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to={data.primaryButton.href}
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105"
            >
              {data.primaryButton.label}

              <ArrowRight size={18} />
            </Link>

            <Link
              to={data.secondaryButton.href}
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-7 py-4 font-semibold transition hover:border-cyan-500"
            >
              <PlayCircle size={18} />

              {data.secondaryButton.label}
            </Link>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">

            {data.stats.map((item) => (

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

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .7 }}
          className="relative"
        >

          <div className="rounded-[36px] border border-border bg-background/80 p-8 backdrop-blur-xl">

            <div className="flex items-center justify-between border-b border-border pb-6">

              <div>

                <h3 className="text-xl font-semibold">
                  Study Dashboard
                </h3>

                <p className="mt-1 text-sm text-muted">
                  AI powered learning workspace
                </p>

              </div>

              <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-400">
                Active
              </span>

            </div>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl border border-border bg-background p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <h4 className="font-semibold">
                      Literature Review
                    </h4>

                    <p className="mt-1 text-sm text-muted">
                      18 Papers Uploaded
                    </p>

                  </div>

                  <span className="text-cyan-400 font-semibold">
                    82%
                  </span>

                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
                  />

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-border bg-background p-5">

                  <p className="text-sm text-muted">
                    AI Summaries
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    146
                  </h4>

                </div>

                <div className="rounded-2xl border border-border bg-background p-5">

                  <p className="text-sm text-muted">
                    Citations
                  </p>

                  <h4 className="mt-2 text-3xl font-bold">
                    512
                  </h4>

                </div>

              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-5">

                <p className="text-sm text-muted">
                  AI Recommendation
                </p>

                <h4 className="mt-3 text-lg font-semibold">
                  Read "Attention Is All You Need" next.
                </h4>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SolutionHero;