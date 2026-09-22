import { Check, FileText, Loader2 } from "lucide-react";
import clsx from "clsx";

import PaperStatusBadge from "@/components/chat/PaperStatusBadge";
import UploadDropzone from "@/components/chat/UploadDropzone";

const MAX_PAPERS = 8;
const MIN_PAPERS = 2;

const PaperMultiSelect = ({
  papers,
  loading,
  uploading,
  selectedIds,
  onToggle,
  onUpload,
}) => {
  const readyPapers = papers.filter((p) => p.processing_status === "completed");

  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col gap-4 border-r border-border p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Select Papers
        </h2>
        <span
          className={clsx(
            "rounded-full px-2 py-0.5 text-xs font-medium",
            selectedIds.length >= MIN_PAPERS
              ? "bg-cyan-500/10 text-cyan-400"
              : "bg-(--foreground)/5 text-muted"
          )}
        >
          {selectedIds.length}/{MAX_PAPERS}
        </span>
      </div>

      <p className="-mt-2 text-xs text-muted">
        Pick {MIN_PAPERS}–{MAX_PAPERS} papers to compare.
      </p>

      <UploadDropzone onUpload={onUpload} uploading={uploading} />

      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="h-5 w-5 animate-spin text-muted" />
          </div>
        ) : readyPapers.length === 0 ? (
          <p className="px-2 py-6 text-center text-sm text-muted">
            {papers.length === 0
              ? "No papers yet. Upload PDFs to get started."
              : "Papers are still processing — checkable once ready."}
          </p>
        ) : (
          readyPapers.map((paper) => {
            const isChecked = selectedIds.includes(paper.id);
            const isDisabled =
              !isChecked && selectedIds.length >= MAX_PAPERS;

            return (
              <button
                key={paper.id}
                type="button"
                disabled={isDisabled}
                onClick={() => onToggle(paper.id)}
                className={clsx(
                  "flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors",
                  isChecked
                    ? "border-cyan-400 bg-cyan-400/5"
                    : "border-transparent bg-(--foreground)/2 hover:bg-(--foreground)/5",
                  isDisabled && "cursor-not-allowed opacity-40"
                )}
              >
                <span
                  className={clsx(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                    isChecked
                      ? "border-cyan-400 bg-cyan-400 text-slate-950"
                      : "border-border"
                  )}
                >
                  {isChecked && <Check className="h-3.5 w-3.5" />}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-(--foreground)/5">
                  <FileText className="h-4 w-4 text-cyan-400" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-foreground">
                    {paper.title}
                  </span>
                  {paper.authors && (
                    <span className="block truncate text-xs text-muted">
                      {paper.authors}
                    </span>
                  )}
                  <span className="mt-1 block">
                    <PaperStatusBadge status={paper.processing_status} />
                  </span>
                </span>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PaperMultiSelect;
export { MIN_PAPERS, MAX_PAPERS };