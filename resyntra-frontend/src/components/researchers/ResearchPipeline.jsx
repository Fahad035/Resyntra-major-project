import { motion } from "framer-motion";
import {
  Search,
  Database,
  BrainCircuit,
  Network,
  Lightbulb,
  Rocket,
  ArrowRight,
} from "lucide-react";

const pipeline = [
  {
    title: "Discover",
    subtitle: "Semantic Search",
    icon: Search,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Collect",
    subtitle: "Research Library",
    icon: Database,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Analyze",
    subtitle: "AI Assistant",
    icon: BrainCircuit,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Connect",
    subtitle: "Knowledge Graph",
    icon: Network,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Discover",
    subtitle: "Research Gaps",
    icon: Lightbulb,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Publish",
    subtitle: "Share Results",
    icon: Rocket,
    color: "from-indigo-500 to-cyan-500",
  },
];

const ResearchPipeline = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Workflow
          </span>

          <h2 className="mt-6 text-5xl font-black">
            From idea to publication.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Every stage of the research lifecycle powered by AI,
            connected in one intelligent workspace.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Gradient line */}

          <div className="absolute left-0 right-0 top-16 hidden h-0.75 rounded-full bg-linear-to-r from-cyan-500 via-violet-500 to-cyan-500 xl:block" />

          <div className="grid gap-10 xl:grid-cols-6">

            {pipeline.map((step, index) => {

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
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                  className="relative"
                >

                  {/* Connection */}

                  {index !== pipeline.length - 1 && (
                    <ArrowRight
                      className="absolute -right-8 top-16 hidden text-muted xl:block"
                      size={22}
                    />
                  )}

                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    className="rounded-[28px] border border-border bg-linear-to-br from-background to-background/70 p-6 text-center backdrop-blur"
                  >

                    <div
                      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br ${step.color}`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                    <div className="mt-8">

                      <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                        Step {index + 1}
                      </span>

                      <h3 className="mt-3 text-2xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-muted">
                        {step.subtitle}
                      </p>

                    </div>

                    <div className="mt-8 h-2 overflow-hidden rounded-full bg-border">

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: "100%",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * .15,
                        }}
                        className={`h-full rounded-full bg-linear-to-r ${step.color}`}
                      />

                    </div>

                  </motion.div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ResearchPipeline;