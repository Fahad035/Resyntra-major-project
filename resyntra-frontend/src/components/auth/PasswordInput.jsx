import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

const PasswordInput = ({
  label,
  placeholder,
  error,
  register,
  autoComplete = "current-password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-foreground">
        {label}
      </label>

      <div className="relative">
        <Lock className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted" />

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register}
          className={`w-full rounded-xl border bg-background px-4 py-3 pl-11 pr-12 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted
          ${
            error
              ? "border-(--danger) focus:ring-2 focus:ring-(--danger)/25"
              : "border-border focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20"
          }`}
        />

        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-(--primary)"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && (
        <p className="text-sm text-(--danger)">{error.message}</p>
      )}
    </div>
  );
};

export default PasswordInput;