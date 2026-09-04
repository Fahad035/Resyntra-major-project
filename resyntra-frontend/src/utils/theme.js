export const STORAGE_KEY = "resyntra-theme";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

export const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
};

export const getResolvedTheme = (theme) => {
  return theme === THEMES.SYSTEM
    ? getSystemTheme()
    : theme;
};

export const applyTheme = (theme) => {
  const resolvedTheme = getResolvedTheme(theme);

  document.documentElement.setAttribute(
    "data-theme",
    resolvedTheme
  );
};