import { motion } from "framer-motion";

const PricingHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Pricing
      </span>

      <h1 className="mt-6 text-4xl font-bold text-foreground md:text-6xl">
        Simple pricing that grows
        <br className="hidden sm:block" />
        with your research.
      </h1>

      <p className="mt-8 text-lg leading-8 text-muted">
        Start for free, upgrade when you need advanced AI capabilities, or
        choose Enterprise for collaborative research teams. No hidden fees,
        cancel anytime.
      </p>
    </motion.div>
  );
};

export default PricingHero;