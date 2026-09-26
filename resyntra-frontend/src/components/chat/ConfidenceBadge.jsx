import {
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react";

const confidenceConfig = {
  High: {
    icon: CheckCircle2,
    label: "High confidence",
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
  },

  Medium: {
    icon: AlertCircle,
    label: "Medium confidence",
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-500",
  },

  Low: {
    icon: XCircle,
    label: "Low confidence",
    className:
      "border-red-500/20 bg-red-500/10 text-red-500",
  },
};

export default function ConfidenceBadge({
  confidence,
}) {
  if (!confidence) {
    return null;
  }

  const config =
    confidenceConfig[confidence.label] ??
    confidenceConfig.Low;

  const Icon = config.icon;

  return (
    <div
      title={`Groundedness score: ${confidence.score}`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${config.className}`}
    >
      <Icon size={13} strokeWidth={2} />

      <span>{config.label}</span>
    </div>
  );
}