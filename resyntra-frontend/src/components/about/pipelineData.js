import { FileUp, ScanText, Scissors, Binary, SearchCheck, Sparkles } from "lucide-react";

const pipelineData = [
  { icon: FileUp, title: "Upload", description: "PDF papers are uploaded and queued for background processing with Celery + Redis." },
  { icon: ScanText, title: "Parse", description: "PyMuPDF extracts clean text and structure from each paper." },
  { icon: Scissors, title: "Chunk", description: "Text is split into overlapping chunks that preserve context." },
  { icon: Binary, title: "Embed", description: "Chunks become vectors stored in Qdrant, tagged by paper." },
  { icon: SearchCheck, title: "Retrieve", description: "Your question is matched by cosine similarity to the best evidence." },
  { icon: Sparkles, title: "Generate", description: "A resilient LLM layer answers grounded in your papers, not memory." },
];

export default pipelineData;