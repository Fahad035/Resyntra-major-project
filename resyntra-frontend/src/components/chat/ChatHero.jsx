import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquareText } from "lucide-react";

const ChatHero = () => {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <MessageSquareText className="h-4 w-4" />
            Chat with Research Papers
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-foreground lg:text-7xl">
            Ask questions.
            <span className="block text-cyan-400">
              Get cited answers.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            Upload one paper or your entire literature collection and
            have natural conversations with AI that always references
            the original research.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              to="/register"
              className="rounded-2xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-105"
            >
              Start Chatting
            </Link>

            <Link
              to="/platform/workspace"
              className="inline-flex items-center gap-2 rounded-2xl border border-border px-7 py-4 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Open Workspace
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100K+</h3>
              <p className="mt-2 text-muted">Research papers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
              <p className="mt-2 text-muted">AI assistant</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="mt-2 text-muted">Source-backed answers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatHero;