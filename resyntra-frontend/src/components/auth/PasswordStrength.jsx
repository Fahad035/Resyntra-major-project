const getStrength = (password) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", color: "bg-red-500", level: 1 };
  if (score <= 3) return { label: "Medium", color: "bg-amber-500", level: 2 };
  return { label: "Strong", color: "bg-green-500", level: 3 };
};

const PasswordStrength = ({ password }) => {
  const { label, color, level } = getStrength(password);

  return (
    <div className="flex items-center gap-2 pt-1">
      <div className="flex flex-1 gap-1">
        {[1, 2, 3].map((bar) => (
          <div
            key={bar}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              bar <= level ? color : "bg-border"
            }`}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-muted">{label}</span>
    </div>
  );
};

export default PasswordStrength;