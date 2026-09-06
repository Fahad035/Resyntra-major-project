import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Sparkles,
  Send,
  Bookmark,
  Download,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const papers = [
  {
    title: "Attention Is All You Need",
    pages: 15,
    active: true,
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    pages: 24,
  },
  {
    title: "GPT-4 Technical Report",
    pages: 98,
  },
];

const messages = [
  {
    role: "user",
    text: "Explain why Transformers outperform recurrent neural networks.",
  },
  {
    role: "assistant",
    text:
      "Transformers process tokens in parallel using self-attention, allowing long-range dependencies to be learned more efficiently than sequential RNN architectures.",
    citation: "Page 5 • Section 3.2",
    confidence: "98%",
  },
];

const suggestions = [
  "Explain Self Attention",
  "Summarize Methodology",
  "Find Research Gap",
  "Compare With BERT",
];

const ResearchWorkspace = () => {
  return (
    <section className="py-28">
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

          {/* Sidebar */}

          <div className="rounded-3xl border border-border bg-linear-to-br from-cyan-500/5 via-background to-violet-500/5 p-6">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Research Library
              </h3>

              <button className="rounded-xl border border-border p-2 hover:border-cyan-500">
                <Search size={18} />
              </button>

            </div>

            <div className="mt-8 space-y-4">

              {papers.map((paper) => (

                <motion.div
                  key={paper.title}
                  whileHover={{ x: 5 }}
                  className={`rounded-2xl border p-4 transition
                    ${
                      paper.active
                        ? "border-cyan-500 bg-cyan-500/10"
                        : "border-border hover:border-cyan-500/40"
                    }`}
                >

                  <div className="flex gap-3">

                    <div className="rounded-xl bg-cyan-500/10 p-3">
                      <FileText className="h-5 w-5 text-cyan-400" />
                    </div>

                    <div className="flex-1">

                      <h4 className="font-medium leading-6">
                        {paper.title}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        {paper.pages} Pages
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background/50 p-5">

              <div className="flex items-center gap-2">

                <Clock3 size={18} className="text-cyan-400" />

                <span className="font-medium">
                  AI Status
                </span>

              </div>

              <div className="mt-5 flex items-center gap-3">

                <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-sm text-muted">
                  Ready for questions
                </span>

              </div>

            </div>

          </div>

          {/* Chat */}

          <div className="rounded-3xl border border-border bg-linear-to-br from-background via-background to-cyan-500/5">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-border px-8 py-6">

              <div>

                <h2 className="text-2xl font-bold">
                  AI Research Assistant
                </h2>

                <p className="mt-1 text-muted">
                  Ask questions across your uploaded papers.
                </p>

              </div>

              <div className="flex gap-3">

                <button className="rounded-xl border border-border p-3 hover:border-cyan-500">
                  <Bookmark size={18} />
                </button>

                <button className="rounded-xl border border-border p-3 hover:border-cyan-500">
                  <Download size={18} />
                </button>

              </div>

            </div>

            {/* Messages */}

            <div className="space-y-8 px-8 py-8">

              {messages.map((message, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                >

                  {message.role === "user" ? (

                    <div className="ml-auto max-w-xl rounded-3xl bg-cyan-500 px-6 py-5 text-slate-950">
                      {message.text}
                    </div>

                  ) : (

                    <div className="max-w-3xl rounded-3xl border border-border bg-background/60 p-6">

                      <div className="flex items-center gap-3">

                        <div className="rounded-full bg-cyan-500/10 p-2">

                          <Sparkles
                            size={18}
                            className="text-cyan-400"
                          />

                        </div>

                        <h4 className="font-semibold">
                          AI Assistant
                        </h4>

                      </div>

                      <p className="mt-5 leading-8 text-muted">
                        {message.text}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">

                        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                          📖 {message.citation}
                        </span>

                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                          <CheckCircle2 className="mr-2 inline h-4 w-4" />
                          {message.confidence} Confidence
                        </span>

                      </div>

                    </div>

                  )}

                </motion.div>

              ))}

            </div>

            {/* Suggestions */}

            <div className="border-t border-border px-8 py-6">

              <p className="mb-4 font-medium">
                Suggested Questions
              </p>

              <div className="flex flex-wrap gap-3">

                {suggestions.map((item) => (

                  <button
                    key={item}
                    className="rounded-full border border-border px-5 py-3 text-sm transition hover:border-cyan-500 hover:bg-cyan-500/10"
                  >
                    {item}
                  </button>

                ))}

              </div>

              {/* Input */}

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-background p-3">

                <input
                  placeholder="Ask anything about your uploaded papers..."
                  className="flex-1 bg-transparent outline-none"
                />

                <button className="rounded-xl bg-cyan-500 p-3 text-slate-950 transition hover:scale-105">

                  <Send size={18} />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResearchWorkspace;