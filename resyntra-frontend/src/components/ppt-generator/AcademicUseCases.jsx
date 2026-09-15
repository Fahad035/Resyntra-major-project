import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Presentation,
  FlaskConical,
  MessageSquareText,
  ScrollText,
} from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Thesis Defense",
    description: "Present your research clearly and confidently.",
  },
  {
    icon: Presentation,
    title: "Research Seminars",
    description: "Turn dense papers into focused presentations.",
  },
  {
    icon: FlaskConical,
    title: "Project Reviews",
    description: "Explain methodology, implementation, and results.",
  },
  {
    icon: BookOpen,
    title: "Literature Presentations",
    description: "Summarize important academic literature.",
  },
  {
    icon: ScrollText,
    title: "Conference Preparation",
    description: "Build a structured research presentation faster.",
  },
  {
    icon: MessageSquareText,
    title: "Research Discussions",
    description: "Create presentation-ready research insights.",
  },
];

const AcademicUseCases = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#070b12] py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Academic Use Cases
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Built for the moments when
            <span className="bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {" "}
              research needs a stage.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base"
          >
            From thesis defenses to research seminars, turn your academic work
            into a presentation without starting from a blank slide.
          </motion.p>
        </div>

        {/* Moving Track */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#070b12] to-transparent sm:w-32" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#070b12] to-transparent sm:w-32" />

          <div className="group overflow-hidden">
            <motion.div
              className="flex w-max gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* First set */}
              {useCases.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`first-${item.title}`}
                    className="w-67.5 shrink-0 rounded-2xl border border-white/10 bg-white/2.5 p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/25 hover:bg-white/4.5 sm:w-75"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/5">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                        Resyntra
                      </span>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}

              {/* Duplicate set for seamless loop */}
              {useCases.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`second-${item.title}`}
                    className="w-67.5 shrink-0 rounded-2xl border border-white/10 bg-white/2.5 p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/25 hover:bg-white/4.5 sm:w-75"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/5">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                        Resyntra
                      </span>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-3 px-6"
        >
          <span className="h-px w-8 bg-white/10" />

          <p className="text-center text-xs text-slate-600">
            One research paper. Multiple ways to present it.
          </p>

          <span className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicUseCases;