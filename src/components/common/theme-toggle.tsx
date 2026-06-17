"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light" | "system";

function getSystemLightSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

function subscribeSystemTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const media = window.matchMedia("(prefers-color-scheme: light)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "system";
    }
    return (window.localStorage.getItem("theme") as Theme | null) ?? "system";
  });
  const systemLight = useSyncExternalStore(
    subscribeSystemTheme,
    getSystemLightSnapshot,
    () => false,
  );
  const isLight = theme === "light" || (theme === "system" && systemLight);
  const Icon = isLight ? Sun : Moon;

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  function cycleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      className={cn(
        "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[color:var(--line)] bg-transparent text-[color:var(--muted)] transition-colors duration-150 hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]",
        className,
      )}
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={cycleTheme}
      suppressHydrationWarning
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
