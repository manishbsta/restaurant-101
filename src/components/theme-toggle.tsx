"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const context = useTheme();

  if (!context) {
    return (
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-transparent text-gold"
        aria-label="Toggle theme"
        disabled
      >
        <Moon className="h-5 w-5" />
      </button>
    );
  }

  const { theme, toggleTheme } = context;

  return (
    <motion.button
      onClick={toggleTheme}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-transparent text-gold transition-colors hover:border-gold hover:bg-gold/10"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? -180 : 0,
          scale: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </motion.button>
  );
}