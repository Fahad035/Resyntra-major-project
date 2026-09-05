import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Upload,
  FileText,
  Star,
  Clock3,
  CheckCircle2,
  MoreHorizontal,
} from "lucide-react";

const papers = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    year: "2017",
    tag: "Transformer",
    status: "Analyzed",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Devlin et al.",
    year: "2018",
    tag: "NLP",
    status: "Indexed",
  },
  {
    title: "Retrieval-Augmented Generation",
    authors: "Lewis et al.",
    year: "2020",
    tag: "RAG",
    status: "Ready",
  },
  {
    title: "GPT-4 Technical Report",
    authors: "OpenAI",
    year: "2023",
    tag: "LLM",
    status: "Analyzed",
  },
];

const LibraryMockup = () => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-border
        bg-card
        shadow-[0_30px_80px_rgba(0,0,0,.18)]
      "
    >
      {/* Browser Bar */}

      <div className="flex items-center justify-between border-b border-border px-6 py-4">

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="rounded-lg bg-background px-5 py-2 text-xs text-muted">
          Research Library
        </div>

        <Upload className="h-5 w-5 text-cyan-400" />

      </div>

      {/* Toolbar */}

      <div className="flex items-center justify-between border-b border-border px-6 py-4">

        <div className="flex items-center gap-3 rounded-xl bg-background px-4 py-2">

          <Search className="h-4 w-4 text-muted" />

          <span className="text-sm text-muted">
            Search papers...
          </span>

        </div>

        <button className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm transition hover:border-cyan-400">

          <Filter className="h-4 w-4" />

          Filters

        </button>

      </div>

      {/* Table */}

      <div className="divide-y divide-border">

        {papers.map((paper, index) => (

          <motion.div
            key={paper.title}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            className="
              flex
              items-center
              justify-between
              px-6
              py-5
              transition
              hover:bg-background
            "
          >
            <div className="flex items-center gap-4">

              <div className="rounded-xl bg-cyan-500/10 p-3">

                <FileText className="h-5 w-5 text-cyan-400" />

              </div>

              <div>

                <h4 className="font-semibold text-foreground">

                  {paper.title}

                </h4>

                <p className="mt-1 text-sm text-muted">

                  {paper.authors} • {paper.year}

                </p>

              </div>

            </div>

            <div className="hidden items-center gap-8 lg:flex">

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">

                {paper.tag}

              </span>

              <div className="flex items-center gap-2 text-sm text-muted">

                <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                {paper.status}

              </div>

              <button className="rounded-lg p-2 transition hover:bg-background">

                <Star className="h-4 w-4 text-amber-400" />

              </button>

              <button className="rounded-lg p-2 transition hover:bg-background">

                <Clock3 className="h-4 w-4 text-muted" />

              </button>

              <button className="rounded-lg p-2 transition hover:bg-background">

                <MoreHorizontal className="h-4 w-4 text-muted" />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Bottom */}

      <div className="flex items-center justify-between border-t border-border bg-background px-6 py-4">

        <div>

          <p className="text-sm font-medium">

            248 Papers Indexed

          </p>

          <p className="text-xs text-muted">

            Updated just now

          </p>

        </div>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:scale-105">

          Upload Paper

        </button>

      </div>

    </motion.div>
  );
};

export default LibraryMockup;