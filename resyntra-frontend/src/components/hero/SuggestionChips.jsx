import SuggestionCard from "./SuggestionCard";
import { RESEARCH_TOPICS } from "@/constants/suggestionData";

const SuggestionChips = () => {
  return (
    <section className="mt-10 w-full max-w-6xl">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Trending Research Areas
        </h3>

        <p className="text-sm text-muted">
          Explore popular academic domains
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {RESEARCH_TOPICS.map((topic) => (
          <SuggestionCard
            key={topic.title}
            topic={topic}
          />
        ))}
      </div>
    </section>
  );
};

export default SuggestionChips;