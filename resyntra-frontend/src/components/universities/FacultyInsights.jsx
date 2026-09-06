import { motion } from "framer-motion";
import {
  BrainCircuit,
  GraduationCap,
  Quote,
  BookOpen,
  Award,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const faculty = [
  {
    name: "Prof. Sarah Johnson",
    department: "Computer Science",
    specialization: "Artificial Intelligence",
    publications: 286,
    citations: "18.4K",
    hIndex: 64,
    grants: "$8.2M",
    trend: "+18%",
    color: "from-cyan-500 to-sky-500",
  },
  {
    name: "Prof. Michael Chen",
    department: "Biomedical Engineering",
    specialization: "Medical Imaging",
    publications: 214,
    citations: "12.9K",
    hIndex: 58,
    grants: "$12.6M",
    trend: "+26%",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Prof. Emily Carter",
    department: "Physics",
    specialization: "Quantum Computing",
    publications: 198,
    citations: "15.1K",
    hIndex: 61,
    grants: "$9.8M",
    trend: "+21%",
    color: "from-emerald-500 to-teal-500",
  },
];

const FacultyInsights = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Faculty Intelligence
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Understand your institution's
            research leaders.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            AI continuously evaluates faculty impact, publication trends,
            funding opportunities and collaboration potential.
          </p>

        </div>

        <div className="mt-20 grid gap-8">

          {faculty.map((prof, index) => (

            <motion.div
              key={prof.name}
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
                delay: index * .08,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-[34px] border border-border bg-background/70 p-8 backdrop-blur"
            >

              <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

                {/* Left */}

                <div>

                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-br ${prof.color}`}
                  >
                    <GraduationCap
                      size={40}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold">
                    {prof.name}
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    {prof.department}
                  </p>

                  <p className="mt-2 text-muted">
                    {prof.specialization}
                  </p>

                  <div className="mt-6 inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                    Research Growth {prof.trend}
                  </div>

                </div>

                {/* Right */}

                <div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                    <div className="rounded-2xl border border-border p-5">

                      <BookOpen className="text-cyan-400" />

                      <h4 className="mt-4 text-3xl font-black">
                        {prof.publications}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        Publications
                      </p>

                    </div>

                    <div className="rounded-2xl border border-border p-5">

                      <Quote className="text-violet-400" />

                      <h4 className="mt-4 text-3xl font-black">
                        {prof.citations}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        Citations
                      </p>

                    </div>

                    <div className="rounded-2xl border border-border p-5">

                      <Award className="text-amber-400" />

                      <h4 className="mt-4 text-3xl font-black">
                        {prof.hIndex}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        H-Index
                      </p>

                    </div>

                    <div className="rounded-2xl border border-border p-5">

                      <TrendingUp className="text-emerald-400" />

                      <h4 className="mt-4 text-3xl font-black">
                        {prof.grants}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        Active Grants
                      </p>

                    </div>

                  </div>

                  <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-6">

                    <div className="flex items-center gap-3">

                      <BrainCircuit className="text-cyan-400" />

                      <h4 className="font-bold">
                        AI Research Insight
                      </h4>

                      <ArrowUpRight className="ml-auto text-cyan-400" />

                    </div>

                    <p className="mt-5 leading-8 text-muted">
                      AI recommends increasing interdisciplinary
                      collaboration with Medicine and Data Science.
                      Estimated citation impact:
                      <span className="font-semibold text-cyan-400">
                        {" "}+27%
                      </span>
                      over the next three years.
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

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
          className="mt-16 rounded-[36px] border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-violet-500/10 p-10"
        >

          <div className="flex items-center gap-4">

            <Sparkles className="text-cyan-400" />

            <h3 className="text-2xl font-bold">
              Institutional AI Recommendation
            </h3>

          </div>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-muted">
            Based on publication trends, citation networks and grant
            activity, AI identified
            <span className="font-semibold text-cyan-400">
              {" "}14 emerging interdisciplinary collaborations
            </span>
            that could significantly improve institutional research
            output and external funding success.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default FacultyInsights;