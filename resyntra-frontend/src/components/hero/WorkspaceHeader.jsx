import { Share2, Download } from "lucide-react";

const WorkspaceHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <h3 className="font-semibold text-foreground">
          Resyntra Workspace
        </h3>
      </div>

      <div className="flex gap-3">
        <button className="rounded-xl border border-border px-3 py-2 text-sm text-muted hover:border-cyan-400/30">
          <Share2 className="mr-2 inline h-4 w-4" />
          Share
        </button>

        <button className="rounded-xl bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400">
          <Download className="mr-2 inline h-4 w-4" />
          Export
        </button>
      </div>
    </div>
  );
};

export default WorkspaceHeader;