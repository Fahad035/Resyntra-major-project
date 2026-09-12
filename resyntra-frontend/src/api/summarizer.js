import api from "./axios";

/*
|--------------------------------------------------------------------------
| Generate AI Summary
|--------------------------------------------------------------------------
|
| Backend:
| POST /summarizer
|
| Request:
| {
|   paper_id: UUID
| }
|
| Response:
| {
|   summary: string
| }
|
*/

export const summarizePaper = async (paperId) => {
  const response = await api.post("/summarizer", {
    paper_id: paperId,
  });

  return response.data;
};