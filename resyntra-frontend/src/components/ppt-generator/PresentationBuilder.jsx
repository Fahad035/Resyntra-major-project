import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  FileText,
  Layers3,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const slides = [
  {
    number: 1,
    title: "Title",
    description: "Paper title, authors, publication year",
  },
  {
    number: 2,
    title: "Introduction & Background",
    description: "Research context and background",
  },
  {
    number: 3,
    title: "Problem Statement & Motivation",
    description: "Problem addressed and why it matters",
  },
  {
    number: 4,
    title: "Objectives",
    description: "Main goals and research objectives",
  },
  {
    number: 5,
    title: "Methodology / Proposed Approach",
    description: "Methods, models, and proposed approach",
  },
  {
    number: 6,
    title: "System Architecture / Workflow",
    description: "Architecture, pipeline, or research workflow",
  },
  {
    number: 7,
    title: "Experiments & Implementation",
    description: "Dataset, experiments, and implementation details",
  },
  {
    number: 8,
    title: "Results & Findings",
    description: "Important results, observations, and findings",
  },
  {
    number: 9,
    title: "Limitations & Future Scope",
    description: "Limitations and future research directions",
  },
  {
    number: 10,
    title: "Conclusion & Key Takeaways",
    description: "Final conclusions and major takeaways",
  },
];

const PresentationBuilder = () => {
  const handleGenerate = () => {
    console.log("PPT generation will be connected in the backend integration step.");
  };

  return (
    <section
      id="presentation-builder"
      className="relative overflow-hidden border-t border-white/10 bg-[#070b12] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <Layers3 className="h-4 w-4" />
            Presentation Builder
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Build a complete research presentation
            <span className="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              from one paper.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Resyntra will transform the selected research paper into a
            structured academic presentation with exactly 9–10 slides.
          </motion.p>
        </div>

        {/* Builder */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Selected Paper */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Selected Research Paper
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  Paper ready for generation
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <FileText className="h-5 w-5 text-cyan-300" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                  <FileText className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold leading-6 text-white">
                    Efficient Transformer Models for Edge AI
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    Research Team · 2025
                  </p>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                A study on optimizing transformer architectures for efficient
                deployment on edge devices.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-400">
                  12 pages
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                  Processed
                </span>

                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-slate-400">
                  AI Ready
                </span>
              </div>
            </div>

            {/* Generation Settings */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-white">
                Presentation settings
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2.5 px-4 py-3">
                  <div>
                    <p className="text-sm text-slate-300">Slide count</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Academic structure
                    </p>
                  </div>

                  <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-300">
                    10 slides
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2.5 px-4 py-3">
                  <div>
                    <p className="text-sm text-slate-300">Content source</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Selected research paper
                    </p>
                  </div>

                  <span className="text-sm text-slate-400">
                    Paper only
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/2.5 px-4 py-3">
                  <div>
                    <p className="text-sm text-slate-300">Generation mode</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      AI structured presentation
                    </p>
                  </div>

                  <span className="flex items-center gap-1.5 text-sm text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                    AI
                  </span>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              type="button"
              onClick={handleGenerate}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <WandSparkles className="h-4 w-4" />
              Generate Presentation
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-slate-500">
              AI generation will use the selected paper's extracted research
              content.
            </p>
          </motion.div>

          {/* Slide Structure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Presentation Structure
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  10-slide academic outline
                </h3>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-xs text-slate-400">
                10 / 10
              </div>
            </div>

            <div className="space-y-2.5">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-3.5 transition hover:border-cyan-400/20 hover:bg-cyan-400/3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-xs font-semibold text-slate-400 transition group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                    {String(slide.number).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-slate-200">
                      {slide.title}
                    </h4>

                    <p className="mt-1 truncate text-xs text-slate-500">
                      {slide.description}
                    </p>
                  </div>

                  <div className="hidden h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10 sm:flex">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/2.5 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-white">
              Grounded in your research
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Resyntra will generate presentation content from the selected
              paper instead of inventing unrelated information.
            </p>
          </div>

          <div className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-xs font-medium text-cyan-300">
            9–10 slides maximum
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresentationBuilder;