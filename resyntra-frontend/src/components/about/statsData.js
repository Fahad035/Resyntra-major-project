// Every figure below is verifiable from the repository itself
// (backend/app/modules, ai/providers, search/*, eval/rag_results.md).
const statsData = [
  { value: 20, suffix: "", label: "Backend modules", hint: "FastAPI, domain-driven" },
  { value: 4, suffix: "", label: "AI providers", hint: "Auto retry + fallback" },
  { value: 4, suffix: "", label: "Academic sources", hint: "arXiv · Crossref · OpenAlex · PubMed" },
  { value: 88.8, suffix: "%", decimals: 1, label: "RAG answer score", hint: "10-question evaluation set" },
];

export default statsData;