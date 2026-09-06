import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Clock3,
  Award,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    value: "50K+",
    label: "Active Students",
    icon: GraduationCap,
    color: "cyan",
  },
  {
    value: "2.3M",
    label: "Research Papers Read",
    icon: BookOpen,
    color: "violet",
  },
  {
    value: "80%",
    label: "Time Saved",
    icon: Clock3,
    color: "emerald",
  },
  {
    value: "95%",
    label: "Assignment Accuracy",
    icon: Award,
    color: "orange",
  },
];

const SuccessMetrics = () => {
  return (
    <section className="py-28">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="overflow-hidden rounded-[40px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5">

          <div className="border-b border-border px-10 py-12 text-center">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Student Outcomes
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Helping students achieve more.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
              Thousands of students use Resyntra every day to complete
              literature reviews, understand complex research papers,
              and prepare better academic work.
            </p>

          </div>

          {/* Stats */}

          <div className="grid gap-px bg-border lg:grid-cols-4">

            {metrics.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="bg-background p-10 text-center"
                >

                  <div
                    className={`mx-auto flex h-18 w-18 items-center justify-center rounded-2xl
                    ${
                      item.color === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : item.color === "violet"
                        ? "bg-violet-500/10 text-violet-400"
                        : item.color === "emerald"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-orange-500/10 text-orange-400"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-8 text-5xl font-black">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-muted">
                    {item.label}
                  </p>

                </motion.div>

              );

            })}

          </div>

          {/* Bottom Banner */}

          <div className="flex flex-col items-center justify-between gap-8 border-t border-border px-10 py-10 lg:flex-row">

            <div>

              <div className="flex items-center gap-3">

                <TrendingUp className="h-7 w-7 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Learn Faster with AI
                </h3>

              </div>

              <p className="mt-4 max-w-2xl leading-8 text-muted">
                Spend less time searching for information and more time
                understanding concepts. Let AI organize, summarize and
                explain research papers while you focus on learning.
              </p>

            </div>

            <div className="rounded-3xl bg-linear-to-r from-cyan-500 to-violet-500 px-8 py-6 text-center text-white">

              <p className="text-sm uppercase tracking-wider opacity-80">
                Average Weekly Saving
              </p>

              <h4 className="mt-2 text-5xl font-black">
                8 hrs
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SuccessMetrics;