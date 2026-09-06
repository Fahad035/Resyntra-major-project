import { motion } from "framer-motion";
import {
  FolderOpen,
  FileText,
  BrainCircuit,
  MessageSquare,
  Clock3,
  Users,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const collections = [
  "LLM in Healthcare",
  "Multimodal AI",
  "Clinical NLP",
  "Medical Imaging",
];

const papers = [
  "Attention Is All You Need",
  "BioBERT",
  "Med-PaLM 2",
  "ClinicalBERT",
];

const messages = [
  {
    role: "user",
    text: "Summarize the key contribution.",
  },
  {
    role: "ai",
    text: "The paper introduces a transformer architecture that removes recurrence entirely and improves parallelization.",
  },
];

const activity = [
  "12 new papers imported",
  "Knowledge graph updated",
  "AI generated literature summary",
  "Research gap detected",
];

const ResearchWorkspace = () => {
  return (
    <section className="py-32">

      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            AI Workspace
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Everything in one workspace.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Organize projects, chat with papers, collaborate with your
            team and let AI manage your research workflow.
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[36px] border border-border bg-background/70 backdrop-blur"
        >

          <div className="grid lg:grid-cols-[260px_1fr_340px]">

            {/* Sidebar */}

            <div className="border-r border-border p-6">

              <div className="flex items-center gap-3">

                <FolderOpen className="text-cyan-400" />

                <h3 className="font-semibold">
                  Collections
                </h3>

              </div>

              <div className="mt-8 space-y-3">

                {collections.map((item) => (

                  <button
                    key={item}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-cyan-500/10"
                  >
                    <span>{item}</span>

                    <ChevronRight size={16} />

                  </button>

                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-linear-to-br from-cyan-500/10 to-emerald-500/10 p-5">

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="font-semibold">
                    AI Insight
                  </span>

                </div>

                <p className="mt-4 text-sm leading-7 text-muted">
                  27 recently published papers are highly relevant to
                  your project.
                </p>

              </div>

            </div>

            {/* Center */}

            <div className="border-r border-border p-8">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold">
                  Research Library
                </h3>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                  248 Papers
                </span>

              </div>

              <div className="mt-8 space-y-4">

                {papers.map((paper) => (

                  <motion.div
                    key={paper}
                    whileHover={{
                      x: 6,
                    }}
                    className="rounded-2xl border border-border p-5"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                          <FileText className="text-cyan-400" />

                        </div>

                        <div>

                          <h4 className="font-semibold">
                            {paper}
                          </h4>

                          <p className="text-sm text-muted">
                            PDF • Notes • Citations
                          </p>

                        </div>

                      </div>

                      <CheckCircle2 className="text-emerald-400" />

                    </div>

                  </motion.div>

                ))}

              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-border p-6">

                  <Clock3 className="text-cyan-400" />

                  <h4 className="mt-4 text-3xl font-bold">
                    42 hrs
                  </h4>

                  <p className="mt-2 text-muted">
                    AI research time saved
                  </p>

                </div>

                <div className="rounded-2xl border border-border p-6">

                  <Users className="text-violet-400" />

                  <h4 className="mt-4 text-3xl font-bold">
                    14
                  </h4>

                  <p className="mt-2 text-muted">
                    Active collaborators
                  </p>

                </div>

              </div>

            </div>

            {/* AI Assistant */}

            <div className="p-8">

              <div className="flex items-center gap-3">

                <BrainCircuit className="text-cyan-400" />

                <h3 className="text-xl font-semibold">
                  AI Research Assistant
                </h3>

              </div>

              <div className="mt-8 space-y-5">

                {messages.map((msg, index) => (

                  <div
                    key={index}
                    className={`rounded-2xl p-5 ${
                      msg.role === "ai"
                        ? "bg-cyan-500/10"
                        : "border border-border"
                    }`}
                  >

                    <div className="mb-3 flex items-center gap-2">

                      {msg.role === "ai" ? (
                        <BrainCircuit
                          size={18}
                          className="text-cyan-400"
                        />
                      ) : (
                        <MessageSquare
                          size={18}
                          className="text-violet-400"
                        />
                      )}

                      <span className="text-sm font-semibold">

                        {msg.role === "ai"
                          ? "Resyntra AI"
                          : "You"}

                      </span>

                    </div>

                    <p className="leading-7">
                      {msg.text}
                    </p>

                  </div>

                ))}

              </div>

              <div className="mt-8 rounded-2xl border border-border p-5">

                <h4 className="font-semibold">
                  Recent Activity
                </h4>

                <div className="mt-5 space-y-4">

                  {activity.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="h-2 w-2 rounded-full bg-cyan-400" />

                      <span className="text-sm text-muted">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ResearchWorkspace;