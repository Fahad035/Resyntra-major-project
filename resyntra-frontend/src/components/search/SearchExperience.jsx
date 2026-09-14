import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Filter,
  BookOpen,
  Star,
  ArrowUpRight,
  Loader2,
  ExternalLink,
} from "lucide-react";

import { hybridSearch } from "../../api/search";

const filters = [
  "2025",
  "Survey Papers",
  "Machine Learning",
  "Highly Cited",
];

const DEFAULT_QUERY =
  "Recent survey papers about efficient Large Language Models";

const SearchExperience = () => {
  const [query, setQuery] = useState(DEFAULT_QUERY);

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const data = await hybridSearch(
        trimmedQuery,
        10
      );

      const papers = Array.isArray(data?.papers)
        ? data.papers
        : [];

      const semantic = Array.isArray(data?.semantic)
        ? data.semantic
        : [];

      const discovery = Array.isArray(data?.discovery)
        ? data.discovery
        : [];

      /*
       * The hybrid endpoint returns:
       *
       * papers     → local database keyword results
       * semantic   → Qdrant semantic results
       * discovery  → OpenAlex / PubMed / Crossref / arXiv
       *
       * The Search Experience is primarily a
       * research discovery interface, so discovery
       * results are displayed first.
       */

      const discoveryResults = discovery.map(
        (paper, index) => ({
          ...paper,
          resultType: "discovery",
          resultIndex: index,
        })
      );

      /*
       * If external discovery has no results,
       * fall back to local paper results.
       */

      if (discoveryResults.length > 0) {
        setResults(discoveryResults);
      } else if (papers.length > 0) {
        setResults(
          papers.map((paper, index) => ({
            ...paper,
            resultType: "local",
            resultIndex: index,
          }))
        );
      } else if (semantic.length > 0) {
        setResults(
          semantic.map((paper, index) => ({
            ...paper,
            resultType: "semantic",
            resultIndex: index,
            title: "Semantic Research Match",
            authors: [],
            abstract: paper.chunk,
            source: "Resyntra Semantic Search",
            url: null,
            relevance_score: paper.score,
          }))
        );
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error(
        "Research discovery search failed:",
        err
      );

      setResults([]);

      setError(
        err?.response?.data?.detail ||
        "Unable to search research papers right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const formatAuthors = (authors) => {
    if (!Array.isArray(authors)) {
      return "Authors unavailable";
    }

    const validAuthors = authors.filter(Boolean);

    if (validAuthors.length === 0) {
      return "Authors unavailable";
    }

    if (validAuthors.length <= 3) {
      return validAuthors.join(", ");
    }

    return `${validAuthors
      .slice(0, 3)
      .join(", ")} + ${validAuthors.length - 3
      } more`;
  };

  const getMatchScore = (paper) => {
    const relevance = Number(
      paper?.relevance_score
    );

    if (
      Number.isFinite(relevance) &&
      relevance > 0
    ) {
      /*
       * OpenAlex relevance scores are not guaranteed
       * to be percentages. Normalize them into a
       * useful UI range.
       */
      const normalized = Math.round(
        Math.min(
          99,
          Math.max(
            70,
            relevance * 100
          )
        )
      );

      return normalized;
    }

    const score = Number(
      paper?.score
    );

    if (
      Number.isFinite(score) &&
      score > 0
    ) {
      if (score <= 1) {
        return Math.round(
          score * 100
        );
      }

      return Math.round(
        Math.min(
          99,
          score
        )
      );
    }

    /*
     * Discovery sources such as PubMed and
     * Crossref may not provide a relevance score.
     *
     * We avoid pretending that the source supplied
     * a percentage.
     */
    return null;
  };

  const getSources = (paper) => {
    if (
      Array.isArray(paper?.sources) &&
      paper.sources.length > 0
    ) {
      return paper.sources;
    }

    if (paper?.source) {
      return [paper.source];
    }

    return [];
  };

  const formatSource = (source) => {
    if (!source) {
      return "Research";
    }

    const names = {
      openalex: "OpenAlex",
      pubmed: "PubMed",
      crossref: "Crossref",
      arxiv: "arXiv",
      local: "Resyntra Library",
      semantic: "Semantic Search",
    };

    return (
      names[source] ||
      source
        .charAt(0)
        .toUpperCase() +
      source.slice(1)
    );
  };

  const getTags = (paper) => {
    const tags = [];

    const sources = getSources(
      paper
    );

    sources.forEach((source) => {
      const formatted =
        formatSource(source);

      if (!tags.includes(formatted)) {
        tags.push(formatted);
      }
    });

    if (
      paper?.publication_year
    ) {
      tags.push(
        String(
          paper.publication_year
        )
      );
    }

    if (
      paper?.journal &&
      tags.length < 3
    ) {
      tags.push(
        paper.journal
      );
    }

    if (
      paper?.is_open_access &&
      tags.length < 4
    ) {
      tags.push(
        "Open Access"
      );
    }

    return tags.slice(0, 4);
  };

  const getReason = (paper) => {
    const sources = getSources(
      paper
    );

    if (
      sources.length > 1
    ) {
      return `This paper was discovered across multiple scholarly sources: ${sources
        .map(formatSource)
        .join(", ")}.`;
    }

    if (
      sources.length === 1
    ) {
      return `This paper was discovered through ${formatSource(
        sources[0]
      )} based on your research query.`;
    }

    if (
      paper?.resultType ===
      "semantic"
    ) {
      return "This paper contains content semantically related to your research query.";
    }

    return "This paper matches your research query.";
  };

  const handleReadPaper = (paper) => {
    const url =
      paper?.url ||
      paper?.landing_page_url;

    if (!url) {
      return;
    }

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Header */}

        <motion.div
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
            Resyntra understands research intent
            instead of matching exact keywords.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-4xl border border-border bg-card">

          {/* Search */}

          <div className="border-b border-border p-8">

            <div className="flex flex-col gap-5 lg:flex-row">

              <div className="flex flex-1 items-center gap-4 rounded-2xl bg-background px-5 py-4">

                <Search className="h-5 w-5 shrink-0 text-cyan-400" />

                <input
                  value={query}
                  onChange={(event) =>
                    setQuery(
                      event.target.value
                    )
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  placeholder="Search research papers..."
                  className="w-full bg-transparent outline-none placeholder:text-muted"
                />

              </div>

              <button
                type="button"
                onClick={
                  handleSearch
                }
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    Search
                  </>
                )}
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

                {filters.map(
                  (filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() =>
                        setQuery(
                          `${query} ${filter}`
                        )
                      }
                      className="flex w-full items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 text-left transition hover:border-cyan-400"
                    >
                      <span>
                        {filter}
                      </span>

                      <Sparkles className="h-4 w-4 shrink-0 text-cyan-400" />
                    </button>
                  )
                )}

              </div>

              <div className="mt-10 rounded-2xl bg-cyan-500/10 p-5">

                <h4 className="font-semibold text-cyan-400">
                  AI understands
                </h4>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Your query is searched across
                  multiple scholarly sources to
                  discover relevant research rather
                  than relying on exact keyword
                  matches alone.
                </p>

              </div>

            </aside>

            {/* Results */}

            <div className="p-8">

              {!hasSearched && (
                <div className="rounded-3xl border border-border bg-background p-10 text-center">

                  <Search className="mx-auto h-10 w-10 text-cyan-400" />

                  <h3 className="mt-5 text-xl font-semibold">
                    Start your research search
                  </h3>

                  <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
                    Enter a research topic above to
                    discover relevant papers from
                    multiple scholarly sources.
                  </p>

                </div>
              )}

              {loading && (
                <div className="flex min-h-75 items-center justify-center">

                  <div className="text-center">

                    <Loader2 className="mx-auto h-10 w-10 animate-spin text-cyan-400" />

                    <p className="mt-4 text-muted">
                      Searching scholarly sources...
                    </p>

                  </div>

                </div>
              )}

              {!loading && error && (
                <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-center">

                  <h3 className="text-lg font-semibold text-red-400">
                    Search failed
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={
                      handleSearch
                    }
                    className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Try Again
                  </button>

                </div>
              )}

              {!loading &&
                !error &&
                hasSearched &&
                results.length === 0 && (
                  <div className="rounded-3xl border border-border bg-background p-10 text-center">

                    <BookOpen className="mx-auto h-10 w-10 text-cyan-400" />

                    <h3 className="mt-5 text-xl font-semibold">
                      No research papers found
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl leading-7 text-muted">
                      Try a broader research topic or
                      different keywords.
                    </p>

                  </div>
                )}

              {!loading &&
                !error &&
                results.length > 0 && (
                  <div className="space-y-6">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-sm text-muted">
                          Research results
                        </p>

                        <h3 className="mt-1 text-xl font-semibold">
                          {results.length} papers discovered
                        </h3>
                      </div>

                      <div className="hidden items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400 sm:flex">

                        <Sparkles className="h-4 w-4" />

                        Multi-source discovery

                      </div>

                    </div>

                    {results.map(
                      (paper, index) => {
                        const matchScore =
                          getMatchScore(
                            paper
                          );

                        const tags =
                          getTags(
                            paper
                          );

                        const sources =
                          getSources(
                            paper
                          );

                        return (
                          <motion.div
                            key={
                              paper.external_id ||
                              paper.id ||
                              paper.doi ||
                              paper.title ||
                              index
                            }
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay:
                                index *
                                0.05,
                            }}
                            whileHover={{
                              y: -4,
                            }}
                            className="rounded-3xl border border-border bg-background p-6 transition"
                          >

                            <div className="flex flex-wrap items-start justify-between gap-5">

                              <div className="min-w-0 flex-1">

                                <div className="flex items-start gap-3">

                                  <BookOpen className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                                  <h3 className="text-xl font-semibold leading-8">
                                    {paper.title ||
                                      "Untitled Research Paper"}
                                  </h3>

                                </div>

                                <p className="mt-2 text-sm text-muted">
                                  {formatAuthors(
                                    paper.authors
                                  )}
                                </p>

                              </div>

                              {matchScore !==
                                null && (
                                  <div className="shrink-0 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                                    {matchScore}% Match
                                  </div>
                                )}

                            </div>

                            {/* Metadata */}

                            <div className="mt-4 flex flex-wrap gap-2">

                              {sources.map(
                                (
                                  source
                                ) => (
                                  <span
                                    key={
                                      source
                                    }
                                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                                  >
                                    {formatSource(
                                      source
                                    )}
                                  </span>
                                )
                              )}

                              {paper.publication_year && (
                                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                                  {
                                    paper.publication_year
                                  }
                                </span>
                              )}

                            </div>

                            {/* Why this paper */}

                            <div className="mt-6 rounded-2xl bg-card p-5">

                              <div className="flex items-center gap-2">

                                <Star className="h-4 w-4 text-cyan-400" />

                                <span className="font-medium text-cyan-400">
                                  Why this paper?
                                </span>

                              </div>

                              <p className="mt-3 leading-7 text-muted">
                                {getReason(
                                  paper
                                )}
                              </p>

                            </div>

                            {/* Abstract */}

                            {paper.abstract && (
                              <div className="mt-5">

                                <p className="line-clamp-4 text-sm leading-7 text-muted">
                                  {
                                    paper.abstract
                                  }
                                </p>

                              </div>
                            )}

                            {/* Footer */}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-5">

                              <div className="flex flex-wrap gap-2">

                                {tags.map(
                                  (
                                    tag
                                  ) => (
                                    <span
                                      key={
                                        tag
                                      }
                                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400"
                                    >
                                      {
                                        tag
                                      }
                                    </span>
                                  )
                                )}

                              </div>

                              {(
                                paper.url ||
                                paper.landing_page_url
                              ) && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleReadPaper(
                                        paper
                                      )
                                    }
                                    className="flex items-center gap-2 text-cyan-400 transition hover:gap-3"
                                  >
                                    Read Paper

                                    <ArrowUpRight className="h-4 w-4" />
                                  </button>
                                )}

                            </div>

                            {paper.doi && (
                              <div className="mt-4 flex items-center gap-2 text-xs text-muted">

                                <ExternalLink className="h-3.5 w-3.5" />

                                DOI:{" "}
                                {
                                  paper.doi
                                }

                              </div>
                            )}

                          </motion.div>
                        );
                      }
                    )}

                  </div>
                )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SearchExperience;