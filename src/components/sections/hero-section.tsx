import { AnimatedButton } from "@/components/common/animated-button";
import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function HeroSection({ buildNoteCount }: { buildNoteCount: number }) {
  const featuredCount = featuredProjects.length;

  return (
    <section className="px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Full-stack / ML / IIIT Allahabad
          </p>
          <h1
            className="mt-6 max-w-5xl text-balance text-5xl font-bold leading-[0.98] text-[color:var(--foreground)] sm:text-6xl lg:text-7xl"
          >
            I <span className="accent-text">build</span> practical web apps,
            dashboards, and ML-backed tools.
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-[1.7] text-[color:var(--muted)] md:text-lg">
            {siteConfig.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <AnimatedButton href="/projects">View Projects</AnimatedButton>
            <AnimatedButton href="/blogs" variant="secondary">
              Read Build Notes
            </AnimatedButton>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
            {featuredCount} featured projects / {buildNoteCount} build notes /
            IIIT Allahabad
          </p>
        </div>
      </div>
    </section>
  );
}
