import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const BlogCard = ({
  title,
  description,
  category,
  author,
  duration,
  icon: Icon,
  externalUrl,
}) => {
  const handleOpenArticle = () => {
    if (!externalUrl) return;

    window.open(
      externalUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        group overflow-hidden rounded-2xl
        border border-(--border)
        bg-(--surface)
        transition-shadow duration-200
        hover:shadow-(--shadow)
      "
    >
      <button
        type="button"
        onClick={handleOpenArticle}
        disabled={!externalUrl}
        className="
          block w-full text-left
          disabled:cursor-default
        "
      >
        {/* Visual */}
        <div
          className="
            relative flex h-44
            items-center justify-center
            overflow-hidden
            border-b border-(--border)
            bg-(--surface-secondary)
          "
        >
          <div
            className="
              absolute h-32 w-32
              rounded-full
              border border-(--primary)/10
              transition-transform duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              absolute h-20 w-20
              rounded-full
              border border-(--primary)/15
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative flex h-12 w-12
              items-center justify-center
              rounded-xl
              border border-(--border)
              bg-(--surface)
              text-(--primary)
              shadow-lg
              transition-transform duration-300
              group-hover:scale-110
            "
          >
            {Icon && <Icon className="h-5 w-5" />}
          </motion.div>

          {/* External indicator */}
          <span
            className="
              absolute right-4 top-4
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              border border-(--border)
              bg-(--surface)/80
              text-(--muted-foreground)
              backdrop-blur-md
              transition-all duration-200
              group-hover:border-(--primary)/30
              group-hover:text-(--primary)
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <span
            className="
              inline-flex rounded-full
              border border-(--primary)/20
              bg-(--primary)/10
              px-2.5 py-1
              text-[10px] font-semibold
              uppercase tracking-wide
              text-(--primary)
            "
          >
            {category}
          </span>

          <h3
            className="
              mt-4 text-lg font-semibold
              tracking-tight
              text-(--foreground)
              transition-colors duration-200
              group-hover:text-(--primary)
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-2 text-sm leading-6
              text-(--muted-foreground)
            "
          >
            {description}
          </p>

          <div
            className="
              mt-5 flex items-center
              justify-between gap-3
            "
          >
            <div
              className="
                flex min-w-0 items-center
                gap-2 text-xs
                text-(--muted-foreground)
              "
            >
              <span className="truncate">
                {author}
              </span>

              <span
                className="
                  h-1 w-1 shrink-0
                  rounded-full
                  bg-(--muted-foreground)/40
                "
              />

              <span
                className="
                  inline-flex shrink-0
                  items-center gap-1
                "
              >
                <Clock3 className="h-3 w-3" />
                {duration}
              </span>
            </div>
          </div>

          <div
            className="
              mt-5 inline-flex items-center
              gap-2 text-sm font-medium
              text-(--foreground)
              transition-colors
              group-hover:text-(--primary)
            "
          >
            Read original article

            <ArrowUpRight
              className="
                h-4 w-4
                transition-transform duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </div>
        </div>
      </button>
    </motion.article>
  );
};

export default BlogCard;