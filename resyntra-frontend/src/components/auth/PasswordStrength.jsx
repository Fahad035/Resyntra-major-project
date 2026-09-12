const getStrength = (password = "") => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return Math.min(score, 4);
};

const LABELS = ["Weak", "Fair", "Good", "Strong"];
const COLORS = [
  "bg-[var(--danger)]",
  "bg-[var(--warning)]",
  "bg-[var(--primary)]",
  "bg-[var(--success)]",
];

const PasswordStrength = ({ password }) => {
  if (!password) return null;

  const strength = getStrength(password);
  const level = Math.max(strength - 1, 0);

  return (
    <div className="space-y-1.5 -mt-1">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= level ? COLORS[level] : "bg-(--foreground)/10"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-muted">
        Password strength: <span className="font-medium">{LABELS[level]}</span>
      </p>
    </div>
  );
};

export default PasswordStrength;