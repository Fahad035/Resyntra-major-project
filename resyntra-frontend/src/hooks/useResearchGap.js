import { useCallback, useState } from "react";

import { generateResearchGap } from "@/api/researchGap";

const useResearchGap = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = useCallback(async (paperIds, topic) => {
    setLoading(true);
    setError(null);
    setReport(null);

    try {
      const { research_gap } = await generateResearchGap({ paperIds, topic });
      setReport(research_gap);
    } catch (err) {
      setError(
        err?.response?.data?.detail ||
          "Couldn't generate a research gap report. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setReport(null);
    setError(null);
  }, []);

  return { report, loading, error, generate, reset };
};

export default useResearchGap;