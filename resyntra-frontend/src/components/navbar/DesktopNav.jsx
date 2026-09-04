import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { NAVBAR_ITEMS } from "./navbarData";
import { useNavbar } from "@/context/NavbarContext";

const DesktopNav = () => {
  const { activeMenu, setActiveMenu } = useNavbar();
  const location = useLocation();

  const toggleMenu = (item) => {
    setActiveMenu((prev) =>
      prev?.label === item.label ? null : item
    );
  };

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {NAVBAR_ITEMS.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-1"
        >
          {/* Text navigates */}
          <Link
            to={item.path}
            onClick={() => setActiveMenu(null)}
            className={`
        text-sm
        font-medium
        transition-colors
        ${location.pathname.startsWith(item.path)
                ? "text-cyan-400"
                : "text-slate-300 hover:text-cyan-400"
              }
    `}
          >
            {item.label}
          </Link>

          {/* Chevron toggles mega menu */}
          {item.type === "mega" && (
            <button
              onClick={() => toggleMenu(item)}
              className="rounded-md p-1.5 transition-all duration-200 hover:bg-white/5 hover:text-cyan-400"
            >
              <motion.div
                animate={{
                  rotate:
                    activeMenu?.label === item.label ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </motion.div>
            </button>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;