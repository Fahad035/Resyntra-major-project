const Divider = ({ text = "OR" }) => {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="h-px flex-1 bg-slate-300" />

      <span className="text-xs uppercase tracking-widest text-slate-500">
        {text}
      </span>

      <div className="h-px flex-1 bg-slate-300" />
    </div>
  );
};

export default Divider;