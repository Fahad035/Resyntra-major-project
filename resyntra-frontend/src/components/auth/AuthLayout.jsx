import { Link } from "react-router-dom";
import { Sparkles, FileText, MessagesSquare, PenLine, Presentation } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";

const features = [
  {
    icon: MessagesSquare,
    text: "Chat with your research papers using AI",
  },
  {
    icon: FileText,
    text: "Generate literature reviews in minutes",
  },
  {
    icon: PenLine,
    text: "Find research gaps and citation-ready summaries",
  },
  {
    icon: Presentation,
    text: "Turn findings into presentations instantly",
  },
];

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Left showcase panel */}
      <div className="relative hidden lg:flex flex-1 flex-col justify-between overflow-hidden bg-(--surface) p-14">
        {/* Decorative glow / grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-(--primary)/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-wide">
            <Sparkles className="h-6 w-6 text-(--primary)" />
            Resyntra
          </Link>

          <p className="mt-4 max-w-md text-(--muted-foreground)">
            Your AI-powered research assistant — from discovery to draft.
          </p>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
            Empower your
            <br />
            research journey.
          </h1>

          <ul className="mt-8 space-y-4">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-(--muted-foreground)">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-(--foreground)/5">
                  <Icon className="h-4 w-4 text-(--primary)" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative z-10 text-sm text-(--muted-foreground)">
          © {new Date().getFullYear()} Resyntra. All rights reserved.
        </p>
      </div>

      {/* Right form panel */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-10">
        <div className="absolute top-6 right-6 flex items-center gap-3">
          <ThemeToggle />
        </div>

        <Link
          to="/"
          className="mb-8 flex items-center gap-2 text-xl font-bold lg:hidden"
        >
          <Sparkles className="h-5 w-5 text-(--primary)" />
          Resyntra
        </Link>

        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;