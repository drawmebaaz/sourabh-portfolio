"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--background)]">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-[4px]">
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-semibold text-[color:var(--foreground)]">
              {siteConfig.name}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-[4px] py-1 text-sm font-medium transition-colors duration-150",
                  active
                    ? "text-[color:var(--foreground)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[color:var(--line)] text-[color:var(--muted)] transition-colors duration-150 hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
            aria-label="GitHub"
            title="GitHub"
          >
            <Code2 className="h-4 w-4" aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[color:var(--line)] text-[color:var(--muted)] transition-colors duration-150 hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)] lg:hidden"
            aria-label="Toggle menu"
            title="Menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      </header>
      <div
        className="fixed inset-0 z-50 lg:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
        }}
        aria-hidden={!open}
      >
            <button
              type="button"
              className="absolute inset-0 bg-black/55"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <aside
              className="absolute inset-y-0 right-0 flex h-dvh w-[min(22rem,100vw)] flex-col border-l border-[color:var(--line)] bg-[color:var(--background)]"
              style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
              aria-label="Mobile navigation"
            >
              <div className="flex h-14 items-center justify-between border-b border-[color:var(--line)] px-4">
                <Link
                  href="/"
                  className="focus-ring flex items-center gap-3 rounded-[4px]"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[color:var(--line-strong)] font-mono text-xs font-bold text-[color:var(--foreground)]">
                    SR
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-[color:var(--foreground)]">
                      {siteConfig.name}
                    </span>
                    <span className="block text-[11px] text-[color:var(--muted)]">
                      IIIT Allahabad
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-[4px] border border-[color:var(--line)] text-[color:var(--muted)] transition-colors duration-150 hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
                  aria-label="Close menu"
                  title="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="grid border-b border-[color:var(--line)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring flex items-center justify-between border-t border-[color:var(--line)] px-5 py-4 text-sm font-semibold transition-colors",
                    item.href === "/"
                      ? pathname === "/"
                        ? "text-[color:var(--foreground)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                      : pathname.startsWith(item.href)
                        ? "text-[color:var(--foreground)]"
                        : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                  )}
                >
                  <span>{item.label}</span>
                  {(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)) ? (
                    <span className="font-mono text-xs text-[color:var(--muted)]">Current</span>
                  ) : null}
                </Link>
              ))}
              </div>

              <div className="mt-auto border-t border-[color:var(--line)] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  Contact
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-[4px] text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
                  >
                    GitHub
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="focus-ring rounded-[4px] text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
                  >
                    Email
                  </a>
                  <a
                    href={siteConfig.resume}
                    className="focus-ring rounded-[4px] text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </aside>
      </div>
    </>
  );
}
