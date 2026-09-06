import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  BrainCircuit,
  Users,
  FileText,
  Presentation,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

const stats = [
  {
    value: "12",
    label: "Active Courses",
    icon: BookOpen,
  },
  {
    value: "186",
    label: "Students",
    icon: Users,
  },
  {
    value: "24",
    label: "Research Projects",
    icon: BrainCircuit,
  },
  {
    value: "148",
    label: "Publications",
    icon: Quote,
  },
];

const ProfessorHero = () => {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5" />

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-violet-500/10 blur-[160px]" />

      <div className="relative mx-auto flex w-[92%] max-w-7xl items-center gap-20 lg:flex-row flex-col">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
          className="flex-1"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">

            <GraduationCap size={18} />

            AI for Professors

          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

            Inspire Better
            <br />

            Teaching.

            <br />

            Accelerate

            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">

              {" "}Research.

            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">

            Prepare lectures faster, mentor students more effectively,
            supervise research with AI assistance and increase your
            academic impact from one intelligent workspace.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">

              Start Teaching Smarter

              <ArrowRight size={18} />

            </button>

            <button className="rounded-2xl border border-border px-8 py-4 transition hover:border-cyan-500">

              Explore Features

            </button>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-3xl border border-border bg-background/70 p-5 backdrop-blur"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                    <Icon
                      size={22}
                      className="text-cyan-400"
                    />

                  </div>

                  <h3 className="mt-5 text-3xl font-black">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-sm text-muted">

                    {item.label}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: .2,
          }}
          className="flex-1"
        >

          <div className="rounded-[40px] border border-border bg-background/80 p-8 backdrop-blur">

            {/* Header */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted">

                  Professor Workspace

                </p>

                <h3 className="mt-2 text-2xl font-bold">

                  AI Teaching Dashboard

                </h3>

              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-4">

                <Sparkles className="text-cyan-400" />

              </div>

            </div>

            {/* Schedule */}

            <div className="mt-8 rounded-3xl border border-border p-6">

              <div className="flex items-center gap-3">

                <Presentation className="text-cyan-400" />

                <h4 className="font-semibold">

                  Today's Lectures

                </h4>

              </div>

              <div className="mt-6 space-y-4">

                {[
                  "Machine Learning • 09:30 AM",
                  "Research Methodology • 01:00 PM",
                  "Graduate Seminar • 04:00 PM",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-border p-4"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* AI */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-3xl border border-border p-6">

                <BrainCircuit className="text-cyan-400" />

                <h4 className="mt-5 font-bold">

                  AI Lecture Assistant

                </h4>

                <p className="mt-3 text-sm leading-7 text-muted">

                  Generate lecture slides, quizzes and explanations instantly.

                </p>

              </div>

              <div className="rounded-3xl border border-border p-6">

                <FileText className="text-violet-400" />

                <h4 className="mt-5 font-bold">

                  Research Supervisor

                </h4>

                <p className="mt-3 text-sm leading-7 text-muted">

                  Review student drafts and identify research gaps with AI.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ProfessorHero;