import { Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "Summarize this paper in a few sentences",
  "What are the key findings?",
  "What methodology did the authors use?",
  "What are the limitations of this study?",
];

const SuggestedPrompts = ({ onSelect }) => {
  return (
    <div className="mx-auto max-w-md text-center">
      <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
        <Sparkles className="h-5 w-5 text-cyan-400" />
      </span>

      <p className="mt-4 text-sm text-muted">
        Ask your first question, or try one of these:
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onSelect(prompt)}
            className="rounded-full border border-border bg-(--foreground)/2 px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/5"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPrompts;