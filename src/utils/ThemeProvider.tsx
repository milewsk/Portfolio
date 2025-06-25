import { createContext, useContext, useEffect, useState } from "react";

export const Theme = {
  Dark: "dark",
  Light: "light",
  System: "system",
} as const;

const StorageKey: string = "UI-Theme";

export type Theme = (typeof Theme)[keyof typeof Theme];

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: Theme.Dark,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = Theme.Dark,
  storageKey = StorageKey,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === Theme.System) {
      const systemTheme: Theme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? Theme.Dark
        : Theme.Light;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: () => {
      if (localStorage.getItem(storageKey) == Theme.Dark) {
        localStorage.setItem(storageKey, Theme.Light);
        setTheme(Theme.Light);
      } else {
        localStorage.setItem(storageKey, Theme.Dark);
        setTheme(Theme.Dark);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must me used within ThemeProvider");
  }

  return context;
};
