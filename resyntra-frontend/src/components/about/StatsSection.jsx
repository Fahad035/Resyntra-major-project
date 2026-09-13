import { motion } from "framer-motion";

import statsData from "./statsData";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8 border-y border-border py-14 sm:grid-cols-4">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="text-center"
        >
          <p className="text-3xl font-bold text-foreground sm:text-4xl">
            {stat.value}
          </p>

          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;