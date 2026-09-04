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

  const navbarRef = useRef(null);

  return (
    <NavbarContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        navbarRef,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};