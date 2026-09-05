import { motion } from "framer-motion";

import BrowserFrame from "./BrowserFrame";
import DemoWorkspace from "./DemoWorkspace";

const LiveDemo = () => {
  return (
    <section className="relative py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">

            Experience Resyntra

          </span>

          <h2 className="mt-8 text-4xl font-bold text-foreground md:text-6xl">

            Research.
            Analyze.
            Discover.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">

            Upload a research paper and watch AI summarize,
            discover research gaps, generate citations,
            and build knowledge graphs—all from one workspace.

          </p>

        </motion.div>

        {/* Browser */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <BrowserFrame>

            <DemoWorkspace />

          </BrowserFrame>

        </motion.div>

      </div>

    </section>
  );
};

export default LiveDemo;