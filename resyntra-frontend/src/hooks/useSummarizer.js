import { useCallback, useState } from "react";

import { summarizePaper } from "@/api/summarizer";

const useSummarizer = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = useCallback(async (paperId) => {
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      const { summary: text } = await summarizePaper(paperId);
      setSummary(text);
    } catch (err) {
      setError(
        err?.response?.data?.detail ||
          "Couldn't generate a summary for that paper. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setSummary(null);
    setError(null);
  }, []);

  return { summary, loading, error, generate, reset };
};

export default useSummarizer;