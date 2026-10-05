import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui";
import SectionHeading from "./SectionHeading";
import capabilitiesData from "./capabilitiesData";

const CapabilitiesSection = () => (
  <div>
    <SectionHeading
      eyebrow="What We Built"
      title="One workspace for the whole research workflow"
    />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {capabilitiesData.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <GlassCard padding="lg" className="h-full">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
              <item.icon className="h-6 w-6 text-cyan-400" />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted">{item.description}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  </div>
);

export default CapabilitiesSection;