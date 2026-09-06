import { motion } from "framer-motion";
import {
  Award,
  Quote,
  BookOpen,
  GraduationCap,
  DollarSign,
  Globe2,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "H-index",
    value: "58",
    icon: Award,
    color: "cyan",
  },
  {
    title: "i10-index",
    value: "126",
    icon: TrendingUp,
    color: "violet",
  },
  {
    title: "Publications",
    value: "214",
    icon: BookOpen,
    color: "emerald",
  },
  {
    title: "Citations",
    value: "31.8K",
    icon: Quote,
    color: "orange",
  },
  {
    title: "PhD Graduates",
    value: "28",
    icon: GraduationCap,
    color: "pink",
  },
  {
    title: "Research Grants",
    value: "$8.6M",
    icon: DollarSign,
    color: "sky",
  },
];

const collaborations = [
  "MIT",
  "Stanford University",
  "University of Oxford",
  "ETH Zurich",
  "Carnegie Mellon",
  "National University of Singapore",
];

const AcademicImpact = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">

            Academic Profile

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Measure your academic
            <br />

            impact beyond publications.

          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">

            Track citations, research influence, grants,
            collaborations, student success and academic recognition
            from one intelligent dashboard.

          </p>

        </div>

        {/* Metrics */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
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
                transition={{
                  delay: index * .07,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-4xl border border-border bg-background/70 p-8 backdrop-blur"
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
                        : item.color === "orange"
                        ? "bg-orange-500/10 text-orange-400"
                        : item.color === "pink"
                        ? "bg-pink-500/10 text-pink-400"
                        : "bg-sky-500/10 text-sky-400"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <ArrowUpRight className="text-muted" />

                </div>

                <h3 className="mt-8 text-4xl font-black">

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

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">

          {/* AI Impact */}

          <div className="rounded-[36px] border border-border bg-linear-to-br from-cyan-500/10 via-background to-violet-500/10 p-10">

            <div className="flex items-center gap-4">

              <Sparkles className="text-cyan-400" />

              <h3 className="text-2xl font-bold">

                AI Impact Summary

              </h3>

            </div>

            <p className="mt-8 leading-8 text-muted">

              Your research influence has grown consistently over the
              last five years. Citation velocity is increasing,
              interdisciplinary collaborations are expanding, and your
              supervised students have achieved above-average publication
              success. Based on current trends, Resyntra predicts your
              H-index could increase by approximately 18% within the next
              three years.

            </p>

            <div className="mt-10 h-3 overflow-hidden rounded-full bg-border">

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "84%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
              />

            </div>

            <div className="mt-4 flex justify-between text-sm text-muted">

              <span>

                Academic Influence

              </span>

              <span>

                84%

              </span>

            </div>

          </div>

          {/* Collaborations */}

          <div className="rounded-[36px] border border-border bg-background/70 p-10">

            <div className="flex items-center gap-3">

              <Globe2 className="text-cyan-400" />

              <h3 className="text-2xl font-bold">

                Global Collaborations

              </h3>

            </div>

            <div className="mt-8 space-y-4">

              {collaborations.map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-border p-5"
                >

                  <span>{item}</span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">

                    Active

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AcademicImpact;