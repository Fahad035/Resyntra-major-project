import { motion } from "framer-motion";
import {
  Presentation,
  ClipboardList,
  FileQuestion,
  ClipboardCheck,
  FlaskConical,
  Languages,
  BrainCircuit,
  BookOpenCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const tools = [
  {
    title: "Generate Lecture Slides",
    description: "Create complete presentation decks from any research paper or topic.",
    icon: Presentation,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Create Assignments",
    description: "Generate homework, projects and coursework in seconds.",
    icon: ClipboardList,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Build AI Quiz",
    description: "Produce MCQs, short answers and coding questions automatically.",
    icon: FileQuestion,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Design Rubrics",
    description: "Create detailed grading rubrics for fair evaluation.",
    icon: ClipboardCheck,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Generate Lab Manual",
    description: "Prepare practical exercises with AI-assisted instructions.",
    icon: FlaskConical,
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Translate Notes",
    description: "Translate teaching material into multiple languages instantly.",
    icon: Languages,
    color: "from-pink-500 to-rose-500",
  },
];

const CourseAssistant = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            AI Teaching Studio
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Build an entire course
            <br />
            with AI assistance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            From lecture preparation to assessments, Resyntra helps
            professors create engaging learning experiences in minutes.
          </p>

        </div>

        {/* Tools Grid */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {tools.map((tool, index) => {

            const Icon = tool.icon;

            return (

              <motion.div
                key={tool.title}
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
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-4xl border border-border bg-background/70 p-8 backdrop-blur"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${tool.color}`}
                >

                  <Icon className="text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {tool.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-medium text-cyan-400">

                  Launch Tool

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* AI Preview */}

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
          className="mt-16 overflow-hidden rounded-[40px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10"
        >

          <div className="grid items-center gap-12 p-10 lg:grid-cols-[1fr_.9fr] lg:p-14">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">

                <Sparkles size={16} />

                Live AI Assistant

              </div>

              <h3 className="mt-8 text-4xl font-black">
                Create next week's lecture
                in under one minute.
              </h3>

              <p className="mt-6 max-w-xl leading-8 text-muted">
                Upload a syllabus, select a topic and let Resyntra generate
                lecture slides, recommended papers, quizzes, assignments,
                discussion prompts and reading materials automatically.
              </p>

            </div>

            {/* Right */}

            <div className="rounded-4xl border border-border bg-background/70 p-8 backdrop-blur">

              <div className="flex items-center gap-3">

                <BrainCircuit className="text-cyan-400" />

                <h4 className="text-xl font-bold">
                  AI Workflow
                </h4>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "Upload Course Syllabus",
                  "Analyze Learning Outcomes",
                  "Generate Weekly Lecture",
                  "Create Assessments",
                  "Recommend Research Papers",
                  "Publish to Students",
                ].map((step, index) => (

                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-border p-5"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-950">

                      {index + 1}

                    </div>

                    <span>{step}</span>

                  </div>

                ))}

              </div>

              <div className="mt-8 rounded-2xl bg-cyan-500 p-5 text-slate-950">

                <div className="flex items-center gap-3">

                  <BookOpenCheck />

                  <span className="font-bold">
                    Average preparation time reduced by 72%
                  </span>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CourseAssistant;