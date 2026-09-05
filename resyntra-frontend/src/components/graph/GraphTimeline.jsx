import { motion } from "framer-motion";
import {
  Sparkles,
  BrainCircuit,
  Cpu,
  Bot,
  Layers3,
  ArrowRight,
} from "lucide-react";

const timeline = [
  {
    year: "2017",
    title: "Transformer",
    description:
      "Attention Is All You Need introduced the Transformer architecture.",
    icon: BrainCircuit,
    color: "bg-cyan-500",
  },
  {
    year: "2018",
    title: "BERT",
    description:
      "Bidirectional contextual language understanding revolutionized NLP.",
    icon: Layers3,
    color: "bg-violet-500",
  },
  {
    year: "2020",
    title: "GPT-3",
    description:
      "Large-scale generative models demonstrated emergent capabilities.",
    icon: Bot,
    color: "bg-emerald-500",
  },
  {
    year: "2023",
    title: "Open Models",
    description:
      "Open-source LLMs accelerated research and innovation worldwide.",
    icon: Cpu,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "AI Research Agents",
    description:
      "Autonomous systems assist researchers through the complete workflow.",
    icon: Sparkles,
    color: "bg-pink-500",
  },
];

const GraphTimeline = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Evolution
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Follow the evolution of ideas.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Every breakthrough builds upon previous discoveries. Explore
            how modern AI research evolved over time.
          </p>

        </motion.div>

        <div className="overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-10">

          <div className="relative">

            <div className="absolute left-0 right-0 top-14 hidden h-0.75 bg-linear-to-r from-cyan-500 via-violet-500 to-pink-500 lg:block" />

            <div className="grid gap-12 lg:grid-cols-5">

              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.year}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                    }}
                    className="relative text-center"
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full ${item.color} shadow-[0_0_40px_rgba(6,182,212,.3)]`}
                    >
                      <Icon className="h-11 w-11 text-white" />
                    </motion.div>

                    <div className="mt-8">

                      <span className="text-sm font-semibold tracking-widest text-cyan-400">
                        {item.year}
                      </span>

                      <h3 className="mt-3 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted">
                        {item.description}
                      </p>

                    </div>

                    {index !== timeline.length - 1 && (
                      <ArrowRight className="absolute -right-7 top-11 hidden h-6 w-6 text-cyan-400 lg:block" />
                    )}

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GraphTimeline;