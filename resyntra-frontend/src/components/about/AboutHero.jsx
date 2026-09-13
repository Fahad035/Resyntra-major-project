import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        About Resyntra
      </span>

      <h1 className="mt-6 text-4xl font-bold text-foreground md:text-6xl">
        Research is hard.
        <br className="hidden sm:block" />
        We're making it faster.
      </h1>

      <p className="mt-8 text-lg leading-8 text-muted">
        Resyntra started as a simple idea: researchers spend more time
        searching, organizing, and re-reading papers than actually
        thinking. We're building the AI research workspace we always
        wished we had.
      </p>
    </motion.div>
  );
};

export default AboutHero;