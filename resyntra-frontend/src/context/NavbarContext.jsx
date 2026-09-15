import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavbarContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        navbarRef,

        isMobileMenuOpen,
        setIsMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};