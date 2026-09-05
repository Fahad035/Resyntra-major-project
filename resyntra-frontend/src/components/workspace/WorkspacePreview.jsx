import { motion } from "framer-motion";

const WorkspacePreview = () => {
  return (
    <section
      id="workspace-preview"
      className="pb-28"
    >
      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Browser */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-card
            shadow-[0_30px_80px_rgba(0,0,0,.35)]
            backdrop-blur-xl
          "
        >
          {/* Browser Header */}

          <div className="flex items-center justify-between border-b border-border px-6 py-4">

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="rounded-lg border border-border bg-background px-5 py-2 text-sm text-muted">
              workspace.resyntra.ai
            </div>

            <div className="w-16" />
          </div>

          {/* Workspace */}

          <div className="grid h-170 grid-cols-[260px_1fr_330px]">

            {/* Sidebar */}

            <aside className="border-r border-border bg-background p-6">

              <div className="mb-8 h-10 w-36 rounded-xl bg-cyan-500/20" />

              <div className="space-y-3">

                {[
                  "Research Library",
                  "Collections",
                  "AI Chats",
                  "Knowledge Graph",
                  "Analytics",
                  "Settings",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl px-4 py-3 transition hover:bg-surface"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </aside>

            {/* Paper Viewer */}

            <main className="border-r border-border bg-background p-8">

              <div className="mb-6 h-10 w-80 rounded-xl bg-cyan-500/20" />

              <div className="space-y-4">

                {[...Array(16)].map((_, index) => (
                  <div
                    key={index}
                    className="h-3 rounded-full bg-surface"
                    style={{
                      width: `${100 - index * 3}%`,
                    }}
                  />
                ))}

              </div>

              <div className="mt-10 rounded-2xl border border-border bg-surface p-6">

                <div className="mb-4 h-5 w-56 rounded bg-cyan-500/20" />

                <div className="space-y-3">

                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="h-3 rounded-full bg-background"
                    />
                  ))}

                </div>

              </div>

            </main>

            {/* AI Assistant */}

            <aside className="bg-background p-6">

              <div className="mb-6 flex items-center gap-3">

                <div className="h-10 w-10 rounded-xl bg-cyan-500" />

                <div>
                  <h3 className="font-semibold">
                    AI Research Assistant
                  </h3>

                  <p className="text-sm text-muted">
                    Online
                  </p>
                </div>

              </div>

              <div className="space-y-4">

                <div className="rounded-2xl bg-surface p-4">
                  Summarize this paper.
                </div>

                <div className="rounded-2xl bg-cyan-500 p-4 text-slate-950">
                  Summary generated successfully.
                </div>

                <div className="rounded-2xl bg-surface p-4">
                  Find research gaps.
                </div>

                <div className="rounded-2xl bg-cyan-500 p-4 text-slate-950">
                  Three potential gaps identified.
                </div>

              </div>

              <div className="mt-8 rounded-xl border border-border p-4">

                <div className="h-10 rounded-lg bg-surface" />

              </div>

            </aside>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WorkspacePreview;