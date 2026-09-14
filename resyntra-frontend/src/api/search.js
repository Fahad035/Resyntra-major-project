import api from "./axios";

export const hybridSearch = async (
  query,
  limit = 10
) => {
  const response = await api.post(
    "/search/hybrid",
    {
      query,
      limit,
    }
  );

  return response.data;
};

export const semanticSearch = async (
  query,
  limit = 10
) => {
  const response = await api.post(
    "/search/semantic",
    {
      query,
      limit,
    }
  );

  return response.data;
};

export const searchPapers = async (
  query,
  limit = 20
) => {
  const response = await api.get(
    "/search/papers",
    {
      params: {
        q: query,
        limit,
      },
    }
  );

  return response.data;
};