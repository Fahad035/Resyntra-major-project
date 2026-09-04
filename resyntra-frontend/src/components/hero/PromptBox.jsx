import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const placeholders = [
  'Summarize "Attention Is All You Need"',
  "Find research gaps in Healthcare AI",
  "Compare GPT-4 and Gemini research",
  "Generate APA citations from this paper",
  "Search papers about Climate Change",
  "Chat with uploaded PDFs",
];

const PromptBox = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
        <div className="rounded-xl bg-cyan-500/10 p-2">
          <Search className="h-5 w-5 text-cyan-400" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            Ask Resyntra
          </h3>

          <p className="text-sm text-slate-400">
            Your AI Research Assistant
          </p>
        </div>
      </div>

      {/* Prompt Area */}
      <div className="min-h-42.5 px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={placeholderIndex}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              text-2xl
              leading-relaxed
              text-slate-300
            "
          >
            {placeholders[placeholderIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PromptBox;