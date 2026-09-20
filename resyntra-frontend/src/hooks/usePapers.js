import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { deletePaper, getPapers, uploadPaper } from "@/api/papers";

const ACTIVE_STATUSES = new Set(["pending", "processing"]);
const POLL_INTERVAL_MS = 4000;

const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const pollRef = useRef(null);

  const fetchPapers = useCallback(async () => {
    try {
      const data = await getPapers();
      setPapers(data);
      return data;
    } catch (error) {
      toast.error("Couldn't load your papers.");
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPapers();
  }, [fetchPapers]);

  // Poll while any paper is still pending/processing, so the sidebar
  // flips to "Ready" on its own once the Celery task finishes embedding.
  useEffect(() => {
    const hasActivePaper = papers.some((paper) =>
      ACTIVE_STATUSES.has(paper.processing_status)
    );

    if (!hasActivePaper) {
      return undefined;
    }

    pollRef.current = setInterval(() => {
      fetchPapers();
    }, POLL_INTERVAL_MS);

    return () => clearInterval(pollRef.current);
  }, [papers, fetchPapers]);

  const upload = useCallback(async (file) => {
    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are supported.");
      return null;
    }

    try {
      setUploading(true);
      const paper = await uploadPaper(file);
      setPapers((prev) => [paper, ...prev]);
      toast.success(`"${paper.title}" uploaded — processing started.`);
      return paper;
    } catch (error) {
      toast.error(
        error?.response?.data?.detail || "Upload failed. Try again."
      );
      return null;
    } finally {
      setUploading(false);
    }
  }, []);

  const remove = useCallback(async (paperId) => {
    try {
      await deletePaper(paperId);
      setPapers((prev) => prev.filter((paper) => paper.id !== paperId));
      toast.success("Paper deleted.");
    } catch (error) {
      toast.error("Couldn't delete that paper.");
    }
  }, []);

  return { papers, loading, uploading, upload, remove, refresh: fetchPapers };
};

export default usePapers;