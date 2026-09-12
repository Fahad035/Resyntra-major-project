import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  Bookmark,
  Quote,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";

import { getPapers } from "@/api/papers";
import { summarizePaper } from "@/api/summarizer";

const tabs = [
  "Overview",
  "Key Findings",
  "Methodology",
  "Limitations",
  "Research Gaps",
];

const demoContent = {
  Overview: {
    icon: Bookmark,
    title: "AI-Powered Overview",
    text: "Select an uploaded research paper to generate an AI-powered summary. Resyntra analyzes the paper content and produces a concise explanation of its main ideas and contributions.",
  },
  "Key Findings": {
    icon: CheckCircle2,
    title: "Key Findings",
    text: "Once a paper is summarized, the generated result highlights the most important findings and contributions identified by the AI system.",
  },
  Methodology: {
    icon: FileText,
    title: "Methodology",
    text: "The summarization engine analyzes the research content, including its methodology and experimental context, to produce a more understandable representation of the paper.",
  },
  Limitations: {
    icon: AlertTriangle,
    title: "Limitations",
    text: "The current summarizer endpoint returns the generated paper summary. Dedicated limitation extraction can be connected when the backend exposes structured limitation results.",
  },
  "Research Gaps": {
    icon: Lightbulb,
    title: "Suggested Research Gap",
    text: "Research-gap identification is available as a separate Resyntra capability. The current summarizer endpoint returns only the generated summary.",
  },
};

