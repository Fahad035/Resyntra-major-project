import {
  ArrowRight,
  Mic,
  Paperclip,
} from "lucide-react";

const ActionBar = () => {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-white/5">
          <Paperclip className="h-4 w-4" />
          Upload Paper
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-white/5">
          <Mic className="h-4 w-4" />
          Voice
        </button>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400">
        AI Search
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ActionBar;