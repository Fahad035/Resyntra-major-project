import { motion } from "framer-motion";
import {
  Search,
  FolderOpen,
  FileText,
  Sparkles,
  Clock3,
  Star,
} from "lucide-react";

const recentPapers = [
  {
    id: 1,
    title: "Attention Is All You Need",
    tag: "Transformer",
    active: true,
  },
  {
    id: 2,
    title: "BERT Language Model",
    tag: "NLP",
  },
  {
    id: 3,
    title: "GPT-4 Technical Report",
    tag: "LLM",
  },
];

const collections = [
  {
    icon: Sparkles,
    label: "AI Collection",
    color: "text-cyan-400",
  },
  {
    icon: FolderOpen,
    label: "Research Library",
    color: "text-violet-400",
  },
  {
    icon: Star,
    label: "Favorites",
    color: "text-yellow-400",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-full flex-col bg-slate-950/40">

      {/* Logo */}

      <div className="border-b border-white/10 px-6 py-5">

        <h3 className="text-lg font-semibold text-white">
          Research Papers
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          AI-powered workspace
        </p>

      </div>

      {/* Search */}

      <div className="px-6 py-5">

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

          <Search className="h-4 w-4 text-slate-500" />

          <span className="text-sm text-slate-500">
            Search papers...
          </span>

        </div>

      </div>

      {/* Collections */}

      <div className="px-4">

        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Collections
        </p>

        <div className="space-y-2">

          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.label}
                whileHover={{ x: 5 }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5"
              >
                <Icon className={`h-5 w-5 ${item.color}`} />

                <span className="text-sm text-slate-300">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>

      </div>

      {/* Recent */}

      <div className="mt-8 flex-1 px-4">

        <p className="mb-3 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">

          <Clock3 className="h-3 w-3" />

          Recent Papers

        </p>

        <div className="space-y-3">

          {recentPapers.map((paper) => (
            <motion.div
              key={paper.id}
              whileHover={{ scale: 1.02 }}
              className={`cursor-pointer rounded-2xl border p-4 transition ${
                paper.active
                  ? "border-cyan-500/40 bg-cyan-500/10"
                  : "border-white/10 bg-white/3 hover:bg-white/5"
              }`}
            >

              <div className="flex items-start gap-3">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">

                  <FileText className="h-5 w-5 text-cyan-400" />

                </div>

                <div className="min-w-0">

                  <h4 className="truncate text-sm font-medium text-white">
                    {paper.title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-400">
                    {paper.tag}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 px-6 py-5">

        <div className="rounded-2xl bg-linear-to-r from-cyan-500/10 to-blue-500/10 p-4">

          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
            AI Status
          </p>

          <div className="mt-3 flex items-center gap-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-sm font-medium text-white">
              Ready to Analyze
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;