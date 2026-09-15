import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  FolderKanban,
  MessageSquare,
  Network,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <article className="mx-auto max-w-4xl">
      {/* Header */}
      <header className="border-b border-(--border) pb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-medium text-(--muted-foreground)">
          <BookIcon />
          Resyntra Documentation
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl">
          Introduction
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-(--muted-foreground)">
          Resyntra is a Generative AI-based intelligent research assistant
          designed to help students, researchers, and academic professionals
          discover, understand, organize, analyze, and communicate research
          more efficiently. The platform brings multiple stages of the
          academic research workflow into one intelligent workspace, allowing
          users to work with research papers, ask questions about documents,
          search for relevant literature, generate summaries, identify
          potential research gaps, manage citations and notes, and transform
          research material into useful academic outputs.
        </p>
      </header>

      {/* Overview */}
      <section id="overview" className="scroll-mt-24 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Overview
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Academic research often involves working with a large amount of
          information distributed across research papers, journals, conference
          publications, notes, references, and external academic sources.
          Researchers must repeatedly search for papers, read lengthy
          documents, identify relevant information, compare findings, organize
          literature, track citations, and convert their understanding into
          reports, presentations, and other academic deliverables. This
          process can become increasingly difficult as the number of papers
          involved in a research project grows.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra addresses this challenge by providing an integrated
          research environment where artificial intelligence is used to
          support different stages of the research lifecycle. Instead of
          treating paper discovery, paper analysis, knowledge retrieval,
          research organization, and content generation as completely separate
          activities, Resyntra connects these capabilities through a common
          research workspace. This allows users to move from discovering
          relevant literature to understanding papers and developing research
          knowledge without continuously switching between unrelated tools.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The platform is designed around the idea that AI should assist the
          researcher rather than replace the researcher's judgement. Resyntra
          helps reduce repetitive information-processing work while keeping
          the original research material at the center of the workflow. Users
          can upload their own papers, retrieve information from indexed
          documents, interact with papers through natural-language questions,
          and use AI-assisted capabilities to accelerate literature analysis
          and research preparation.
        </p>
      </section>

      {/* What is Resyntra */}
      <section id="what-is-resyntra" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          What is Resyntra?
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra is a research intelligence platform that combines academic
          paper management with Generative AI, semantic retrieval, research
          discovery, and productivity tools. The name represents the platform's
          goal of helping users bring scattered research information together
          into a connected and understandable research workflow. Rather than
          functioning only as a document storage system or only as an AI
          chatbot, Resyntra combines document intelligence, research
          discovery, knowledge retrieval, and academic productivity features
          within a unified application.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          A central part of Resyntra is its ability to work with the contents
          of uploaded research papers. When a paper is uploaded, its document
          content can be extracted and divided into smaller meaningful
          sections. These sections are transformed into numerical
          representations called embeddings and stored in a vector database.
          This makes it possible for the system to locate semantically
          relevant portions of research documents when a user asks a question
          or performs an AI-assisted retrieval operation.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra also extends beyond a user's uploaded library through
          academic research discovery. Its research search workflow can work
          with sources such as OpenAlex, PubMed, Crossref, and arXiv to help
          users discover potentially relevant academic literature. These
          capabilities allow Resyntra to support both sides of research:
          understanding the papers that a researcher already has and
          discovering additional literature that may be relevant to the
          research problem.
        </p>
      </section>

      {/* Why Resyntra */}
      <section id="why-resyntra" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Why Resyntra?
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The motivation behind Resyntra comes from the complexity of modern
          academic research workflows. A researcher may need to identify a
          research problem, find relevant publications, understand previous
          approaches, compare methodologies, identify limitations, formulate
          research gaps, organize references, maintain notes, and eventually
          prepare a report or presentation. Performing each activity manually
          can consume significant time, especially when researchers are
          working with dozens or hundreds of publications.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra attempts to reduce this friction by placing commonly
          required research activities within a single platform. The system
          provides tools for paper upload and management, AI-based
          summarization, conversational interaction with papers, semantic
          search, literature review assistance, research gap analysis,
          citation management, notes, research analytics, and presentation
          generation. Together, these capabilities provide a broader workflow
          than a conventional document-management application.
        </p>

        <div className="mt-7 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-(--primary)" />

            <p className="text-sm leading-6 text-(--foreground)">
              <span className="font-semibold">Core principle:</span>{" "}
              Resyntra is designed to turn scattered academic information into
              a structured, searchable, AI-assisted research workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section id="who-is-resyntra-for" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Who is Resyntra for?
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra is intended for students and researchers who regularly work
          with academic literature. Undergraduate and postgraduate students
          can use the platform to understand unfamiliar research areas,
          organize papers for assignments and projects, explore existing
          literature, and prepare academic presentations. Researchers can use
          the same environment to manage larger collections of literature,
          retrieve information from papers, explore related publications,
          analyze research trends, and support the early stages of literature
          review and research-gap identification.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The platform can also support academic workflows in which multiple
          research activities are connected. For example, a user may discover
          papers through academic search, add relevant papers to a research
          collection, upload important documents, summarize them, ask
          questions about their contents, record notes, generate citations,
          analyze the research landscape, and finally create a presentation
          from the selected research material.
        </p>
      </section>

      {/* Getting started */}
      <section id="getting-started" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Getting started
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          A typical Resyntra workflow begins in the research workspace. The
          workspace provides the central environment from which users can
          organize their research activities and access the platform's
          capabilities. Depending on the research task, a user can begin by
          creating or selecting a project, discovering papers, uploading
          documents, or working with an existing research collection.
        </p>

        <div className="mt-7 space-y-3">
          <WorkflowStep
            number="01"
            icon={FolderKanban}
            title="Create or enter a research workspace"
            description="Start by organizing the research activity around a dedicated workspace or project so that papers, notes, collections, and research tasks remain connected."
          />

          <WorkflowStep
            number="02"
            icon={Search}
            title="Discover relevant literature"
            description="Use academic search and semantic discovery capabilities to find research papers related to the topic, problem, methodology, or research question."
          />

          <WorkflowStep
            number="03"
            icon={Upload}
            title="Upload research papers"
            description="Add important PDF research papers to the platform so their content can be processed and made available for AI-assisted analysis and retrieval."
          />

          <WorkflowStep
            number="04"
            icon={BrainCircuit}
            title="Analyze papers with AI"
            description="Use summarization, paper conversations, semantic retrieval, literature review, and research-gap capabilities to understand the collected research."
          />

          <WorkflowStep
            number="05"
            icon={FileSearch}
            title="Organize research knowledge"
            description="Maintain collections, notes, citations, and other research information so that useful findings can be revisited throughout the project."
          />

          <WorkflowStep
            number="06"
            icon={Network}
            title="Transform research into outputs"
            description="Use the available productivity and generation capabilities to turn analyzed research into structured academic outputs such as citations, presentations, and research insights."
          />
        </div>
      </section>

      {/* Research workflow */}
      <section id="research-workflow" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Research workflow
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra's research workflow connects discovery, document processing,
          knowledge retrieval, analysis, organization, and output generation.
          The workflow does not require every user to follow exactly the same
          sequence. Instead, the platform provides a set of connected
          capabilities that can be used according to the researcher's current
          requirement. A student beginning a project may start with search,
          while an experienced researcher may begin by uploading an existing
          literature collection.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          When a research paper is uploaded, Resyntra processes its textual
          content and divides it into smaller chunks suitable for retrieval.
          The resulting chunks are converted into embeddings using the
          configured embedding model and stored in Qdrant, a vector database.
          When a user asks a question about the research material, the query
          can also be converted into an embedding. Resyntra then searches for
          document chunks that are semantically related to the question and
          provides the retrieved context to the AI generation layer. This
          retrieval-augmented generation approach allows responses to be based
          on relevant indexed research content rather than relying only on a
          general model response.
        </p>

        <div className="my-8 overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
          <div className="border-b border-(--border) px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted-foreground)">
              Research intelligence pipeline
            </p>
          </div>

          <div className="grid gap-px bg-(--border) sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Research Paper", "Upload or discover academic literature."],
              ["02", "Text Processing", "Extract and prepare document content."],
              ["03", "Embeddings", "Represent document meaning numerically."],
              ["04", "Vector Retrieval", "Find semantically relevant content."],
              ["05", "AI Response", "Generate context-aware research assistance."],
            ].map(([number, title, description]) => (
              <div key={number} className="bg-(--surface) p-4">
                <span className="text-[11px] font-semibold text-(--primary)">
                  {number}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-(--foreground)">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-(--muted-foreground)">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI powered research */}
      <section
        id="ai-powered-research"
        className="scroll-mt-24 border-t border-(--border) py-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          AI-powered research
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Artificial intelligence is integrated into Resyntra as a collection
          of research assistance capabilities rather than as a single
          conversational interface. Each capability addresses a different
          stage of the research process. AI summarization helps users
          understand papers more quickly, Chat with Papers provides
          conversational access to indexed document content, semantic search
          helps retrieve conceptually related information, and advanced
          research tools assist with literature review and research-gap
          analysis.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The RAG-based paper conversation workflow is particularly important
          because academic papers can contain hundreds of pages of detailed
          technical information. Instead of expecting the user to manually
          locate every relevant passage, Resyntra can retrieve semantically
          relevant chunks from the indexed paper collection and use those
          chunks as context for the response. This provides a more targeted
          interaction model for questions related to the user's research
          material.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <FeatureCard
            icon={FileSearch}
            title="AI Summarization"
            description="Convert lengthy research material into concise, structured information that helps users understand the central ideas, methods, findings, and contributions of a paper."
          />

          <FeatureCard
            icon={MessageSquare}
            title="Chat with Papers"
            description="Ask natural-language questions about indexed research papers and retrieve relevant document context before generating an AI-assisted answer."
          />

          <FeatureCard
            icon={Search}
            title="Semantic Search"
            description="Search according to meaning and conceptual similarity rather than depending only on exact keyword matches."
          />

          <FeatureCard
            icon={Network}
            title="Literature Review"
            description="Support the process of examining and organizing existing research around a topic or research question."
          />

          <FeatureCard
            icon={BrainCircuit}
            title="Research Gap Detection"
            description="Assist researchers in examining existing literature and identifying areas where further investigation may be valuable."
          />

          <FeatureCard
            icon={Sparkles}
            title="Research Assistance"
            description="Connect AI capabilities with the broader research workflow so users can move from document understanding toward academic outputs."
          />
        </div>
      </section>

      {/* Core application modules */}
      <section id="core-modules" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Core application modules
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra is organized into multiple functional areas that work
          together as a complete research environment. Research papers form the
          primary knowledge source, while projects and collections provide
          organizational structure. AI capabilities operate on research
          content, and productivity tools help users preserve and communicate
          the knowledge developed during the research process.
        </p>

        <div className="mt-8 space-y-4">
          <ModuleRow
            icon={FolderKanban}
            title="Projects and Collections"
            description="Provide organizational structures for grouping research papers and maintaining separate research activities."
          />

          <ModuleRow
            icon={Upload}
            title="Paper Upload and Management"
            description="Allows users to bring academic PDF documents into the platform and manage their research-paper library."
          />

          <ModuleRow
            icon={BrainCircuit}
            title="AI Research Tools"
            description="Provides summarization, conversational paper analysis, semantic retrieval, literature review, and research-gap capabilities."
          />

          <ModuleRow
            icon={FileSearch}
            title="Notes and Citations"
            description="Helps researchers preserve important observations and manage citation-related information while working with literature."
          />

          <ModuleRow
            icon={Network}
            title="Research Analytics"
            description="Provides an overview of research activity and related academic metrics available within the application."
          />

          <ModuleRow
            icon={Sparkles}
            title="PPT Generator"
            description="Transforms selected research material into presentation-oriented academic output."
          />
        </div>
      </section>

      {/* Research discovery */}
      <section id="research-discovery" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Research discovery
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Finding appropriate literature is one of the earliest and most
          important stages of a research project. Resyntra provides an
          academic discovery workflow that can combine results from multiple
          scholarly sources. The discovery layer is designed to help users
          find papers based on research topics, questions, concepts, and
          related terminology instead of restricting the workflow to a single
          academic source.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The current research discovery architecture integrates sources
          including OpenAlex, PubMed, Crossref, and arXiv. Results can be
          normalized and deduplicated so that the researcher receives a more
          coherent literature set. OpenAlex also provides semantic search
          capabilities that are useful when the user wants to discover
          conceptually related research rather than only papers containing an
          exact search phrase.
        </p>

        <div className="mt-7 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-(--success)" />
            <div>
              <p className="text-sm font-medium text-(--foreground)">
                Discovery principle
              </p>
              <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
                Search first, evaluate relevance, organize useful literature,
                and then bring the most important research material into the
                deeper AI-assisted analysis workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From research to output */}
      <section id="research-to-output" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          From research to academic output
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra is not limited to helping users discover and understand
          literature. Research information eventually needs to be transformed
          into usable academic outputs. During a project, researchers may
          need to preserve notes, organize references, analyze their research
          activity, prepare presentations, and communicate the results of
          their work. Resyntra therefore connects its research-analysis
          capabilities with productivity-oriented features.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The PPT Generator is one example of this workflow. After relevant
          research material has been selected, the platform can use that
          research context to generate presentation files. Similarly, notes
          and citation capabilities help users maintain supporting information
          throughout the research process rather than recreating it at the end
          of the project.
        </p>
      </section>

      {/* Architecture */}
      <section id="architecture" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Application architecture
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Resyntra follows a modern full-stack architecture in which the
          frontend provides the interactive research workspace and the backend
          manages application logic, data access, AI workflows, document
          processing, and API operations. The frontend is implemented using
          React and Vite, while the backend is built with FastAPI and Python.
          PostgreSQL is used for persistent application data, while Qdrant
          provides vector storage for semantic document retrieval.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The AI layer includes Gemini-based embeddings for converting
          research text and user queries into vector representations. Celery
          is used for background paper-processing tasks so that document
          extraction, chunking, embedding generation, and vector insertion can
          be handled as processing work rather than being tightly coupled to
          the immediate user interface request.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-(--border) bg-(--surface)">
          <div className="border-b border-(--border) px-5 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted-foreground)">
              High-level architecture
            </p>
          </div>

          <div className="space-y-0 divide-y divide-(--border)">
            <ArchitectureRow
              title="Frontend"
              description="React + Vite research workspace and user interface."
            />
            <ArchitectureRow
              title="Backend"
              description="Python + FastAPI APIs and application services."
            />
            <ArchitectureRow
              title="Database"
              description="PostgreSQL for structured application and research metadata."
            />
            <ArchitectureRow
              title="Vector Database"
              description="Qdrant for semantic storage and retrieval of document chunks."
            />
            <ArchitectureRow
              title="AI Layer"
              description="Generative AI and Gemini embeddings for intelligent research assistance."
            />
            <ArchitectureRow
              title="Background Processing"
              description="Celery-based processing for paper extraction, chunking, embedding, and indexing."
            />
          </div>
        </div>
      </section>

      {/* Example workflow */}
      <section id="example-workflow" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Example: from paper to insight
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          Consider a researcher investigating a new machine-learning topic.
          The researcher can begin by discovering relevant papers through
          Resyntra's academic search capabilities. After identifying important
          publications, the researcher can organize them within a project or
          collection and upload the papers that require deeper analysis. The
          uploaded documents are processed and indexed so that their content
          becomes available to the AI-assisted research workflow.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The researcher can then use the summarizer to obtain an initial
          understanding of individual papers and use Chat with Papers to ask
          focused questions about methodologies, findings, limitations, or
          other information contained in the documents. Semantic retrieval
          helps locate related passages, while literature-review and research
          gap capabilities can assist in moving from individual paper
          understanding toward a broader view of the research area.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          As the research progresses, the researcher can preserve important
          findings through notes and citation tools, monitor research activity
          through analytics, and eventually transform selected research
          material into an academic presentation. This illustrates the central
          idea behind Resyntra: research discovery, understanding,
          organization, analysis, and communication can be treated as connected
          stages of one workflow.
        </p>
      </section>

      {/* Next steps */}
      <section id="next-steps" className="scroll-mt-24 border-t border-(--border) py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-(--foreground)">
          Next steps
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-(--muted-foreground)">
          The best way to understand Resyntra is to move from the general
          platform overview into the individual capabilities. The Quickstart
          guide explains the basic workflow for beginning a research session,
          while the Research Workspace documentation explains how projects,
          papers, collections, and AI tools fit together. From there, each AI
          feature has dedicated documentation describing its purpose and
          workflow in greater detail.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <NextStepCard
            title="Quickstart"
            description="Start using Resyntra and understand the basic research workflow."
            path="/resources/documentation/quickstart"
          />

          <NextStepCard
            title="Research Workspace"
            description="Learn how the central workspace organizes your research activities."
            path="/resources/documentation/workspace"
          />

          <NextStepCard
            title="AI Summarizer"
            description="Learn how Resyntra helps you understand lengthy research papers."
            path="/resources/documentation/ai-summarizer"
          />

          <NextStepCard
            title="Chat with Papers"
            description="Explore conversational research using indexed paper content."
            path="/resources/documentation/chat"
          />

          <NextStepCard
            title="Semantic Search"
            description="Discover research using semantic similarity and academic search."
            path="/resources/documentation/semantic-search"
          />

          <NextStepCard
            title="API Reference"
            description="Explore the developer-facing API capabilities of Resyntra."
            path="/resources/api-reference"
          />
        </div>
      </section>
    </article>
  );
};

