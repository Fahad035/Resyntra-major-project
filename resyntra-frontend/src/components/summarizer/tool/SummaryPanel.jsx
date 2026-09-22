import { useEffect, useState } from "react";
import {
  Check,
  Copy,
  FileText,
  Loader2,
  RotateCcw,
  Sparkles,
  TriangleAlert,
  Volume2,
  VolumeX,
} from "lucide-react";

import useSummarizer from "@/hooks/useSummarizer";
import useTextToSpeech from "@/hooks/useTextToSpeech";

import FormattedAnswer from "@/components/chat/FormattedAnswer";
import PaperStatusBadge from "@/components/chat/PaperStatusBadge";

import SummarySkeleton from "../SummarySkeleton";

const EmptyState = () => (
  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-(--foreground)/5">
      <Sparkles className="h-6 w-6 text-muted" />
    </span>
    <h3 className="font-semibold text-foreground">
      Select a paper to summarize
    </h3>
    <p className="max-w-sm text-sm text-muted">
      Pick a paper on the left, then generate a structured academic summary
      — the research problem, methodology, key findings, and conclusion.
    </p>
  </div>
);

const SummaryPanel = ({ paper }) => {
  const { summary, loading, error, generate, reset } = useSummarizer();
  const { playingId, loadingId, toggle, stop } = useTextToSpeech();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    reset();
    stop();
  }, [paper?.id, reset, stop]);

  if (!paper) {
    return <EmptyState />;
  }

  const isReady = paper.processing_status === "completed";
  const audioMessage = { id: paper.id, content: summary };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access can fail without permission - copy button
      // just won't confirm, no need to interrupt the user for it.
    }
  };

  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col">
      {/* Header */}
      <div className="flex min-w-0 items-center gap-3 border-b border-border p-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-linear-to-brrom-cyan-500/10 to-indigo-500/10">
          <FileText className="h-4 w-4 text-cyan-400" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-foreground">{paper.title}</p>
          <PaperStatusBadge status={paper.processing_status} />
        </div>

        {summary && !loading && (
          <button
            type="button"
            onClick={() => generate(paper.id)}
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-(--foreground)/2 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-cyan-400/40 hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Regenerate
          </button>
        )}
      </div>

      {/* Body */}
      <div className="min-h-0 flex-1 overflow-y-auto p-6">
        {!isReady ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-cyan-400" />
            <p className="max-w-sm text-sm text-muted">
              {paper.processing_status === "failed"
                ? "This paper failed to process. Try deleting it and uploading again."
                : "This paper is still being indexed. Summarizing unlocks once it's ready."}
            </p>
          </div>
        ) : loading ? (
          <SummarySkeleton />
        ) : error ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--danger)/20 bg-(--danger)/10">
              <TriangleAlert className="h-5 w-5 text-(--danger)" />
            </span>
            <p className="max-w-sm text-sm text-muted">{error}</p>
            <button
              type="button"
              onClick={() => generate(paper.id)}
              className="rounded-lg border border-border bg-(--foreground)/2 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-cyan-400/40"
            >
              Try again
            </button>
          </div>
        ) : summary ? (
          <div>
            <div className="rounded-2xl border border-border bg-(--foreground)/2 p-6 text-sm leading-7 text-foreground">
              <FormattedAnswer text={summary} />
            </div>

            <div className="mt-4 flex items-center gap-4 px-1">
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => toggle(audioMessage)}
                disabled={loadingId === paper.id}
                className={`flex items-center gap-1.5 text-xs hover:text-foreground disabled:cursor-wait ${
                  playingId === paper.id ? "text-cyan-400" : "text-muted"
                }`}
              >
                {loadingId === paper.id ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" /> Loading
                  </>
                ) : playingId === paper.id ? (
                  <>
                    <VolumeX className="h-3.5 w-3.5" /> Stop
                  </>
                ) : (
                  <>
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
              <Sparkles className="h-6 w-6 text-cyan-400" />
            </span>
            <p className="max-w-sm text-sm text-muted">
              Ready to summarize <strong className="text-foreground">{paper.title}</strong>.
              This covers the research problem, methodology, key findings, and
              conclusion.
            </p>
            <button
              type="button"
              onClick={() => generate(paper.id)}
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Sparkles className="h-4 w-4" />
              Generate Summary
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryPanel;