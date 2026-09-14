import { motion } from "framer-motion";
import {
  BrainCircuit,
  Check,
  Download,
  FileText,
  Presentation,
  Sparkles,
} from "lucide-react";

const workflowSteps = [
  {
    number: "01",
    icon: FileText,
    title: "Select your paper",
    description:
      "Choose a processed research paper from your Resyntra library.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI understands the paper",
    description:
      "Resyntra analyzes the paper's research context, methodology, results, and conclusions.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generate the presentation",
    description:
      "The AI organizes the research into a concise 9–10 slide academic structure.",
  },
  {
    number: "04",
    icon: Presentation,
    title: "Preview and refine",
    description:
      "Review the generated presentation before exporting the final files.",
  },
  {
    number: "05",
    icon: Download,
    title: "Download",
    description:
      "Export your completed presentation as PowerPoint or PDF.",
  },
];

const GenerationWorkflow = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#070b12] px-6 py-24 sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <Sparkles className="h-4 w-4" />
            Simple Research-to-Presentation Workflow
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            From paper to presentation
            <span className="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              in five simple steps.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Select your research, let Resyntra structure the content, review
            the result, and export your presentation in the format you need.
          </motion.p>
        </div>

        {/* Workflow */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-6.75 top-8 hidden h-[calc(100%-64px)] w-px bg-linear-to-b from-cyan-400/30 via-white/10 to-blue-400/20 lg:left-1/2 lg:top-8 lg:block lg:h-px lg:w-[calc(100%-120px)] lg:-translate-x-1/2 lg:bg-linear-to-r" />

          <div className="grid gap-5 lg:grid-cols-5 lg:gap-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative"
                >
                  <div className="group relative rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/5">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#0a1019]">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.2em] text-slate-600">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-base font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                    {/* Completed indicator */}
                    <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">
                        <Check className="h-3 w-3 text-emerald-300" />
                      </span>

                      Ready in workflow
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Export Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl sm:p-8"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <Download className="h-5 w-5 text-cyan-300" />
          </div>

          <h3 className="mt-5 text-xl font-semibold text-white">
            One presentation. Two export formats.
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            After reviewing your generated slides, download an editable
            PowerPoint presentation or a ready-to-share PDF.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5">
              <Presentation className="h-4 w-4 text-cyan-300" />
              <span className="text-sm font-medium text-slate-300">
                PowerPoint (.pptx)
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/5 px-4 py-2.5">
              <FileText className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-slate-300">
                PDF (.pdf)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GenerationWorkflow;