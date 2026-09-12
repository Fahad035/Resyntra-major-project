import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Sparkles,
  FolderKanban,
  Layers3,
  Search,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  GitCompare,
  CircleHelp,
  Compass,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import toast from "react-hot-toast";

import {
  getProjects,
  getProjectCollections,
} from "@/api/projects";

import { generateResearchGap } from "@/api/researchGap";

const reportSections = [
  {
    title: "Research Gaps",
    icon: Lightbulb,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "Common Limitations",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    title: "Conflicting Findings",
    icon: GitCompare,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    title: "Unanswered Questions",
    icon: CircleHelp,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "Future Research Directions",
    icon: Compass,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    title: "Novel Research Ideas",
    icon: FlaskConical,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
  },
  {
    title: "Final Recommendation",
    icon: GraduationCap,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
];

/*
 * Converts the Markdown report returned by the backend
 * into the seven expected research-analysis sections.
 */
const parseResearchGapReport = (markdown = "") => {
  const normalized = markdown.replace(/\r\n/g, "\n").trim();

  if (!normalized) {
    return [];
  }

  const sections = [];
  let currentSection = null;

  const lines = normalized.split("\n");

  for (const line of lines) {
    const headingMatch = line.match(/^#{1,3}\s+(.+?)\s*$/);

    if (headingMatch) {
      const heading = headingMatch[1].trim();

      const knownSection = reportSections.find(
        (section) =>
          section.title.toLowerCase() === heading.toLowerCase()
      );

      if (knownSection) {
        currentSection = {
          ...knownSection,
          content: [],
        };

        sections.push(currentSection);
        continue;
      }
    }

    if (currentSection) {
      currentSection.content.push(line);
    }
  }

  /*
   * Fallback if the AI response does not use the expected
   * headings. This prevents the result from disappearing.
   */
  if (sections.length === 0) {
    return [
      {
        ...reportSections[0],
        content: lines,
      },
    ];
  }

  return sections;
};

/*
 * Basic Markdown renderer for the academic report.
 *
 * Supports:
 * - paragraphs
 * - bullet lists
 * - numbered lists
 * - bold text
 * - italic text
 * - inline code
 */
const renderInlineMarkdown = (text) => {
  const parts = [];
  let remaining = text;
  let key = 0;

  const pattern =
    /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/;

  while (remaining) {
    const match = remaining.match(pattern);

    if (!match) {
      parts.push(
        // eslint-disable-next-line no-useless-assignment
        <span key={key++}>{remaining}</span>
      );
      break;
    }

    const index = match.index;

    if (index > 0) {
      parts.push(
        <span key={key++}>
          {remaining.slice(0, index)}
        </span>
      );
    }

    const token = match[0];

    if (
      token.startsWith("**") &&
      token.endsWith("**")
    ) {
      parts.push(
        <strong
          key={key++}
          className="font-semibold text-foreground"
        >
          {token.slice(2, -2)}
        </strong>
      );
    } else if (
      token.startsWith("*") &&
      token.endsWith("*")
    ) {
      parts.push(
        <em key={key++}>
          {token.slice(1, -1)}
        </em>
      );
    } else if (
      token.startsWith("`") &&
      token.endsWith("`")
    ) {
      parts.push(
        <code
          key={key++}
          className="rounded bg-card px-1.5 py-0.5 text-sm text-cyan-400"
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    remaining = remaining.slice(
      index + token.length
    );
  }

  return parts;
};

const MarkdownContent = ({ content }) => {
  const lines = content;

  const elements = [];
  let paragraph = [];
  let bulletItems = [];
  let numberedItems = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;

    const text = paragraph.join(" ").trim();

    if (text) {
      elements.push(
        <p
          key={`paragraph-${elements.length}`}
          className="leading-8 text-muted"
        >
          {renderInlineMarkdown(text)}
        </p>
      );
    }

    paragraph = [];
  };

  const flushBullets = () => {
    if (bulletItems.length === 0) return;

    elements.push(
      <ul
        key={`bullets-${elements.length}`}
        className="space-y-3 pl-1"
      >
        {bulletItems.map((item, index) => (
          <li
            key={`bullet-${index}`}
            className="flex items-start gap-3 leading-7 text-muted"
          >
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            <span>{renderInlineMarkdown(item)}</span>
          </li>
        ))}
      </ul>
    );

    bulletItems = [];
  };

  const flushNumbered = () => {
    if (numberedItems.length === 0) return;

    elements.push(
      <ol
        key={`numbered-${elements.length}`}
        className="space-y-4"
      >
        {numberedItems.map((item, index) => (
          <li
            key={`number-${index}`}
            className="flex items-start gap-4 leading-7 text-muted"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-xs font-semibold text-cyan-400">
              {index + 1}
            </span>

            <span className="pt-0.5">
              {renderInlineMarkdown(item)}
            </span>
          </li>
        ))}
      </ol>
    );

    numberedItems = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushBullets();
      flushNumbered();
      return;
    }

    const bulletMatch = line.match(
      /^[-*•]\s+(.+)$/
    );

    const numberedMatch = line.match(
      /^\d+[.)]\s+(.+)$/
    );

    if (bulletMatch) {
      flushParagraph();
      flushNumbered();

      bulletItems.push(bulletMatch[1]);
      return;
    }

    if (numberedMatch) {
      flushParagraph();
      flushBullets();

      numberedItems.push(numberedMatch[1]);
      return;
    }

    flushBullets();
    flushNumbered();

    paragraph.push(line);
  });

  flushParagraph();
  flushBullets();
  flushNumbered();

  return (
    <div className="space-y-5">
      {elements}
    </div>
  );
};

