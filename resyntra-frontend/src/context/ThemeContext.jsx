import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  STORAGE_KEY,
  THEMES,
  applyTheme,
} from "@/utils/theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem(STORAGE_KEY) ??
      THEMES.SYSTEM
    );
  });

  useEffect(() => {
    applyTheme(theme);

    localStorage.setItem(
      STORAGE_KEY,
      theme
    );
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handler = () => {
      if (theme === THEMES.SYSTEM) {
        applyTheme(THEMES.SYSTEM);
      }
    };

    media.addEventListener(
      "change",
      handler
    );

    return () =>
      media.removeEventListener(
        "change",
        handler
      );
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      THEMES,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};