import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  Quote,
  Building2,
  BrainCircuit,
  TrendingUp,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    title: "Researchers",
    value: "18,420",
    icon: Users,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Publications",
    value: "124K",
    icon: BookOpen,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Citation Network",
    value: "8.2M",
    icon: Quote,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Departments",
    value: "82",
    icon: Building2,
    color: "from-orange-500 to-yellow-500",
  },
];

const departments = [
  {
    name: "Computer Science",
    papers: 2480,
    growth: "+24%",
  },
  {
    name: "Medicine",
    papers: 1924,
    growth: "+18%",
  },
  {
    name: "Engineering",
    papers: 1682,
    growth: "+31%",
  },
  {
    name: "Physics",
    papers: 1410,
    growth: "+14%",
  },
];

const UniversityDashboard = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Institution Dashboard
          </span>

          <h2 className="mt-6 text-5xl font-black">
            One dashboard for your
            entire university.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Monitor research productivity, publications, citations,
            funding activity and AI adoption across every department.
          </p>

        </div>

        <div className="mt-20 grid gap-8 xl:grid-cols-[1fr_380px]">

          {/* Left */}

          <div>

            <div className="grid gap-6 md:grid-cols-2">

              {metrics.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-[28px] border border-border bg-background/70 p-7 backdrop-blur"
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${item.color}`}
                      >
                        <Icon className="text-white" />
                      </div>

                      <ArrowUpRight className="text-muted" />

                    </div>

                    <h3 className="mt-8 text-5xl font-black">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-muted">
                      {item.title}
                    </p>

                  </motion.div>

                );

              })}

            </div>

            {/* Growth Chart */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mt-8 rounded-[30px] border border-border bg-background/70 p-8"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    Institutional Research Growth
                  </h3>

                  <p className="mt-2 text-muted">
                    Publications over the last six years
                  </p>

                </div>

                <TrendingUp className="text-cyan-400" />

              </div>

              <div className="mt-12 flex h-72 items-end justify-between gap-5">

                {[22, 38, 48, 64, 82, 100].map((height, index) => (

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
                        delay: index * .08,
                      }}
                      style={{
                        height: `${height}%`,
                        transformOrigin: "bottom",
                      }}
                      className="w-full rounded-t-2xl bg-linear-to-t from-cyan-500 via-violet-500 to-emerald-500"
                    />

                    <span className="mt-4 text-sm text-muted">
                      {2019 + index}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

          {/* Right */}

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
            className="space-y-6"
          >

            <div className="rounded-[30px] border border-border bg-background/70 p-8">

              <div className="flex items-center gap-3">

                <BrainCircuit className="text-cyan-400" />

                <h3 className="text-xl font-bold">
                  AI Campus Insights
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {departments.map((dept) => (

                  <div
                    key={dept.name}
                    className="rounded-2xl border border-border p-5"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h4 className="font-semibold">
                          {dept.name}
                        </h4>

                        <p className="mt-1 text-sm text-muted">
                          {dept.papers.toLocaleString()} Publications
                        </p>

                      </div>

                      <span className="rounded-full bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-400">
                        {dept.growth}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[30px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-8">

              <div className="flex items-center gap-3">

                <Globe className="text-cyan-400" />

                <h3 className="text-xl font-bold">
                  Global Impact
                </h3>

              </div>

              <h4 className="mt-8 text-5xl font-black">
                #28
              </h4>

              <p className="mt-3 text-muted">
                Worldwide research collaboration ranking.
              </p>

              <div className="mt-8 rounded-2xl bg-background/60 p-5">

                <div className="flex items-center gap-3">

                  <GraduationCap className="text-violet-400" />

                  <span className="font-medium">
                    AI Recommendation
                  </span>

                </div>

                <p className="mt-4 leading-7 text-muted">
                  Computer Science and Medicine show the strongest
                  interdisciplinary collaboration potential based on
                  recent publication trends.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default UniversityDashboard;