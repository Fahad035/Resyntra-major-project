import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { NAVBAR_ITEMS } from "./navbarData";
import { useNavbar } from "@/context/NavbarContext";

const DesktopNav = () => {
  const location = useLocation();

  const {
    activeMenu,
    setActiveMenu,
  } = useNavbar();

  const toggleMenu = (item) => {
    setActiveMenu((prev) =>
      prev?.label === item.label ? null : item
    );
  };

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAVBAR_ITEMS.map((item) => {
        const isActive =
          location.pathname === item.href ||
          location.pathname.startsWith(`${item.href}/`);

        return (
          <div
            key={item.label}
            className="relative flex items-center gap-1"
          >
            <Link
              to={item.href}
              onClick={() => setActiveMenu(null)}
              className={`
                text-sm
                font-medium
                transition-colors
                duration-200
                ${
                  isActive
                    ? "text-cyan-400"
                    : "text-muted hover:text-cyan-400"
                }
              `}
            >
              {item.label}
            </Link>

            {item.type === "mega" && (
              <button
                type="button"
                onClick={() => toggleMenu(item)}
                className="
                  rounded-md
                  p-1
                  transition-all
                  duration-200
                  hover:bg-(--foreground)/5
                "
              >
                <motion.div
                  animate={{
                    rotate:
                      activeMenu?.label === item.label
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ChevronDown
                    className={`
                      h-4
                      w-4
                      transition-colors
                      ${
                        activeMenu?.label === item.label
                          ? "text-cyan-400"
                          : "text-muted"
                      }
                    `}
                  />
                </motion.div>
              </button>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DesktopNav;