import {
  BookOpen,
  ChevronDown,
  ExternalLink,
  FileText,
  Flame,
  Grid2X2,
  List,
  Search,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
  UploadCloud,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";

import { usePapers } from "@/context/PaperContext";

import {
  CATEGORY_COLORS,
  CATEGORIES,
  TOP_RESEARCH_PAPERS,
} from "@/data/topResearchPapers";

const MAX_FILE_SIZE = 50 * 1024 * 1024;

const formatCitations = (value) => {
  if (!value) return "0";

  if (value >= 1000) {
    return `${(value / 1000).toFixed(
      value >= 10000 ? 0 : 1
    )}K`;
  }

  return String(value);
};

const getCategoryColor = (field) => {
  return (
    CATEGORY_COLORS[field] ??
    "#22d3ee"
  );
};

const PaperCard = ({
  paper,
  index,
}) => {
  const categoryColor =
    getCategoryColor(paper.field);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.025, 0.25),
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        flex
        min-h-82.5
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_20px_70px_rgba(0,0,0,0.18)]
      "
    >
      {/* Category accent */}

      <div
        className="absolute left-0 top-0 h-1 w-full opacity-80"
        style={{
          backgroundColor: categoryColor,
        }}
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${categoryColor}15`,
              color: categoryColor,
            }}
          >
            <FileText className="h-5 w-5" />
          </div>

          {paper.trending && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/20 bg-orange-400/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-400">
              <Flame className="h-3 w-3" />
              Trending
            </span>
          )}
        </div>

        {/* Metadata */}

        <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-muted">
          <span
            className="font-semibold"
            style={{
              color: categoryColor,
            }}
          >
            {paper.field}
          </span>

          <span className="text-border">
            /
          </span>

          <span>{paper.venue}</span>

          <span className="text-border">
            /
          </span>

          <span>{paper.year}</span>
        </div>

        {/* Title */}

        <h3 className="mt-4 line-clamp-3 text-lg font-bold leading-7 text-foreground transition-colors group-hover:text-cyan-400">
          {paper.title}
        </h3>

        {/* Authors */}

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted">
          {paper.authors}
        </p>

        {/* Summary */}

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">
          {paper.summary}
        </p>

        {/* Tags */}

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {paper.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-background px-2.5 py-1 text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-border bg-background/50 px-6 py-4">
        <div className="flex items-center gap-4 text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5" />

            {formatCitations(paper.citations)}
          </span>

          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />

            {paper.pages} pages
          </span>
        </div>

        <button
          type="button"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border
            border-border
            text-muted
            transition
            hover:border-cyan-400/40
            hover:text-cyan-400
          "
          title="Open paper"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.article>
  );
};

const UploadedPaperRow = ({
  paper,
  onRemove,
}) => {
  const status = paper.processing_status ?? "pending";

  const statusConfig = {
    pending: {
      label: "Queued",
      className:
        "border-yellow-400/20 bg-yellow-400/8 text-yellow-400",
    },

    processing: {
      label: "Processing",
      className:
        "border-sky-400/20 bg-sky-400/8 text-sky-400",
    },

    completed: {
      label: "AI Ready",
      className:
        "border-emerald-400/20 bg-emerald-400/8 text-emerald-400",
    },

    failed: {
      label: "Failed",
      className:
        "border-red-400/20 bg-red-400/8 text-red-400",
    },
  };

  const currentStatus =
    statusConfig[status] ??
    statusConfig.pending;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        group
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-border
        bg-card
        p-5
        transition
        hover:border-cyan-400/20
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
          <FileText className="h-5 w-5 text-cyan-400" />
        </div>

        <div className="min-w-0">
          <h4 className="truncate text-sm font-semibold text-foreground">
            {paper.title || "Untitled research paper"}
          </h4>

          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span>
              {paper.authors || "Unknown authors"}
            </span>

            {paper.pages && (
              <>
                <span>•</span>
                <span>{paper.pages} pages</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`
            rounded-full
            border
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            ${currentStatus.className}
          `}
        >
          {currentStatus.label}
        </span>

        <button
          type="button"
          onClick={() => onRemove(paper.id)}
          className="
            rounded-lg
            px-3
            py-2
            text-xs
            text-muted
            transition
            hover:bg-red-500/10
            hover:text-red-400
          "
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
};

const FeatureSection = () => {
  const fileInputRef = useRef(null);

  const {
    papers,
    uploading,
    remove,
    upload,
  } = usePapers();

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("All");
  const [activeTab, setActiveTab] =
    useState("discover");
  const [sort, setSort] =
    useState("citations");
  const [view, setView] =
    useState("grid");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("Maximum file size is 50 MB.");
      event.target.value = "";
      return;
    }

    try {
      await upload(file);
    } catch {
      // PaperContext handles the error notification.
    } finally {
      event.target.value = "";
    }
  };

  const filteredPapers = useMemo(() => {
    let result = [...TOP_RESEARCH_PAPERS];

    if (activeCategory !== "All") {
      result = result.filter(
        (paper) =>
          paper.field === activeCategory
      );
    }

    const normalizedQuery =
      query.trim().toLowerCase();

    if (normalizedQuery) {
      result = result.filter((paper) => {
        const searchable = [
          paper.title,
          paper.authors,
          paper.venue,
          paper.field,
          paper.summary,
          ...(paper.tags ?? []),
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(
          normalizedQuery
        );
      });
    }

    if (sort === "citations") {
      result.sort(
        (a, b) =>
          (b.citations ?? 0) -
          (a.citations ?? 0)
      );
    }

    if (sort === "year") {
      result.sort(
        (a, b) =>
          (b.year ?? 0) -
          (a.year ?? 0)
      );
    }

    if (sort === "title") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [
    activeCategory,
    query,
    sort,
  ]);

  return (
    <section
      id="research-library"
      className="relative py-20 lg:py-28"
    >
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* =====================================================
            Section heading
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-8 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Research Library
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Explore the research frontier.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted lg:text-base">
              Browse influential papers across machine learning,
              language models, computer vision, robotics, quantum
              computing, biology, cybersecurity, and more.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="text-xs text-muted">
              {filteredPapers.length} papers
            </span>

            <button
              type="button"
              onClick={handleUploadClick}
              disabled={uploading}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-primary
                px-4
                py-2.5
                text-xs
                font-bold
                text-slate-950
                transition
                hover:-translate-y-0.5
                disabled:opacity-60
              "
            >
              <UploadCloud className="h-4 w-4" />

              {uploading
                ? "Uploading..."
                : "Upload Paper"}
            </button>

            <input
              ref={fileInputRef}
              hidden
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleUpload}
            />
          </div>
        </motion.div>

        {/* =====================================================
            Personal / Discovery tabs
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-5 border-b border-border pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-1 rounded-xl border border-border bg-card p-1">
            <button
              type="button"
              onClick={() =>
                setActiveTab("discover")
              }
              className={`
                rounded-lg
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                ${activeTab === "discover"
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-muted hover:text-foreground"
                }
              `}
            >
              Discover Papers
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveTab("mine")
              }
              className={`
                rounded-lg
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                ${activeTab === "mine"
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-muted hover:text-foreground"
                }
              `}
            >
              My Research
              <span className="ml-2 opacity-60">
                {papers.length}
              </span>
            </button>
          </div>

          {activeTab === "discover" && (
            <div className="flex items-center gap-2 text-xs text-muted">
              <Sparkles className="h-4 w-4 text-cyan-400" />

              Curated research catalogue
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* ===================================================
              DISCOVERY
          ==================================================== */}

          {activeTab === "discover" && (
            <motion.div
              key="discover"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="pt-8"
            >
              {/* Search / controls */}

              <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                  <input
                    value={query}
                    onChange={(event) =>
                      setQuery(event.target.value)
                    }
                    placeholder="Search papers, authors, topics, methods..."
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-border
                      bg-card
                      pl-11
                      pr-4
                      text-sm
                      text-foreground
                      outline-none
                      transition
                      placeholder:text-muted
                      focus:border-cyan-400/40
                      focus:ring-2
                      focus:ring-cyan-400/5
                    "
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />

                    <select
                      value={sort}
                      onChange={(event) =>
                        setSort(event.target.value)
                      }
                      className="
                        h-12
                        appearance-none
                        rounded-xl
                        border
                        border-border
                        bg-card
                        pl-9
                        pr-9
                        text-xs
                        text-foreground
                        outline-none
                      "
                    >
                      <option value="citations">
                        Most cited
                      </option>

                      <option value="year">
                        Newest
                      </option>

                      <option value="title">
                        A–Z
                      </option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
                  </div>

                  <div className="flex h-12 items-center rounded-xl border border-border bg-card p-1">
                    <button
                      type="button"
                      onClick={() =>
                        setView("grid")
                      }
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        transition
                        ${view === "grid"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-muted"
                        }
                      `}
                      aria-label="Grid view"
                    >
                      <Grid2X2 className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setView("list")
                      }
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        transition
                        ${view === "list"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-muted"
                        }
                      `}
                      aria-label="List view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories */}

              <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveCategory("All")
                  }
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition
                    ${activeCategory === "All"
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                      : "border-border text-muted hover:text-foreground"
                    }
                  `}
                >
                  All Research
                </button>

                {CATEGORIES.map((category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      shrink-0
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      transition
                      ${activeCategory === category
                        ? "text-foreground"
                        : "border-border text-muted hover:text-foreground"
                      }
                    `}
                    style={
                      activeCategory === category
                        ? {
                          borderColor: `${getCategoryColor(
                            category
                          )}55`,
                          backgroundColor: `${getCategoryColor(
                            category
                          )}12`,
                        }
                        : undefined
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results */}

              {filteredPapers.length === 0 ? (
                <div className="mt-10 flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border text-center">
                  <Search className="h-8 w-8 text-muted" />

                  <h3 className="mt-4 font-semibold text-foreground">
                    No papers found
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Try another keyword or reset the
                    research category filter.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveCategory("All");
                    }}
                    className="mt-5 text-xs font-semibold text-cyan-400"
                  >
                    Clear filters
                  </button>
                </div>
              ) : view === "grid" ? (
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredPapers.map(
                    (paper, index) => (
                      <PaperCard
                        key={paper.id}
                        paper={paper}
                        index={index}
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="mt-8 space-y-3">
                  {filteredPapers.map(
                    (paper, index) => (
                      <motion.div
                        key={paper.id}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: Math.min(
                            index * 0.02,
                            0.2
                          ),
                        }}
                        className="
                          rounded-2xl
                          border
                          border-border
                          bg-card
                          p-5
                          transition
                          hover:border-cyan-400/20
                        "
                      >
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-wider">
                              <span
                                style={{
                                  color:
                                    getCategoryColor(
                                      paper.field
                                    ),
                                }}
                              >
                                {paper.field}
                              </span>

                              <span className="text-border">
                                /
                              </span>

                              <span className="text-muted">
                                {paper.venue}
                              </span>

                              <span className="text-border">
                                /
                              </span>

                              <span className="text-muted">
                                {paper.year}
                              </span>
                            </div>

                            <h3 className="mt-2 text-base font-bold text-foreground">
                              {paper.title}
                            </h3>

                            <p className="mt-1 text-xs text-muted">
                              {paper.authors}
                            </p>
                          </div>

                          <div className="flex shrink-0 items-center gap-5 text-xs text-muted">
                            <span>
                              {formatCitations(
                                paper.citations
                              )}{" "}
                              citations
                            </span>

                            <span>
                              {paper.pages} pages
                            </span>

                            <button
                              type="button"
                              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition hover:border-cyan-400/30 hover:text-cyan-400"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              )}
            </motion.div>
          )}

          {/* ===================================================
              MY RESEARCH
          ==================================================== */}

          {activeTab === "mine" && (
            <motion.div
              key="mine"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="pt-8"
            >
              {papers.length === 0 ? (
                <div className="relative overflow-hidden rounded-3xl border border-dashed border-border bg-card p-10 text-center lg:p-16">
                  <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[90px]" />

                  <div className="relative">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                      <UploadCloud className="h-7 w-7 text-cyan-400" />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-foreground">
                      Build your research library
                    </h3>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
                      Upload your first academic paper and Resyntra
                      will process it for AI-powered analysis,
                      semantic search, summarization, and paper chat.
                    </p>

                    <button
                      type="button"
                      onClick={handleUploadClick}
                      disabled={uploading}
                      className="
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-primary
                        px-5
                        py-3
                        text-sm
                        font-bold
                        text-slate-950
                        transition
                        hover:-translate-y-0.5
                        disabled:opacity-60
                      "
                    >
                      <UploadCloud className="h-4 w-4" />

                      Upload your first paper
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {papers.map((paper) => (
                    <UploadedPaperRow
                      key={paper.id}
                      paper={paper}
                      onRemove={remove}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureSection;