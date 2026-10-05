import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import techData from "./techData";

const TechStackSection = () => (
  <div>
    <SectionHeading
      eyebrow="Tech Stack"
      title="Built on a modern, production-style stack"
    />

    <div className="mx-auto max-w-4xl divide-y divide-border rounded-2xl border border-border bg-(--foreground)/2">
      {techData.map((row, index) => (
        <motion.div
          key={row.group}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-8"
        >
          <p className="w-40 shrink-0 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {row.group}
          </p>
          <div className="flex flex-wrap gap-2">
            {row.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-(--foreground)/5 px-3 py-1 text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TechStackSection;