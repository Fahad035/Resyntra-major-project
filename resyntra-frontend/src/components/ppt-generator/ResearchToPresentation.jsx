import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  FileText,
  Layers3,
  Presentation,
  Sparkles,
  Workflow,
} from "lucide-react";

const workflowSteps = [
  {
    number: "01",
    icon: FileText,
    title: "Select Paper",
    description:
      "Choose a processed research paper from your Resyntra library.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Understand Research",
    description:
      "Analyze the paper's context, methodology, findings, and conclusions.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Structure Slides",
    description:
      "Transform the research into a focused 9–10 slide academic narrative.",
  },
  {
    number: "04",
    icon: Presentation,
    title: "Generate & Export",
    description:
      "Create a presentation and export it as editable PowerPoint or PDF.",
  },
];

const capabilities = [
  "Research-grounded content",
  "Academic presentation flow",
  "9–10 slide structure",
  "Editable PowerPoint output",
  "PDF export",
];

const ResearchToPresentation = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#070b12] px-6 py-24 sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-10 h-80 w-80 rounded-full bg-cyan-500/6 blur-[130px]" />
        <div className="absolute bottom-0 right-[15%] h-80 w-80 rounded-full bg-blue-500/6 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            <Sparkles className="h-4 w-4" />
            Research-to-Presentation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            From research paper to
            <span className="block bg-linear-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              presentation-ready slides.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
          >
            Resyntra transforms the key ideas in your research into a
            structured academic presentation without losing the context of
            the original paper.
          </motion.p>
        </div>

        {/* Main Workflow Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 shadow-2xl shadow-black/20"
        >
          {/* Top bar */}
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                <Workflow className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Intelligent presentation workflow
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Four stages from paper to presentation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-slate-400">
                AI-powered workflow
              </span>
            </div>
          </div>

          {/* Workflow */}
          <div className="relative px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-18 hidden h-px bg-linear-to-r from-cyan-400/10 via-cyan-400/35 to-blue-400/10 lg:block" />

            <div className="grid gap-5 lg:grid-cols-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.15 + index * 0.08,
                    }}
                    className="group relative"
                  >
                    {/* Step */}
                    <div className="relative h-full rounded-2xl border border-white/10 bg-[#0a1019]/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-[#0d141f]">
                      {/* Icon + number */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-[#080d15] transition-colors duration-300 group-hover:border-cyan-400/30">
                          <Icon className="h-5 w-5 text-cyan-300" />
                        </div>

                        <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-600">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-base font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>

                      {/* Mobile / tablet arrow */}
                      {index < workflowSteps.length - 1 && (
                        <div className="mt-5 flex lg:hidden">
                          <ArrowRight className="h-4 w-4 text-cyan-400/40" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Capabilities / output area */}
          <div className="border-t border-white/10 bg-white/[0.018] px-6 py-7 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="max-w-md">
                <p className="text-sm font-semibold text-white">
                  Built for academic presentations
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Keep your presentation focused on the research while
                  Resyntra handles the structure and formatting.
                </p>
              </div>

              {/* Capabilities */}
              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:min-w-120">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/6">
                      <Check className="h-3 w-3 text-emerald-300" />
                    </div>

                    <span className="text-sm text-slate-400">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Output strip */}
          <div className="border-t border-white/10 px-6 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  Ready when your research is.
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Generate once. Export in the format you need.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* PowerPoint */}
                <div className="flex items-center gap-2 rounded-xl border border-cyan-400/15 bg-cyan-400/5 px-3.5 py-2.5">
                  <Presentation className="h-4 w-4 text-cyan-300" />

                  <div>
                    <p className="text-xs font-medium text-slate-200">
                      PowerPoint
                    </p>
                    <p className="text-[10px] text-slate-600">
                      Editable .pptx
                    </p>
                  </div>
                </div>

                {/* PDF */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/2.5 px-3.5 py-2.5">
                  <FileText className="h-4 w-4 text-slate-300" />

                  <div>
                    <p className="text-xs font-medium text-slate-200">
                      PDF
                    </p>
                    <p className="text-[10px] text-slate-600">
                      Ready to share
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-600"
        >
          <span className="h-px w-8 bg-white/10" />
          <span>Grounded in your research. Structured by AI.</span>
          <span className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchToPresentation;