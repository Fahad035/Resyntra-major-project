import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Upload,
  FileText,
  Trash2,
  CheckCircle2,
  Clock3,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

import { usePapers } from "@/context/PaperContext";

const statusStyles = {
  pending: {
    icon: Clock3,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  processing: {
    icon: Loader2,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  completed: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  failed: {
    icon: AlertCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
};

const LibraryMockup = () => {
  const {
    papers,
    loading,
    uploading,
    remove,
  } = usePapers();

  const [search, setSearch] = useState("");

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      const keyword = search.toLowerCase();

      return (
        paper.title?.toLowerCase().includes(keyword) ||
        paper.authors?.toLowerCase().includes(keyword)
      );
    });
  }, [papers, search]);

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
      {/* Browser */}

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

      <div className="flex flex-col gap-4 border-b border-border px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 rounded-xl bg-background px-4 py-2 flex-1">
          <Search className="h-4 w-4 text-muted" />

          <input
            type="text"
            placeholder="Search papers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-border
            px-4
            py-2
            text-sm
            transition
            hover:border-cyan-400
          "
        >
          <Filter className="h-4 w-4" />

          Filters
        </button>
      </div>

      {/* Loading */}

      {loading && (
        <div className="flex h-80 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
        </div>
      )}

      {/* Empty */}

      {!loading && filteredPapers.length === 0 && (
        <div className="flex h-80 flex-col items-center justify-center text-center">
          <FileText className="mb-5 h-14 w-14 text-muted" />

          <h3 className="text-xl font-semibold">
            No papers uploaded
          </h3>

          <p className="mt-2 text-muted">
            Upload your first research paper to start
            using AI features.
          </p>
        </div>
      )}

      {/* Papers */}

      {!loading && filteredPapers.length > 0 && (
        <div className="divide-y divide-border">
          {filteredPapers.map((paper, index) => {
            const status =
              statusStyles[paper.processing_status] ??
              statusStyles.pending;

            const StatusIcon = status.icon;

            return (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  flex
                  flex-col
                  gap-6
                  px-6
                  py-5
                  transition
                  hover:bg-background
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <FileText className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {paper.title}
                    </h4>

                    <p className="mt-1 text-sm text-muted">
                      {paper.authors || "Unknown Author"}
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      {paper.pages} pages •{" "}
                      {(paper.file_size / 1024 / 1024).toFixed(
                        2
                      )}{" "}
                      MB
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    PDF
                  </span>

                  <span
                    className={`
                      flex
                      items-center
                      gap-2
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium
                      ${status.bg}
                      ${status.color}
                    `}
                  >
                    <StatusIcon
                      className={`h-4 w-4 ${
                        paper.processing_status ===
                        "processing"
                          ? "animate-spin"
                          : ""
                      }`}
                    />

                    {paper.processing_status}
                  </span>

                  <button
                    onClick={() => remove(paper.id)}
                    className="
                      rounded-lg
                      p-2
                      transition
                      hover:bg-red-500/10
                    "
                  >
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Footer */}

      <div className="flex items-center justify-between border-t border-border bg-background px-6 py-4">
        <div>
          <p className="text-sm font-medium">
            {papers.length} Papers Uploaded
          </p>

          <p className="text-xs text-muted">
            Connected to Resyntra
          </p>
        </div>

        <div className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">
          {uploading ? "Uploading..." : "AI Ready"}
        </div>
      </div>
    </motion.div>
  );
};

export default LibraryMockup;