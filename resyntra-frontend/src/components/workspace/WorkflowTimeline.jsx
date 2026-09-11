import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  FileText,
  MessageSquare,
  Network,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Upload Papers",
    description:
      "Import PDFs from your computer, Zotero, Mendeley or Google Drive.",
    icon: Upload,
  },
  {
    title: "AI Analysis",
    description:
      "Resyntra extracts metadata, keywords, citations and important concepts.",
    icon: BrainCircuit,
  },
  {
    title: "Generate Summary",
    description:
      "Understand objectives, methodology, findings and limitations instantly.",
    icon: FileText,
  },
  {
    title: "Chat with Papers",
    description:
      "Ask natural language questions and receive cited answers from documents.",
    icon: MessageSquare,
  },
  {
    title: "Knowledge Graph",
    description:
      "Discover relationships between authors, concepts and publications.",
    icon: Network,
  },
  {
    title: "Write & Publish",
    description:
      "Export notes, references and insights into your research workflow.",
    icon: GraduationCap,
  },
];

const WorkflowTimeline = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Research Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            From paper upload to publication in one seamless workflow.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Every stage of your research is connected, allowing you to move
            effortlessly from reading papers to generating insights and
            publishing your work.
          </p>
        </motion.div>

        <div className="relative mt-24">

          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-14 hidden h-px bg-border lg:block" />

          <div className="grid gap-8 lg:grid-cols-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
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
                    delay: index * 0.1,
                  }}
                  className="relative"
                >
                  {/* Icon */}

                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-border bg-card shadow-xl">

                    <div className="rounded-2xl bg-cyan-500/10 p-4">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>

                  </div>

                  {/* Arrow */}

                  {index !== steps.length - 1 && (
                    <ArrowRight
                      className="
                        absolute
                        left-[calc(100%-8px)]
                        top-14
                        hidden
                        h-5
                        w-5
                        -translate-y-1/2
                        text-muted
                        lg:block
                      "
                    />
                  )}

                  <div className="mt-8 text-center">

                    <span className="text-sm font-semibold text-cyan-400">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {step.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowTimeline;