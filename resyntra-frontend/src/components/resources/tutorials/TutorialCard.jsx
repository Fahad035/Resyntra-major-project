import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const TutorialCard = ({
  title,
  description,
  category,
  difficulty,
  duration,
  icon: Icon = BookOpen,
  path = "/resources/documentation",
  featured = false,
}) => {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`
        group relative overflow-hidden rounded-2xl border
        border-(--border) bg-(--surface)
        transition-all duration-200
        hover:border-(--primary)/30
        hover:shadow-(--shadow)
        ${featured ? "lg:col-span-2" : ""}
      `}
    >
      <Link
        to={path}
        className="block h-full p-6"
      >
        <div className="flex items-start justify-between gap-5">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-xl border border-(--border)
              bg-(--primary)/10 text-(--primary)
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          <span
            className="
              rounded-full border border-(--border)
              bg-(--background) px-2.5 py-1
              text-[10px] font-medium uppercase
              tracking-wide text-(--muted-foreground)
            "
          >
            {category}
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold tracking-tight text-(--foreground)">
            {title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted-foreground)">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-(--muted-foreground)">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {duration}
          </span>

          <span className="h-1 w-1 rounded-full bg-(--muted-foreground)/40" />

          <span className="inline-flex items-center gap-1.5">
            <PlayCircle className="h-3.5 w-3.5" />
            {difficulty}
          </span>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--foreground)">
          Start tutorial
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </div>
      </Link>
    </motion.article>
  );
};

export default TutorialCard;