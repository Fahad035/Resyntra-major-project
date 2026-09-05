import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { WORKSPACE_HERO } from "@/data/workspaceData";

const WorkspaceHero = () => {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      </div>

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
          className="mb-8 flex justify-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {WORKSPACE_HERO.badge}
          </span>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="text-5xl font-black leading-tight md:text-7xl">

            {WORKSPACE_HERO.title}

            <br />

            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {WORKSPACE_HERO.highlight}
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            {WORKSPACE_HERO.description}
          </p>
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <Link
            to={WORKSPACE_HERO.primaryButton.href}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.03]"
          >
            {WORKSPACE_HERO.primaryButton.label}

            <ArrowRight size={18} />
          </Link>

          <a
            href={WORKSPACE_HERO.secondaryButton.href}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-4 text-sm font-semibold transition hover:border-cyan-400"
          >
            <PlayCircle size={18} />

            {WORKSPACE_HERO.secondaryButton.label}
          </a>

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-10"
        >

          {WORKSPACE_HERO.stats.map((item) => (

            <div
              key={item.label}
              className="text-center"
            >

              <h3 className="text-3xl font-black text-primary">

                {item.value}

              </h3>

              <p className="mt-2 text-sm text-muted">

                {item.label}

              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default WorkspaceHero;