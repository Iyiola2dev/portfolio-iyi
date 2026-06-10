"use client";

import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      className="toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Mobile: icon only */}
      <span className="md:hidden flex items-center justify-center">
        {isDark
          ? <Sun size={15} strokeWidth={1.8} />   /* dark mode → show sun (go light) */
          : <Moon size={15} strokeWidth={1.8} />   /* light mode → show moon (go dark) */
        }
      </span>

      {/* Desktop: text label */}
      <span className="hidden md:inline">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </Button>
  );
}
