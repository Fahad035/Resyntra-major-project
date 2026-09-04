import { Menu } from "lucide-react";

const MobileMenuButton = () => {
  return (
    <button
      className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
      aria-label="Open navigation menu"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
};

export default MobileMenuButton;