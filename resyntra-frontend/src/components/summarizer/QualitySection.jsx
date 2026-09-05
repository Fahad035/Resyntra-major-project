import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Search,
  BookOpen,
  BrainCircuit,
  Lightbulb,
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
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Why Researchers Choose Resyntra
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            Spend less time reading.
            <br />
            Spend more time researching.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Our AI doesn't replace academic reading—it accelerates it by
            extracting the information researchers care about most.
          </p>
        </motion.div>

        <div className="mt-20 overflow-hidden rounded-3xl border border-border bg-card">

          {/* Header */}

          <div className="grid border-b border-border lg:grid-cols-2">
            <div className="border-b border-border px-8 py-6 lg:border-b-0 lg:border-r">
              <h3 className="text-xl font-semibold text-foreground">
                Traditional Workflow
              </h3>

              <p className="mt-2 text-muted">
                Manual literature review
              </p>
            </div>

            <div className="px-8 py-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400">
                <BrainCircuit className="h-6 w-6" />
                Resyntra AI
              </h3>

              <p className="mt-2 text-muted">
                Intelligent research assistant
              </p>
            </div>
          </div>

          {comparisons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid border-b border-border last:border-none lg:grid-cols-2"
              >
                <div className="border-b border-border px-8 py-6 lg:border-b-0 lg:border-r">
                  <p className="text-muted">
                    {item.traditional}
                  </p>
                </div>

                <div className="flex items-start gap-4 px-8 py-6">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="font-medium text-foreground">
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
        </div>

        {/* Metrics */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-border bg-card p-10 text-center"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {metric.value}
              </h3>

              <p className="mt-4 text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;