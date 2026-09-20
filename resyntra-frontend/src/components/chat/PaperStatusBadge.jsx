import { CheckCircle2, Loader2, XCircle, Clock } from "lucide-react";

const STATUS_CONFIG = {
  pending: {
    label: "Queued",
    icon: Clock,
    className: "text-muted",
  },
  processing: {
    label: "Processing",
    icon: Loader2,
    className: "text-cyan-400",
    spin: true,
  },
  completed: {
    label: "Ready",
    icon: CheckCircle2,
    className: "text-[var(--success)]",
  },
  failed: {
    label: "Failed",
    icon: XCircle,
    className: "text-[var(--danger)]",
  },
};

const PaperStatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium ${config.className}`}
    >
      <Icon className={`h-3.5 w-3.5 ${config.spin ? "animate-spin" : ""}`} />
      {config.label}
    </span>
  );
};

export default PaperStatusBadge;