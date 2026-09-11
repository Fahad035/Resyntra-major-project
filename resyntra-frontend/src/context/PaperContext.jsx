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

  const upload = async (file) => {
    try {
      setUploading(true);

      const paper = await uploadPaper(file);

      toast.success(
        "Paper uploaded successfully."
      );

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

      toast.success("Paper deleted.");

      setPapers((prev) =>
        prev.filter((paper) => paper.id !== paperId)
      );
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