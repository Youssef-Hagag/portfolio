import { useLayoutEffect, useState } from "react";

export default function ThemeToggle() {
  const initialDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(initialDarkMode === null ? true : initialDarkMode === "true");

  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    localStorage.setItem("darkMode", newDarkMode);
    setDarkMode(newDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="my-auto">
      <i className={`pi ${darkMode ? "pi-sun" : "pi-moon"} content-baseline sm:text-2xl hover:opacity-50`}></i>
    </button>
  );
}
