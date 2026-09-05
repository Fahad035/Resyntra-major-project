import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import LibraryMockup from "./mockups/LibraryMockup";
import AssistantMockup from "./mockups/AssistantMockup";
import GraphMockup from "./mockups/GraphMockup";

const FEATURES = [
  {
    badge: "Research Library",
    title: "Organize every research paper in one intelligent workspace.",
    description:
      "Upload PDFs, build collections, instantly search thousands of papers, and keep your research structured throughout every project.",
    bullets: [
      "Unlimited research library",
      "Collections & folders",
      "Smart metadata extraction",
    ],
    component: LibraryMockup,
  },
  {
    badge: "AI Assistant",
    title: "Read less. Understand more.",
    description:
      "Ask questions, generate summaries, extract methodologies, and identify research gaps directly from your documents.",
    bullets: [
      "Context-aware AI",
      "Paper conversations",
      "Instant summaries",
    ],
    component: AssistantMockup,
  },
  {
    badge: "Knowledge Graph",
    title: "Visualize relationships across your research.",
    description:
      "Discover hidden connections between papers, concepts, authors, and citations using an interactive knowledge graph.",
    bullets: [
      "Citation network",
      "Topic clusters",
      "Author relationships",
    ],
    component: GraphMockup,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-32">
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-40">
        {FEATURES.map((feature, index) => {
          const Mockup = feature.component;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-20 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
                  {feature.badge}
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
                  {feature.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-muted">
                  {feature.description}
                </p>

                <div className="mt-8 space-y-4">
                  {feature.bullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400">
                  Learn More

                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <Mockup />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;