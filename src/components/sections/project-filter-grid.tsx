"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards/project-card";
import { projectCategories, projects } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

export function ProjectFilterGrid() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "focus-ring rounded-[4px] border px-3 py-2 text-sm font-semibold transition-colors duration-150",
              active === category
                ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--button-text)]"
                : "border-[color:var(--line-strong)] bg-transparent text-[color:var(--foreground)] hover:border-[color:var(--accent)]",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
