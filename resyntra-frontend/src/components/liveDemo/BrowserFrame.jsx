import { Circle, MonitorSmartphone } from "lucide-react";

const BrowserFrame = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/70 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-6 py-4">

        <div className="flex items-center gap-2">
          <Circle className="h-3 w-3 fill-red-500 text-red-500" />
          <Circle className="h-3 w-3 fill-yellow-500 text-yellow-500" />
          <Circle className="h-3 w-3 fill-green-500 text-green-500" />
        </div>

        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-5 py-2">
          <MonitorSmartphone className="h-4 w-4 text-cyan-400" />

          <span className="text-sm font-medium text-slate-300">
            Resyntra Workspace
          </span>
        </div>

        <div className="text-xs text-slate-500">
          AI Research Platform
        </div>

      </div>

      {/* Content */}

      <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        {children}
      </div>

    </div>
  );
};

export default BrowserFrame;