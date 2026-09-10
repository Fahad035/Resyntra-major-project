const Input = ({
  label,
  error,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;