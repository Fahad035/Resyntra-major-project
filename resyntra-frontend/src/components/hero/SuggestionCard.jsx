import { ArrowUpRight } from "lucide-react";

const SuggestionCard = ({ topic }) => {
  const Icon = topic.icon;

  return (
    <button
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-white/2
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:bg-white/4
      "
    >
      <div className="flex items-start justify-between">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Icon className="h-5 w-5 text-cyan-400" />
        </div>

        <ArrowUpRight
          className="
            h-4
            w-4
            text-slate-500
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
            group-hover:text-cyan-400
          "
        />
      </div>

      <h4 className="mt-5 font-semibold text-white">
        {topic.title}
      </h4>

      <p className="mt-2 text-sm text-slate-400">
        {topic.papers}
      </p>
    </button>
  );
};

export default SuggestionCard;