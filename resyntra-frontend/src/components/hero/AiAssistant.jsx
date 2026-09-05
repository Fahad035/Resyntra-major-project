import { Bot, Sparkles } from "lucide-react";

const AIAssistant = () => {
  return (
    <div className="w-96 p-6">
      <div className="mb-5 flex items-center gap-3">
        <Bot className="h-6 w-6 text-cyan-400" />

        <h3 className="font-semibold text-foreground">
          AI Assistant
        </h3>
      </div>

      <div className="rounded-2xl bg-cyan-500/10 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-cyan-400" />

          <span className="text-sm font-medium text-cyan-300">
            Suggested Question
          </span>
        </div>

        <p className="text-sm leading-7 text-muted">
          What limitations of Transformers were later addressed by
          GPT models?
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-border bg-(--foreground)/5 p-4">
        <input
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          placeholder="Ask AI about this paper..."
        />
      </div>
    </div>
  );
};

export default AIAssistant;