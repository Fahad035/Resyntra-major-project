import api from "./axios";

export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const getProjectCollections = async (projectId) => {
  const response = await api.get(
    `/projects/${projectId}/collections`
  );

  return response.data;
};