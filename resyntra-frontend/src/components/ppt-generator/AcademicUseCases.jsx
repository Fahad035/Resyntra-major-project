import { motion } from "framer-motion";
import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  MessageSquareText,
  Presentation,
  ScrollText,
} from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Thesis Defense",
    description: "Present your research clearly and confidently.",
  },
  {
    icon: Presentation,
    title: "Research Seminars",
    description: "Turn dense papers into focused presentations.",
  },
  {
    icon: FlaskConical,
    title: "Project Reviews",
    description: "Explain methodology, implementation, and results.",
  },
  {
    icon: BookOpen,
    title: "Literature Presentations",
    description: "Summarize important academic literature.",
  },
  {
    icon: ScrollText,
    title: "Conference Preparation",
    description: "Build a structured research presentation faster.",
  },
  {
    icon: MessageSquareText,
    title: "Research Discussions",
    description: "Create presentation-ready research insights.",
  },
];

const AcademicUseCases = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-(--border)
        bg-(--background)
        py-20
      "
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/4
            top-0
            h-72
            w-72
            rounded-full
            bg-(--primary)
            opacity-[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-1/4
            h-72
            w-72
            rounded-full
            bg-(--primary)
            opacity-[0.025]
            blur-[120px]
          "
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl px-6 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-(--primary)
              bg-(--primary)/5
              px-4
              py-2
              text-xs
              font-medium
              text-(--primary)
            "
          >
            <BookOpen className="h-3.5 w-3.5" />
            Academic Use Cases
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-(--foreground)
              sm:text-3xl
            "
          >
            Built for the moments when
            <span className="ml-2 text-(--primary)">
              research needs a stage.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-(--muted-foreground)
              sm:text-base
            "
          >
            From thesis defenses to research seminars, turn your academic work
            into a presentation without starting from a blank slide.
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-24
              bg-linear-to-r
              from-(--background)
              to-transparent
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-24
              bg-linear-to-l
              from-(--background)
              to-transparent
            "
          />

          <div className="group overflow-hidden">
            <motion.div
              className="flex w-max gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 32,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* First Set */}
              {useCases.map((item) => (
                <UseCaseCard
                  key={`first-${item.title}`}
                  item={item}
                />
              ))}

              {/* Duplicate Set for Seamless Loop */}
              {useCases.map((item) => (
                <UseCaseCard
                  key={`second-${item.title}`}
                  item={item}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-3 px-6"
        >
          <span className="h-px w-8 bg-(--border)" />

          <p className="text-center text-xs text-(--muted-foreground)">
            One research paper. Multiple ways to present it.
          </p>

          <span className="h-px w-8 bg-(--border)" />
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   USE CASE CARD
========================================================= */

const UseCaseCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group/card
        w-67.5
        shrink-0
        rounded-2xl
        border
        border-(--border)
        bg-(--surface)
        p-5
        shadow-(--shadow)
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-(--primary)
        sm:w-75
      "
    >
      {/* Card Header */}
      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-(--border)
            bg-(--surface-secondary)
            transition-colors
            duration-300
            group-hover/card:border-(--primary)
          "
        >
          <Icon
            className="
              h-5
              w-5
              text-(--primary)
            "
          />
        </div>

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-(--muted-foreground)
            opacity-50
          "
        >
          Resyntra
        </span>
      </div>

      {/* Card Content */}
      <h3
        className="
          mt-5
          text-sm
          font-semibold
          text-(--foreground)
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-2
          text-xs
          leading-5
          text-(--muted-foreground)
        "
      >
        {item.description}
      </p>
    </div>
  );
};

export default AcademicUseCases;