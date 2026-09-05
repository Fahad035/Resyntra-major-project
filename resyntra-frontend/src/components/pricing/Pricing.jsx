import { motion } from "framer-motion";

import pricingData from "./pricingData";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground md:text-6xl">
            Simple pricing that grows
            with your research.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted">
            Start for free, upgrade when you need advanced AI capabilities,
            or choose Enterprise for collaborative research teams.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Pricing;