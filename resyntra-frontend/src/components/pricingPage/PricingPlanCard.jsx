import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

const PricingPlanCard = ({ plan, billingCycle, index }) => {
  const isCustom = plan.monthly === null;
  const price = billingCycle === "annual" ? plan.annual : plan.monthly;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={clsx(
        "relative flex flex-col rounded-3xl border p-8 transition-all duration-300",
        plan.highlighted
          ? "border-cyan-400 bg-surface shadow-[0_0_60px_rgba(34,211,238,0.12)] lg:-translate-y-4"
          : "border-border bg-(--foreground)/2"
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-950">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-3 text-sm text-muted">{plan.tagline}</p>

      <div className="mt-8 flex items-end gap-1">
        {isCustom ? (
          <span className="text-5xl font-bold text-foreground">Custom</span>
        ) : (
          <>
            <span className="text-5xl font-bold text-foreground">
              ${price}
            </span>
            <span className="pb-2 text-muted">/month</span>
          </>
        )}
      </div>

      {!isCustom && billingCycle === "annual" && plan.monthly > 0 && (
        <p className="mt-2 text-xs text-cyan-400">
          Billed annually — 2 months free
        </p>
      )}

      <ul className="mt-8 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
            <span className="text-sm text-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={plan.ctaTo}
        className={clsx(
          "mt-10 flex items-center justify-center gap-2 rounded-xl py-3 font-semibold transition",
          plan.highlighted
            ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
            : "border border-border bg-(--foreground)/5 text-foreground hover:bg-(--foreground)/10"
        )}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default PricingPlanCard;