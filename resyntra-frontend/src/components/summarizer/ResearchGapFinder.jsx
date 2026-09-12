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
} from "lucide-react";
import toast from "react-hot-toast";

import {
  getProjects,
  getProjectCollections,
} from "@/api/projects";

import { generateResearchGap } from "@/api/researchGap";

const ResearchGapFinder = () => {
  const [projects, setProjects] = useState([]);
  const [collections, setCollections] = useState([]);

  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedCollectionId, setSelectedCollectionId] =
    useState("");

  const [topic, setTopic] = useState("");
  const [researchGap, setResearchGap] = useState("");

  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadingCollections, setLoadingCollections] =
    useState(false);
  const [generating, setGenerating] = useState(false);

  const [error, setError] = useState("");

  /*
   * Load user's projects.
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
          : response?.items ?? response?.projects ?? [];

        setProjects(projectList);

        if (projectList.length > 0) {
          setSelectedProjectId(String(projectList[0].id));
        }
      } catch (err) {
        if (cancelled) return;

        console.error("Failed to load projects:", err);

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
   * Load collections whenever the selected project changes.
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

        const response = await getProjectCollections(
          selectedProjectId
        );

        if (cancelled) return;

        const collectionList = Array.isArray(response)
          ? response
          : response?.items ?? response?.collections ?? [];

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
   * Change project.
   */
  const handleProjectChange = (event) => {
    const projectId = event.target.value;

    setSelectedProjectId(projectId);
    setSelectedCollectionId("");
    setResearchGap("");
    setError("");
  };

  /*
   * Change collection.
   */
  const handleCollectionChange = (event) => {
    setSelectedCollectionId(event.target.value);
    setResearchGap("");
    setError("");
  };

  /*
   * Generate research gap using the real backend.
   */
  const handleGenerate = async () => {
    if (!selectedProjectId) {
      toast.error("Please select a research project.");
      return;
    }

    if (!topic.trim()) {
      toast.error("Please enter a research topic.");
      return;
    }

    try {
      setGenerating(true);
      setError("");
      setResearchGap("");

      const response = await generateResearchGap({
        projectId: selectedProjectId,
        collectionId: selectedCollectionId || null,
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
      String(project.id) === String(selectedProjectId)
  );

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Resyntra analyzes the research papers within your project
            and identifies potential gaps, limitations, and areas
            that may deserve further investigation.
          </p>
        </motion.div>

        {/* Main Workspace */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:mt-20">
          {/* LEFT - Controls */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
          >
            {/* Header */}

            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Analyze Research Gaps
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  Choose your research scope and tell Resyntra
                  what topic you want to investigate.
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
                  onChange={handleProjectChange}
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
                  onChange={handleCollectionChange}
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

                      {collections.map((collection) => (
                        <option
                          key={collection.id}
                          value={collection.id}
                        >
                          {collection.name}
                        </option>
                      ))}
                    </>
                  )}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              </div>

              {!loadingCollections &&
                selectedProjectId &&
                collections.length === 0 && (
                  <p className="mt-2 text-xs text-muted">
                    No collections found. All papers in the
                    project will be analyzed.
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
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
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

            {/* Generate Button */}

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

            {/* Status */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              AI research-gap analysis ready
            </div>
          </motion.div>

          {/* RIGHT - Result */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl"
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

            {/* Result Content */}

            <div className="min-h-107.5 p-6 sm:p-8">
              {!researchGap && !generating ? (
                <div className="flex min-h-90 flex-col items-center justify-center text-center">
                  <div className="rounded-3xl border border-cyan-500/10 bg-cyan-500/5 p-6">
                    <Lightbulb className="h-10 w-10 text-cyan-400" />
                  </div>

                  <h4 className="mt-6 text-xl font-semibold text-foreground">
                    Your research gaps will appear here.
                  </h4>

                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                    Select a project, optionally choose a collection,
                    enter a research topic, and let Resyntra analyze
                    the available papers.
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
                    Resyntra is examining the selected research scope
                    and generating a research-gap analysis.
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-cyan-400">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    AI analysis in progress
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Topic Context */}

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

                  {/* Generated Report */}

                  <div className="mt-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-cyan-400" />

                      <h4 className="font-semibold text-foreground">
                        Identified Research Gap
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-border bg-background p-6">
                      <p className="whitespace-pre-line leading-8 text-muted">
                        {researchGap}
                      </p>
                    </div>
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