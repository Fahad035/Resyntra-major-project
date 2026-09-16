import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const TutorialsHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-(--border)">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-(--primary)/8 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-(--primary)/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-medium text-(--muted-foreground)"
          >
            <Sparkles className="h-3.5 w-3.5 text-(--primary)" />
            Learn Resyntra
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl lg:text-6xl"
          >
            Learn how to{" "}
            <span className="text-(--primary)">
              research smarter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-(--muted-foreground) sm:text-lg"
          >
            Step-by-step tutorials for using Resyntra to discover
            papers, understand research, organize literature, and
            accelerate your academic workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/platform/workspace"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl bg-(--primary) px-5 py-2.5
                text-sm font-semibold text-white
                transition-all duration-200
                hover:bg-(--primary-hover)
                hover:shadow-lg
              "
            >
              Start learning
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/resources/documentation"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl border border-(--border)
                bg-(--surface) px-5 py-2.5
                text-sm font-medium text-(--foreground)
                transition-all duration-200
                hover:border-(--primary)/30
                hover:bg-(--surface-secondary)
              "
            >
              <BookOpen className="h-4 w-4" />
              Read documentation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3"
        >
          {[
            {
              icon: BookOpen,
              title: "Step by step",
              description: "Follow practical workflows from start to finish.",
            },
            {
              icon: PlayCircle,
              title: "Practical",
              description: "Learn features through research-focused examples.",
            },
            {
              icon: Sparkles,
              title: "AI-powered",
              description: "Understand how AI fits into your research process.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl border border-(--border)
                  bg-(--surface)/80 p-5 text-left
                  backdrop-blur-sm
                "
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <Icon className="h-4 w-4" />
                </div>

                <h2 className="text-sm font-semibold text-(--foreground)">
                  {item.title}
                </h2>

                <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TutorialsHero;