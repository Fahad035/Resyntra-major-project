import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import toast from "react-hot-toast";

import {
  getPapers,
  uploadPaper,
  deletePaper,
} from "@/api/papers";

const PaperContext = createContext(null);

const PROCESSING_STATUSES = new Set([
  "pending",
  "processing",
]);

export const PaperProvider = ({ children }) => {
  const [papers, setPapers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [uploading, setUploading] = useState(false);

  const loadPapers = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getPapers();

      setPapers(data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load papers.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPapers();
  }, [loadPapers]);

  /*
   * Poll the backend while papers are still being processed.
   *
   * The backend remains the source of truth for the
   * processing_status value.
   */
  useEffect(() => {
    const hasProcessingPapers = papers.some((paper) =>
      PROCESSING_STATUSES.has(
        paper.processing_status ?? "pending"
      )
    );

    if (!hasProcessingPapers) {
      return undefined;
    }

    const interval = setInterval(() => {
      loadPapers();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [papers, loadPapers]);

  const upload = async (file) => {
    try {
      setUploading(true);

      const paper = await uploadPaper(file);

      /*
       * Immediately show the uploaded paper returned
       * by the backend instead of waiting for the next
       * full request.
       */
      if (paper) {
        setPapers((prev) => {
          const exists = prev.some(
            (item) => item.id === paper.id
          );

          if (exists) {
            return prev.map((item) =>
              item.id === paper.id
                ? paper
                : item
            );
          }

          return [paper, ...prev];
        });
      }

      toast.success(
        "Paper uploaded successfully."
      );

      /*
       * Refresh once so the frontend has the latest
       * backend state.
       */
      await loadPapers();

      return paper;
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ??
          "Upload failed."
      );

      throw error;
    } finally {
      setUploading(false);
    }
  };

  const remove = async (paperId) => {
    try {
      await deletePaper(paperId);

      setPapers((prev) =>
        prev.filter(
          (paper) => paper.id !== paperId
        )
      );

      toast.success("Paper deleted.");
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ??
          "Delete failed."
      );
    }
  };

  const refresh = async () => {
    await loadPapers();
  };

  return (
    <PaperContext.Provider
      value={{
        papers,
        loading,
        uploading,
        upload,
        remove,
        refresh,
      }}
    >
      {children}
    </PaperContext.Provider>
  );
};

export const usePapers = () => {
  const context = useContext(PaperContext);

  if (!context) {
    throw new Error(
      "usePapers must be used inside PaperProvider."
    );
  }

  return context;
};