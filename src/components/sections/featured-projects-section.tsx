import { ProjectCard } from "@/components/cards/project-card";
import { AnimatedButton } from "@/components/common/animated-button";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjectsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Three projects I can actually talk through."
            description="Each one has screenshots, a build story, and the parts that took real debugging instead of just a neat final summary."
          />
          <AnimatedButton href="/projects" variant="secondary">
            All Projects
          </AnimatedButton>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} className="h-full" delay={index * 0.06}>
              <div data-cursor-blob className="h-full">
                <ProjectCard project={project} featured={index === 0} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
