import {
  AlertCircle,
  CheckCircle2,
  CircleHelp,
  Compass,
  GitCompareArrows,
  Lightbulb,
  SearchX,
  Sparkles,
} from "lucide-react";

import FormattedAnswer from "@/components/chat/FormattedAnswer";

const SECTION_STYLES = [
  { match: "research gaps", icon: SearchX, color: "cyan" },
  { match: "common limitations", icon: AlertCircle, color: "amber" },
  { match: "conflicting findings", icon: GitCompareArrows, color: "rose" },
  { match: "unanswered questions", icon: CircleHelp, color: "purple" },
  { match: "future research directions", icon: Compass, color: "indigo" },
  { match: "novel research ideas", icon: Lightbulb, color: "emerald" },
  { match: "final recommendation", icon: CheckCircle2, color: "cyan" },
];

const COLOR_CLASSES = {
  cyan: {
    icon: "text-cyan-400",
    badge: "border-cyan-500/20 bg-cyan-500/10",
    accent: "before:bg-cyan-400",
  },
  amber: {
    icon: "text-amber-400",
    badge: "border-amber-500/20 bg-amber-500/10",
    accent: "before:bg-amber-400",
  },
  rose: {
    icon: "text-rose-400",
    badge: "border-rose-500/20 bg-rose-500/10",
    accent: "before:bg-rose-400",
  },
  purple: {
    icon: "text-purple-400",
    badge: "border-purple-500/20 bg-purple-500/10",
    accent: "before:bg-purple-400",
  },
  indigo: {
    icon: "text-indigo-400",
    badge: "border-indigo-500/20 bg-indigo-500/10",
    accent: "before:bg-indigo-400",
  },
  emerald: {
    icon: "text-emerald-400",
    badge: "border-emerald-500/20 bg-emerald-500/10",
    accent: "before:bg-emerald-400",
  },
};

const getSectionStyle = (title) => {
  const normalized = title.toLowerCase().trim();
  const found = SECTION_STYLES.find((s) => normalized.includes(s.match));
  return found
    ? { icon: found.icon, ...COLOR_CLASSES[found.color] }
    : { icon: Sparkles, ...COLOR_CLASSES.cyan };
};

// The AI is prompted to always return "# Heading" sections - split on
// those rather than assuming an exact fixed list, so the UI still
// renders sensibly even if the model phrases something differently.
const parseSections = (markdown) => {
  const lines = markdown.split("\n");
  const sections = [];
  let current = null;

  for (const line of lines) {
    const match = line.match(/^#{1,2}\s+(.+)/);

    if (match) {
      if (current) sections.push(current);
      current = { title: match[1].trim(), body: "" };
    } else if (current) {
      current.body += `${line}\n`;
    }
  }

  if (current) sections.push(current);

  return sections.length > 0
    ? sections
    : [{ title: "Report", body: markdown }];
};

const GapReportView = ({ report }) => {
  const sections = parseSections(report);

  return (
    <div className="space-y-4">
      {sections.map((section, index) => {
        const style = getSectionStyle(section.title);
        const Icon = style.icon;

        return (
          <div
            key={`${section.title}-${index}`}
            className={`relative overflow-hidden rounded-2xl border border-border bg-(--foreground)/2 p-5 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${style.accent}`}
          >
            <div className="mb-3 flex items-center gap-2.5">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg border ${style.badge}`}
              >
                <Icon className={`h-4 w-4 ${style.icon}`} />
              </span>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
            </div>

            <div className="text-sm leading-7 text-muted">
              <FormattedAnswer text={section.body.trim()} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GapReportView;