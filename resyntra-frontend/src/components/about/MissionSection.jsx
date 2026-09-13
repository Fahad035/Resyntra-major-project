import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users2 } from "lucide-react";

const milestones = [
  {
    icon: Lightbulb,
    title: "The problem",
    description:
      "As students, we lost weeks buried in PDFs — re-reading papers just to find one citation or connect two ideas.",
  },
  {
    icon: Rocket,
    title: "The idea",
    description:
      "What if AI could read alongside us — summarizing, connecting, and surfacing insights across hundreds of papers instantly?",
  },
  {
    icon: Users2,
    title: "Today",
    description:
      "Resyntra is built for students, researchers, and teams who want to spend less time searching and more time discovering.",
  },
];

const MissionSection = () => {
  return (
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Our Mission
        </span>

        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-5xl">
          Give every researcher
          <br />
          an AI research partner.
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted">
          We believe great research shouldn't be gated behind hours of
          manual reading and organizing. Resyntra combines large language
          models with research-specific tooling — citation graphs, gap
          detection, and semantic search — so you can focus on the ideas
          that matter.
        </p>
      </motion.div>

      <div className="space-y-8">
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-5 rounded-2xl border border-border bg-(--foreground)/2 p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <item.icon className="h-5 w-5 text-cyan-400" />
            </span>

            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MissionSection;