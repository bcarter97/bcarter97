import { createContext, FC, useContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const createCtx = <A extends {} | null>() => {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error("Theme context must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
};

export const [useTheme, CustomThemeContextProvider] =
  createCtx<IThemeContext>();

const swapTheme = ({
  theme,
  newTheme = theme,
}: {
  theme: string;
  newTheme?: string;
}): void => {
  const root = window.document.documentElement;
  root.classList.remove(theme);
  root.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
};

const getDefaultTheme = (): string => {
  // User has a theme saved, use it
  const savedTheme = window?.localStorage.getItem("theme");
  if (savedTheme && ["light", "dark"].includes(savedTheme)) return savedTheme;

  // Return browser preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeContext: FC = ({ children }) => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const initialTheme = getDefaultTheme();
    setTheme(initialTheme);
    swapTheme({ theme: initialTheme });
    // eslint-disable-next-line
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    swapTheme({ theme, newTheme });
    setTheme(newTheme);
  };

  return (
    <CustomThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </CustomThemeContextProvider>
  );
};
