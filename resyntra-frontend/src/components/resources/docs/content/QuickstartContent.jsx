import {
  ArrowRight,
  Check,
  FileText,
  MessageSquare,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";

const QuickstartContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-medium text-(--muted-foreground)">
          <Sparkles className="h-3.5 w-3.5 text-(--primary)" />
          Getting Started
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-(--foreground) sm:text-4xl">
          Quickstart
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground)">
          Get started with Resyntra by creating a research workspace,
          adding academic papers, and using its AI-powered tools to
          explore and understand your research material.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Before you begin
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Resyntra is designed to work as a connected research
          environment. Before starting, have one or more academic papers
          available in PDF format and decide which research topic or
          project you want to explore.
        </p>

        <div className="mt-6 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
              <Check className="h-4 w-4" />
            </div>

            <div>
              <h3 className="text-sm font-medium text-(--foreground)">
                What you need
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-(--muted-foreground)">
                A Resyntra account and at least one research paper that
                you want to analyze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <Step
        number="01"
        icon={Sparkles}
        title="Create your account"
      >
        <p>
          Start by registering for a Resyntra account. After signing in,
          you can access your research workspace and organize your
          research activities in one place.
        </p>
      </Step>

      {/* Step 2 */}
      <Step
        number="02"
        icon={Search}
        title="Open the Research Workspace"
      >
        <p>
          The Research Workspace is the central area for working with
          your research. It brings together papers, projects, collections,
          AI tools, and research activities so you can continue your work
          without switching between separate tools.
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("workspace")}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-hover)"
        >
          Learn about the Research Workspace
          <ArrowRight className="h-4 w-4" />
        </button>
      </Step>

      {/* Step 3 */}
      <Step
        number="03"
        icon={Upload}
        title="Add your first paper"
      >
        <p>
          Upload a research paper to begin working with your own
          literature. Resyntra processes the document so its content can
          be used by the platform's analysis and retrieval features.
        </p>

        <div className="mt-5 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
              <FileText className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-medium text-(--foreground)">
                Paper upload
              </p>

              <p className="mt-1 text-xs text-(--muted-foreground)">
                Add a PDF research paper to your workspace.
              </p>
            </div>
          </div>
        </div>
      </Step>

      {/* Step 4 */}
      <Step
        number="04"
        icon={FileText}
        title="Let Resyntra process the paper"
      >
        <p>
          After upload, the paper enters the processing workflow.
          Resyntra extracts the document content and prepares it for
          AI-powered analysis and semantic retrieval.
        </p>

        <p className="mt-4">
          Processing allows the system to work with the paper at a
          detailed level instead of treating the uploaded PDF only as a
          stored file.
        </p>
      </Step>

      {/* Step 5 */}
      <Step
        number="05"
        icon={Sparkles}
        title="Generate an AI summary"
      >
        <p>
          Once the paper has been processed, use the AI Summarizer to
          quickly understand its main ideas, methodology, findings, and
          other important information.
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("ai-summarizer")}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-hover)"
        >
          Explore AI Summarizer
          <ArrowRight className="h-4 w-4" />
        </button>
      </Step>

      {/* Step 6 */}
      <Step
        number="06"
        icon={MessageSquare}
        title="Chat with your research papers"
      >
        <p>
          Use Chat with Papers to ask questions about the research
          material. Resyntra retrieves relevant information from indexed
          paper content before generating an answer, allowing you to
          interact with your literature using natural language.
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("chat")}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-hover)"
        >
          Learn about Chat with Papers
          <ArrowRight className="h-4 w-4" />
        </button>
      </Step>

      {/* Step 7 */}
      <Step
        number="07"
        icon={Search}
        title="Discover related research"
      >
        <p>
          Use semantic search to discover papers based on meaning and
          research concepts rather than relying only on exact keyword
          matches. This can help expand your literature search around a
          research topic.
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("semantic-search")}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-hover)"
        >
          Explore Semantic Search
          <ArrowRight className="h-4 w-4" />
        </button>
      </Step>

      {/* Complete workflow */}
      <section className="mt-12 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Your first research workflow
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          These steps form the basic Resyntra workflow. As your research
          develops, you can organize papers into projects and collections,
          create notes and citations, perform literature review tasks,
          investigate potential research gaps, and generate presentation
          material.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-(--border)">
          <WorkflowRow
            number="1"
            title="Discover"
            description="Find relevant research papers."
          />

          <WorkflowRow
            number="2"
            title="Upload"
            description="Add papers to your research workspace."
          />

          <WorkflowRow
            number="3"
            title="Analyze"
            description="Process and understand paper content."
          />

          <WorkflowRow
            number="4"
            title="Ask"
            description="Interact with papers using AI."
          />

          <WorkflowRow
            number="5"
            title="Create"
            description="Turn research findings into useful outputs."
            last
          />
        </div>
      </section>

      {/* Next */}
      <section className="mt-12 border-t border-(--border) pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-(--muted-foreground)">
          Next
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("workspace")}
          className="group mt-3 flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-5 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <h2 className="text-base font-semibold text-(--foreground)">
              Research Workspace
            </h2>

            <p className="mt-1 text-sm text-(--muted-foreground)">
              Learn how to organize and manage your research workflow.
            </p>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </section>
    </article>
  );
};

const Step = ({
  number,
  icon: Icon,
  title,
  children,
}) => {
  return (
    <section className="mt-12 scroll-mt-24">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-xs font-semibold text-(--muted-foreground)">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-(--primary)" />

            <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
              {title}
            </h2>
          </div>

          <div className="mt-4 space-y-4 text-sm leading-7 text-(--muted-foreground)">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowRow = ({
  number,
  title,
  description,
  last = false,
}) => {
  return (
    <div
      className={`
        flex items-center gap-4 px-5 py-4
        ${!last ? "border-b border-(--border)" : ""}
      `}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-(--primary)/10 text-xs font-semibold text-(--primary)">
        {number}
      </span>

      <div className="min-w-0">
        <p className="text-sm font-medium text-(--foreground)">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-(--muted-foreground)">
          {description}
        </p>
      </div>
    </div>
  );
};

export default QuickstartContent;