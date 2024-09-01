"use client";

import {
  FC,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";

export enum themes {
  DARK = "dark",
  LIGHT = "light",
}

interface ThemeContextType {
  theme: themes;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.LIGHT, // Default to LIGHT
  toggleTheme: () => {},
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<themes>(themes.LIGHT);

  useEffect(() => {
    // Check the user's preferred color scheme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDark ? themes.DARK : themes.LIGHT);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.DARK ? themes.LIGHT : themes.DARK
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
