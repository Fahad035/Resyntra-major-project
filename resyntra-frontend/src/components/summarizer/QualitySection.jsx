import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Search,
  BookOpen,
  BrainCircuit,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const comparisons = [
  {
    traditional: "Read an entire 30-page paper manually",
    ai: "Understand the complete paper in under a minute",
    icon: Clock3,
  },
  {
    traditional: "Search for important contributions yourself",
    ai: "AI extracts the key contributions automatically",
    icon: Search,
  },
  {
    traditional: "Manually identify methodologies",
    ai: "Methods, datasets and experiments are structured instantly",
    icon: BookOpen,
  },
  {
    traditional: "Find research gaps after extensive reading",
    ai: "AI highlights limitations and future research opportunities",
    icon: Lightbulb,
  },
];

const metrics = [
  {
    value: "98%",
    label: "Summary Accuracy",
  },
  {
    value: "30 sec",
    label: "Average Processing Time",
  },
  {
    value: "100+",
    label: "Supported Research Fields",
  },
];

const QualitySection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            Why Researchers Choose Resyntra
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Spend less time reading.
            <br />
            Spend more time researching.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Our AI doesn't replace academic reading—it accelerates it by
            extracting the information researchers care about most.
          </p>
        </motion.div>

        {/* Comparison Table */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 overflow-hidden rounded-3xl border border-border bg-card lg:mt-20"
        >
          {/* Table Header */}

          <div className="grid border-b border-border lg:grid-cols-2">
            <div className="border-b border-border px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r">
              <h3 className="text-xl font-semibold text-foreground">
                Traditional Workflow
              </h3>

              <p className="mt-2 text-sm text-muted sm:text-base">
                Manual literature review
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400">
                <BrainCircuit className="h-6 w-6" />
                Resyntra AI
              </h3>

              <p className="mt-2 text-sm text-muted sm:text-base">
                Intelligent research assistant
              </p>
            </div>
          </div>

          {/* Comparison Rows */}

          {comparisons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.traditional}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="grid border-b border-border last:border-none lg:grid-cols-2"
              >
                {/* Traditional */}

                <div className="flex items-center border-b border-border px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r">
                  <p className="leading-7 text-muted">
                    {item.traditional}
                  </p>
                </div>

                {/* Resyntra */}

                <div className="flex items-start gap-4 px-6 py-6 sm:px-8">
                  <div className="shrink-0 rounded-xl bg-cyan-500/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="leading-7 font-medium text-foreground">
                      {item.ai}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                      <CheckCircle2 className="h-4 w-4" />
                      AI Optimized
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Metrics */}

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-cyan-500/30 sm:p-10"
            >
              <h3 className="text-4xl font-bold text-cyan-400 sm:text-5xl">
                {metric.value}
              </h3>

              <p className="mt-4 text-muted">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;