import { motion } from "framer-motion";

const BillingToggle = ({ billingCycle, onChange }) => {
  const isAnnual = billingCycle === "annual";

  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${
          !isAnnual ? "text-foreground" : "text-muted"
        }`}
      >
        Monthly
      </span>

      <button
        type="button"
        onClick={() => onChange(isAnnual ? "monthly" : "annual")}
        className="relative h-8 w-16 rounded-full border border-border bg-(--foreground)/5 transition-colors"
        aria-label="Toggle billing cycle"
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-1 h-6 w-6 rounded-full bg-cyan-400"
          style={{ left: isAnnual ? "calc(100% - 1.75rem)" : "0.25rem" }}
        />
      </button>

      <span
        className={`flex items-center gap-2 text-sm font-medium transition-colors ${
          isAnnual ? "text-foreground" : "text-muted"
        }`}
      >
        Annual
        <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20">
          Save 20%
        </span>
      </span>
    </div>
  );
};

export default BillingToggle;