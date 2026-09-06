import { motion } from "framer-motion";
import {
  BookOpen,
  Quote,
  Award,
  Users,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  {
    title: "Faculty Publications",
    value: "148",
    icon: BookOpen,
    color: "cyan",
  },
  {
    title: "Student Publications",
    value: "62",
    icon: Users,
    color: "violet",
  },
  {
    title: "Total Citations",
    value: "18.4K",
    icon: Quote,
    color: "emerald",
  },
  {
    title: "Conference Acceptances",
    value: "37",
    icon: Award,
    color: "orange",
  },
];

const journals = [
  {
    name: "Nature Machine Intelligence",
    papers: 8,
  },
  {
    name: "NeurIPS",
    papers: 14,
  },
  {
    name: "ICML",
    papers: 11,
  },
  {
    name: "ACL",
    papers: 16,
  },
];

const PublicationInsights = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Academic Impact
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Measure the success
            <br />
            of your research group.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Monitor faculty publications, student research, citations,
            conference acceptances and the overall impact of your lab.
          </p>

        </div>

        {/* KPI */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {metrics.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
                whileHover={{ y: -6 }}
                className="rounded-[30px] border border-border bg-background/70 p-7"
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
                    <Icon />
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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Publications */}

          <div className="rounded-[34px] border border-border bg-background/70 p-8">

            <h3 className="text-2xl font-bold">

              Top Publication Venues

            </h3>

            <div className="mt-8 space-y-5">

              {journals.map((journal, index) => (

                <motion.div
                  key={journal.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .08 }}
                  className="flex items-center justify-between rounded-2xl border border-border p-5"
                >

                  <div>

                    <h4 className="font-semibold">

                      {journal.name}

                    </h4>

                    <p className="mt-2 text-sm text-muted">

                      Publications

                    </p>

                  </div>

                  <span className="text-3xl font-black text-cyan-400">

                    {journal.papers}

                  </span>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Growth */}

          <div className="rounded-[34px] border border-border bg-background/70 p-8">

            <div className="flex items-center gap-3">

              <TrendingUp className="text-cyan-400" />

              <h3 className="text-2xl font-bold">

                Publication Growth

              </h3>

            </div>

            <div className="mt-10 flex h-64 items-end justify-around">

              {[35, 48, 62, 78, 92].map((value, index) => (

                <div
                  key={index}
                  className="flex flex-col items-center"
                >

                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * .08,
                    }}
                    style={{
                      height: `${value}%`,
                      transformOrigin: "bottom",
                    }}
                    className="w-12 rounded-t-xl bg-linear-to-t from-cyan-500 to-violet-500"
                  />

                  <span className="mt-4 text-sm text-muted">

                    {2020 + index}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Insight */}

        <motion.div
          whileHover={{ y: -4 }}
          className="mt-12 rounded-[34px] border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-8"
        >

          <div className="flex items-start gap-5">

            <CheckCircle2
              className="mt-1 text-emerald-400"
              size={24}
            />

            <div>

              <h3 className="text-2xl font-bold">

                AI Publication Insight

              </h3>

              <p className="mt-5 max-w-5xl leading-8 text-muted">

                Your lab's publications in AI-assisted healthcare and
                multimodal learning are receiving significantly higher
                citation growth than the department average. Resyntra
                recommends strengthening collaborations in these areas and
                targeting high-impact journals for upcoming submissions.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default PublicationInsights;