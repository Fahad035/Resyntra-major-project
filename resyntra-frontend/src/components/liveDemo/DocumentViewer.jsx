import { motion } from "framer-motion";
import {
  FileText,
  Highlighter,
  CheckCircle2,
  Brain,
} from "lucide-react";

const paragraphs = [
  {
    id: 1,
    highlight: false,
    text: "Transformers have revolutionized natural language processing by replacing recurrent architectures with self-attention mechanisms.",
  },
  {
    id: 2,
    highlight: true,
    text: "The proposed architecture significantly improves training efficiency while achieving superior translation quality across multiple benchmark datasets.",
  },
  {
    id: 3,
    highlight: false,
    text: "Experimental results demonstrate strong scalability and improved contextual understanding for long sequence modeling tasks.",
  },
];

const DocumentViewer = () => {
  return (
    <div className="flex h-full flex-col bg-(--surface)/30">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-border px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

            <FileText className="h-6 w-6 text-cyan-400" />

          </div>

          <div>

            <h3 className="font-semibold text-foreground">
              Attention Is All You Need.pdf
            </h3>

            <p className="text-sm text-muted">
              15 Pages • Uploaded Today
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">

          <CheckCircle2 className="h-4 w-4 text-green-400" />

          <span className="text-xs font-semibold text-green-400">
            AI Ready
          </span>

        </div>

      </div>

      {/* PDF */}

      <div className="flex-1 overflow-y-auto px-8 py-8">

        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-10 shadow-2xl">

          {/* Paper Header */}

          <div className="border-b border-slate-200 pb-6">

            <h1 className="text-3xl font-bold text-slate-900">
              Attention Is All You Need
            </h1>

            <p className="mt-3 text-muted">
              Vaswani et al.
            </p>

          </div>

          {/* Abstract */}

          <div className="mt-8">

            <div className="mb-6 flex items-center gap-2">

              <Brain className="h-5 w-5 text-cyan-600" />

              <h2 className="font-semibold text-slate-900">
                Abstract
              </h2>

            </div>

            <div className="space-y-6">

              {paragraphs.map((paragraph) => (

                <motion.div
                  key={paragraph.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: paragraph.id * 0.15 }}
                >

                  {paragraph.highlight ? (

                    <div className="relative overflow-hidden rounded-2xl bg-yellow-100 p-5">

                      {/* Animated Scan */}

                      <motion.div
                        animate={{
                          x: ["-100%", "120%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 w-20 bg-linear-to-r from-transparent via-cyan-300/30 to-transparent"
                      />

                      <div className="relative z-10">

                        <div className="mb-3 flex items-center gap-2">

                          <Highlighter className="h-4 w-4 text-yellow-700" />

                          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                            AI Highlight
                          </span>

                        </div>

                        <p className="leading-8 text-slate-800">
                          {paragraph.text}
                        </p>

                      </div>

                    </div>

                  ) : (

                    <p className="leading-8 text-slate-700">
                      {paragraph.text}
                    </p>

                  )}

                </motion.div>

              ))}

            </div>

          </div>

          {/* Footer */}

          <div className="mt-12 border-t border-slate-200 pt-6">

            <div className="flex items-center justify-between">

              <span className="text-sm text-muted">
                Page 1 of 15
              </span>

              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                AI Analysis Active
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DocumentViewer;