const Divider = ({ text = "OR" }) => {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />

      <span className="text-xs uppercase tracking-widest text-muted">
        {text}
      </span>

      <div className="h-px flex-1 bg-border" />
    </div>
  );
};

export default Divider;