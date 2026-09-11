import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SummarizerCTA = () => {
  return (
    <section className="pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-border
            bg-card
            px-8
            py-20
            lg:px-20
          "
        >
          {/* Glow */}

          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <Sparkles className="h-4 w-4" />
              AI Research Summarizer
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              Stop reading every paper.
              <br />
              Start understanding every paper.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
              Upload research papers, generate structured summaries,
              discover important findings, identify research gaps,
              and accelerate your literature review with AI.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                to="/register"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-cyan-500
                  px-7
                  py-4
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Start Summarizing

                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

            <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  30 sec
                </h3>

                <p className="mt-2 text-muted">
                  Average summary generation
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  97%
                </h3>

                <p className="mt-2 text-muted">
                  AI summary accuracy
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  5K+
                </h3>

                <p className="mt-2 text-muted">
                  Research papers processed
                </p>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default SummarizerCTA;