import { useState } from "react";
import {
  Check,
  Copy,
  Loader2,
  RotateCcw,
  Sparkles,
  TriangleAlert,
  Volume2,
  VolumeX,
} from "lucide-react";

import useResearchGap from "@/hooks/useResearchGap";
import useTextToSpeech from "@/hooks/useTextToSpeech";

import SummarySkeleton from "@/components/summarizer/tool/SummarySkeleton";
import GapReportView from "./GapReportView";
import { MIN_PAPERS } from "./PaperMultiSelect";

const GapResultPanel = ({ selectedIds, selectedPapers }) => {
  const { report, loading, error, generate, reset } = useResearchGap();
  const { playingId, loadingId, toggle, stop } = useTextToSpeech();
  const [topic, setTopic] = useState("");
  const [copied, setCopied] = useState(false);

  const canGenerate = selectedIds.length >= MIN_PAPERS && topic.trim();
  const reportId = "gap-report";
  const audioMessage = { id: reportId, content: report };

  const handleGenerate = () => {
    if (!canGenerate || loading) return;
    generate(selectedIds, topic.trim());
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(report);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can fail without permission - non-critical.
    }
  };

  if (report) {
    return (
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex items-center gap-3 border-b border-border p-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-foreground">
              Research Gap Report
            </p>
            <p className="truncate text-xs text-muted">{topic}</p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-(--foreground)/2 px-3 py-2 text-xs font-medium text-muted hover:text-foreground"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            type="button"
            onClick={() => toggle(audioMessage)}
            disabled={loadingId === reportId}
            className={`flex items-center gap-1.5 rounded-lg border border-border bg-(--foreground)/2 px-3 py-2 text-xs font-medium hover:text-foreground disabled:cursor-wait ${
              playingId === reportId ? "text-cyan-400" : "text-muted"
            }`}
          >
            {loadingId === reportId ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : playingId === reportId ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
            {playingId === reportId ? "Stop" : "Listen"}
          </button>

          <button
            type="button"
            onClick={() => {
              stop();
              reset();
            }}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-(--foreground)/2 px-3 py-2 text-xs font-medium text-muted hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            New Report
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          <GapReportView report={report} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col items-center justify-center gap-5 px-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
        <Sparkles className="h-6 w-6 text-cyan-400" />
      </span>

      {selectedIds.length < MIN_PAPERS ? (
        <>
          <h3 className="font-semibold text-foreground">
            Select at least {MIN_PAPERS} papers
          </h3>
          <p className="max-w-sm text-sm text-muted">
            Choose papers on the left to compare — Resyntra will identify
            gaps, conflicting findings, and future research directions
            across all of them.
          </p>
        </>
      ) : (
        <div className="w-full max-w-md">
          <h3 className="font-semibold text-foreground">
            Comparing {selectedIds.length} papers
          </h3>
          <p className="mt-2 text-sm text-muted">
            {selectedPapers.map((p) => p.title).join(" · ")}
          </p>

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Research topic, e.g. 'Transformer efficiency'"
            className="mt-5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-cyan-400"
          />

          {loading ? (
            <div className="mt-6 text-left">
              <SummarySkeleton />
            </div>
          ) : error ? (
            <div className="mt-5 space-y-3">
              <p className="flex items-center justify-center gap-2 text-sm text-(--danger)">
                <TriangleAlert className="h-4 w-4" />
                {error}
              </p>
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full rounded-xl border border-border bg-(--foreground)/2 py-3 text-sm font-medium text-foreground hover:border-cyan-400/40"
              >
                Try again
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" />
              Find Research Gaps
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GapResultPanel;