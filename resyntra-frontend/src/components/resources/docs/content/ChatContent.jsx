import {
  MessageSquare,
  BrainCircuit,
  Search,
  FileText,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const ChatContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-(--muted-foreground)">
          <MessageSquare className="h-4 w-4 text-(--primary)" />
          AI Features
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
          Chat with Papers
        </h1>

        <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
          Ask questions about your research papers and explore their content
          through an AI-powered question-answering workflow.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Overview
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Chat with Papers allows you to interact with indexed research
          documents using natural-language questions. Resyntra retrieves
          relevant sections from the paper and uses them as context for the AI
          response.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          How it works
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          The feature uses a retrieval-augmented generation workflow. Your
          question is converted into an embedding, relevant paper content is
          retrieved from the indexed research data, and the retrieved context
          is provided to the AI system when generating the response.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: HelpCircle,
              number: "01",
              title: "Ask",
              description:
                "Enter a natural-language question about the paper.",
            },
            {
              icon: Search,
              number: "02",
              title: "Retrieve",
              description:
                "Relevant indexed sections are identified for the question.",
            },
            {
              icon: BrainCircuit,
              number: "03",
              title: "Answer",
              description:
                "The AI generates a response using the retrieved context.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-[10px] font-semibold text-(--muted-foreground)">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-semibold text-(--foreground)">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Getting started */}
      <section id="getting-started" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Getting started
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              number: "01",
              title: "Choose a processed paper",
              description:
                "Select a paper that has completed document processing.",
            },
            {
              number: "02",
              title: "Open Chat with Papers",
              description:
                "Open the chat interface for the selected research paper.",
            },
            {
              number: "03",
              title: "Ask a question",
              description:
                "Ask about the paper's concepts, methods, findings, or other relevant content.",
            },
            {
              number: "04",
              title: "Review the response",
              description:
                "Use the generated response as a way to explore the paper and identify areas for deeper reading.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-xs font-semibold text-(--primary)">
                {step.number}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-(--foreground)">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-(--muted-foreground)">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example questions */}
      <section id="example-questions" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Example questions
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          You can ask focused questions that help you understand specific
          aspects of a research paper.
        </p>

        <div className="mt-5 space-y-2">
          {[
            "What problem does this paper address?",
            "What methodology was used?",
            "What are the main findings?",
            "What limitations are discussed?",
            "How does this work relate to the research problem?",
          ].map((question) => (
            <div
              key={question}
              className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3"
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0 text-(--primary)" />

              <span className="text-xs text-(--muted-foreground)">
                {question}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* RAG */}
      <section id="retrieval-context" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Retrieval context
        </h2>

        <p className="mt-3 text-sm leading-7 text-(--muted-foreground)">
          Resyntra retrieves relevant chunks from the indexed paper instead of
          relying only on a general AI response. This provides the model with
          document-specific context when answering questions.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <Search className="mt-0.5 h-4 w-4 shrink-0 text-(--primary)" />

            <div>
              <h3 className="text-sm font-semibold text-(--foreground)">
                Paper-aware answers
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                The retrieval process searches the indexed content of the
                selected paper and provides relevant passages to the AI
                generation step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Best practices
        </h2>

        <div className="mt-5 space-y-3">
          {[
            {
              icon: HelpCircle,
              title: "Ask focused questions",
              description:
                "Specific questions generally make it easier to retrieve relevant information from a paper.",
            },
            {
              icon: FileText,
              title: "Use the original paper for verification",
              description:
                "For important academic claims, check the response against the source document.",
            },
            {
              icon: ShieldCheck,
              title: "Treat AI as a research assistant",
              description:
                "Use generated responses to explore and understand literature rather than replacing critical reading.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-(--foreground)">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-(--muted-foreground)">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommended workflow */}
      <section id="recommended-workflow" className="mb-12 scroll-mt-24">
        <h2 className="text-xl font-semibold text-(--foreground)">
          Recommended workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
          {[
            "Select paper",
            "Ask",
            "Retrieve",
            "Review answer",
            "Read deeper",
          ].map((step, index, array) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-(--border) bg-(--surface) px-3 py-2 text-(--foreground)">
                {step}
              </span>

              {index !== array.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-(--muted-foreground)" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Next */}
      <div className="border-t border-(--border) pt-6">
        <button
          type="button"
          onClick={() => onSectionChange("semantic-search")}
          className="group flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <p className="text-xs text-(--muted-foreground)">
              Next
            </p>

            <p className="mt-1 text-sm font-semibold text-(--foreground)">
              Semantic Search
            </p>
          </div>

          <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </div>
    </article>
  );
};

export default ChatContent;