const SummaryDemo = () => {
  const [papers, setPapers] = useState([]);
  const [selectedPaperId, setSelectedPaperId] = useState("");
  const [selectedPaper, setSelectedPaper] = useState(null);

  const [summary, setSummary] = useState("");
  const [activeTab, setActiveTab] = useState("Overview");

  const [loadingPapers, setLoadingPapers] = useState(true);
  const [summarizing, setSummarizing] = useState(false);

  const [error, setError] = useState("");

  /*
   * Load papers from the existing paper API.
   */
  useEffect(() => {
    let cancelled = false;

    const loadPapers = async () => {
      try {
        setLoadingPapers(true);
        setError("");

        const response = await getPapers();

        if (cancelled) return;

        const paperList = Array.isArray(response)
          ? response
          : response?.items ?? response?.papers ?? [];

        setPapers(paperList);

        if (paperList.length > 0) {
          setSelectedPaperId(String(paperList[0].id));
          setSelectedPaper(paperList[0]);
        }
      } catch (err) {
        if (cancelled) return;

        console.error("Failed to load papers:", err);

        setError(
          err?.response?.data?.detail ??
            "Unable to load your research papers."
        );
      } finally {
        if (!cancelled) {
          setLoadingPapers(false);
        }
      }
    };

    loadPapers();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * Update selected paper when dropdown changes.
   */
  const handlePaperChange = (event) => {
    const paperId = event.target.value;

    setSelectedPaperId(paperId);
    setSummary("");
    setActiveTab("Overview");

    const paper = papers.find(
      (item) => String(item.id) === String(paperId)
    );

    setSelectedPaper(paper ?? null);
  };

  /*
   * Call the real summarizer backend.
   */
  const handleSummarize = async () => {
    if (!selectedPaperId) {
      toast.error("Please select a research paper first.");
      return;
    }

    try {
      setSummarizing(true);
      setError("");
      setSummary("");

      const response = await summarizePaper(selectedPaperId);

      const generatedSummary =
        response?.summary ?? "";

      if (!generatedSummary) {
        throw new Error("The summarizer returned an empty response.");
      }

      setSummary(generatedSummary);
      setActiveTab("Overview");

      toast.success("Paper summarized successfully.");
    } catch (err) {
      console.error("Summarization failed:", err);

      const message =
        err?.response?.data?.detail ??
        err?.message ??
        "Unable to summarize this paper.";

      setError(message);
      toast.error(message);
    } finally {
      setSummarizing(false);
    }
  };

  const activeContent = demoContent[activeTab];
  const ActiveIcon = activeContent.icon;

  return (
    <section className="pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Interactive Demo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            AI reads every page so you don't have to.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Select a research paper from your library and let Resyntra
            generate an AI-powered summary from the actual paper content.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
          >
            {/* Toolbar */}

            <div className="border-b border-border px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FileText className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-foreground">
                      {selectedPaper?.title ??
                        "Research Paper"}
                    </h3>

                    <p className="text-sm text-muted">
                      {selectedPaper
                        ? `${selectedPaper.page_count ?? "Research"} ${
                            selectedPaper.page_count
                              ? "Pages"
                              : "Paper"
                          }`
                        : "Select a paper below"}
                    </p>
                  </div>
                </div>

                {summary && (
                  <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                    AI Processed
                  </span>
                )}
              </div>

              {/* Paper Selector */}

              <div className="mt-5">
                <label
                  htmlFor="summarizer-paper"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Select Research Paper
                </label>

                <div className="relative">
                  <select
                    id="summarizer-paper"
                    value={selectedPaperId}
                    onChange={handlePaperChange}
                    disabled={
                      loadingPapers ||
                      summarizing ||
                      papers.length === 0
                    }
                    className="
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      border-border
                      bg-background
                      px-4
                      py-3
                      pr-10
                      text-sm
                      text-foreground
                      outline-none
                      transition
                      focus:border-cyan-400
                    "
                  >
                    {loadingPapers && (
                      <option value="">
                        Loading your papers...
                      </option>
                    )}

                    {!loadingPapers &&
                      papers.length === 0 && (
                        <option value="">
                          No uploaded papers found
                        </option>
                      )}

                    {!loadingPapers &&
                      papers.length > 0 &&
                      papers.map((paper) => (
                        <option
                          key={paper.id}
                          value={paper.id}
                        >
                          {paper.title ?? "Untitled Paper"}
                        </option>
                      ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>
              </div>

              {/* Summarize Button */}

              <button
                type="button"
                onClick={handleSummarize}
                disabled={
                  !selectedPaperId ||
                  summarizing ||
                  loadingPapers
                }
                className="
                  mt-4
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-950
                  transition
                  hover:scale-[1.01]
                  hover:bg-cyan-400
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  disabled:hover:scale-100
                "
              >
                {summarizing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    AI is analyzing the paper...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate AI Summary
                  </>
                )}
              </button>
            </div>

            {/* Paper Preview */}

            <div className="space-y-6 p-8">
              <div className="space-y-3">
                <div className="h-3 w-52 rounded bg-border" />
                <div className="h-3 w-full rounded bg-border" />
                <div className="h-3 w-full rounded bg-border" />
                <div className="h-3 w-5/6 rounded bg-border" />
              </div>

              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-cyan-400" />

                  <span className="font-medium text-cyan-400">
                    AI Highlight
                  </span>
                </div>

                <p className="leading-7 text-foreground">
                  {summary
                    ? "Resyntra has analyzed the selected research paper and generated a structured AI summary."
                    : "Select a research paper and generate a summary to see AI-powered insights here."}
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-3 rounded bg-border" />
                <div className="h-3 rounded bg-border" />
                <div className="h-3 w-11/12 rounded bg-border" />
                <div className="h-3 w-10/12 rounded bg-border" />
                <div className="h-3 w-9/12 rounded bg-border" />
              </div>

              {error && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="text-sm leading-6 text-red-400">
                    {error}
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
          >
            {/* Summary Header */}

            <div className="border-b border-border p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  AI Summary
                </h3>

                {summary && (
                  <div className="flex items-center gap-2 text-xs text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" />
                    Generated
                  </div>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-xl px-4 py-2 text-sm transition ${
                      activeTab === tab
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-background text-muted hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary Content */}

            <div className="space-y-6 p-6">
              {summary && activeTab === "Overview" ? (
                <div className="flex gap-4">
                  <Bookmark className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                  <div>
                    <h4 className="font-semibold text-foreground">
                      AI Generated Summary
                    </h4>

                    <p className="mt-3 whitespace-pre-line leading-7 text-muted">
                      {summary}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <ActiveIcon
                    className={`mt-1 h-5 w-5 shrink-0 ${
                      activeTab === "Limitations"
                        ? "text-orange-500"
                        : activeTab === "Research Gaps"
                        ? "text-cyan-400"
                        : activeTab === "Key Findings"
                        ? "text-emerald-500"
                        : "text-cyan-400"
                    }`}
                  />

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {activeContent.title}
                    </h4>

                    <p className="mt-3 leading-7 text-muted">
                      {activeContent.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Citation */}

              <div className="flex gap-4">
                <Quote className="mt-1 h-5 w-5 shrink-0 text-violet-500" />

                <div>
                  <h4 className="font-semibold text-foreground">
                    Paper Context
                  </h4>

                  <p className="mt-2 leading-7 text-muted">
                    {selectedPaper?.title
                      ? `Summary generated from "${selectedPaper.title}".`
                      : "Select a paper to generate an AI-powered summary."}
                  </p>
                </div>
              </div>

              {/* Research Insight */}

              <div className="rounded-2xl bg-cyan-500/10 p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                  <div>
                    <h4 className="font-semibold text-foreground">
                      Resyntra Research Insight
                    </h4>

                    <p className="mt-2 leading-7 text-muted">
                      {summary
                        ? "The generated summary can be used as a starting point for deeper paper analysis, semantic search, research-gap discovery, and AI-assisted discussion."
                        : "Generate a summary first. Additional research-analysis capabilities can then build on the processed paper."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SummaryDemo;