import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileStack } from "lucide-react";

import { Container } from "@/components/ui";
import usePapers from "@/hooks/usePapers";

import PaperMultiSelect from "@/components/researchGap/PaperMultiSelect";
import GapResultPanel from "@/components/researchGap/GapResultPanel";

const ResearchGapFinder = () => {
  const { papers, loading, uploading, upload } = usePapers();
  const [selectedIds, setSelectedIds] = useState([]);

  const readyCount = papers.filter((p) => p.processing_status === "completed").length;
  const selectedPapers = papers.filter((p) => selectedIds.includes(p.id));

  // Drop any selected paper that no longer exists (e.g. deleted
  // elsewhere) so we never submit a stale id.
  useEffect(() => {
    setSelectedIds((prev) => prev.filter((id) => papers.some((p) => p.id === id)));
  }, [papers]);

  const toggleSelected = (paperId) => {
    setSelectedIds((prev) =>
      prev.includes(paperId)
        ? prev.filter((id) => id !== paperId)
        : [...prev, paperId]
    );
  };

  return (
    <main className="bg-surface text-foreground">
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              AI Research Assistant
            </span>

            <h1 className="mt-6 text-4xl font-bold text-foreground md:text-5xl">
              Find gaps across your papers
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Compare multiple papers at once — surface research gaps,
              conflicting findings, and future directions worth exploring.
            </p>

            {readyCount > 0 && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400">
                <FileStack className="h-3.5 w-3.5" />
                {readyCount} paper{readyCount !== 1 ? "s" : ""} available to compare
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-12"
          >
            <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-cyan-500/20 via-indigo-500/10 to-purple-500/20 opacity-50 blur-sm" />

            <div className="relative grid h-[70vh] min-h-140 grid-cols-1 overflow-hidden rounded-3xl border border-border bg-surface md:grid-cols-[320px_1fr]">
              <PaperMultiSelect
                papers={papers}
                loading={loading}
                uploading={uploading}
                selectedIds={selectedIds}
                onToggle={toggleSelected}
                onUpload={upload}
              />

              <GapResultPanel
                selectedIds={selectedIds}
                selectedPapers={selectedPapers}
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default ResearchGapFinder;