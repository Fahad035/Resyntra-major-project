const AuthInput = ({
  label,
  type = "text",
  placeholder,
  error,
  register,
  icon: Icon,
  autoComplete,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-foreground">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted" />
        )}

        <input
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register}
          className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted
          ${Icon ? "pl-11" : ""}
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
              : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
          }`}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default AuthInput;