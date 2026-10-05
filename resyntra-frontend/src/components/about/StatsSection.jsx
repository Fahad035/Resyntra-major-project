import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import statsData from "./statsData";

// Lightweight count-up (avoids a CJS/ESM interop issue with react-countup under Vite 8).
const AnimatedNumber = ({ end, decimals = 0, suffix = "", start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const duration = 1800;
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end]);

  return `${value.toFixed(decimals)}${suffix}`;
};

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-8 border-y border-border py-14 lg:grid-cols-4"
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="text-center"
        >
          <p className="text-4xl font-bold text-foreground sm:text-5xl">
            <AnimatedNumber
              end={stat.value}
              decimals={stat.decimals ?? 0}
              suffix={stat.suffix}
              start={inView}
            />
          </p>
          <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
          <p className="mt-1 text-xs text-muted">{stat.hint}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;