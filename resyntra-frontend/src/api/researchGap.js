import api from "./axios";

export const generateResearchGap = async ({
  projectId,
  collectionId = null,
  topic,
}) => {
  const response = await api.post("/research-gap", {
    project_id: projectId,
    collection_id: collectionId,
    topic,
  });

  return response.data;
};