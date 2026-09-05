import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Send,
  Quote,
  Bot,
  User,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const papers = [
  "Attention Is All You Need",
  "BERT: Pre-training of Deep Bidirectional Transformers",
  "GPT-4 Technical Report",
  "Retrieval-Augmented Generation Survey",
];

const sources = [
  {
    page: "Page 4",
    title: "Self-Attention Mechanism",
  },
  {
    page: "Figure 2",
    title: "Transformer Architecture",
  },
  {
    page: "Table 3",
    title: "BLEU Score Comparison",
  },
];

const suggestions = [
  "Explain the methodology",
  "What are the limitations?",
  "Compare with BERT",
  "Generate literature review",
];

const ChatDemo = () => {
  return (
    <section className="pb-32">
      <div className="mx-auto w-[92%] max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Live Product Demo
          </span>

          <h2 className="mt-6 text-4xl font-bold text-foreground lg:text-5xl">
            Ask anything about your research.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Every answer includes citations, page references and context
            directly from the uploaded research papers.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">

          <div className="grid lg:grid-cols-[300px_1fr_320px]">

            {/* LEFT */}

            <div className="border-r border-border">

              <div className="border-b border-border p-5">

                <div className="flex items-center gap-3 rounded-xl bg-background px-4 py-3">

                  <Search className="h-4 w-4 text-muted" />

                  <input
                    placeholder="Search papers..."
                    className="w-full bg-transparent text-sm outline-none"
                  />

                </div>

              </div>

              <div className="p-4 space-y-3">

                {papers.map((paper, index) => (
                  <div
                    key={paper}
                    className={`rounded-2xl border p-4 transition ${
                      index === 0
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-border hover:border-cyan-500/30"
                    }`}
                  >
                    <div className="flex gap-3">

                      <div className="rounded-xl bg-cyan-500/10 p-2">
                        <FileText className="h-5 w-5 text-cyan-400" />
                      </div>

                      <div>

                        <h4 className="font-medium text-foreground">
                          {paper}
                        </h4>

                        <p className="mt-1 text-xs text-muted">
                          PDF Document
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* CENTER */}

            <div className="flex flex-col">

              <div className="border-b border-border p-5">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      AI Research Assistant
                    </h3>

                    <p className="text-sm text-muted">
                      Connected to 4 research papers
                    </p>

                  </div>

                </div>

              </div>

              <div className="flex-1 space-y-8 p-8">

                {/* User */}

                <div className="flex gap-4">

                  <div className="rounded-full bg-background p-3">
                    <User className="h-5 w-5" />
                  </div>

                  <div className="rounded-2xl bg-background p-5">

                    <p className="font-medium">
                      Explain the methodology used in this paper.
                    </p>

                  </div>

                </div>

                {/* AI */}

                <div className="flex gap-4">

                  <div className="rounded-full bg-cyan-500 p-3 text-slate-950">
                    <Bot className="h-5 w-5" />
                  </div>

                  <div className="max-w-2xl rounded-2xl bg-cyan-500/10 p-6">

                    <p className="leading-8 text-foreground">
                      The paper introduces the Transformer architecture,
                      replacing recurrent neural networks with
                      self-attention mechanisms that allow parallel
                      sequence processing.
                    </p>

                    <div className="mt-6 rounded-xl border border-cyan-500/20 bg-background p-4">

                      <div className="flex items-center gap-2">

                        <Quote className="h-4 w-4 text-cyan-400" />

                        <span className="text-sm font-medium text-cyan-400">
                          Sources
                        </span>

                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">

                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs">
                          Page 4
                        </span>

                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs">
                          Figure 2
                        </span>

                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs">
                          Section 3.2
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Input */}

              <div className="border-t border-border p-5">

                <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3">

                  <input
                    placeholder="Ask another question..."
                    className="flex-1 bg-transparent outline-none"
                  />

                  <button className="rounded-xl bg-cyan-500 p-3 text-slate-950">

                    <Send className="h-4 w-4" />

                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="border-l border-border p-6">

              <h3 className="font-semibold text-foreground">
                Referenced Sources
              </h3>

              <div className="mt-6 space-y-4">

                {sources.map((source) => (
                  <div
                    key={source.page}
                    className="rounded-2xl border border-border p-4"
                  >
                    <p className="text-sm font-semibold text-cyan-400">
                      {source.page}
                    </p>

                    <p className="mt-2 text-sm text-muted">
                      {source.title}
                    </p>
                  </div>
                ))}

              </div>

              <h3 className="mt-10 font-semibold">
                Suggested Questions
              </h3>

              <div className="mt-4 space-y-3">

                {suggestions.map((item) => (
                  <button
                    key={item}
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-left transition hover:border-cyan-500/30"
                  >
                    <span className="text-sm">
                      {item}
                    </span>

                    <ChevronRight className="h-4 w-4 text-muted" />

                  </button>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ChatDemo;