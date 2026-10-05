import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import pipelineData from "./pipelineData";

const PipelineSection = () => (
  <div>
    <SectionHeading
      eyebrow="How It Works"
      title="A real RAG pipeline, end to end"
      description="Every answer is grounded in the papers you uploaded. Here is what happens between your PDF and the response."
    />

    <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pipelineData.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="group relative rounded-2xl border border-border bg-(--foreground)/2 p-6 transition-colors hover:border-cyan-400/30"
        >
          <span className="absolute right-5 top-4 text-5xl font-bold text-(--foreground)/5">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
            <step.icon className="h-5 w-5 text-cyan-400" />
          </span>

          <h3 className="mt-5 font-semibold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
        </motion.div>
      ))}
    </div>

    <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
      If the primary model is rate-limited or overloaded, the resilient AI
      layer retries and falls through Gemini → OpenAI → OpenRouter → DeepSeek
      automatically.
    </p>
  </div>
);

export default PipelineSection;