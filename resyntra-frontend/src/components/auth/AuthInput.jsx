const AuthInput = ({
  label,
  type = "text",
  placeholder,
  error,
  register,
  required = true,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200
        ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-300"
            : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        }`}
        required={required}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default AuthInput;