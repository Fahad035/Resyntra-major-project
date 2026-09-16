import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const BlogHero = ({
  searchQuery = "",
  onSearchChange,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-(--border) bg-(--background)">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-(--primary)/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-18 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              mx-auto inline-flex items-center gap-2
              rounded-full border border-(--primary)/20
              bg-(--primary)/10 px-3 py-1.5
              text-xs font-medium text-(--primary)
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Resyntra Research Desk
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="
              mt-6 text-4xl font-semibold
              tracking-tight text-(--foreground)
              sm:text-5xl lg:text-6xl
            "
          >
            Ideas for better
            <span className="text-(--primary)">
              {" "}research
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-7
              text-(--muted-foreground)
            "
          >
            Practical insights on academic research, AI,
            literature discovery, and building more effective
            research workflows with Resyntra.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <div
              className="
                flex items-center gap-3 rounded-xl
                border border-(--border)
                bg-(--surface)
                px-4 py-3
                shadow-sm
                transition-all duration-200
                focus-within:border-(--primary)/40
                focus-within:ring-2
                focus-within:ring-(--primary)/10
              "
            >
              <Search className="h-4 w-4 shrink-0 text-(--muted-foreground)" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  onSearchChange?.(event.target.value)
                }
                placeholder="Search research, AI, literature..."
                className="
                  min-w-0 flex-1 bg-transparent
                  text-sm text-(--foreground)
                  outline-none
                  placeholder:text-(--muted-foreground)
                "
                aria-label="Search blog articles"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange?.("")}
                  className="
                    rounded-md px-2 py-1
                    text-xs text-(--muted-foreground)
                    transition-colors
                    hover:bg-(--foreground)/5
                    hover:text-(--foreground)
                  "
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              mt-7 flex flex-wrap
              items-center justify-center gap-3
            "
          >
            <Link
              to="/resources/documentation"
              className="
                inline-flex items-center gap-2
                rounded-lg border border-(--border)
                bg-(--surface) px-4 py-2.5
                text-sm font-medium
                text-(--foreground)
                transition-all duration-200
                hover:border-(--primary)/30
                hover:bg-(--foreground)/5
              "
            >
              <BookOpen className="h-4 w-4" />
              Browse documentation
            </Link>

            <a
              href="#featured"
              className="
                inline-flex items-center gap-2
                px-4 py-2.5 text-sm font-medium
                text-(--muted-foreground)
                transition-colors
                hover:text-(--foreground)
              "
            >
              Featured articles
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;