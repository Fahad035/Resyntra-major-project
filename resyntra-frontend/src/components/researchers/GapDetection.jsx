import { motion } from "framer-motion";
import {
  BrainCircuit,
  Lightbulb,
  TrendingUp,
  Target,
  AlertCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const gaps = [
  {
    title: "Explainable Clinical LLMs",
    confidence: "97%",
    impact: "High",
    color: "emerald",
  },
  {
    title: "Low-resource Medical Languages",
    confidence: "93%",
    impact: "Very High",
    color: "cyan",
  },
  {
    title: "Multimodal Radiology Agents",
    confidence: "91%",
    impact: "High",
    color: "violet",
  },
];

const insights = [
  {
    icon: TrendingUp,
    title: "Emerging Topic",
    value: "+142%",
    desc: "Research activity this year",
  },
  {
    icon: Target,
    title: "Research Opportunity",
    value: "18",
    desc: "High-impact gaps found",
  },
  {
    icon: BrainCircuit,
    title: "AI Confidence",
    value: "96%",
    desc: "Prediction accuracy",
  },
];

const GapDetection = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            AI Gap Detection
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Find opportunities before
            <br />
            everyone else.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Our AI continuously analyzes millions of papers to uncover
            underexplored topics, emerging trends and publication
            opportunities.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-border bg-linear-to-br from-emerald-500/5 via-background to-cyan-500/5 p-8"
          >

            <div className="flex items-center gap-3">

              <Lightbulb className="text-emerald-400" />

              <h3 className="text-2xl font-bold">
                Suggested Research Gaps
              </h3>

            </div>

            <div className="mt-10 space-y-5">

              {gaps.map((gap, index) => (

                <motion.div
                  key={gap.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-border bg-background/60 p-6"
                >

                  <div className="flex items-start justify-between">

                    <div>

                      <h4 className="text-xl font-semibold">
                        {gap.title}
                      </h4>

                      <p className="mt-2 text-muted">
                        AI identified limited recent publications in
                        this domain with rapidly increasing demand.
                      </p>

                    </div>

                    <CheckCircle2 className="text-emerald-400" />

                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                      Confidence {gap.confidence}
                    </span>

                    <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                      {gap.impact} Impact
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {insights.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-border bg-background/70 p-7"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-emerald-500">

                      <Icon className="text-white" />

                    </div>

                    <ArrowRight className="text-muted" />

                  </div>

                  <h3 className="mt-6 text-4xl font-black">
                    {item.value}
                  </h3>

                  <p className="mt-2 font-semibold">
                    {item.title}
                  </p>

                  <p className="mt-3 text-muted">
                    {item.desc}
                  </p>

                </motion.div>

              );

            })}

            <div className="rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-500/10 to-cyan-500/10 p-7">

              <div className="flex items-center gap-3">

                <Sparkles className="text-emerald-400" />

                <h3 className="text-xl font-bold">
                  AI Recommendation
                </h3>

              </div>

              <p className="mt-6 leading-8 text-muted">
                Combining multimodal foundation models with explainable
                medical reasoning has the highest predicted publication
                impact over the next 24 months.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-xl bg-background/60 p-4">

                <AlertCircle className="text-orange-400" />

                <span className="text-sm">
                  Only 34 papers currently exist in this niche.
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default GapDetection;