import { Loader2 } from "lucide-react";

import UploadDropzone from "./UploadDropzone";
import PaperListItem from "./PaperListItem";

const PaperSidebar = ({
  papers,
  loading,
  uploading,
  activePaperId,
  onUpload,
  onSelect,
  onDelete,
}) => {
  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col gap-4 border-r border-border p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Your Papers
        </h2>
        {papers.length > 0 && (
          <span className="rounded-full bg-(--foreground)/5 px-2 py-0.5 text-xs font-medium text-muted">
            {papers.length}
          </span>
        )}
      </div>

      <UploadDropzone onUpload={onUpload} uploading={uploading} />

      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="h-5 w-5 animate-spin text-muted" />
          </div>
        ) : papers.length === 0 ? (
          <p className="px-2 py-6 text-center text-sm text-muted">
            No papers yet. Upload a PDF to get started.
          </p>
        ) : (
          papers.map((paper) => (
            <PaperListItem
              key={paper.id}
              paper={paper}
              isActive={paper.id === activePaperId}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PaperSidebar;