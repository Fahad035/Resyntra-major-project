const stats = [
  {
    value: "PDF",
    label: "Research Paper Analysis",
  },
  {
    value: "AI",
    label: "Generative Intelligence",
  },
  {
    value: "RAG",
    label: "Context-Aware Responses",
  },
  {
    value: "24/7",
    label: "Research Assistance",
  },
];

const HeroStats = () => {
  return (
    <section className="mt-20 w-full max-w-5xl">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-(--foreground)/3 p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              {stat.value}
            </h3>

            <p className="mt-3 text-sm text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroStats;