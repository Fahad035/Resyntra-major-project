import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui";

import valuesData from "./valuesData";

const ValuesGrid = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          What We Believe
        </span>

        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-5xl">
          The principles behind Resyntra
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {valuesData.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <GlassCard padding="lg" className="h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <value.icon className="h-6 w-6 text-cyan-400" />
              </span>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {value.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">{value.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValuesGrid;