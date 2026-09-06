import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  MessageSquare,
  NotebookPen,
  GraduationCap,
} from "lucide-react";

const icons = [
  Upload,
  BrainCircuit,
  MessageSquare,
  NotebookPen,
  GraduationCap,
];

const colors = [
  "from-cyan-500 to-sky-500",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-pink-500 to-rose-500",
];

const StudyWorkflow = ({ data }) => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Learning Workflow
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Finish your research in five simple steps.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            From uploading a paper to completing your assignment,
            Resyntra guides you through an AI-powered workflow.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-1 rounded-full bg-linear-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {data.workflow.map((step, index) => {

              const Icon = icons[index];

              return (

                <motion.div
                  key={step}
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
                  className="relative text-center"
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-border bg-background shadow-xl"
                  >

                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br ${colors[index]}`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>

                  </motion.div>

                  <div className="mt-8">

                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold">
                      {step}
                    </h3>

                    <p className="mt-4 leading-7 text-muted">
                      AI automates this step so you can focus on
                      understanding research instead of repetitive work.
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

export default StudyWorkflow;