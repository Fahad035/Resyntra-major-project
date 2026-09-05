import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Clock3,
  ShieldCheck,
  Share2,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Invite your research team",
    description:
      "Work together with professors, students, and collaborators in a shared workspace.",
  },
  {
    icon: MessageSquare,
    title: "Comment on papers",
    description:
      "Discuss methodologies, findings, and important sections without leaving the document.",
  },
  {
    icon: Clock3,
    title: "Version history",
    description:
      "Track every update, restore previous versions, and never lose important research.",
  },
  {
    icon: ShieldCheck,
    title: "Granular permissions",
    description:
      "Choose who can view, comment, or edit every project and collection.",
  },
];

const activities = [
  {
    user: "Sarah Johnson",
    action: "commented on",
    paper: "Attention Is All You Need",
    time: "2 min ago",
  },
  {
    user: "Rahul Sharma",
    action: "added",
    paper: "GPT-4 Technical Report",
    time: "12 min ago",
  },
  {
    user: "Emily Chen",
    action: "summarized",
    paper: "RAG for Knowledge Systems",
    time: "27 min ago",
  },
  {
    user: "James Wilson",
    action: "created",
    paper: "Literature Review Collection",
    time: "1 hour ago",
  },
];

const CollaborationSection = () => {
  return (
    <section className="py-32">
      <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Collaboration
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            Research is better when your entire team works together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Share projects, annotate papers, discuss ideas, and keep every
            research conversation connected to the documents that matter.
          </p>

          <div className="mt-10 space-y-8">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div>
              <h3 className="font-semibold text-foreground">
                Shared Workspace
              </h3>

              <p className="mt-1 text-sm text-muted">
                Active collaborators
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>

          {/* Members */}

          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            {["SJ", "RS", "EC", "JW"].map((member) => (
              <div
                key={member}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 text-sm font-semibold text-slate-950"
              >
                {member}
              </div>
            ))}

            <div className="ml-3 text-sm text-muted">
              +12 collaborators online
            </div>
          </div>

          {/* Activity */}

          <div className="divide-y divide-border">
            {activities.map((activity) => (
              <div
                key={activity.user + activity.time}
                className="flex items-start justify-between px-6 py-5 transition hover:bg-background"
              >
                <div className="flex gap-4">
                  <div className="mt-1 rounded-xl bg-cyan-500/10 p-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">
                        {activity.user}
                      </span>{" "}
                      {activity.action}{" "}
                      <span className="font-medium">
                        {activity.paper}
                      </span>
                    </p>

                    <p className="mt-2 text-xs text-muted">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}

          <div className="border-t border-border bg-background px-6 py-5">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-cyan-400">24</p>
                <p className="mt-1 text-xs text-muted">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-cyan-400">118</p>
                <p className="mt-1 text-xs text-muted">Shared Papers</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-cyan-400">31</p>
                <p className="mt-1 text-xs text-muted">Team Members</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationSection;