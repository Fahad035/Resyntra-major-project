import { motion } from "framer-motion";
import {
  Lightbulb,
  Search,
  Target,
  FlaskConical,
  FileText,
  BookCheck,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const pipeline = [
  {
    title: "Research Idea",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    description: "Validate research topics with AI trend analysis.",
  },
  {
    title: "Literature Review",
    icon: Search,
    color: "from-cyan-500 to-sky-500",
    description: "Discover the most relevant papers instantly.",
  },
  {
    title: "Gap Analysis",
    icon: Target,
    color: "from-violet-500 to-fuchsia-500",
    description: "Identify unexplored research opportunities.",
  },
  {
    title: "Methodology",
    icon: FlaskConical,
    color: "from-emerald-500 to-teal-500",
    description: "Recommend suitable methods and datasets.",
  },
  {
    title: "Draft Review",
    icon: FileText,
    color: "from-indigo-500 to-violet-500",
    description: "Review writing, citations and structure with AI.",
  },
  {
    title: "Publication",
    icon: BookCheck,
    color: "from-pink-500 to-rose-500",
    description: "Prepare manuscripts for journals and conferences.",
  },
];

const ResearchSupervision = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Supervision
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Guide every student
            <br />
            from idea to publication.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Resyntra helps professors supervise research projects with AI
            assistance across every stage of the academic workflow.
          </p>

        </div>

        {/* Pipeline */}

        <div className="mt-20 space-y-8">

          {pipeline.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative"
              >

                <div className="grid items-center gap-8 rounded-4xl border border-border bg-background/70 p-8 backdrop-blur lg:grid-cols-[90px_1fr_80px]">

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br ${step.color}`}
                  >
                    <Icon className="text-white" size={34} />
                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-muted">
                      {step.description}
                    </p>

                  </div>

                  <div className="hidden justify-end lg:flex">

                    <ArrowRight
                      size={30}
                      className={`${
                        index === pipeline.length - 1
                          ? "opacity-0"
                          : "text-cyan-400"
                      }`}
                    />

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* AI Supervisor */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 overflow-hidden rounded-[40px] border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 via-background to-violet-500/10"
        >

          <div className="grid gap-12 p-10 lg:grid-cols-[100px_1fr] lg:p-14">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500">

              <BrainCircuit
                size={44}
                className="text-slate-950"
              />

            </div>

            <div>

              <h3 className="text-3xl font-black">
                AI Research Supervisor
              </h3>

              <p className="mt-6 max-w-4xl leading-8 text-muted">
                Monitor student progress, recommend literature,
                identify research gaps, review manuscripts, detect citation
                issues and provide actionable feedback—all from one
                intelligent supervision workspace.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {[
                  "Progress Tracking",
                  "Weekly Feedback",
                  "Paper Reviews",
                  "Citation Analysis",
                  "Research Gap Detection",
                  "Journal Recommendations",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/70 px-5 py-2 text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ResearchSupervision;