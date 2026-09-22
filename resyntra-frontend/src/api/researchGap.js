import api from "./client";

export const generateResearchGap = async ({ paperIds, topic }) => {
  const response = await api.post("/research-gap", {
    paper_ids: paperIds,
    topic,
  });

  return response.data;
};