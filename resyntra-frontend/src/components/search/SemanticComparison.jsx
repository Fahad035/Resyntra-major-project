import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  BrainCircuit,
  XCircle,
  CheckCircle2,
  ArrowRight,
  Loader2,
} from "lucide-react";

import { semanticSearch } from "../../api/search";
import { getPapers } from "../../api/papers";

const keywordResults = [
  "Transformer Toy",
  "Electrical Transformer",
  "Transformer Movie",
  "Transformer Robot",
];

const SemanticComparison = () => {
  const [query, setQuery] = useState("transformer");

  const [semanticResults, setSemanticResults] =
    useState([]);

  const [, setPapers] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [hasSearched, setHasSearched] =
    useState(false);

  const handleSemanticSearch = async () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      /*
       * Fetch semantic results and the user's
       * paper metadata together.
       */
      const [semanticData, paperData] =
        await Promise.all([
          semanticSearch(
            trimmedQuery,
            10
          ),
          getPapers(),
        ]);

      const results = Array.isArray(
        semanticData?.results
      )
        ? semanticData.results
        : [];

      const paperList = Array.isArray(
        paperData
      )
        ? paperData
        : [];

      setPapers(paperList);

      /*
       * Group Qdrant chunks by paper_id.
       *
       * One paper can have many matching chunks.
       * We don't want to show the same paper 5 times.
       */
      const grouped = new Map();

      for (const result of results) {
        const paperId =
          String(
            result?.paper_id || ""
          );

        if (!paperId) {
          continue;
        }

        if (!grouped.has(paperId)) {
          grouped.set(
            paperId,
            {
              paper_id: paperId,
              score:
                Number(
                  result?.score
                ) || 0,
              chunks: [],
            }
          );
        }

        const paper =
          grouped.get(
            paperId
          );

        const score =
          Number(
            result?.score
          ) || 0;

        /*
         * Keep the highest score for the paper.
         */
        if (
          score >
          paper.score
        ) {
          paper.score = score;
        }

        if (
          result?.chunk
        ) {
          paper.chunks.push(
            result.chunk
          );
        }
      }

      /*
       * Convert grouped results back into an array.
       */
      const groupedResults =
        Array.from(
          grouped.values()
        );

      /*
       * Attach paper metadata.
       */
      const enrichedResults =
        groupedResults.map(
          (result) => {
            const metadata =
              paperList.find(
                (paper) =>
                  String(
                    paper.id
                  ) ===
                  result.paper_id
              );

            return {
              ...result,
              paper:
                metadata ||
                null,
            };
          }
        );

      /*
       * Highest semantic match first.
       */
      enrichedResults.sort(
        (a, b) =>
          b.score -
          a.score
      );

      setSemanticResults(
        enrichedResults
      );
    } catch (err) {
      console.error(
        "Semantic search failed:",
        err
      );

      setSemanticResults([]);

      setError(
        err?.response?.data
          ?.detail ||
          "Unable to perform semantic search right now."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSemanticSearch();
    }
  };

  const formatScore = (score) => {
    const numericScore =
      Number(score);

    if (
      !Number.isFinite(
        numericScore
      )
    ) {
      return "—";
    }

    return `${Math.round(
      numericScore * 100
    )}%`;
  };

  const getPaperTitle = (
    result
  ) => {
    if (
      result?.paper?.title
    ) {
      return result.paper.title;
    }

    return "Research Paper";
  };

  const formatAuthors = (
    authors
  ) => {
    if (
      !Array.isArray(
        authors
      ) ||
      authors.length === 0
    ) {
      return null;
    }

    if (
      authors.length <= 3
    ) {
      return authors.join(
        ", "
      );
    }

    return `${authors
      .slice(0, 3)
      .join(", ")} + ${
      authors.length - 3
    } more`;
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Why Semantic Search?
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Search by
            <span className="text-cyan-400">
              {" "}
              meaning
            </span>
            , not exact words.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Traditional keyword search only matches
            text. Resyntra understands concepts, intent
            and relationships between research papers.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Keyword */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[30px] border border-border bg-card p-8"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-red-500/10 p-3">
                <Search className="h-6 w-6 text-red-400" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Keyword Search
                </h3>

                <p className="text-sm text-muted">
                  Matches only identical words
                </p>
              </div>

            </div>

            <div className="mt-8 rounded-2xl bg-background p-5">

              <p className="font-medium">
                Search:
              </p>

              <div className="mt-3 rounded-xl border border-border bg-card px-4 py-3">
                transformer
              </div>

            </div>

            <div className="mt-8 space-y-4">

              {keywordResults.map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-border p-4"
                  >

                    <span>
                      {item}
                    </span>

                    <XCircle className="h-5 w-5 text-red-400" />

                  </div>
                )
              )}

            </div>

          </motion.div>

          {/* Semantic */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[30px] border border-cyan-500/20 bg-linear-to-b from-cyan-500/5 to-card p-8"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">
                <BrainCircuit className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Semantic Search
                </h3>

                <p className="text-sm text-muted">
                  Understands research intent
                </p>
              </div>

            </div>

            {/* Search */}

            <div className="mt-8 rounded-2xl bg-background p-5">

              <p className="font-medium">
                Search:
              </p>

              <div className="mt-3 flex gap-3">

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
                  placeholder="Search your research papers..."
                  className="min-w-0 flex-1 rounded-xl border border-cyan-500/20 bg-card px-4 py-3 outline-none transition focus:border-cyan-400"
                />

                <button
                  type="button"
                  onClick={
                    handleSemanticSearch
                  }
                  disabled={loading}
                  className="flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Search className="h-5 w-5" />
                  )}

                </button>

              </div>

              {/* AI Interpretation */}

              <div className="mt-5 rounded-xl bg-cyan-500/10 p-4">

                <p className="text-sm font-medium text-cyan-400">
                  AI Interpretation
                </p>

                <p className="mt-2 text-sm leading-7 text-muted">
                  Semantic embeddings compare the meaning
                  of your query with indexed research-paper
                  content.
                </p>

              </div>

            </div>

            {/* Error */}

            {error && (
              <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">

                <p className="text-sm leading-7 text-red-400">
                  {error}
                </p>

              </div>
            )}

            {/* Results */}

            <div className="mt-8 space-y-4">

              {loading && (
                <div className="rounded-xl border border-border bg-background p-6 text-center">

                  <Loader2 className="mx-auto h-6 w-6 animate-spin text-cyan-400" />

                  <p className="mt-3 text-sm text-muted">
                    Finding semantically related
                    research...
                  </p>

                </div>
              )}

              {!loading &&
                !error &&
                hasSearched &&
                semanticResults.length ===
                  0 && (
                  <div className="rounded-xl border border-border bg-background p-6 text-center">

                    <BrainCircuit className="mx-auto h-7 w-7 text-cyan-400" />

                    <p className="mt-3 text-sm text-muted">
                      No semantically related papers
                      were found in your indexed
                      research library.
                    </p>

                  </div>
                )}

              {!loading &&
                semanticResults.map(
                  (
                    result,
                    index
                  ) => (
                    <motion.div
                      whileHover={{
                        x: 5,
                      }}
                      key={
                        result.paper_id ||
                        index
                      }
                      className="rounded-xl border border-border bg-background p-5"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div className="min-w-0">

                          <h4 className="font-semibold leading-6">
                            {getPaperTitle(
                              result
                            )}
                          </h4>

                          {formatAuthors(
                            result?.paper
                              ?.authors
                          ) && (
                            <p className="mt-2 text-xs text-muted">
                              {formatAuthors(
                                result
                                  .paper
                                  .authors
                              )}
                            </p>
                          )}

                          <p className="mt-2 text-xs text-muted">
                            Semantically related
                          </p>

                        </div>

                        <div className="flex shrink-0 items-center gap-3">

                          <span className="font-semibold text-cyan-400">
                            {formatScore(
                              result.score
                            )}
                          </span>

                          <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                        </div>

                      </div>

                      {/* Relevant passages */}

                      {result.chunks
                        ?.slice(
                          0,
                          2
                        )
                        .map(
                          (
                            chunk,
                            chunkIndex
                          ) => (
                            <div
                              key={
                                `${result.paper_id}-${chunkIndex}`
                              }
                              className="mt-4 rounded-xl bg-card p-4"
                            >

                              <p className="text-sm leading-6 text-muted">
                                {chunk}
                              </p>

                            </div>
                          )
                        )}

                    </motion.div>
                  )
                )}

            </div>

          </motion.div>

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 rounded-4xl border border-border bg-card p-8 lg:flex lg:items-center lg:justify-between"
        >

          <div>

            <h3 className="text-3xl font-bold">
              AI finds concepts,
              not just matching text.
            </h3>

            <p className="mt-4 max-w-3xl leading-8 text-muted">
              Even if your query doesn't contain the
              exact keywords, Resyntra compares its
              meaning with indexed research papers using
              semantic embeddings.
            </p>

          </div>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 lg:mt-0"
          >

            Try Semantic Search

            <ArrowRight className="h-5 w-5" />

          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default SemanticComparison;