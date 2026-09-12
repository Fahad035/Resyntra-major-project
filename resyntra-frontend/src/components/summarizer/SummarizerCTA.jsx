import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  {
    value: "30 sec",
    label: "Target summary generation",
  },
  {
    value: "AI",
    label: "Research-focused analysis",
  },
  {
    value: "100+",
    label: "Research fields supported",
  },
];

const SummarizerCTA = () => {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-border
            bg-card
            px-6
            py-16
            sm:px-8
            lg:px-20
            lg:py-20
          "
        >
          {/* Background Glow */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-80
              w-80
              -translate-x-1/2
              rounded-full
              bg-cyan-500/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-40
              w-96
              -translate-x-1/2
              rounded-full
              bg-cyan-500/5
              blur-[100px]
            "
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-400
              "
            >
              <Sparkles className="h-4 w-4" />
              AI Research Summarizer
            </motion.span>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                mt-8
                text-4xl
                font-bold
                leading-tight
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              Stop reading every paper.
              <br />
              <span className="text-cyan-400">
                Start understanding every paper.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-base
                leading-8
                text-muted
                sm:text-lg
              "
            >
              Upload research papers, generate AI-powered summaries, extract
              important findings, explore methodologies, and accelerate your
              literature review with Resyntra.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex items-center justify-center"
            >
              <Link
                to="/register"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-cyan-500
                  px-7
                  py-4
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-cyan-400
                "
              >
                Start Summarizing

                <ArrowRight
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            {/* Metrics */}

            <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-transparent
                    px-4
                    py-3
                    transition-colors
                    duration-300
                    hover:border-cyan-500/10
                  "
                >
                  <h3 className="text-4xl font-bold text-cyan-400">
                    {metric.value}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummarizerCTA;