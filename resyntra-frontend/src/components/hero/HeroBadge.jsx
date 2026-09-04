import { Sparkles } from "lucide-react";

const HeroBadge = () => {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
      <Sparkles className="h-4 w-4 text-cyan-400" />

      <span className="text-sm font-medium text-cyan-300">
        Powered by Generative AI • RAG • Knowledge Graph
      </span>
    </div>
  );
};

export default HeroBadge;