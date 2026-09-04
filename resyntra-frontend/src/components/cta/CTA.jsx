import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-40">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get Started
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            The future of research
            <br />
            starts here.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-slate-400">
            Spend less time searching and organizing papers.
            Spend more time discovering ideas that matter.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Started Free

              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition hover:bg-white/10"
            >
              Sign In
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;