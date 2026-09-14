import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileDown,
  FileText,
  LayoutTemplate,
  Presentation,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Research-Aware AI",
    description:
      "Generates presentation content from the selected research paper while staying grounded in its actual content.",
  },
  {
    icon: LayoutTemplate,
    title: "Academic Structure",
    description:
      "Automatically organizes the paper into a clear 9–10 slide academic presentation.",
  },
  {
    icon: WandSparkles,
    title: "AI Content Generation",
    description:
      "Transforms dense research content into concise slide titles, explanations, findings, and key takeaways.",
  },
  {
    icon: Presentation,
    title: "PPTX Export",
    description:
      "Download the generated presentation as an editable PowerPoint .pptx file.",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    description:
      "Download the same presentation as a PDF for sharing, submission, or quick review.",
  },
  {
    icon: ShieldCheck,
    title: "Grounded Content",
    description:
      "Keeps the generated presentation focused on information supported by the selected research paper.",
  },
];

const PPTCapabilities = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#070b12] px-6 py-24 sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
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
            <Sparkles className="h-4 w-4" />
            Presentation Intelligence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            From research paper
            <span className="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              to presentation-ready.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Resyntra combines research understanding with structured
            presentation generation to turn complex academic papers into
            concise presentations.
          </motion.p>
        </div>

        {/* Capability Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <span className="text-xs font-medium text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {capability.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Export Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-6 rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4">
                  <FileText className="h-5 w-5 text-slate-300" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Ready for submission
                  </p>

                  <p className="text-xs text-slate-500">
                    One generated presentation, two export formats
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Once generation is complete, your presentation can be exported
                as an editable PowerPoint file or a presentation-ready PDF.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
                <Presentation className="h-4 w-4 text-cyan-300" />
                <span className="text-sm font-medium text-slate-300">
                  .pptx
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/5 px-4 py-3">
                <FileDown className="h-4 w-4 text-blue-300" />
                <span className="text-sm font-medium text-slate-300">
                  .pdf
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PPTCapabilities;