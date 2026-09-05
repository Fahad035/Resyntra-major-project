import { motion } from "framer-motion";
import {
  Quote,
  Users,
  TrendingUp,
  Award,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    title: "Total Citations",
    value: "2.84M",
    icon: Quote,
    color: "cyan",
  },
  {
    title: "H-Index",
    value: "184",
    icon: Award,
    color: "violet",
  },
  {
    title: "Collaborations",
    value: "12.8K",
    icon: Users,
    color: "emerald",
  },
  {
    title: "Research Growth",
    value: "+38%",
    icon: TrendingUp,
    color: "orange",
  },
];

const timeline = [
  { year: "2019", value: 20 },
  { year: "2020", value: 35 },
  { year: "2021", value: 52 },
  { year: "2022", value: 74 },
  { year: "2023", value: 92 },
];

const CitationAnalytics = () => {
  return (
    <section className="pb-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5"
        >

          {/* Header */}

          <div className="border-b border-border p-10">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Citation Intelligence
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Citation Impact Analysis
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              Measure influence, discover collaboration patterns,
              monitor citation growth and evaluate research impact
              across millions of publications.
            </p>

          </div>

          {/* KPI Cards */}

          <div className="grid gap-6 p-10 md:grid-cols-2 xl:grid-cols-4">

            {metrics.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-3xl border border-border bg-background/70 p-6 backdrop-blur"
                >

                  <div className="flex items-center justify-between">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl
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
                      <Icon className="h-7 w-7" />
                    </div>

                    <ArrowUpRight className="text-muted" />

                  </div>

                  <h3 className="mt-8 text-4xl font-bold">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-muted">
                    {item.title}
                  </p>

                </motion.div>

              );

            })}

          </div>

          {/* Bottom */}

          <div className="grid gap-8 border-t border-border p-10 lg:grid-cols-2">

            {/* Timeline */}

            <div className="rounded-3xl border border-border bg-background/60 p-8">

              <h3 className="text-2xl font-bold">
                Citation Growth
              </h3>

              <div className="mt-12 flex h-64 items-end justify-between gap-6">

                {timeline.map((item, index) => (

                  <div
                    key={item.year}
                    className="flex flex-col items-center"
                  >

                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${item.value}%`,
                      }}
                      transition={{
                        duration: .8,
                        delay: index * .12,
                      }}
                      className="w-12 rounded-t-xl bg-linear-to-t from-cyan-500 to-violet-500"
                    />

                    <span className="mt-4 text-sm text-muted">
                      {item.year}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Collaboration */}

            <div className="rounded-3xl border border-border bg-background/60 p-8">

              <div className="flex items-center gap-3">

                <GitBranch className="h-7 w-7 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Collaboration Network
                </h3>

              </div>

              <div className="relative mt-10 flex h-64 items-center justify-center">

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                  }}
                  className="absolute h-56 w-56 rounded-full border border-cyan-500/20"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="absolute h-40 w-40 rounded-full border border-violet-500/20"
                />

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500 text-slate-950">

                  <Users size={34} />

                </div>

              </div>

              <p className="text-center leading-8 text-muted">
                AI continuously maps researcher collaborations,
                institutions and publication relationships.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CitationAnalytics;