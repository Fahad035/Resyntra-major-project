import {
  ArrowRight,
  BarChart3,
  FileText,
  FolderKanban,
  Library,
  MessageSquare,
  Search,
  Sparkles,
} from "lucide-react";

const WorkspaceContent = ({ onSectionChange }) => {
  return (
    <article className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5 text-xs font-medium text-(--muted-foreground)">
          <Sparkles className="h-3.5 w-3.5 text-(--primary)" />
          Getting Started
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-(--foreground) sm:text-4xl">
          Research Workspace
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground)">
          The Research Workspace is the central environment in Resyntra
          for organizing papers, managing research projects, and
          accessing AI-powered research tools.
        </p>
      </div>

      {/* Overview */}
      <section id="workspace-overview" className="scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Workspace overview
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          A research project can involve many papers, notes, citations,
          searches, and AI-assisted tasks. The workspace brings these
          activities together so that your research material can be
          organized around the projects you are working on.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          From the workspace, you can access your research papers,
          collections, projects, AI features, research analytics, and
          other tools available in Resyntra.
        </p>
      </section>

      {/* Main areas */}
      <section id="workspace-areas" className="mt-12 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Main workspace areas
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          The workspace is organized into focused areas. Each area
          supports a different part of the research workflow while
          remaining connected to the rest of the platform.
        </p>

        <div className="mt-6 space-y-3">
          <WorkspaceItem
            icon={FileText}
            title="Research Papers"
            description="View, manage, and work with papers that have been added to your research environment."
          />

          <WorkspaceItem
            icon={FolderKanban}
            title="Projects"
            description="Group research activities around specific topics, studies, or academic projects."
          />

          <WorkspaceItem
            icon={Library}
            title="Collections"
            description="Organize related papers into collections for easier access and literature management."
          />

          <WorkspaceItem
            icon={Search}
            title="Research Discovery"
            description="Search for relevant academic literature and explore related research."
          />

          <WorkspaceItem
            icon={MessageSquare}
            title="AI Research Assistant"
            description="Interact with indexed research papers and ask questions using natural language."
          />

          <WorkspaceItem
            icon={BarChart3}
            title="Research Analytics"
            description="Review research activity and available workspace metrics."
          />
        </div>
      </section>

      {/* Working with papers */}
      <section
        id="workspace-papers"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Working with research papers
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Papers are one of the primary resources inside the workspace.
          After adding a paper, Resyntra can process its content and make
          it available to supported AI and research features.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Processed papers can be used for summarization, paper
          conversations, semantic retrieval, literature analysis, and
          other research workflows.
        </p>

        <button
          type="button"
          onClick={() => onSectionChange("upload-papers")}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--primary) transition-colors hover:text-(--primary-hover)"
        >
          Learn about Upload Papers
          <ArrowRight className="h-4 w-4" />
        </button>
      </section>

      {/* Projects and collections */}
      <section
        id="workspace-organization"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Organizing research
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Projects and collections provide different ways to structure
          research material. Projects can represent a broader research
          activity, while collections can be used to group related papers
          together.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <InfoCard
            icon={FolderKanban}
            title="Projects"
            description="Keep research activities organized around a specific study or topic."
            onClick={() => onSectionChange("projects")}
          />

          <InfoCard
            icon={Library}
            title="Collections"
            description="Group related research papers into manageable literature sets."
            onClick={() => onSectionChange("collections")}
          />
        </div>
      </section>

      {/* AI workflow */}
      <section
        id="workspace-ai"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Using AI inside the workspace
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          AI features become more useful when they are connected to the
          research material you are working with. Resyntra allows
          processed papers to provide context for AI-powered analysis and
          question answering.
        </p>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          Depending on the task, you can summarize a paper, ask questions
          about its content, search for related research, generate
          literature-review material, or investigate potential research
          gaps.
        </p>

        <div className="mt-6 rounded-xl border border-(--border) bg-(--surface) p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted-foreground)">
            Example workflow
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <WorkflowStep label="Paper" />
            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Processing" />
            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="AI Analysis" />
            <ArrowRight className="h-4 w-4 text-(--muted-foreground)" />

            <WorkflowStep label="Research Insight" />
          </div>
        </div>
      </section>

      {/* Recommended workflow */}
      <section
        id="workspace-workflow"
        className="mt-12 scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight text-(--foreground)">
          Recommended workflow
        </h2>

        <p className="mt-4 text-sm leading-7 text-(--muted-foreground)">
          A practical workflow is to create or select a research project,
          add relevant papers, organize them into collections, and then
          use the AI tools to analyze the material. Notes, citations,
          analytics, and presentation tools can be used as the research
          progresses.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-(--border)">
          <WorkflowRow
            number="1"
            title="Create a project"
            description="Define the research area you want to work on."
          />

          <WorkflowRow
            number="2"
            title="Add papers"
            description="Upload or discover relevant academic literature."
          />

          <WorkflowRow
            number="3"
            title="Organize"
            description="Use collections and project structure to manage papers."
          />

          <WorkflowRow
            number="4"
            title="Analyze"
            description="Use AI tools to understand and explore the literature."
          />

          <WorkflowRow
            number="5"
            title="Build"
            description="Create notes, citations, reviews, insights, and presentations."
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
          onClick={() => onSectionChange("upload-papers")}
          className="group mt-3 flex w-full items-center justify-between rounded-xl border border-(--border) bg-(--surface) p-5 text-left transition-all duration-200 hover:border-(--primary)/30 hover:bg-(--surface-secondary)"
        >
          <div>
            <h2 className="text-base font-semibold text-(--foreground)">
              Upload Papers
            </h2>

            <p className="mt-1 text-sm text-(--muted-foreground)">
              Learn how to add research papers to your workspace.
            </p>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-(--muted-foreground) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--primary)" />
        </button>
      </section>
    </article>
  );
};

const WorkspaceItem = ({
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

const InfoCard = ({
  icon: Icon,
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
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--primary)/10 text-(--primary)">
          <Icon className="h-4 w-4" />
        </div>

        <h3 className="text-sm font-medium text-(--foreground)">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
        {description}
      </p>

      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-(--primary)">
        View documentation
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </span>
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

export default WorkspaceContent;