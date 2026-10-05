import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const GITHUB_URL = "https://github.com/"; // TODO: put your repo link

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400">
        <GraduationCap className="h-4 w-4" />
        B.E. CSE (AI/ML) · Final-Year Major Project
      </span>

      <h1 className="mt-8 text-4xl font-bold leading-tight text-foreground md:text-6xl">
        Research is hard.
        <br className="hidden sm:block" />
        <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
          We&apos;re making it faster.
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted">
        Resyntra is an AI research intelligence platform that lets you chat
        with papers, summarize them, detect research gaps and turn findings
        into presentations — powered by a real retrieval-augmented
        generation pipeline, not just prompts.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/register"
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Try the platform
          <ArrowRight className="h-5 w-5" />
        </Link>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-(--foreground)/5 px-7 py-3.5 font-medium text-foreground transition hover:bg-(--foreground)/10"
        >
          <FaGithub className="h-5 w-5" />
          View source
        </a>
      </div>
    </motion.div>
  );
};

export default AboutHero;