const ResearchGapFinder = () => {
  const [projects, setProjects] = useState([]);
  const [collections, setCollections] = useState([]);

  const [selectedProjectId, setSelectedProjectId] =
    useState("");

  const [selectedCollectionId, setSelectedCollectionId] =
    useState("");

  const [topic, setTopic] = useState("");
  const [researchGap, setResearchGap] = useState("");

  const [loadingProjects, setLoadingProjects] =
    useState(true);

  const [loadingCollections, setLoadingCollections] =
    useState(false);

  const [generating, setGenerating] =
    useState(false);

  const [error, setError] = useState("");

  /*
   * Load projects.
   */
  useEffect(() => {
    let cancelled = false;

    const loadProjects = async () => {
      try {
        setLoadingProjects(true);
        setError("");

        const response = await getProjects();

        if (cancelled) return;

        const projectList = Array.isArray(response)
          ? response
          : response?.items ??
            response?.projects ??
            [];

        setProjects(projectList);

        if (projectList.length > 0) {
          setSelectedProjectId(
            String(projectList[0].id)
          );
        }
      } catch (err) {
        if (cancelled) return;

        console.error(
          "Failed to load projects:",
          err
        );

        const message =
          err?.response?.data?.detail ??
          "Unable to load your research projects.";

        setError(message);
      } finally {
        if (!cancelled) {
          setLoadingProjects(false);
        }
      }
    };

    loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * Load collections when project changes.
   */
  useEffect(() => {
    let cancelled = false;

    const loadCollections = async () => {
      if (!selectedProjectId) {
        setCollections([]);
        setSelectedCollectionId("");
        return;
      }

      try {
        setLoadingCollections(true);
        setError("");

        setCollections([]);
        setSelectedCollectionId("");

        const response =
          await getProjectCollections(
            selectedProjectId
          );

        if (cancelled) return;

        const collectionList =
          Array.isArray(response)
            ? response
            : response?.items ??
              response?.collections ??
              [];

        setCollections(collectionList);
      } catch (err) {
        if (cancelled) return;

        console.error(
          "Failed to load project collections:",
          err
        );

        const message =
          err?.response?.data?.detail ??
          "Unable to load collections for this project.";

        setError(message);
      } finally {
        if (!cancelled) {
          setLoadingCollections(false);
        }
      }
    };

    loadCollections();

    return () => {
      cancelled = true;
    };
  }, [selectedProjectId]);

  /*
   * Project selection.
   */
  const handleProjectChange = (event) => {
    const projectId = event.target.value;

    setSelectedProjectId(projectId);
    setSelectedCollectionId("");
    setResearchGap("");
    setError("");
  };

  /*
   * Collection selection.
   */
  const handleCollectionChange = (event) => {
    setSelectedCollectionId(
      event.target.value
    );

    setResearchGap("");
    setError("");
  };

  /*
   * Generate research-gap report.
   */
  const handleGenerate = async () => {
    if (!selectedProjectId) {
      toast.error(
        "Please select a research project."
      );
      return;
    }

    if (!topic.trim()) {
      toast.error(
        "Please enter a research topic."
      );
      return;
    }

    try {
      setGenerating(true);
      setError("");
      setResearchGap("");

      const response =
        await generateResearchGap({
          projectId: selectedProjectId,
          collectionId:
            selectedCollectionId || null,
          topic: topic.trim(),
        });

      const generatedGap =
        response?.research_gap ?? "";

      if (!generatedGap) {
        throw new Error(
          "The research gap generator returned an empty response."
        );
      }

      setResearchGap(generatedGap);

      toast.success(
        "Research gap analysis generated successfully."
      );
    } catch (err) {
      console.error(
        "Research gap generation failed:",
        err
      );

      const message =
        err?.response?.data?.detail ??
        err?.message ??
        "Unable to generate research gaps.";

      setError(message);
      toast.error(message);
    } finally {
      setGenerating(false);
    }
  };

  const selectedProject = projects.find(
    (project) =>
      String(project.id) ===
      String(selectedProjectId)
  );

  const parsedSections =
    parseResearchGapReport(researchGap);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <Lightbulb className="h-4 w-4" />
            Research Gap Finder
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Discover what's missing
            <br />
            <span className="text-cyan-400">
              in existing research.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Resyntra compares research within your
            project and identifies gaps, limitations,
            unanswered questions, and potential
            directions for future research.
          </p>
        </motion.div>

        {/* Main Area */}

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
          >
            {/* Card Header */}

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Analyze Research Gaps
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Select your research scope and define
                  the topic you want Resyntra to investigate.
                </p>
              </div>
            </div>

            {/* Project */}

            <div className="mt-8">
              <label
                htmlFor="research-gap-project"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Research Project
              </label>

              <div className="relative">
                <FolderKanban className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                <select
                  id="research-gap-project"
                  value={selectedProjectId}
                  onChange={
                    handleProjectChange
                  }
                  disabled={
                    loadingProjects ||
                    generating ||
                    projects.length === 0
                  }
                  className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-border
                    bg-background
                    px-11
                    py-3
                    pr-10
                    text-sm
                    text-foreground
                    outline-none
                    transition
                    focus:border-cyan-400
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loadingProjects && (
                    <option value="">
                      Loading projects...
                    </option>
                  )}

                  {!loadingProjects &&
                    projects.length === 0 && (
                      <option value="">
                        No research projects found
                      </option>
                    )}

                  {!loadingProjects &&
                    projects.length > 0 &&
                    projects.map((project) => (
                      <option
                        key={project.id}
                        value={project.id}
                      >
                        {project.name}
                      </option>
                    ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>

              {selectedProject?.description && (
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">
                  {selectedProject.description}
                </p>
              )}
            </div>

            {/* Collection */}

            <div className="mt-6">
              <label
                htmlFor="research-gap-collection"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Research Collection
              </label>

              <div className="relative">
                <Layers3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />

                <select
                  id="research-gap-collection"
                  value={selectedCollectionId}
                  onChange={
                    handleCollectionChange
                  }
                  disabled={
                    !selectedProjectId ||
                    loadingCollections ||
                    generating
                  }
                  className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-border
                    bg-background
                    px-11
                    py-3
                    pr-10
                    text-sm
                    text-foreground
                    outline-none
                    transition
                    focus:border-cyan-400
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loadingCollections ? (
                    <option value="">
                      Loading collections...
                    </option>
                  ) : (
                    <>
                      <option value="">
                        All papers in this project
                      </option>

                      {collections.map(
                        (collection) => (
                          <option
                            key={collection.id}
                            value={collection.id}
                          >
                            {collection.name}
                          </option>
                        )
                      )}
                    </>
                  )}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>

              {!loadingCollections &&
                selectedProjectId &&
                collections.length === 0 && (
                  <p className="mt-2 text-xs text-muted">
                    No collections found. All papers in
                    the project will be analyzed.
                  </p>
                )}
            </div>

            {/* Topic */}

            <div className="mt-6">
              <label
                htmlFor="research-gap-topic"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Research Topic
              </label>

              <textarea
                id="research-gap-topic"
                value={topic}
                onChange={(event) => {
                  setTopic(event.target.value);
                  setError("");
                }}
                disabled={generating}
                rows={5}
                maxLength={500}
                placeholder="e.g. Research gaps in retrieval-augmented generation for academic research..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-border
                  bg-background
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-foreground
                  outline-none
                  transition
                  placeholder:text-muted
                  focus:border-cyan-400
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              />

              <div className="mt-2 flex justify-end">
                <span className="text-xs text-muted">
                  {topic.length}/500
                </span>
              </div>
            </div>

            {/* Error */}

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  className="mt-5 overflow-hidden"
                >
                  <div className="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />

                    <p className="text-sm leading-6 text-red-400">
                      {error}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Generate */}

            <button
              type="button"
              onClick={handleGenerate}
              disabled={
                !selectedProjectId ||
                !topic.trim() ||
                generating ||
                loadingProjects ||
                loadingCollections
              }
              className="
                group
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-cyan-500
                px-5
                py-3.5
                text-sm
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:scale-[1.01]
                hover:bg-cyan-400
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  AI is analyzing your research...
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  Find Research Gaps

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Ready Status */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              AI research-gap analysis ready
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
          >
            {/* Result Header */}

            <div className="border-b border-border p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Lightbulb className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      AI Research Gap Analysis
                    </h3>

                    <p className="mt-1 text-xs text-muted">
                      Generated from your selected research scope
                    </p>
                  </div>
                </div>

                {researchGap && (
                  <div className="flex shrink-0 items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" />
                    Generated
                  </div>
                )}
              </div>
            </div>

            {/* Result */}

            <div className="min-h-107.5 p-6 sm:p-8">
              {!researchGap &&
              !generating ? (
                <div className="flex min-h-90 flex-col items-center justify-center text-center">
                  <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-6">
                    <Lightbulb className="h-10 w-10 text-cyan-400" />
                  </div>

                  <h4 className="mt-6 text-xl font-semibold text-foreground">
                    Your research gaps will appear here.
                  </h4>

                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                    Select a project, optionally choose
                    a collection, enter a research topic,
                    and let Resyntra compare the available
                    papers.
                  </p>
                </div>
              ) : generating ? (
                <div className="flex min-h-90 flex-col items-center justify-center text-center">
                  <div className="rounded-3xl bg-cyan-500/10 p-6">
                    <Sparkles className="h-10 w-10 animate-pulse text-cyan-400" />
                  </div>

                  <h4 className="mt-6 text-xl font-semibold text-foreground">
                    Analyzing your research...
                  </h4>

                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                    Resyntra is comparing the selected papers
                    to identify research gaps, limitations,
                    unanswered questions, and potential
                    future directions.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-cyan-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    AI analysis in progress
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {/* Topic */}

                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-cyan-400" />

                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                        Research Topic
                      </span>
                    </div>

                    <p className="mt-3 leading-7 text-foreground">
                      {topic}
                    </p>
                  </div>

                  {/* Report Sections */}

                  <div className="mt-8 space-y-5">
                    {parsedSections.map(
                      (section, index) => {
                        const Icon = section.icon;

                        return (
                          <motion.div
                            key={section.title}
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay:
                                index * 0.06,
                            }}
                            className={`overflow-hidden rounded-2xl border ${section.border} bg-background`}
                          >
                            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                              <div
                                className={`rounded-xl ${section.bg} p-2.5`}
                              >
                                <Icon
                                  className={`h-5 w-5 ${section.color}`}
                                />
                              </div>

                              <h4 className="font-semibold text-foreground">
                                {section.title}
                              </h4>
                            </div>

                            <div className="p-5 sm:p-6">
                              <MarkdownContent
                                content={
                                  section.content
                                }
                              />
                            </div>
                          </motion.div>
                        );
                      }
                    )}
                  </div>

                  {/* Scope */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-background px-3 py-1.5 text-xs text-muted">
                      Project:{" "}
                      {selectedProject?.name ??
                        "Selected Project"}
                    </span>

                    <span className="rounded-full bg-background px-3 py-1.5 text-xs text-muted">
                      {selectedCollectionId
                        ? "Collection selected"
                        : "All project papers"}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchGapFinder;