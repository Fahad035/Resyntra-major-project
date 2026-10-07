import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui";
import useAuth from "@/hooks/useAuth";

const CTAButtons = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch {
      navigate("/");
    }
  };

  if (isAuthenticated && user) {
    const displayName =
      user?.full_name ||
      user?.name ||
      user?.username ||
      user?.email?.split("@")[0] ||
      "User";

    const initial = displayName.charAt(0).toUpperCase();

    return (
      <div className="hidden lg:flex items-center gap-3">

        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 transition-colors hover:bg-muted"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {initial}
          </div>

          <span className="max-w-30 truncate text-sm font-medium">
            {displayName}
          </span>
        </button>

        <button
          type="button"
          onClick={handleLogout}
          className="group relative hidden items-center gap-2 overflow-hidden rounded-xl border border-border/60 bg-background/40 px-3.5 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/6 hover:text-red-500 lg:flex"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-background/60 transition-all duration-300 group-hover:border-red-500/20 group-hover:bg-red-500/10">
              <LogOut
                className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5"
              />
            </span>

            <span className="transition-colors duration-300">
              Exit Session
            </span>
          </span>

          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-red-500/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center gap-3">
      <Button variant="ghost" onClick={() => navigate("/login")}>
        Sign In
      </Button>

      <Button variant="ai" onClick={() => navigate("/register")}>
        Try For Free
      </Button>
    </div>
  );
};

export default CTAButtons;