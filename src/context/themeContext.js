import { createContext, useContext, useEffect, useState } from "react";

const CustomThemeContext = createContext();
export const useTheme = () => useContext(CustomThemeContext);

const swapTheme = ({ theme, newTheme = theme }) => {
  const root = window.document.documentElement;
  root.classList.remove(theme);
  root.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
};

const getDefaultTheme = () => {
  // User has a theme saved, use it
  const savedTheme = window?.localStorage.getItem("theme");
  if (["light", "dark"].includes(savedTheme)) return savedTheme;

  // Return browser preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(undefined);

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
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export default ThemeContext;
