import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileSearch,
  Network,
  Quote,
  Languages,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Context-Aware AI",
    description:
      "Answers are generated using the complete context of your uploaded research papers instead of isolated text chunks.",
    gradient: "from-cyan-500/20 to-sky-500/10",
  },
  {
    icon: FileSearch,
    title: "Semantic Retrieval",
    description:
      "Every question searches meaning rather than keywords to locate the most relevant paragraphs.",
    gradient: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    icon: Quote,
    title: "Verified Citations",
    description:
      "Every AI answer links directly to page numbers and the original source paragraph.",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
  {
    icon: Network,
    title: "Cross-Paper Reasoning",
    description:
      "Compare findings across multiple research papers and discover agreements or contradictions.",
    gradient: "from-orange-500/20 to-red-500/10",
  },
  {
    icon: Languages,
    title: "Academic Translation",
    description:
      "Convert difficult academic language into simple explanations while preserving technical meaning.",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: BookOpen,
    title: "Research Memory",
    description:
      "Continue conversations across sessions without losing research context.",
    gradient: "from-pink-500/20 to-violet-500/10",
  },
];

const ResearchCapabilities = () => {
  return (
    <section className="py-28">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Intelligence
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            More than a chatbot.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Built specifically for researchers, students and academic
            professionals.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`rounded-[30px] border border-border bg-linear-to-br ${feature.gradient} p-8 backdrop-blur`}
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background/80">

                  <Icon className="h-8 w-8 text-cyan-400" />

                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-muted">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default ResearchCapabilities;