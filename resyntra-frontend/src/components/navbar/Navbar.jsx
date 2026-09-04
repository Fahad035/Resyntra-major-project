import { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import CTAButtons from "./CTAButtons";
import MobileMenuButton from "./MobileMenuButton";
import MegaMenu from "./MegaMenu";
import ThemeToggle from "@/components/common/ThemeToggle";

import useScrollPosition from "@/hooks/useScrollPosition";
import {
  NavbarProvider,
  useNavbar,
} from "@/context/NavbarContext";

const NavbarContent = () => {
  const isScrolled = useScrollPosition();

  const {
    navbarRef,
    setActiveMenu,
  } = useNavbar();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [navbarRef, setActiveMenu]);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [setActiveMenu]);

  return (
    <motion.header
      ref={navbarRef}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto w-[96%] max-w-7xl pt-3 lg:pt-4">
        <div
          className={clsx(
            "relative flex items-center justify-between rounded-2xl border transition-all duration-300",
            isScrolled
              ? "h-16 border border-white/10 bg-slate-900/70 shadow-xl backdrop-blur-xl"
              : "h-20 border-transparent bg-transparent"
          )}
        >
          <div className="px-6">
            <Logo />
          </div>

          <DesktopNav />

          <div className="flex items-center gap-3 px-6">
            <ThemeToggle />
            <CTAButtons />
            <MobileMenuButton />
          </div>

          <MegaMenu />
        </div>
      </div>
    </motion.header>
  );
};

const Navbar = () => {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
};

export default Navbar;