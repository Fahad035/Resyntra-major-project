import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileStack } from "lucide-react";

import { Container } from "@/components/ui";
import usePapers from "@/hooks/usePapers";

import PaperSidebar from "@/components/chat/PaperSidebar";
import ChatPanel from "@/components/chat/ChatPanel";

const ChatWithPapers = () => {
  const { papers, loading, uploading, upload, remove } = usePapers();
  const [activePaperId, setActivePaperId] = useState(null);

  const activePaper = papers.find((paper) => paper.id === activePaperId) || null;
  const readyCount = papers.filter((p) => p.processing_status === "completed").length;

  // Keep the open conversation in sync with polling updates (e.g. a
  // paper flips from "processing" to "completed" while it's selected,
  // or gets deleted from another tab).
  useEffect(() => {
    if (activePaperId && !papers.some((p) => p.id === activePaperId)) {
      setActivePaperId(null);
    }
  }, [papers, activePaperId]);

  const handleDelete = async (paperId) => {
    await remove(paperId);
    if (paperId === activePaperId) {
      setActivePaperId(null);
    }
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
              Chat with your papers
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Upload a PDF and ask it anything — every answer is grounded
              only in that paper's own content.
            </p>

            {readyCount > 0 && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400">
                <FileStack className="h-3.5 w-3.5" />
                {readyCount} paper{readyCount !== 1 ? "s" : ""} ready to chat
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
              <PaperSidebar
                papers={papers}
                loading={loading}
                uploading={uploading}
                activePaperId={activePaperId}
                onUpload={upload}
                onSelect={(paper) => setActivePaperId(paper.id)}
                onDelete={handleDelete}
              />

              <ChatPanel paper={activePaper} />
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default ChatWithPapers;