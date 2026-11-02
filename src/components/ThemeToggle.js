import React, {useEffect} from "react";
import {FiMoon, FiSun} from "react-icons/fi";
import {useLocalStorage} from "../hooks/useLocalStorage";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark ? "#131813" : "#f8f9f5";
  }, [isDark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Dark mode"
      aria-pressed={Boolean(isDark)}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );
}
