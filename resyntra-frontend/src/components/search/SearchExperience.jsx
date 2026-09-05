import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Filter,
  BookOpen,
  Star,
  ArrowUpRight,
} from "lucide-react";

const filters = [
  "2025",
  "Survey Papers",
  "Machine Learning",
  "Highly Cited",
];

const results = [
  {
    title: "Efficient Large Language Models: A Survey",
    authors: "Zhang et al.",
    score: 98,
    reason:
      "Matches your intent because it focuses on recent efficient LLM techniques.",
    tags: ["Survey", "LLM", "2025"],
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
    authors: "Lewis et al.",
    score: 95,
    reason:
      "Semantically related through retrieval optimization and language models.",
    tags: ["RAG", "NLP"],
  },
  {
    title: "Scaling Laws for Neural Language Models",
    authors: "Kaplan et al.",
    score: 91,
    reason:
      "Provides theoretical insights into model scaling and efficiency.",
    tags: ["Scaling", "Transformer"],
  },
];

const SearchExperience = () => {
  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Interactive Search Experience
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Search like a researcher,
            <br />
            not like a database.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Resyntra understands research intent instead of matching exact
            keywords.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-4xl border border-border bg-card">

          {/* Top Search */}

          <div className="border-b border-border p-8">

            <div className="flex flex-col gap-5 lg:flex-row">

              <div className="flex flex-1 items-center gap-4 rounded-2xl bg-background px-5 py-4">

                <Search className="h-5 w-5 text-cyan-400" />

                <input
                  readOnly
                  value="Recent survey papers about efficient Large Language Models"
                  className="w-full bg-transparent outline-none"
                />

              </div>

              <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950">
                Search
              </button>

            </div>

          </div>

          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* Filters */}

            <aside className="border-r border-border p-8">

              <div className="flex items-center gap-2">

                <Filter className="h-5 w-5 text-cyan-400" />

                <h3 className="font-semibold">
                  AI Filters
                </h3>

              </div>

              <div className="mt-8 space-y-4">

                {filters.map((filter) => (
                  <button
                    key={filter}
                    className="flex w-full items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 transition hover:border-cyan-400"
                  >
                    <span>{filter}</span>

                    <Sparkles className="h-4 w-4 text-cyan-400" />
                  </button>
                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-cyan-500/10 p-5">

                <h4 className="font-semibold text-cyan-400">
                  AI understands
                </h4>

                <p className="mt-3 text-sm leading-7 text-muted">
                  You're searching for recent survey papers focused on
                  efficient LLM architectures rather than general language
                  models.
                </p>

              </div>

            </aside>

            {/* Results */}

            <div className="p-8">

              <div className="space-y-6">

                {results.map((paper) => (

                  <motion.div
                    key={paper.title}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-border bg-background p-6 transition"
                  >

                    <div className="flex flex-wrap items-start justify-between gap-5">

                      <div>

                        <div className="flex items-center gap-3">

                          <BookOpen className="h-5 w-5 text-cyan-400" />

                          <h3 className="text-xl font-semibold">
                            {paper.title}
                          </h3>

                        </div>

                        <p className="mt-2 text-sm text-muted">
                          {paper.authors}
                        </p>

                      </div>

                      <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                        {paper.score}% Match
                      </div>

                    </div>

                    <div className="mt-6 rounded-2xl bg-card p-5">

                      <div className="flex items-center gap-2">

                        <Star className="h-4 w-4 text-cyan-400" />

                        <span className="font-medium text-cyan-400">
                          Why this paper?
                        </span>

                      </div>

                      <p className="mt-3 leading-7 text-muted">
                        {paper.reason}
                      </p>

                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-5">

                      <div className="flex flex-wrap gap-2">

                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400"
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                      <button className="flex items-center gap-2 text-cyan-400 transition hover:gap-3">

                        Read Paper

                        <ArrowUpRight className="h-4 w-4" />

                      </button>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SearchExperience;