import { FileText, Trash2 } from "lucide-react";
import clsx from "clsx";

import PaperStatusBadge from "./PaperStatusBadge";

const PaperListItem = ({ paper, isActive, onSelect, onDelete }) => {
  const isReady = paper.processing_status === "completed";

  return (
    <div
      onClick={() => onSelect(paper)}
      className={clsx(
        "group flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors",
        isActive
          ? "border-cyan-400 bg-cyan-400/5"
          : "border-transparent bg-(--foreground)/2 hover:bg-(--foreground)/5"
      )}
    >
      <span
        className={clsx(
          "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border",
          isReady
            ? "border-cyan-500/20 bg-cyan-500/10"
            : "border-border bg-(--foreground)/5"
        )}
      >
        <FileText
          className={clsx("h-4 w-4", isReady ? "text-cyan-400" : "text-muted")}
        />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">
          {paper.title}
        </p>

        {paper.authors && (
          <p className="truncate text-xs text-muted">{paper.authors}</p>
        )}

        <div className="mt-1.5">
          <PaperStatusBadge status={paper.processing_status} />
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(paper.id);
        }}
        className="shrink-0 rounded-lg p-1.5 text-muted opacity-0 transition-opacity hover:bg-(--danger)/10 hover:text-(--danger) group-hover:opacity-100"
        aria-label={`Delete ${paper.title}`}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PaperListItem;