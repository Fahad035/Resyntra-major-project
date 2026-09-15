import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { NAVBAR_ITEMS } from "./navbarData";
import { useNavbar } from "@/context/NavbarContext";

const MobileNav = () => {
  const location = useLocation();

  const {
    isMobileMenuOpen,
    closeMobileMenu,
  } = useNavbar();

  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleExpandedMenu = (label) => {
    setExpandedMenu((previous) =>
      previous === label ? null : label
    );
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            height: "auto",
            y: 0,
          }}
          exit={{
            opacity: 0,
            height: 0,
            y: -8,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-0
            right-0
            top-full
            mt-3
            max-h-[calc(100vh-100px)]
            overflow-y-auto
            rounded-2xl
            border
            border-(--border)
            bg-(--surface)
            shadow-(--shadow)
            lg:hidden
          "
        >
          <nav className="flex flex-col p-4">
            {NAVBAR_ITEMS.map((item) => {
              const isActive =
                location.pathname === item.href ||
                location.pathname.startsWith(
                  `${item.href}/`
                );

              const isExpanded =
                expandedMenu === item.label;

              const hasSections =
                item.type === "mega" &&
                Array.isArray(item.sections) &&
                item.sections.length > 0;

              return (
                <div key={item.label}>
                  {/* Main Navigation Row */}
                  <div
                    className={`
                      flex
                      items-center
                      rounded-xl
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? "bg-(--primary)/5"
                          : "hover:bg-(--foreground)/5"
                      }
                    `}
                  >
                    <Link
                      to={item.href}
                      onClick={() => {
                        if (!hasSections) {
                          closeMobileMenu();
                        }
                      }}
                      className="
                        flex-1
                        px-4
                        py-3.5
                        text-sm
                        font-medium
                      "
                    >
                      <span
                        className={
                          isActive
                            ? "text-(--primary)"
                            : "text-(--foreground)"
                        }
                      >
                        {item.label}
                      </span>
                    </Link>

                    {/* Mega Menu Chevron */}
                    {hasSections && (
                      <button
                        type="button"
                        onClick={() =>
                          toggleExpandedMenu(
                            item.label
                          )
                        }
                        aria-label={
                          isExpanded
                            ? `Collapse ${item.label} menu`
                            : `Expand ${item.label} menu`
                        }
                        aria-expanded={isExpanded}
                        className="
                          mr-2
                          rounded-lg
                          p-2
                          text-(--muted-foreground)
                          transition-colors
                          duration-200
                          hover:bg-(--foreground)/5
                          hover:text-(--primary)
                        "
                      >
                        <motion.div
                          animate={{
                            rotate: isExpanded ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Expanded Mega Menu */}
                  <AnimatePresence initial={false}>
                    {hasSections && isExpanded && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 border-l border-(--border) py-2 pl-4">
                          {item.sections.map(
                            (section) => (
                              <div
                                key={section.title}
                                className="mb-4 last:mb-0"
                              >
                                <p
                                  className="
                                    px-3
                                    pb-2
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-(--muted-foreground)
                                  "
                                >
                                  {section.title}
                                </p>

                                <div className="space-y-1">
                                  {section.items.map(
                                    (subItem) => {
                                      const Icon =
                                        subItem.icon;

                                      return (
                                        <Link
                                          key={
                                            subItem.title
                                          }
                                          to={
                                            subItem.path
                                          }
                                          onClick={
                                            closeMobileMenu
                                          }
                                          className="
                                            group
                                            flex
                                            items-start
                                            gap-3
                                            rounded-xl
                                            p-3
                                            transition-colors
                                            duration-200
                                            hover:bg-(--foreground)/5
                                          "
                                        >
                                          <div
                                            className="
                                              flex
                                              h-8
                                              w-8
                                              shrink-0
                                              items-center
                                              justify-center
                                              rounded-lg
                                              bg-(--primary)/10
                                              text-(--primary)
                                              transition-colors
                                              group-hover:bg-(--primary)/15
                                            "
                                          >
                                            {Icon && (
                                              <Icon className="h-4 w-4" />
                                            )}
                                          </div>

                                          <div className="min-w-0">
                                            <p
                                              className="
                                                text-sm
                                                font-medium
                                                text-(--foreground)
                                              "
                                            >
                                              {
                                                subItem.title
                                              }
                                            </p>

                                            {subItem.description && (
                                              <p
                                                className="
                                                  mt-1
                                                  text-xs
                                                  leading-5
                                                  text-(--muted-foreground)
                                                "
                                              >
                                                {
                                                  subItem.description
                                                }
                                              </p>
                                            )}
                                          </div>
                                        </Link>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            )
                          )}

                          {/* Explore Link */}
                          {item.explore && (
                            <Link
                              to={item.href}
                              onClick={closeMobileMenu}
                              className="
                                mt-3
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-(--border)
                                px-3
                                py-2.5
                                text-xs
                                font-medium
                                text-(--primary)
                                transition-colors
                                hover:bg-(--primary)/5
                              "
                            >
                              {item.explore.title}
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div
            className="
              border-t
              border-(--border)
              p-4
            "
          >
            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-(--primary)
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-(--primary-hover)
              "
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;