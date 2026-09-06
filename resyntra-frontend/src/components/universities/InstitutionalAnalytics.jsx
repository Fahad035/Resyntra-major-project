import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Trophy,
  Landmark,
  DollarSign,
  Quote,
  Award,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    title: "Research Output",
    value: "124,830",
    change: "+18.2%",
    icon: BarChart3,
    color: "cyan",
  },
  {
    title: "Citation Impact",
    value: "3.84M",
    change: "+26.7%",
    icon: Quote,
    color: "violet",
  },
  {
    title: "Grant Funding",
    value: "$482M",
    change: "+14.3%",
    icon: DollarSign,
    color: "emerald",
  },
  {
    title: "Global Ranking",
    value: "#47",
    change: "+9",
    icon: Trophy,
    color: "amber",
  },
];

const ranking = [
  {
    university: "Your University",
    score: 98,
    active: true,
  },
  {
    university: "Institution A",
    score: 94,
  },
  {
    university: "Institution B",
    score: 90,
  },
  {
    university: "Institution C",
    score: 87,
  },
];

const InstitutionalAnalytics = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Executive Analytics
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Make institutional decisions
            <br />
            backed by AI.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Monitor research performance, funding, institutional impact,
            rankings and collaboration metrics from a single executive
            dashboard.
          </p>

        </div>

        {/* KPI */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {metrics.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-[30px] border border-border bg-background/70 p-7 backdrop-blur"
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
                        : "bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <ArrowUpRight className="text-muted" />

                </div>

                <h3 className="mt-8 text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-3 text-muted">
                  {item.title}
                </p>

                <div className="mt-6 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                  {item.change}
                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Dashboard */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">

          {/* Growth Chart */}

          <div className="rounded-[34px] border border-border bg-background/70 p-8">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold">
                  Institutional Growth
                </h3>

                <p className="mt-2 text-muted">
                  Five-year research performance
                </p>

              </div>

              <TrendingUp className="text-cyan-400" />

            </div>

            <div className="mt-10 flex h-72 items-end justify-between gap-4">

              {[42, 55, 69, 84, 96].map((value, index) => (

                <div
                  key={index}
                  className="flex flex-1 flex-col items-center"
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
                      delay: index * 0.08,
                    }}
                    style={{
                      height: `${value}%`,
                      transformOrigin: "bottom",
                    }}
                    className="w-full rounded-t-xl bg-linear-to-t from-cyan-500 to-violet-500"
                  />

                  <span className="mt-4 text-sm text-muted">
                    {2020 + index}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Rankings */}

          <div className="rounded-[34px] border border-border bg-background/70 p-8">

            <div className="flex items-center gap-3">

              <Award className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Benchmark Ranking
              </h3>

            </div>

            <div className="mt-8 space-y-5">

              {ranking.map((item) => (

                <div
                  key={item.university}
                  className={`rounded-2xl border p-5 ${
                    item.active
                      ? "border-cyan-500/30 bg-cyan-500/10"
                      : "border-border"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="font-semibold">
                      {item.university}
                    </span>

                    <span className="font-bold">
                      {item.score}
                    </span>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.score}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Summary */}

        <motion.div
          whileHover={{ y: -4 }}
          className="mt-12 rounded-[34px] border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-8"
        >

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-cyan-500/10 p-4">

              <Landmark className="text-cyan-400" />

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Executive Insight
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-muted">
                AI predicts that increasing interdisciplinary
                collaborations by <span className="font-semibold text-cyan-400">15%</span>,
                expanding international partnerships and improving
                grant application success rates could move the institution
                into the <span className="font-semibold text-cyan-400">Top 30 global research universities</span>
                within five years.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default InstitutionalAnalytics;