import { motion } from "framer-motion";
import {
  BookOpen,
  ClipboardCheck,
  MessageSquare,
  Calendar,
  BrainCircuit,
  Clock3,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const courses = [
  {
    title: "Machine Learning",
    students: 68,
    progress: 82,
  },
  {
    title: "Research Methodology",
    students: 54,
    progress: 61,
  },
  {
    title: "Artificial Intelligence",
    students: 72,
    progress: 94,
  },
];

const tasks = [
  {
    icon: ClipboardCheck,
    title: "Assignments to Review",
    value: "34",
  },
  {
    icon: MessageSquare,
    title: "Student Questions",
    value: "18",
  },
  {
    icon: Calendar,
    title: "Office Hours Today",
    value: "5",
  },
  {
    icon: BrainCircuit,
    title: "AI Suggestions",
    value: "12",
  },
];

const TeachingDashboard = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="flex items-end justify-between">

          <div>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              Teaching Dashboard
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Everything you need
              <br />
              to manage your classroom.
            </h2>

          </div>

          <Clock3
            size={40}
            className="hidden text-cyan-400 lg:block"
          />

        </div>

        {/* TOP GRID */}

        <div className="mt-16 grid gap-6 xl:grid-cols-[1.2fr_.8fr]">

          {/* COURSES */}

          <div className="rounded-[34px] border border-border bg-background/70 p-8">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <BookOpen className="text-cyan-400" />

                <h3 className="text-2xl font-bold">

                  Active Courses

                </h3>

              </div>

              <ArrowUpRight className="text-muted" />

            </div>

            <div className="mt-8 space-y-6">

              {courses.map((course, index) => (

                <motion.div
                  key={course.title}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .08,
                  }}
                  className="rounded-3xl border border-border p-6"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h4 className="font-bold text-lg">
                        {course.title}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        {course.students} Students
                      </p>

                    </div>

                    <span className="text-xl font-bold">
                      {course.progress}%
                    </span>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-border">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${course.progress}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: .8,
                      }}
                      className="h-full rounded-full bg-linear-to-r from-cyan-500 to-violet-500"
                    />

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* TASKS */}

          <div className="grid gap-6">

            {tasks.map((task, index) => {

              const Icon = task.icon;

              return (

                <motion.div
                  key={task.title}
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
                    y: -5,
                  }}
                  className="rounded-3xl border border-border bg-background/70 p-6"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                      <Icon className="text-cyan-400" />

                    </div>

                    <CheckCircle2 className="text-emerald-400" />

                  </div>

                  <h3 className="mt-6 text-4xl font-black">

                    {task.value}

                  </h3>

                  <p className="mt-2 text-muted">

                    {task.title}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* BOTTOM PANEL */}

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="mt-10 rounded-[34px] border border-cyan-500/20 bg-linear-to-r from-cyan-500/10 to-violet-500/10 p-8"
        >

          <h3 className="text-2xl font-bold">

            AI Teaching Recommendation

          </h3>

          <p className="mt-5 max-w-4xl leading-8 text-muted">

            Students in <span className="font-semibold text-cyan-400">Machine Learning</span> are spending more time on neural network topics.
            Resyntra recommends generating an interactive visualization,
            a short practice quiz and an additional reading list to improve
            comprehension before the next lecture.

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default TeachingDashboard;