import api from "./axios";

export const askQuestion = async (paperId, question) => {
  const response = await api.post("/chat", {
    paper_id: paperId,
    question,
  });

  return response.data;
};