"use client";

import Image from "next/image";
import Link from "next/link";
import { SpotlightCard } from "@/components/common/spotlight-card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const preview = project.screenshots?.[0];
  const stack = project.stack.slice(0, featured ? 8 : 6).join(" / ");

  return (
    <SpotlightCard
      className={cn(
        "group h-full overflow-hidden p-0",
        featured && "md:col-span-2 lg:col-span-2",
      )}
    >
      <div
        className={cn(
          "overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--panel-strong)]",
          featured ? "aspect-[16/7]" : "aspect-video",
        )}
      >
        {preview ? (
          <Image
            src={preview.src}
            alt={preview.alt}
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-end p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Screenshot pending
            </p>
          </div>
        )}
      </div>

      <div className="flex h-full flex-col p-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
          {project.category}
        </p>
        <h3 className="mt-3 text-xl font-bold text-[color:var(--foreground)]">
          <Link className="focus-ring rounded-[4px]" href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
          {project.tagline}
        </p>
        <p className="mt-4 font-mono text-xs leading-6 text-[color:var(--muted)]">
          {stack}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring rounded-[4px] text-[color:var(--foreground)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
          >
            Details
          </Link>
          <Link
            href={`/blogs/${project.blogSlug}`}
            className="focus-ring rounded-[4px] text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
          >
            Build Story
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-[4px] text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </SpotlightCard>
  );
}
