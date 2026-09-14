import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  ArrowRight,
  Clock3,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const trending = [
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Computer Vision",
  "Healthcare AI",
  "Climate Change",
];

const SearchHero = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState(
    "Recent survey papers about efficient Large Language Models"
  );

  const handleSearch = () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    navigate(
      `/platform/semantic-search?q=${encodeURIComponent(trimmedQuery)}`
    );
  };

  const handleTrendingSearch = (item) => {
    setQuery(item);

    navigate(
      `/platform/semantic-search?q=${encodeURIComponent(item)}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto w-[92%] max-w-6xl">

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <Sparkles className="h-4 w-4" />
            AI Semantic Search
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-foreground lg:text-7xl">
            Discover research
            <br />
            by
            <span className="text-cyan-400"> meaning</span>,
            <br />
            not keywords.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            Search across thousands of research papers using natural
            language. Our AI understands concepts, intent, and context
            to surface the most relevant publications.
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-20 max-w-5xl rounded-[28px] border border-border bg-card p-5 shadow-xl"
        >
          <div className="flex flex-col gap-5 lg:flex-row">

            <div className="flex flex-1 items-center gap-4 rounded-2xl bg-background px-5 py-5">
              <Search className="h-6 w-6 shrink-0 text-cyan-400" />

              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search research papers..."
                className="w-full bg-transparent text-lg text-foreground outline-none placeholder:text-muted"
              />
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-5 font-semibold text-slate-950 transition hover:scale-105"
            >
              Search
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Trending Searches */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {trending.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleTrendingSearch(item)}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          <div className="rounded-3xl border border-border bg-card p-8">
            <TrendingUp className="h-7 w-7 text-cyan-400" />

            <h3 className="mt-6 text-4xl font-bold text-foreground">
              20M+
            </h3>

            <p className="mt-2 text-muted">
              Indexed research papers
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <Clock3 className="h-7 w-7 text-cyan-400" />

            <h3 className="mt-6 text-4xl font-bold text-foreground">
              &lt;1 sec
            </h3>

            <p className="mt-2 text-muted">
              Semantic search response
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <Sparkles className="h-7 w-7 text-cyan-400" />

            <h3 className="mt-6 text-4xl font-bold text-foreground">
              AI
            </h3>

            <p className="mt-2 text-muted">
              Intent-aware ranking
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchHero;