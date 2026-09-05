import { Menu } from "lucide-react";

const MobileMenuButton = () => {
  return (
    <button
      className="rounded-xl border border-border bg-(--foreground)/5 p-2 text-foreground transition hover:bg-(--foreground)/10 lg:hidden"
      aria-label="Open navigation menu"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
};

export default MobileMenuButton;