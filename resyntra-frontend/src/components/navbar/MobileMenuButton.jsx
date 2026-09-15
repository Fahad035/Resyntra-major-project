import { Menu, X } from "lucide-react";
import { useNavbar } from "@/context/NavbarContext";

const MobileMenuButton = () => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useNavbar();

  return (
    <button
      type="button"
      onClick={toggleMobileMenu}
      className="
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-(--border)
        bg-(--foreground)/5
        p-2
        text-(--foreground)
        transition-all
        duration-200
        hover:bg-(--foreground)/10
        lg:hidden
      "
      aria-label={
        isMobileMenuOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={isMobileMenuOpen}
    >
      {isMobileMenuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );
};

export default MobileMenuButton;