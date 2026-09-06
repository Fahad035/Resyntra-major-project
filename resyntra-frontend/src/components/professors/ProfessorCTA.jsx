import { motion } from "framer-motion";
import {
  GraduationCap,
  BrainCircuit,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const benefits = [
  "AI-powered teaching assistant",
  "Research supervision workspace",
  "Lecture & assessment generation",
  "Publication intelligence",
];

const ProfessorCTA = () => {
  return (
    <section className="pb-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
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
          className="relative overflow-hidden rounded-[42px] border border-border bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10"
        >

          {/* Background */}

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

          <div className="relative grid gap-16 p-12 lg:grid-cols-[1fr_.85fr] lg:p-16">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">

                <GraduationCap size={18} />

                Built for Professors

              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

                Teach Smarter.

                <br />

                Mentor Better.

                <br />

                <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">

                  Publish Faster.

                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">

                Join professors using Resyntra to prepare lectures,
                supervise student research, streamline publications and
                accelerate academic impact with AI.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105">

                  <BrainCircuit size={20} />

                  Start Free

                </button>

                <button className="inline-flex items-center gap-3 rounded-2xl border border-border px-8 py-4 transition hover:border-cyan-500">

                  Request Faculty Demo

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-[34px] border border-border bg-background/70 p-8 backdrop-blur">

              <div className="flex items-center gap-3">

                <Sparkles className="text-cyan-400" />

                <h3 className="text-2xl font-bold">

                  Everything Included

                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {benefits.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-border p-5"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-emerald-400"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-6">

                <div className="flex items-center gap-4">

                  <BookOpen className="text-cyan-400" />

                  <div>

                    <h4 className="font-bold">

                      Ready for Your Next Semester

                    </h4>

                    <p className="mt-2 text-sm leading-7 text-muted">

                      Prepare lectures, mentor students, review research,
                      and manage publications from one AI-powered academic
                      workspace.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ProfessorCTA;