import {
  ArrowRight,
  BrainCircuit,
  FileText,
  Search,
  Sparkles,
} from "lucide-react";

const IntroductionContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-medium text-(--muted-foreground)">
          <BookIcon />
          Documentation
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-(--foreground) sm:text-4xl">
          Introduction
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground)">
          Resyntra is an AI-powered research assistant designed to help
          students and researchers discover, understand, organize, and
          work with academic literature from a single research workspace.
        </p>
      </div>

      {/* Overview */}
      <section
        id="overview"
        className="scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Overview
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Academic research often requires working with a large number of
          research papers, extracting important information, comparing
          findings, identifying relevant literature, and turning those
          findings into useful academic outputs. Resyntra brings these
          activities together by combining research discovery, paper
          management, semantic search, retrieval-augmented AI, and
          research productivity tools in one application.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Instead of treating each research task as a separate workflow,
          Resyntra provides a connected environment where papers can be
          uploaded and organized, AI can analyze their content, and
          researchers can interact with their literature through natural
          language.
        </p>
      </section>

      {/* What is Resyntra */}
      <section
        id="what-is-resyntra"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          What is Resyntra?
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Resyntra is a Generative AI-based intelligent research
          assistant focused on academic paper analysis and knowledge
          discovery. The platform is designed around the complete
          research workflow, from discovering relevant literature to
          analyzing papers and preparing research outputs.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          The application combines traditional research tools with AI
          capabilities. Researchers can use semantic search to find
          conceptually relevant papers, upload their own documents,
          generate summaries, ask questions about indexed papers, create
          citations, explore literature, identify potential research gaps,
          and generate presentation material from research papers.
        </p>
      </section>

      {/* Core capabilities */}
      <section
        id="core-capabilities"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Core capabilities
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Resyntra is organized around several capabilities that support
          different stages of academic research. These capabilities work
          together so that information discovered during one stage can be
          used in later research activities.
        </p>

        <div className="mt-6 space-y-3">
          <Capability
            icon={Search}
            title="Research Discovery"
            description="Discover academic literature using semantic and research-oriented search across external scholarly sources."
          />

          <Capability
            icon={FileText}
            title="Paper Analysis"
            description="Upload research papers and use AI-powered summarization and document analysis to understand their content."
          />

          <Capability
            icon={BrainCircuit}
            title="AI Research Assistant"
            description="Ask questions about indexed papers and retrieve relevant information using retrieval-augmented generation."
          />

          <Capability
            icon={Sparkles}
            title="Research Productivity"
            description="Create notes, citations, literature reviews, research-gap insights, analytics, and presentation material."
          />
        </div>
      </section>

      {/* Research workflow */}
      <section
        id="research-workflow"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Research workflow
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          A typical workflow begins with discovering relevant research
          papers or uploading papers that are already available to the
          researcher. The papers can then be organized into projects and
          collections for easier management.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Once papers are processed, Resyntra can extract their content,
          divide the document into searchable chunks, generate embeddings,
          and index the information for semantic retrieval. This allows
          the AI assistant to retrieve relevant sections of research
          papers when answering questions.
        </p>

        <div className="mt-6 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <WorkflowStep label="Discover" />

            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Upload" />

            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Analyze" />

            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Ask AI" />

            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Create" />
          </div>
        </div>
      </section>

      {/* AI powered research */}
      <section
        id="ai-powered-research"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          AI-powered research
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          AI features are integrated into the research workflow rather
          than being provided as isolated tools. For example, after a
          paper is uploaded and processed, its content can be used by the
          summarizer and paper chat system. Semantic retrieval helps
          identify relevant sections before the language model generates
          a response.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          This approach allows researchers to interact with their own
          research collection using natural language while keeping the
          underlying documents as the primary information source for
          paper-specific questions.
        </p>
      </section>

      {/* Who is it for */}
      <section
        id="who-is-resyntra-for"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Who is Resyntra for?
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Resyntra is intended for students, researchers, and academic
          users who regularly work with research literature. It can
          support activities such as literature exploration, paper
          analysis, research organization, academic writing preparation,
          and presentation creation.
        </p>
      </section>

      {/* Next steps */}
      <section
        id="next-steps"
        className="mt-12 scroll-mt-24 border-t border-(--border) pt-8"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Next steps
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          If you are new to Resyntra, start with the Quickstart guide to
          understand the basic research workflow. You can then explore
          the Research Workspace, paper management, AI features, and
          research tools available throughout the platform.
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("quickstart")}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-hover)"
        >
          Continue with Quickstart
          <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </article>
  );
};

const Capability = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-(--foreground)">
          {title}
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
          {description}
        </p>
      </div>
    </div>
  );
};

const WorkflowStep = ({ label }) => {
  return (
    <span className="rounded-md border border-(--border) bg-(--background) px-2.5 py-1.5 font-medium text-(--foreground)">
      {label}
    </span>
  );
};

const BookIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  );
};

export default IntroductionContent;