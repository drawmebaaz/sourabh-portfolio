import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Stack"
          title="The tools I have been using."
          description="A practical stack from the projects on this site: frontend, backend, databases, ML utilities, and deployment basics."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="h-full rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] p-5 transition-colors duration-200 hover:border-[color:var(--line-strong)]">
                <h3 className="text-lg font-bold text-[color:var(--foreground)]">
                  {group.title}
                </h3>
                <p className="mt-4 font-mono text-xs leading-6 text-[color:var(--muted)]">
                  {group.skills.join(" / ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
