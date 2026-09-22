const SummarySkeleton = () => {
  const widths = ["100%", "92%", "97%", "80%", "100%", "88%", "60%"];

  return (
    <div className="space-y-3">
      {widths.map((w, i) => (
        <div
          key={i}
          className="h-3.5 animate-pulse rounded-full bg-(--foreground)/8"
          style={{ width: w, animationDelay: `${i * 0.08}s` }}
        />
      ))}
    </div>
  );
};

export default SummarySkeleton;