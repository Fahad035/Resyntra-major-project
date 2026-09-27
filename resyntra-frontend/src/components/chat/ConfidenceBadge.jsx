import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

const confidenceConfig = {
  High: {
    icon: CheckCircle2,
    label: "High confidence",
    shortLabel: "High",
    className:
      "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-400",
    glow: "shadow-[0_0_18px_rgba(52,211,153,0.10)]",
    dot: "bg-emerald-400",
    bar: "bg-emerald-400",
  },

  Medium: {
    icon: AlertCircle,
    label: "Medium confidence",
    shortLabel: "Medium",
    className:
      "border-amber-400/25 bg-amber-400/[0.07] text-amber-400",
    glow: "shadow-[0_0_18px_rgba(251,191,36,0.10)]",
    dot: "bg-amber-400",
    bar: "bg-amber-400",
  },

  Low: {
    icon: XCircle,
    label: "Low confidence",
    shortLabel: "Low",
    className:
      "border-red-400/25 bg-red-400/[0.07] text-red-400",
    glow: "shadow-[0_0_18px_rgba(248,113,113,0.10)]",
    dot: "bg-red-400",
    bar: "bg-red-400",
  },
};

export default function ConfidenceBadge({ confidence }) {
  if (!confidence) {
    return null;
  }

  const config =
    confidenceConfig[confidence.label] ??
    confidenceConfig.Low;

  const Icon = config.icon;

  const score = Math.max(
    0,
    Math.min(1, Number(confidence.score) || 0)
  );

  const percentage = Math.round(score * 100);

  return (
    <div
      className={clsx(
        "group relative inline-flex items-center gap-2",
        "rounded-full border px-2.5 py-1.5",
        "backdrop-blur-md",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        config.className,
        config.glow
      )}
    >
      {/* Status indicator */}
      <span className="relative flex h-4 w-4 items-center justify-center">
        <span
          className={clsx(
            "absolute h-2 w-2 rounded-full opacity-40 blur-[3px]",
            config.dot
          )}
        />

        <span
          className={clsx(
            "relative h-1.5 w-1.5 rounded-full",
            config.dot
          )}
        />
      </span>

      {/* Icon */}
      <Icon
        size={13}
        strokeWidth={2}
        className="shrink-0"
      />

      {/* Label */}
      <span className="text-[11px] font-medium tracking-wide">
        {config.shortLabel}
      </span>

      {/* Score */}
      <span className="border-l border-current/15 pl-2 text-[10px] font-semibold tabular-nums opacity-70">
        {percentage}%
      </span>

      {/* Hover panel */}
      <div
        className={clsx(
          "pointer-events-none absolute bottom-full left-1/2 z-50 mb-2",
          "w-52 -translate-x-1/2 translate-y-1",
          "rounded-xl border border-border",
          "bg-background/95 p-3 shadow-2xl backdrop-blur-xl",
          "opacity-0 transition-all duration-200",
          "group-hover:pointer-events-auto",
          "group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {/* Header */}
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles
              size={12}
              className="text-cyan-400"
            />

            <span className="text-[11px] font-semibold text-foreground">
              AI Groundedness
            </span>
          </div>

          <span
            className={clsx(
              "text-[10px] font-semibold",
              config.className
                .split(" ")
                .find((item) =>
                  item.startsWith("text-")
                )
            )}
          >
            {percentage}%
          </span>
        </div>

        {/* Progress */}
        <div className="mb-2 h-1 overflow-hidden rounded-full bg-foreground/10">
          <div
            className={clsx(
              "h-full rounded-full transition-all duration-500",
              config.bar
            )}
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        {/* Description */}
        <p className="text-[10px] leading-4 text-muted">
          Measures how strongly the generated answer is
          supported by the retrieved research sources.
        </p>
      </div>
    </div>
  );
}