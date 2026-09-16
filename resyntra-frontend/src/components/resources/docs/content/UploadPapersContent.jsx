import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  Upload,
} from "lucide-react";

const UploadPapersContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-medium text-(--muted-foreground)">
          <Upload className="h-3.5 w-3.5 text-(--primary)" />
          Research
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-(--foreground) sm:text-4xl">
          Upload Papers
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground)">
          Add academic papers to your Resyntra workspace and prepare
          their content for AI-powered analysis, semantic search, and
          paper-based conversations.
        </p>
      </div>

      {/* Overview */}
      <section
        id="upload-overview"
        className="scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Overview
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Uploaded papers become part of your research environment.
          Resyntra processes the document so that its content can be
          used by the platform's research and AI features.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          After processing is complete, the paper can be used for
          summarization, question answering, semantic retrieval, and
          other supported research workflows.
        </p>
      </section>

      {/* Supported format */}
      <section
        id="supported-files"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Supported papers
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Resyntra is designed around academic documents and currently
          uses PDF papers as the primary document format for its paper
          processing workflow.
        </p>

        <div className="mt-6 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-medium text-(--foreground)">
                PDF research paper
              </p>

              <p className="mt-1 text-sm leading-6 text-(--muted-foreground)">
                Upload an academic paper in PDF format to begin the
                document processing workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload process */}
      <section
        id="upload-process"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Upload process
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          The upload process consists of adding the document to your
          workspace and allowing Resyntra to process its contents. The
          processing stage prepares the paper for downstream AI and
          retrieval features.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-(--border)">
          <ProcessRow
            icon={Upload}
            title="Upload"
            description="Select and add the research paper to your workspace."
          />

          <ProcessRow
            icon={Loader2}
            title="Processing"
            description="Extract and prepare the paper content for analysis."
          />

          <ProcessRow
            icon={CheckCircle2}
            title="Ready"
            description="The processed paper becomes available to supported research tools."
            last
          />
        </div>
      </section>

      {/* Processing */}
      <section
        id="paper-processing"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Paper processing
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          When a paper is uploaded, Resyntra extracts its textual
          content and prepares that content for the AI pipeline. The
          document is divided into smaller sections so that relevant
          information can be retrieved when needed.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          The processed content can then be converted into vector
          representations and indexed for semantic retrieval. This
          allows the AI assistant to locate relevant sections of the
          paper when responding to research questions.
        </p>
      </section>

      {/* Processing status */}
      <section
        id="processing-status"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Processing status
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          A paper moves through processing states while its content is
          being prepared. The status helps indicate whether a paper is
          waiting to be processed, currently being processed, ready for
          use, or has encountered a processing problem.
        </p>

        <div className="mt-6 space-y-2">
          <StatusItem
            label="Pending"
            description="The paper is waiting for processing."
          />

          <StatusItem
            label="Processing"
            description="The paper is currently being prepared."
          />

          <StatusItem
            label="Completed"
            description="The paper has finished processing and is ready for supported features."
          />

          <StatusItem
            label="Failed"
            description="The processing workflow encountered an error."
          />
        </div>
      </section>

      {/* After upload */}
      <section
        id="after-upload"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          What you can do after upload
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Once the paper has completed processing, it can become part of
          your broader research workflow. You can analyze its content,
          ask questions, retrieve relevant information, and organize it
          alongside other research papers.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <ActionCard
            title="AI Summarizer"
            description="Generate an AI-assisted summary of the research paper."
            onClick={() => onSectionChange("ai-summarizer")}
          />

          <ActionCard
            title="Chat with Papers"
            description="Ask questions about the indexed paper content."
            onClick={() => onSectionChange("chat")}
          />

          <ActionCard
            title="Semantic Search"
            description="Find relevant information using semantic retrieval."
            onClick={() => onSectionChange("semantic-search")}
          />

          <ActionCard
            title="Paper Management"
            description="Manage and organize papers in your research environment."
            onClick={() => onSectionChange("paper-management")}
          />
        </div>
      </section>

      {/* Recommended workflow */}
      <section
        id="recommended-workflow"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Recommended workflow
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          For a focused research workflow, upload papers that are
          directly related to your research question. Organize them into
          the appropriate project or collection and allow processing to
          complete before using AI-powered analysis features.
        </p>

        <div className="mt-6 rounded-xl border border-(--border) bg-(--surface) p-5">
          <div className="flex flex-wrap items-center gap-2">
            <WorkflowStep label="Select paper" />
            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Upload" />
            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Process" />
            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Analyze" />
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="mt-12 border-t border-(--border) pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-(--muted-foreground)">
          Next
        </p>

        <button
          type="button"
          onClick={() =>
            onSectionChange("paper-management")
          }
          className="group mt-3 flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-5 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <h2 className="text-base font-semibold text-(--foreground)">
              Paper Management
            </h2>

            <p className="mt-1 text-sm text-(--muted-foreground)">
              Learn how to manage papers inside your research workspace.
            </p>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </section>
    </article>
  );
};

const ProcessRow = ({
  icon: Icon,
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
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
        <Icon className="h-4 w-4" />
      </div>

      <div>
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

const StatusItem = ({
  label,
  description,
}) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-3">
      <span className="h-2 w-2 shrink-0 rounded-full bg-(--primary)" />

      <div className="flex flex-1 items-center justify-between gap-4">
        <span className="text-sm font-medium text-(--foreground)">
          {label}
        </span>

        <span className="text-right text-xs text-(--muted-foreground)">
          {description}
        </span>
      </div>
    </div>
  );
};

const ActionCard = ({
  title,
  description,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-xl border border-(--border) bg-(--surface) p-4 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-medium text-(--foreground)">
          {title}
        </h3>

        <ArrowRight className="h-4 w-4 text-(--muted-foreground) transition-transform group-hover:translate-x-0.5 group-hover:text-(--primary)" />
      </div>

      <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
        {description}
      </p>
    </button>
  );
};

const WorkflowStep = ({ label }) => {
  return (
    <span className="rounded-md border border-(--border) bg-(--background) px-2.5 py-1.5 text-xs font-medium text-(--foreground)">
      {label}
    </span>
  );
};

export default UploadPapersContent;