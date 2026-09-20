import { Bot } from "lucide-react";

const ThinkingIndicator = () => {
  return (
    <div className="flex gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-indigo-500/10">
        <Bot className="h-4 w-4 text-cyan-400" />
      </span>

      <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-(--foreground)/2 px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400"
            style={{
              animation: "resyntra-bounce 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes resyntra-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ThinkingIndicator;