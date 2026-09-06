import { motion } from "framer-motion";
import {
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  Globe2,
  TrendingUp,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    title: "Faculty Members",
    value: "86",
    icon: Users,
    color: "cyan",
  },
  {
    title: "Research Labs",
    value: "14",
    icon: Building2,
    color: "violet",
  },
  {
    title: "Active Students",
    value: "1,248",
    icon: GraduationCap,
    color: "emerald",
  },
  {
    title: "Annual Publications",
    value: "412",
    icon: BookOpen,
    color: "orange",
  },
];

const funding = [
  {
    area: "Artificial Intelligence",
    amount: "$4.2M",
    percent: 82,
  },
  {
    area: "Data Science",
    amount: "$2.9M",
    percent: 68,
  },
  {
    area: "Robotics",
    amount: "$1.7M",
    percent: 54,
  },
  {
    area: "Cybersecurity",
    amount: "$1.3M",
    percent: 41,
  },
];

const DepartmentAnalytics = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">

            Department Intelligence

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Understand your department's
            <br />

            research performance.

          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">

            Monitor faculty productivity, student enrollment,
            research funding and collaboration opportunities through
            AI-powered institutional analytics.

          </p>

        </div>

        {/* KPI */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {metrics.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-4xl border border-border bg-background/70 p-7 backdrop-blur"
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
                    <Icon size={24} />
                  </div>

                  <ArrowUpRight className="text-muted" />

                </div>

                <h3 className="mt-8 text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-muted">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">

          {/* Funding */}

          <div className="rounded-[36px] border border-border bg-background/70 p-8">

            <div className="flex items-center gap-3">

              <DollarSign className="text-cyan-400" />

              <h3 className="text-2xl font-bold">

                Research Funding Distribution

              </h3>

            </div>

            <div className="mt-10 space-y-7">

              {funding.map((item) => (

                <div key={item.area}>

                  <div className="flex items-center justify-between">

                    <span className="font-medium">
                      {item.area}
                    </span>

                    <span className="font-bold text-cyan-400">
                      {item.amount}
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${item.percent}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: .9 }}
                      className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* AI */}

          <div className="rounded-[36px] border border-border bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10 p-8">

            <div className="flex items-center gap-3">

              <BrainCircuit className="text-cyan-400" />

              <h3 className="text-2xl font-bold">

                AI Strategic Insight

              </h3>

            </div>

            <p className="mt-8 leading-8 text-muted">

              Cross-disciplinary projects involving AI and healthcare are
              producing the highest citation impact and grant success.
              Expanding collaborations with international institutions
              could further increase publication quality and research
              funding.

            </p>

            <div className="mt-10 rounded-2xl border border-border bg-background/70 p-6">

              <div className="flex items-center gap-3">

                <TrendingUp className="text-emerald-400" />

                <span className="font-semibold">

                  Expected department growth

                </span>

              </div>

              <h3 className="mt-5 text-5xl font-black text-cyan-400">

                +24%

              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">

                Predicted publication and funding increase over the next
                academic cycle.

              </p>

            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border p-5">

              <Globe2 className="text-violet-400" />

              <div>

                <h4 className="font-semibold">

                  International Partnerships

                </h4>

                <p className="mt-1 text-sm text-muted">

                  32 active collaborations across 18 countries.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DepartmentAnalytics;