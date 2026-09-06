import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileText,
  MessageSquare,
  Search,
  Quote,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const icons = [
  BrainCircuit,
  FileText,
  MessageSquare,
  Search,
  Quote,
  Sparkles,
];

const FeatureShowcase = ({ data }) => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Everything You Need
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Built for modern academic research.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Powerful AI tools designed to simplify every stage of your
            research workflow.
          </p>

        </div>

        <div className="mt-20 grid auto-rows-[240px] gap-6 lg:grid-cols-4">

          {data.features.map((feature, index) => {

            const Icon = icons[index % icons.length];

            const large =
              index === 0 || index === data.features.length - 1;

            return (

              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  group
                  overflow-hidden
                  rounded-4xl
                  border
                  border-border
                  bg-linear-to-br
                  from-cyan-500/5
                  via-background
                  to-violet-500/5
                  p-8
                  transition
                  ${large ? "lg:col-span-2" : ""}
                `}
              >

                <div className="flex h-full flex-col justify-between">

                  <div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                      <Icon className="h-8 w-8 text-cyan-400" />

                    </div>

                    <h3 className="mt-8 text-2xl font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-5 max-w-md leading-8 text-muted">
                      {feature.description}
                    </p>

                  </div>

                  <button className="mt-10 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-all group-hover:gap-4">

                    Learn More

                    <ArrowRight className="h-5 w-5" />

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default FeatureShowcase;