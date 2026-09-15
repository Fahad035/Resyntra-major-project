import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Search,
  Check,
  ArrowRight,
  Clock3,
  Layers3,
  X,
} from "lucide-react";

import { getPapers } from "@/api/papers";

const PaperSelector = ({
  selectedPaper,
  setSelectedPaper,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | Load Papers
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const loadPapers = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getPapers();

        /*
         * Your backend may return either:
         *   [...]
         * or:
         *   { papers: [...] }
         */

        const paperList = Array.isArray(data)
          ? data
          : data?.papers || [];

        setPapers(paperList);
      } catch (err) {
        console.error("Failed to load papers:", err);

        setError(
          err.response?.data?.detail ||
            "Unable to load your research papers."
        );
      } finally {
        setLoading(false);
      }
    };

    loadPapers();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Search
  |--------------------------------------------------------------------------
  */

  const filteredPapers = papers.filter((paper) => {
    const search = searchQuery.toLowerCase();

    return (
      paper.title?.toLowerCase().includes(search) ||
      paper.authors?.toLowerCase().includes(search)
    );
  });

  const clearSearch = () => {
    setSearchQuery("");
  };

  /*
  |--------------------------------------------------------------------------
  | Continue
  |--------------------------------------------------------------------------
  */

  const handleContinue = () => {
    if (!selectedPaper) {
      return;
    }

    document
      .getElementById("presentation-builder")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /*
  |--------------------------------------------------------------------------
  | Helpers
  |--------------------------------------------------------------------------
  */

  const getPaperPages = (paper) => {
    return paper.pages || "—";
  };

  const getPaperYear = (paper) => {
    if (paper.year) {
      return paper.year;
    }

    if (paper.created_at) {
      return new Date(paper.created_at).getFullYear();
    }

    return "—";
  };

  const getPaperStatus = (paper) => {
    if (paper.processing_status) {
      return paper.processing_status;
    }

    return "Processed";
  };

  const getPaperDescription = (paper) => {
    if (paper.abstract) {
      return paper.abstract;
    }

    return "Research paper ready for AI presentation generation.";
  };

  const isPaperProcessed = (paper) => {
    return (
      paper.processing_status === "completed" ||
      paper.status === "Processed" ||
      !paper.processing_status
    );
  };

  return (
    <section
      id="ppt-generator-builder"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute right-0 top-1/4 h-125 w-125 rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Step 01
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Choose the paper
            <br />
            <span className="text-muted">
              you want to present.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Select one of your processed research papers. Resyntra
            will analyze its content and transform the key ideas into
            a structured academic presentation.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN SELECTOR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-4xl border border-border bg-card shadow-xl"
        >
          {/* Top bar */}

          <div className="border-b border-border p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}

              <div className="relative flex-1 lg:max-w-xl">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search your uploaded papers..."
                  className="w-full rounded-2xl border border-border bg-background py-4 pl-12 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-cyan-500/40"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Paper count */}

              <div className="flex items-center gap-2 text-sm text-muted">
                <FileText className="h-4 w-4 text-cyan-400" />

                <span>
                  {loading
                    ? "Loading papers..."
                    : `${filteredPapers.length} ${
                        filteredPapers.length === 1
                          ? "paper"
                          : "papers"
                      } available`}
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              LOADING
          ================================================= */}

          {loading && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />

              <p className="mt-5 text-sm text-muted">
                Loading your research papers...
              </p>
            </div>
          )}

          {/* =================================================
              ERROR
          ================================================= */}

          {!loading && error && (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5">
                <FileText className="h-6 w-6 text-red-400" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                Unable to load papers
              </h3>

              <p className="mt-2 text-sm text-muted">
                {error}
              </p>
            </div>
          )}

          {/* =================================================
              PAPER LIST
          ================================================= */}

          {!loading && !error && (
            <>
              <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-2">
                <AnimatePresence mode="popLayout">
                  {filteredPapers.map((paper, index) => {
                    const isSelected =
                      selectedPaper?.id === paper.id;

                    const processed =
                      isPaperProcessed(paper);

                    return (
                      <motion.button
                        key={paper.id}
                        type="button"
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          scale: 0.97,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                        }}
                        onClick={() => {
                          if (processed) {
                            setSelectedPaper(paper);
                          }
                        }}
                        disabled={!processed}
                        className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition ${
                          isSelected
                            ? "border-cyan-400/50 bg-cyan-500/5"
                            : "border-border bg-background hover:border-cyan-500/30"
                        } ${
                          !processed
                            ? "cursor-not-allowed opacity-60"
                            : ""
                        }`}
                      >
                        {/* Selection indicator */}

                        <div
                          className={`absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border transition ${
                            isSelected
                              ? "border-cyan-400 bg-cyan-400 text-slate-950"
                              : "border-border bg-card text-transparent"
                          }`}
                        >
                          <Check className="h-4 w-4" />
                        </div>

                        <div className="pr-10">
                          {/* Icon */}

                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
                              isSelected
                                ? "border-cyan-500/30 bg-cyan-500/10"
                                : "border-border bg-card"
                            }`}
                          >
                            <FileText
                              className={`h-5 w-5 ${
                                isSelected
                                  ? "text-cyan-400"
                                  : "text-muted"
                              }`}
                            />
                          </div>

                          {/* Title */}

                          <h3 className="mt-5 text-lg font-semibold leading-7 text-foreground">
                            {paper.title}
                          </h3>

                          {/* Author */}

                          <p className="mt-2 text-sm text-muted">
                            {paper.authors ||
                              "Unknown authors"}
                          </p>

                          {/* Metadata */}

                          <div className="mt-5 flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted">
                              <Layers3 className="h-3.5 w-3.5" />
                              {getPaperPages(paper)} pages
                            </span>

                            <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted">
                              {getPaperYear(paper)}
                            </span>

                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs ${
                                processed
                                  ? "border border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                                  : "border border-amber-500/20 bg-amber-500/5 text-amber-400"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  processed
                                    ? "bg-emerald-400"
                                    : "bg-amber-400"
                                }`}
                              />

                              {getPaperStatus(paper)}
                            </span>
                          </div>

                          {/* Description */}

                          <p className="mt-5 line-clamp-2 text-sm leading-6 text-muted">
                            {getPaperDescription(paper)}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* No results */}

              {filteredPapers.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background">
                    <Search className="h-6 w-6 text-muted" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    No papers found
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Try searching with a different title or author.
                  </p>
                </div>
              )}

              {/* =================================================
                  SELECTED PAPER FOOTER
              ================================================= */}

              <div className="border-t border-border bg-background/40 p-5 sm:p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Selection status */}

                  <div>
                    {selectedPaper ? (
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                          <Check className="h-5 w-5 text-cyan-400" />
                        </div>

                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                            Selected paper
                          </p>

                          <p className="mt-1 max-w-xl truncate text-sm font-medium text-foreground">
                            {selectedPaper.title}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card">
                          <Clock3 className="h-5 w-5 text-muted" />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-foreground">
                            No paper selected
                          </p>

                          <p className="mt-1 text-xs text-muted">
                            Select a paper to continue
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Continue */}

                  <button
                    type="button"
                    disabled={!selectedPaper}
                    onClick={handleContinue}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue to Builder

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* =====================================================
            INFORMATION STRIP
        ===================================================== */}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "One paper",
              description:
                "Choose the research paper you want to present.",
            },
            {
              title: "AI analysis",
              description:
                "Key sections, findings, and methodology are identified.",
            },
            {
              title: "9–10 slides",
              description:
                "Content is organized into an academic presentation.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-sm font-semibold text-cyan-400">
                0{index + 1}
              </p>

              <h3 className="mt-3 font-semibold text-foreground">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaperSelector;