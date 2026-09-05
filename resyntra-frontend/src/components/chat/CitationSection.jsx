import { motion } from "framer-motion";
import {
  Quote,
  FileText,
  Image,
  Sigma,
  Table2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const references = [
  {
    icon: FileText,
    title: "Page 4",
    description: "Transformer architecture explanation",
  },
  {
    icon: Image,
    title: "Figure 2",
    description: "Multi-head attention visualization",
  },
  {
    icon: Sigma,
    title: "Equation 5",
    description: "Scaled dot-product attention",
  },
  {
    icon: Table2,
    title: "Table 3",
    description: "BLEU score comparison",
  },
];

const steps = [
  "Read uploaded papers",
  "Locate supporting evidence",
  "Verify relevant citations",
  "Generate grounded answer",
];

const CitationSection = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Grounded AI Responses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            Every answer is backed by evidence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Unlike generic AI chatbots, Resyntra always references the
            original research paper so you know exactly where every answer
            comes from.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Quote className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  AI Answer
                </h3>

                <p className="text-sm text-muted">
                  Generated with verified citations
                </p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-background p-6">

              <p className="leading-8 text-foreground">
                The Transformer architecture replaces recurrent neural
                networks with self-attention mechanisms, allowing every
                token to attend to every other token simultaneously.
                This significantly improves parallelization while
                maintaining long-range contextual understanding.
              </p>

            </div>

            <div className="mt-8 space-y-4">

              {references.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-border p-5"
                  >
                    <div className="flex items-center gap-4">

                      <div className="rounded-xl bg-cyan-500/10 p-3">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>

                      <div>

                        <h4 className="font-medium text-foreground">
                          {item.title}
                        </h4>

                        <p className="text-sm text-muted">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    <button className="flex items-center gap-2 text-sm text-cyan-400 hover:gap-3 transition-all">
                      View
                      <ArrowRight className="h-4 w-4" />
                    </button>

                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="flex items-center gap-3">

              <ShieldCheck className="h-7 w-7 text-cyan-400" />

              <h3 className="text-2xl font-semibold">
                How Answers Are Verified
              </h3>

            </div>

            <div className="mt-10 space-y-8">

              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-950">
                      {index + 1}
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="mt-3 h-16 w-px bg-border" />
                    )}

                  </div>

                  <div className="pt-2">

                    <h4 className="font-medium text-foreground">
                      {step}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      AI processes documents while preserving context
                      and links every generated statement back to the
                      original research source.
                    </p>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-12 rounded-2xl bg-cyan-500/10 p-6">

              <p className="text-5xl font-bold text-cyan-400">
                98%
              </p>

              <p className="mt-3 font-medium text-foreground">
                Citation Confidence
              </p>

              <p className="mt-2 text-sm leading-7 text-muted">
                Every generated response is evaluated before being shown
                to the researcher, reducing hallucinations and improving
                trustworthiness.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CitationSection;