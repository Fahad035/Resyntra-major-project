import {
  FileText,
  FolderOpen,
  Star,
} from "lucide-react";

const papers = [
  "Attention Is All You Need",
  "GPT-4 Technical Report",
  "Gemini 2.5 Research",
  "Claude Reasoning",
];

const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-border p-5">
      <div className="mb-6 flex items-center gap-2">
        <FolderOpen className="h-5 w-5 text-cyan-400" />
        <h4 className="font-semibold text-foreground">
          Library
        </h4>
      </div>

      <div className="space-y-3">
        {papers.map((paper) => (
          <button
            key={paper}
            className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-(--foreground)/5"
          >
            <FileText className="h-4 w-4 text-cyan-400" />

            <span className="text-sm text-muted">
              {paper}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border p-4">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-cyan-400" />
          <span className="text-sm text-foreground">
            AI Collection
          </span>
        </div>

        <p className="mt-3 text-sm text-muted">
          Organize research by topic and project.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;