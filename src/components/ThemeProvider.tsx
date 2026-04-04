import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { ThemeContext } from "../contexts/ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDark ? siteConfig.themes.dark : siteConfig.themes.light;

    root.style.setProperty("--theme-primary", theme.primary);
    root.style.setProperty("--theme-primary-hover", theme.primaryHover);
    root.style.setProperty("--theme-background", theme.background);
    root.style.setProperty("--theme-background-secondary", theme.backgroundSecondary);
    root.style.setProperty("--theme-text-main", theme.textMain);
    root.style.setProperty("--theme-text-muted", theme.textMuted);
    
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
