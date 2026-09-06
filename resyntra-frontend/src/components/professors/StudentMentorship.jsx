import { motion } from "framer-motion";
import {
  GraduationCap,
  UserRound,
  CalendarDays,
  FileText,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  ArrowRight,
} from "lucide-react";

const students = [
  {
    name: "Sarah Johnson",
    level: "PhD Candidate",
    topic: "Large Language Models in Healthcare",
    progress: 82,
    status: "Draft Review",
  },
  {
    name: "David Kim",
    level: "Master's Student",
    topic: "Graph Neural Networks",
    progress: 64,
    status: "Literature Review",
  },
  {
    name: "Emily Carter",
    level: "Undergraduate",
    topic: "AI for Climate Prediction",
    progress: 48,
    status: "Research Proposal",
  },
];

const overview = [
  {
    title: "PhD Students",
    value: "18",
    icon: GraduationCap,
  },
  {
    title: "Master's",
    value: "42",
    icon: UserRound,
  },
  {
    title: "Meetings This Week",
    value: "12",
    icon: CalendarDays,
  },
  {
    title: "Draft Reviews",
    value: "27",
    icon: FileText,
  },
];

const StudentMentorship = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Student Mentorship
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Mentor every student
            <br />
            with confidence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Track research progress, review drafts, schedule meetings and
            receive AI-powered mentoring recommendations from one workspace.
          </p>

        </div>

        {/* Overview */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {overview.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[30px] border border-border bg-background/70 p-7 backdrop-blur"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="text-cyan-400" />

                </div>

                <h3 className="mt-6 text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-muted">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Students */}

        <div className="mt-14 rounded-[36px] border border-border bg-background/70 p-8">

          <div className="flex items-center justify-between">

            <h3 className="text-2xl font-bold">
              Active Research Students
            </h3>

            <Clock3 className="text-cyan-400" />

          </div>

          <div className="mt-8 space-y-6">

            {students.map((student, index) => (

              <motion.div
                key={student.name}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-border p-6"
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h4 className="text-xl font-bold">
                      {student.name}
                    </h4>

                    <p className="mt-2 text-cyan-400">
                      {student.level}
                    </p>

                    <p className="mt-3 text-muted">
                      {student.topic}
                    </p>

                  </div>

                  <div className="w-full max-w-sm">

                    <div className="flex items-center justify-between text-sm">

                      <span className="text-muted">
                        Progress
                      </span>

                      <span className="font-semibold">
                        {student.progress}%
                      </span>

                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${student.progress}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
                      />

                    </div>

                  </div>

                  <div className="text-right">

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                      {student.status}
                    </span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* AI Recommendation */}

        <motion.div
          whileHover={{ y: -4 }}
          className="mt-12 rounded-[34px] border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-8"
        >

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-cyan-500/10 p-4">

              <BrainCircuit className="text-cyan-400" />

            </div>

            <div>

              <h3 className="text-2xl font-bold">
                AI Mentoring Insight
              </h3>

              <p className="mt-5 max-w-4xl leading-8 text-muted">
                Two students are approaching publication readiness.
                Resyntra recommends scheduling manuscript reviews this week,
                refining citation quality and submitting to suitable
                conferences based on each project's research domain.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {[
                  "Schedule Review",
                  "Analyze Draft",
                  "Suggest Journals",
                  "Track Progress",
                ].map((item) => (

                  <button
                    key={item}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 px-5 py-3 transition hover:border-cyan-500"
                  >

                    <CheckCircle2 size={16} />

                    {item}

                    <ArrowRight size={15} />

                  </button>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default StudentMentorship;