import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  Award,
  Rocket,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    title: "Undergraduate Research",
    level: "UG",
    students: "6,240",
    icon: GraduationCap,
    color: "from-cyan-500 to-sky-500",
    features: [
      "AI Literature Search",
      "Citation Assistant",
      "Research Proposal Builder",
    ],
  },
  {
    title: "Master's Research",
    level: "MS",
    students: "2,180",
    icon: BookOpen,
    color: "from-violet-500 to-fuchsia-500",
    features: [
      "Knowledge Graph",
      "Research Gap Detection",
      "Collaboration Discovery",
    ],
  },
  {
    title: "PhD Research",
    level: "PhD",
    students: "1,320",
    icon: FlaskConical,
    color: "from-emerald-500 to-teal-500",
    features: [
      "AI Paper Writing",
      "Publication Analytics",
      "Reviewer Insights",
    ],
  },
];

const stats = [
  {
    icon: BrainCircuit,
    title: "AI Assisted Projects",
    value: "12,480",
  },
  {
    icon: Award,
    title: "Published Papers",
    value: "4,280",
  },
  {
    icon: Rocket,
    title: "Research Success",
    value: "92%",
  },
];

const StudentResearchPrograms = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Research Programs
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Empower every student
            <br />
            to become a researcher.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            From undergraduate projects to doctoral dissertations,
            Resyntra provides AI-powered tools throughout every stage of
            academic research.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {programs.map((program, index) => {

            const Icon = program.icon;

            return (

              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[34px] border border-border bg-background/70 p-8 backdrop-blur"
              >

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${program.color}`}
                  >
                    <Icon className="text-white" />
                  </div>

                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                    {program.level}
                  </span>

                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-2 text-muted">
                  {program.students} Active Students
                </p>

                <div className="mt-8 space-y-3">

                  {program.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center justify-between rounded-xl border border-border p-4"
                    >

                      <span>{feature}</span>

                      <ArrowRight
                        size={16}
                        className="text-cyan-400"
                      />

                    </div>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="text-cyan-400" />

                </div>

                <h3 className="mt-6 text-5xl font-black">
                  {item.value}
                </h3>

                <p className="mt-3 text-muted">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default StudentResearchPrograms;