import { Check } from "lucide-react";
import clsx from "clsx";

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  button,
  highlighted,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-3xl border p-8 transition-all duration-300",
        highlighted
          ? "border-cyan-400 bg-slate-900 shadow-[0_0_60px_rgba(34,211,238,0.12)]"
          : "border-white/10 bg-white/2"
      )}
    >
      {highlighted && (
        <span className="mb-6 w-fit rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-semibold text-white">
        {name}
      </h3>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

      <div className="mt-8 flex items-end gap-1">
        <span className="text-5xl font-bold text-white">
          {price}
        </span>

        {period && (
          <span className="pb-2 text-slate-500">
            {period}
          </span>
        )}
      </div>

      <ul className="mt-10 space-y-4 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3"
          >
            <Check className="mt-0.5 h-5 w-5 text-cyan-400" />

            <span className="text-slate-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={clsx(
          "mt-10 rounded-xl py-3 font-semibold transition",
          highlighted
            ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
            : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
        )}
      >
        {button}
      </button>
    </div>
  );
};

export default PricingCard;