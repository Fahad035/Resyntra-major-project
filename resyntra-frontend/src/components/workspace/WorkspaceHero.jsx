import {
  ArrowUpRight,
  Database,
  Files,
  Search,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";

import { usePapers } from "@/context/PaperContext";

const MAX_FILE_SIZE = 50 * 1024 * 1024;

const WorkspaceHero = () => {
  const fileInputRef = useRef(null);

  const {
    papers,
    uploading,
    upload,
  } = usePapers();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("Maximum file size is 50 MB.");
      event.target.value = "";
      return;
    }

    try {
      await upload(file);
    } catch {
      // PaperContext already handles the error toast.
    } finally {
      event.target.value = "";
    }
  };

  const uploadedCount = papers?.length ?? 0;

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px]" />

        <div className="absolute right-[5%] top-10 h-96 w-96 rounded-full bg-violet-500/8 blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
            bg-size-[44px_44px]
          "
        />
      </div>

      <div className="relative mx-auto w-[92%] max-w-7xl py-16 lg:py-20">
        {/* Status */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 border-b border-border pb-7 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
              <Database className="h-4 w-4 text-cyan-400" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Resyntra Workspace
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-medium text-emerald-400">
                  Research systems online
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-2">
              <Files className="h-4 w-4" />

              <span>
                {uploadedCount} personal papers
              </span>
            </div>

            <div className="hidden h-4 w-px bg-border sm:block" />

            <div className="hidden items-center gap-2 sm:flex">
              <Sparkles className="h-4 w-4 text-cyan-400" />

              AI research environment
            </div>
          </div>
        </motion.div>

        {/* Heading */}

        <div className="mt-14 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <Search className="h-3.5 w-3.5" />

              Research Intelligence
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Your research.
              <br />

              <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                One intelligent library.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted lg:text-lg">
              Explore influential research, discover emerging ideas,
              and build your own AI-ready research library from one
              workspace.
            </p>
          </motion.div>

          {/* Upload */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <button
              type="button"
              disabled={uploading}
              onClick={handleUploadClick}
              className="
                group
                relative
                flex
                min-w-64
                items-center
                justify-between
                gap-8
                overflow-hidden
                rounded-2xl
                border
                border-cyan-400/30
                bg-cyan-400
                px-5
                py-4
                text-left
                text-slate-950
                shadow-[0_20px_70px_rgba(34,211,238,0.14)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-300
                hover:shadow-[0_25px_90px_rgba(34,211,238,0.22)]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <div>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <UploadCloud className="h-5 w-5" />

                  {uploading
                    ? "Uploading paper..."
                    : "Upload research paper"}
                </div>

                <p className="mt-1 text-xs text-slate-950/65">
                  PDF · Maximum 50 MB
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </button>

            <input
              ref={fileInputRef}
              hidden
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
            />
          </motion.div>
        </div>

        {/* Metrics */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur md:grid-cols-3"
        >
          <div className="border-b border-border p-6 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Personal Library
            </p>

            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-black text-foreground">
                {uploadedCount}
              </span>

              <span className="mb-1 text-sm text-muted">
                papers
              </span>
            </div>
          </div>

          <div className="border-b border-border p-6 md:border-b-0 md:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Discovery Library
            </p>

            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-black text-foreground">
                60+
              </span>

              <span className="mb-1 text-sm text-muted">
                curated papers
              </span>
            </div>
          </div>

          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              AI Ready
            </p>

            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-black text-emerald-400">
                Live
              </span>

              <span className="mb-1 text-sm text-muted">
                ingestion pipeline
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkspaceHero;