import { useState } from "react";

import { uploadPaper } from "@/api/papers";

export default function usePaperUpload() {
  const [loading, setLoading] = useState(false);

  const upload = async (file) => {
    setLoading(true);

    try {
      const paper = await uploadPaper(file);

      return paper;
    } finally {
      setLoading(false);
    }
  };

  return {
    upload,
    loading,
  };
}