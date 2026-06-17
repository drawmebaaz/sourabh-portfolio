"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Command, Search, X } from "lucide-react";
import { navItems } from "@/data/site";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo(
    () => [
      ...navItems.map((item) => ({ ...item, group: "Pages" })),
      ...projects.map((project) => ({
        href: `/projects/${project.slug}`,
        label: project.name,
        group: "Projects",
      })),
      {
        href: "/blogs",
        label: "Build stories and debugging notes",
        group: "Writing",
      },
    ],
    [],
  );

  const filtered = items.filter((item) =>
    `${item.label} ${item.group}`.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[color:var(--line)] bg-transparent text-[color:var(--soft)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
        aria-label="Open quick navigation"
        title="Quick navigation"
        onClick={() => setOpen(true)}
      >
        <Command className="h-4 w-4" aria-hidden="true" />
      </button>
      {open ? (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-24">
            <div className="w-full max-w-xl overflow-hidden rounded-[6px] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)]">
              <div className="flex items-center gap-3 border-b border-[color:var(--line)] px-4">
                <Search className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-14 flex-1 bg-transparent text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted)]"
                  placeholder="Search pages, projects, writing..."
                />
                <button
                  type="button"
                  className="focus-ring rounded-[4px] p-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                  aria-label="Close quick navigation"
                  title="Close"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto p-2">
                {filtered.map((item) => (
                  <Link
                    key={`${item.group}-${item.href}-${item.label}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-[4px] px-3 py-3 text-sm transition-colors hover:bg-[color:var(--panel)]",
                      "text-[color:var(--soft)]",
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-[color:var(--muted)]">
                      {item.group}
                    </span>
                  </Link>
                ))}
                {filtered.length === 0 ? (
                  <p className="px-3 py-8 text-center text-sm text-[color:var(--muted)]">
                    No match found.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
    </>
  );
}
