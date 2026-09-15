import api from "./axios";

const pptGeneratorApi = {
  generate: async (paperId, slides = 10) => {
    const response = await api.post(
      "/ppt-generator",
      {
        paper_id: paperId,
        slides,
      }
    );

    return response.data;
  },
};

export default pptGeneratorApi;