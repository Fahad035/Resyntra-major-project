import { motion } from "framer-motion";
import {
  CircleAlert,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const PainPoints = ({ data }) => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            Everyday Challenges
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Academic research shouldn't
            <br />
            feel overwhelming.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Thousands of students struggle with the same problems every
            semester. Resyntra simplifies the entire research workflow.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Center Line */}

          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-cyan-500 via-violet-500 to-cyan-500 lg:block" />

          <div className="space-y-16">

            {data.painPoints.map((point, index) => {

              const reverse = index % 2 !== 0;

              return (

                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  {/* Problem */}

                  <div>

                    <div className="rounded-[30px] border border-red-500/20 bg-linear-to-br from-red-500/10 via-background to-background p-8">

                      <div className="flex items-center gap-3">

                        <CircleAlert className="h-7 w-7 text-red-400" />

                        <span className="text-lg font-semibold">
                          Challenge
                        </span>

                      </div>

                      <h3 className="mt-6 text-3xl font-bold">
                        {point}
                      </h3>

                      <p className="mt-5 leading-8 text-muted">
                        This slows learning, increases research time,
                        and makes academic work unnecessarily difficult.
                      </p>

                    </div>

                  </div>

                  {/* Solution */}

                  <div>

                    <div className="rounded-[30px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-background to-background p-8">

                      <div className="flex items-center gap-3">

                        <CheckCircle2 className="h-7 w-7 text-cyan-400" />

                        <span className="text-lg font-semibold">
                          Resyntra Solution
                        </span>

                      </div>

                      <p className="mt-6 leading-8 text-muted">
                        AI analyzes your documents, explains difficult
                        concepts, finds important insights and generates
                        reliable citations within seconds.
                      </p>

                      <button className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-3">

                        Learn More

                        <ArrowRight className="h-5 w-5" />

                      </button>

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default PainPoints;