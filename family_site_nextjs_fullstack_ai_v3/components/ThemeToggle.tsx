
"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      className="btn btn-secondary"
      onClick={() => setTheme(next)}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "Light" : "Dark"} mode
    </button>
  );
}
