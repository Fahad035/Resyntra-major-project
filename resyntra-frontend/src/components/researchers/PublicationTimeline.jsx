import { motion } from "framer-motion";
import {
  FileSearch,
  BrainCircuit,
  FileText,
  Send,
  CheckCircle2,
  Quote,
} from "lucide-react";

const timeline = [
  {
    year: "Jan",
    title: "Literature Review",
    description: "AI collected 1,284 relevant papers.",
    icon: FileSearch,
    color: "cyan",
  },
  {
    year: "Feb",
    title: "Research Analysis",
    description: "Knowledge graph generated automatically.",
    icon: BrainCircuit,
    color: "violet",
  },
  {
    year: "Mar",
    title: "Paper Draft",
    description: "Research notes organized into manuscript.",
    icon: FileText,
    color: "emerald",
  },
  {
    year: "Apr",
    title: "Journal Submission",
    description: "Paper submitted to Nature AI.",
    icon: Send,
    color: "orange",
  },
  {
    year: "Jun",
    title: "Accepted",
    description: "Publication accepted with minor revisions.",
    icon: CheckCircle2,
    color: "cyan",
  },
];

const citations = [
  10,
  18,
  30,
  48,
  72,
  98,
  130,
];

const PublicationTimeline = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Publication Journey
          </span>

          <h2 className="mt-6 text-5xl font-black">
            From research idea
            <br />
            to published paper.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Track every stage of your publication lifecycle while AI
            assists throughout the process.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">

          {/* Timeline */}

          <div className="relative">

            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-linear-to-b from-cyan-500 via-violet-500 to-emerald-500" />

            <div className="space-y-10">

              {timeline.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .08,
                    }}
                    className="relative flex gap-8"
                  >

                    <div
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full
                      ${
                        item.color === "cyan"
                          ? "bg-cyan-500"
                          : item.color === "violet"
                          ? "bg-violet-500"
                          : item.color === "emerald"
                          ? "bg-emerald-500"
                          : "bg-orange-500"
                      }`}
                    >
                      <Icon className="text-white" />
                    </div>

                    <motion.div
                      whileHover={{
                        x: 6,
                      }}
                      className="flex-1 rounded-3xl border border-border bg-background/70 p-6"
                    >

                      <div className="flex items-center justify-between">

                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                          {item.year}
                        </span>

                      </div>

                      <p className="mt-4 leading-7 text-muted">
                        {item.description}
                      </p>

                    </motion.div>

                  </motion.div>

                );

              })}

            </div>

          </div>

          {/* Citation Growth */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[34px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-8"
          >

            <div className="flex items-center gap-3">

              <Quote className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Citation Growth
              </h3>

            </div>

            <div className="mt-12 flex h-72 items-end justify-between gap-3">

              {citations.map((value, index) => (

                <div
                  key={index}
                  className="flex flex-col items-center"
                >

                  <motion.div
                    initial={{
                      scaleY: 0,
                    }}
                    whileInView={{
                      scaleY: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .08,
                    }}
                    style={{
                      height: `${value}%`,
                      transformOrigin: "bottom",
                    }}
                    className="w-10 rounded-t-xl bg-linear-to-t from-cyan-500 via-violet-500 to-emerald-500"
                  />

                  <span className="mt-3 text-xs text-muted">
                    {2019 + index}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-10 rounded-2xl bg-cyan-500/10 p-5">

              <h4 className="font-semibold">
                AI Forecast
              </h4>

              <p className="mt-3 leading-7 text-muted">
                Based on similar publications, this research is projected
                to exceed <span className="font-semibold text-cyan-400">300 citations</span> within the first three years after publication.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default PublicationTimeline;