import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Sparkles,
  Send,
  Bookmark,
  Download,
  Clock3,
  CheckCircle2,
  Loader2,
  AlertCircle,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

import { getPapers } from "../../api/papers";
import { askQuestion } from "../../api/chat";

const suggestions = [
  "Explain Self Attention",
  "Summarize Methodology",
  "Find Research Gap",
  "Compare With BERT",
];

const ResearchWorkspace = () => {
  const [papers, setPapers] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);

  const [messages, setMessages] = useState([]);

  const [question, setQuestion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [loadingPapers, setLoadingPapers] = useState(true);
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState("");

  /*
   * Load uploaded papers from backend
   */
  const loadPapers = async () => {
    try {
      setLoadingPapers(true);
      setError("");

      const data = await getPapers();

      const paperList = Array.isArray(data)
        ? data
        : data?.papers || [];

      setPapers(paperList);

      if (paperList.length > 0) {
        setSelectedPaper(paperList[0]);
      } else {
        setSelectedPaper(null);
      }
    } catch (err) {
      console.error("Failed to load papers:", err);

      setError(
        err?.response?.data?.detail ||
        "Unable to load your research papers."
      );
    } finally {
      setLoadingPapers(false);
    }
  };

  useEffect(() => {
    loadPapers();
  }, []);

  /*
   * Filter papers
   */
  const filteredPapers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return papers;
    }

    return papers.filter((paper) =>
      String(
        paper.title ||
        paper.name ||
        "Untitled Paper"
      )
        .toLowerCase()
        .includes(query)
    );
  }, [papers, searchQuery]);

  /*
   * Select paper
   */
  const handleSelectPaper = (paper) => {
    setSelectedPaper(paper);
    setMessages([]);
    setError("");
  };

  /*
   * Ask AI question
   */
  const handleAskQuestion = async (questionText = question) => {
    const trimmedQuestion = questionText.trim();

    if (!trimmedQuestion || asking) {
      return;
    }

    if (!selectedPaper?.id) {
      setError("Please select a research paper first.");
      return;
    }

    try {
      setAsking(true);
      setError("");

      setMessages((previous) => [
        ...previous,
        {
          role: "user",
          text: trimmedQuestion,
        },
      ]);

      setQuestion("");

      const response = await askQuestion(
        selectedPaper.id,
        trimmedQuestion
      );

      const answer =
        response?.answer ||
        "I couldn't generate an answer for this question.";

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: answer,
        },
      ]);
    } catch (err) {
      console.error("Chat request failed:", err);

      const message =
        err?.response?.data?.detail ||
        "Unable to get an answer from the AI research assistant.";

      setError(message);

      setMessages((previous) => {
        const updated = [...previous];

        if (
          updated.length > 0 &&
          updated[updated.length - 1].role === "user"
        ) {
          updated.pop();
        }

        return updated;
      });
    } finally {
      setAsking(false);
    }
  };

  /*
   * Suggested question
   */
  const handleSuggestion = (suggestion) => {
    setQuestion(suggestion);
    handleAskQuestion(suggestion);
  };

  /*
   * Enter key
   */
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleAskQuestion();
    }
  };

  /*
   * Paper page label
   */
  const getPageLabel = (paper) => {
    if (paper?.pages) {
      return `${paper.pages} Pages`;
    }

    if (paper?.page_count) {
      return `${paper.page_count} Pages`;
    }

    return "PDF Document";
  };

  /*
   * ============================================================
   * EXPORT AI ANSWERS
   * ============================================================
   *
   * Creates a .txt file containing the complete conversation.
   */
  const handleDownloadConversation = () => {
    if (!selectedPaper) {
      setError("Please select a research paper first.");
      return;
    }

    if (messages.length === 0) {
      setError("There is no AI-generated answer to download yet.");
      return;
    }

    const paperTitle =
      selectedPaper.title ||
      selectedPaper.name ||
      "Research Paper";

    const exportDate = new Date().toLocaleString();

    let content = "";

    content += "RESYNTRA — AI RESEARCH ASSISTANT\n";
    content += "========================================\n\n";

    content += `Research Paper: ${paperTitle}\n`;
    content += `Exported: ${exportDate}\n\n`;

    content += "AI RESEARCH CONVERSATION\n";
    content += "========================================\n\n";

    messages.forEach((message, index) => {
      if (message.role === "user") {
        content += `QUESTION ${getQuestionNumber(
          messages,
          index
        )}\n`;
        content += "----------------------------------------\n";
        content += `${message.text}\n\n`;
      }

      if (message.role === "assistant") {
        content += "AI ANSWER\n";
        content += "----------------------------------------\n";
        content += `${message.text}\n\n`;
      }
    });

    content += "========================================\n";
    content += "Generated by Resyntra\n";
    content += "AI Research Assistant\n";

    /*
     * Convert text into a downloadable Blob.
     */
    const blob = new Blob(
      [content],
      {
        type: "text/plain;charset=utf-8",
      }
    );

    const url = URL.createObjectURL(blob);

    /*
     * Generate a safe filename.
     */
    const safePaperTitle = paperTitle
      .replace(/[^a-z0-9]/gi, "_")
      .replace(/_+/g, "_")
      .slice(0, 80);

    const filename = `Resyntra_${safePaperTitle}_AI_Answers.txt`;

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    /*
     * Release browser memory.
     */
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = async () => {
    if (!selectedPaper) {
      setError("Please select a research paper first.");
      return;
    }

    if (messages.length === 0) {
      setError("There is no AI-generated answer to export yet.");
      return;
    }

    try {
      setError("");

      const { jsPDF } = await import("jspdf");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const paperTitle =
        selectedPaper.title ||
        selectedPaper.name ||
        "Research Paper";

      const exportDate = new Date().toLocaleString();

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const margin = 18;
      const contentWidth = pageWidth - margin * 2;

      let y = 20;

      const addPageIfNeeded = (height = 8) => {
        if (y + height > pageHeight - 18) {
          pdf.addPage();
          y = 20;
        }
      };

      const addWrappedText = (
        text,
        {
          fontSize = 11,
          fontStyle = "normal",
          lineHeight = 6,
          spacingAfter = 5,
        } = {}
      ) => {
        pdf.setFont("helvetica", fontStyle);
        pdf.setFontSize(fontSize);

        const lines = pdf.splitTextToSize(
          String(text),
          contentWidth
        );

        lines.forEach((line) => {
          addPageIfNeeded(lineHeight);
          pdf.text(line, margin, y);
          y += lineHeight;
        });

        y += spacingAfter;
      };

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(20);
      pdf.text("RESYNTRA", margin, y);

      y += 8;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(11);
      pdf.text("AI Research Assistant", margin, y);

      y += 10;

      pdf.setDrawColor(180, 180, 180);
      pdf.line(
        margin,
        y,
        pageWidth - margin,
        y
      );

      y += 10;

      addWrappedText("Research Paper", {
        fontSize: 9,
        fontStyle: "bold",
        lineHeight: 5,
        spacingAfter: 2,
      });

      addWrappedText(paperTitle, {
        fontSize: 14,
        fontStyle: "bold",
        lineHeight: 7,
        spacingAfter: 5,
      });

      addWrappedText(`Exported: ${exportDate}`, {
        fontSize: 9,
        lineHeight: 5,
        spacingAfter: 8,
      });

      pdf.setDrawColor(210, 210, 210);
      pdf.line(
        margin,
        y,
        pageWidth - margin,
        y
      );

      y += 10;

      addWrappedText("AI RESEARCH CONVERSATION", {
        fontSize: 14,
        fontStyle: "bold",
        lineHeight: 7,
        spacingAfter: 8,
      });

      messages.forEach((message, index) => {
        if (message.role === "user") {
          addPageIfNeeded(18);

          addWrappedText(
            `QUESTION ${getQuestionNumber(
              messages,
              index
            )}`,
            {
              fontSize: 10,
              fontStyle: "bold",
              lineHeight: 5,
              spacingAfter: 3,
            }
          );

          addWrappedText(message.text, {
            fontSize: 11,
            lineHeight: 6,
            spacingAfter: 8,
          });
        }

        if (message.role === "assistant") {
          addPageIfNeeded(18);

          addWrappedText("AI ANSWER", {
            fontSize: 10,
            fontStyle: "bold",
            lineHeight: 5,
            spacingAfter: 3,
          });

          addWrappedText(message.text, {
            fontSize: 11,
            lineHeight: 6,
            spacingAfter: 10,
          });
        }
      });

      const totalPages = pdf.getNumberOfPages();

      for (let page = 1; page <= totalPages; page += 1) {
        pdf.setPage(page);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8);
        pdf.setTextColor(110, 110, 110);

        pdf.text(
          "Generated by Resyntra — AI Research Assistant",
          margin,
          pageHeight - 10
        );

        pdf.text(
          `Page ${page} of ${totalPages}`,
          pageWidth - margin,
          pageHeight - 10,
          {
            align: "right",
          }
        );

        pdf.setTextColor(0, 0, 0);
      }

      const safePaperTitle = paperTitle
        .replace(/[^a-z0-9]/gi, "_")
        .replace(/_+/g, "_")
        .slice(0, 80);

      const filename =
        `Resyntra_${safePaperTitle}_AI_Answers.pdf`;

      pdf.save(filename);
    } catch (err) {
      console.error("PDF export failed:", err);

      setError(
        "Unable to generate the PDF. Make sure the jspdf package is installed."
      );
    }
  };

  /*
   * Helper for numbering questions.
   */
  const getQuestionNumber = (messageList, currentIndex) => {
    return (
      messageList
        .slice(0, currentIndex + 1)
        .filter(
          (message) => message.role === "user"
        ).length
    );
  };

  return (
    <section className="py-28">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <div className="rounded-3xl border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-6">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold text-foreground">
                Research Library
              </h3>

              <button
                type="button"
                onClick={loadPapers}
                disabled={loadingPapers}
                title="Refresh papers"
                className="rounded-xl border border-border p-2 text-muted transition hover:border-cyan-500 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loadingPapers ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <RefreshCw size={18} />
                )}
              </button>

            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">

              <Search
                size={17}
                className="shrink-0 text-muted"
              />

              <input
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search papers..."
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />

            </div>

            <div className="mt-8 space-y-4">

              {loadingPapers ? (
                <div className="rounded-2xl border border-border bg-background/50 p-6 text-center">

                  <Loader2
                    className="mx-auto h-6 w-6 animate-spin text-cyan-400"
                  />

                  <p className="mt-3 text-sm text-muted">
                    Loading research papers...
                  </p>

                </div>
              ) : filteredPapers.length === 0 ? (
                <div className="rounded-2xl border border-border bg-background/50 p-6 text-center">

                  <FileText
                    className="mx-auto h-7 w-7 text-muted"
                  />

                  <p className="mt-3 font-medium text-foreground">
                    No papers found
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {papers.length === 0
                      ? "Upload a research paper to start asking questions."
                      : "Try a different search term."}
                  </p>

                </div>
              ) : (
                filteredPapers.map((paper) => {

                  const isActive =
                    selectedPaper?.id === paper.id;

                  const title =
                    paper.title ||
                    paper.name ||
                    "Untitled Research Paper";

                  return (
                    <motion.button
                      key={paper.id}
                      type="button"
                      whileHover={{ x: 5 }}
                      onClick={() =>
                        handleSelectPaper(paper)
                      }
                      className={`w-full rounded-2xl border p-4 text-left transition ${isActive
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-border hover:border-cyan-500/40"
                        }`}
                    >

                      <div className="flex gap-3">

                        <div
                          className={`rounded-xl p-3 ${isActive
                            ? "bg-cyan-500/15"
                            : "bg-cyan-500/10"
                            }`}
                        >
                          <FileText
                            className="h-5 w-5 text-cyan-400"
                          />
                        </div>

                        <div className="min-w-0 flex-1">

                          <h4 className="font-medium leading-6 text-foreground">
                            {title}
                          </h4>

                          <p className="mt-2 text-sm text-muted">
                            {getPageLabel(paper)}
                          </p>

                        </div>

                      </div>

                    </motion.button>
                  );
                })
              )}

            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background/50 p-5">

              <div className="flex items-center gap-2">

                <Clock3
                  size={18}
                  className="text-cyan-400"
                />

                <span className="font-medium text-foreground">
                  AI Status
                </span>

              </div>

              <div className="mt-5 flex items-center gap-3">

                <span
                  className={`h-3 w-3 rounded-full ${asking
                    ? "animate-pulse bg-amber-400"
                    : "animate-pulse bg-emerald-400"
                    }`}
                />

                <span className="text-sm text-muted">
                  {asking
                    ? "Analyzing paper..."
                    : selectedPaper
                      ? "Ready for questions"
                      : "Waiting for a paper"}
                </span>

              </div>

            </div>

          </div>

          {/* =====================================================
              CHAT
          ===================================================== */}

          <div className="rounded-3xl border border-border bg-linear-to-br from-background via-background to-cyan-500/5">

            {/* Header */}

            <div className="flex flex-col gap-5 border-b border-border px-8 py-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="min-w-0">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-cyan-500/10 p-3">

                    <Sparkles
                      size={20}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="min-w-0">

                    <h2 className="text-2xl font-bold text-foreground">
                      AI Research Assistant
                    </h2>

                    <p className="mt-1 truncate text-muted">
                      {selectedPaper
                        ? `Currently analyzing: ${selectedPaper.title ||
                        selectedPaper.name ||
                        "Untitled Paper"
                        }`
                        : "Select a paper to start asking questions."}
                    </p>

                  </div>

                </div>

              </div>

              <div className="flex shrink-0 gap-3">

                <button
                  type="button"
                  title="Bookmark conversation"
                  className="rounded-xl border border-border p-3 text-muted transition hover:border-cyan-500 hover:text-cyan-400"
                >
                  <Bookmark size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadConversation}
                  disabled={
                    !selectedPaper ||
                    messages.length === 0
                  }
                  title={
                    messages.length === 0
                      ? "Generate an AI answer first"
                      : "Download AI answers"
                  }
                  className="rounded-xl border border-border p-3 text-muted transition hover:border-cyan-500 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted"
                >
                  <Download size={18} />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  disabled={
                    !selectedPaper ||
                    messages.length === 0
                  }
                  title={
                    messages.length === 0
                      ? "Generate an AI answer first"
                      : "Download AI answers as PDF"
                  }
                  className="rounded-xl border border-border p-3 text-muted transition hover:border-cyan-500 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted"
                >
                  <FileText size={18} />
                </button>

              </div>

            </div>

            {/* Error */}

            {(error || !selectedPaper) && (
              <div className="px-8 pt-6">

                <div
                  className={`flex items-start gap-3 rounded-2xl border p-4 ${error
                    ? "border-red-500/20 bg-red-500/5"
                    : "border-cyan-500/20 bg-cyan-500/5"
                    }`}
                >

                  {error ? (
                    <AlertCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                    />
                  ) : (
                    <MessageCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                    />
                  )}

                  <div>

                    <p className="font-medium text-foreground">
                      {error
                        ? "Something went wrong"
                        : "Select a research paper"}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {error ||
                        "Choose a paper from your Research Library before asking the AI assistant a question."}
                    </p>

                  </div>

                </div>

              </div>
            )}

            {/* Messages */}

            <div className="min-h-105 space-y-8 px-8 py-8">

              {messages.length === 0 && selectedPaper ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="flex min-h-90 flex-col items-center justify-center text-center"
                >

                  <div className="rounded-2xl bg-cyan-500/10 p-5">

                    <Sparkles
                      className="h-8 w-8 text-cyan-400"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Ask your first question
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-muted">
                    Ask anything about the selected research paper.
                    Resyntra will retrieve relevant content and generate
                    an answer using the RAG pipeline.
                  </p>

                </motion.div>
              ) : (
                messages.map((message, index) => (

                  <motion.div
                    key={`${message.role}-${index}`}
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
                    }}
                  >

                    {message.role === "user" ? (

                      <div className="ml-auto max-w-xl rounded-3xl bg-cyan-500 px-6 py-5 text-slate-950">

                        <p className="leading-7">
                          {message.text}
                        </p>

                      </div>

                    ) : (

                      <div className="max-w-3xl rounded-3xl border border-border bg-background/60 p-6">

                        <div className="flex items-center gap-3">

                          <div className="rounded-full bg-cyan-500/10 p-2">

                            <Sparkles
                              size={18}
                              className="text-cyan-400"
                            />

                          </div>

                          <h4 className="font-semibold text-foreground">
                            AI Assistant
                          </h4>

                        </div>

                        <p className="mt-5 whitespace-pre-wrap leading-8 text-muted">
                          {message.text}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">

                          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                            <CheckCircle2 className="h-4 w-4" />
                            Retrieved from selected paper
                          </span>

                        </div>

                      </div>

                    )}

                  </motion.div>

                ))
              )}

              {/* AI loading */}

              {asking && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="max-w-3xl rounded-3xl border border-border bg-background/60 p-6"
                >

                  <div className="flex items-center gap-3">

                    <div className="rounded-full bg-cyan-500/10 p-2">

                      <Sparkles
                        size={18}
                        className="text-cyan-400"
                      />

                    </div>

                    <h4 className="font-semibold text-foreground">
                      AI Assistant
                    </h4>

                  </div>

                  <div className="mt-5 flex items-center gap-3">

                    <Loader2
                      className="h-5 w-5 animate-spin text-cyan-400"
                    />

                    <p className="text-sm text-muted">
                      Searching the paper and generating an answer...
                    </p>

                  </div>

                </motion.div>
              )}

            </div>

            {/* Suggestions + Input */}

            <div className="border-t border-border px-8 py-6">

              <p className="mb-4 font-medium text-foreground">
                Suggested Questions
              </p>

              <div className="flex flex-wrap gap-3">

                {suggestions.map((item) => (

                  <button
                    key={item}
                    type="button"
                    disabled={!selectedPaper || asking}
                    onClick={() =>
                      handleSuggestion(item)
                    }
                    className="rounded-full border border-border px-5 py-3 text-sm text-foreground transition hover:border-cyan-500 hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {item}
                  </button>

                ))}

              </div>

              {/* Input */}

              <div
                className={`mt-8 flex items-center gap-4 rounded-2xl border bg-background p-3 transition ${selectedPaper
                  ? "border-border focus-within:border-cyan-500/50"
                  : "border-border opacity-60"
                  }`}
              >

                <input
                  value={question}
                  onChange={(event) =>
                    setQuestion(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  disabled={!selectedPaper || asking}
                  placeholder={
                    selectedPaper
                      ? "Ask anything about your uploaded paper..."
                      : "Select a paper first..."
                  }
                  className="flex-1 bg-transparent px-2 text-foreground outline-none placeholder:text-muted disabled:cursor-not-allowed"
                />

                <button
                  type="button"
                  onClick={() =>
                    handleAskQuestion()
                  }
                  disabled={
                    !selectedPaper ||
                    !question.trim() ||
                    asking
                  }
                  className="rounded-xl bg-cyan-500 p-3 text-slate-950 transition hover:scale-105 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                  title="Send question"
                >
                  {asking ? (
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                  ) : (
                    <Send size={18} />
                  )}
                </button>

              </div>

              <p className="mt-3 text-xs text-muted">
                Press Enter to ask. Shift + Enter can be used for a new line.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResearchWorkspace;