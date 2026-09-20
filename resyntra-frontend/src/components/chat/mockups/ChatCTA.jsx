import { motion } from "framer-motion";
import {
  Bot,
  User,
  ArrowRight,
  Sparkles,
  CheckCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const ChatCTA = () => {
  return (
    <section className="pb-32">
      <div className="mx-auto w-[92%] max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-border bg-card"
        >
          {/* Chat Header */}

          <div className="flex items-center justify-between border-b border-border px-8 py-5">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Bot className="h-5 w-5 text-cyan-400" />
              </div>

              <div>

                <h3 className="font-semibold text-foreground">
                  Resyntra AI Assistant
                </h3>

                <p className="text-sm text-muted">
                  Research conversation
                </p>

              </div>

            </div>

            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
              Online
            </span>

          </div>

          {/* Conversation */}

          <div className="space-y-8 p-8 lg:p-12">

            {/* User */}

            <div className="flex justify-end">

              <div className="flex max-w-xl items-start gap-4">

                <div className="rounded-2xl bg-cyan-500 px-6 py-4 text-slate-950">
                  Can you help me analyze my next research paper?
                </div>

                <div className="rounded-full bg-background p-3">
                  <User className="h-5 w-5" />
                </div>

              </div>

            </div>

            {/* AI */}

            <div className="flex items-start gap-4">

              <div className="rounded-full bg-cyan-500 p-3 text-slate-950">
                <Bot className="h-5 w-5" />
              </div>

              <div className="max-w-2xl rounded-3xl bg-cyan-500/10 p-6">

                <p className="leading-8 text-foreground">
                  Absolutely.
                  Upload your paper and I'll summarize it, explain the
                  methodology, answer your questions, compare it with
                  other research, identify limitations, and even suggest
                  future research opportunities—all with citations to the
                  original document.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500">
                  <CheckCheck className="h-4 w-4" />
                  Ready to analyze your first paper
                </div>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="border-t border-border bg-background/40 px-8 py-14">

            <div className="mx-auto max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                <Sparkles className="h-4 w-4" />
                Your AI Research Partner
              </span>

              <h2 className="mt-8 text-4xl font-bold text-foreground lg:text-5xl">
                Continue the conversation
                <br />
                with your own research.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
                Upload papers, ask unlimited questions, discover insights,
                and accelerate every stage of your literature review with
                Resyntra AI.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105"
                >
                  Start Chatting Free

                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  to="/platform/workspace"
                  className="rounded-2xl border border-border px-7 py-4 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Explore Workspace
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ChatCTA;