/* -------------------------------------------------------------------------- */
/* Reusable UI pieces                                                         */
/* -------------------------------------------------------------------------- */

const BookIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 5.5v16" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
    </svg>
  );
};

const WorkflowStep = ({
  number,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-4 rounded-xl border border-(--border) bg-(--surface) p-5 transition-colors duration-200 hover:bg-(--surface-secondary)">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-semibold tracking-[0.14em] text-(--primary)">
            {number}
          </span>

          <h3 className="text-sm font-semibold text-(--foreground)">
            {title}
          </h3>
        </div>

        <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl border border-(--border) bg-(--surface) p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
        <Icon className="h-4 w-4" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-(--foreground)">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
        {description}
      </p>
    </div>
  );
};

const ModuleRow = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-4 border-b border-(--border) pb-5 last:border-b-0 last:pb-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--surface-secondary) text-(--primary)">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-(--foreground)">
          {title}
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
          {description}
        </p>
      </div>
    </div>
  );
};

const ArchitectureRow = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <span className="text-sm font-medium text-(--foreground)">
        {title}
      </span>

      <span className="text-sm leading-6 text-(--muted-foreground) sm:max-w-xl sm:text-right">
        {description}
      </span>
    </div>
  );
};

const NextStepCard = ({
  title,
  description,
  path,
}) => {
  return (
    <Link
      to={path}
      className="group rounded-xl border border-(--border) bg-(--surface) p-5 transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-(--foreground)">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
            {description}
          </p>
        </div>

        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
      </div>
    </Link>
  );
};

export default Introduction;