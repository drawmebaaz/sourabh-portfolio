import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedButton } from "@/components/common/animated-button";
import { projects, getProjectBySlug } from "@/data/projects";
import { getPostsByProject } from "@/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | Sourabh Singh Rawat`,
      description: project.tagline,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedPosts = getPostsByProject(project.slug);
  const primaryScreenshot = project.screenshots?.[0];
  const galleryScreenshots = project.screenshots?.slice(1) ?? [];
  const definitionRows = [
    ["Problem", project.problem],
    ["Why I built it", project.outcome],
    ["Category", project.category],
    ["Tech stack", project.stack.join(" / ")],
  ];

  return (
    <article className="px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-[color:var(--muted)]">
          <Link
            href="/projects"
            className="focus-ring rounded-[4px] transition hover:text-[color:var(--accent)]"
          >
            Projects
          </Link>{" "}
          / {project.name}
        </p>

        <p className="mt-10 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
          {project.category}
        </p>
        <h1 className="mt-4 text-balance text-5xl font-bold leading-[0.98] text-[color:var(--foreground)] [overflow-wrap:anywhere] sm:text-6xl lg:text-7xl">
          {project.name}
        </h1>
        <p className="mt-6 text-xl leading-[1.55] text-[color:var(--soft)]">
          {project.tagline}
        </p>
        <p className="mt-5 text-base leading-[1.7] text-[color:var(--muted)]">
          {project.outcome}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <AnimatedButton href={`/blogs/${project.blogSlug}`}>
            Build Story
          </AnimatedButton>
          {project.links.github ? (
            <AnimatedButton href={project.links.github} variant="secondary">
              GitHub
            </AnimatedButton>
          ) : null}
          {project.links.live ? (
            <AnimatedButton href={project.links.live} variant="ghost">
              Live Demo
            </AnimatedButton>
          ) : null}
        </div>

        <div className="mt-12">
          {primaryScreenshot ? (
            <figure>
              <div className="overflow-hidden rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)]">
                <Image
                  src={primaryScreenshot.src}
                  alt={primaryScreenshot.alt}
                  width={1200}
                  height={675}
                  priority
                  className="aspect-video h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs leading-5 text-[color:var(--muted)]">
                {primaryScreenshot.title}
              </figcaption>
            </figure>
          ) : (
            <div className="rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Project preview
              </p>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                Add screenshots in `public/assets/projects/{project.slug}` and
                list them in the project `screenshots` array.
              </p>
            </div>
          )}
        </div>

        <dl className="mt-12 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {definitionRows.map(([label, value]) => (
            <div key={label} className="grid gap-3 py-5 md:grid-cols-[150px_1fr]">
              <dt className="text-sm font-semibold text-[color:var(--muted)]">
                {label}
              </dt>
              <dd className="text-sm leading-6 text-[color:var(--foreground)]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {galleryScreenshots.length > 0 ? (
        <section className="mx-auto mt-12 max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
            Screenshots
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[color:var(--foreground)]">
            More of the actual interface
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {galleryScreenshots.map((screenshot) => (
              <figure key={screenshot.src}>
                <div className="overflow-hidden rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1200}
                    height={675}
                    className="aspect-video h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs leading-5 text-[color:var(--muted)]">
                  {screenshot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mx-auto mt-14 grid max-w-3xl gap-10">
        <DetailSection title="Architecture" items={project.architecture} />
        <DetailSection title="Challenges" items={project.challenges} />
        <DetailSection title="How I solved them" items={project.solutions} />
        <DetailSection title="What I learned" items={project.learnings} />
        <DetailSection title="Core features" items={project.features} />
        <DetailSection title="Future improvements" items={project.future} />

        <section className="border-t border-[color:var(--line)] pt-8">
          <h2 className="text-xl font-bold text-[color:var(--foreground)]">
            Related blog posts
          </h2>
          <div className="mt-5 border-t border-[color:var(--line)]">
            {relatedPosts.length > 0 ? (
              relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="focus-ring block border-b border-[color:var(--line)] py-4 text-sm font-semibold text-[color:var(--foreground)] transition hover:text-[color:var(--accent)]"
                >
                  {post.title}
                </Link>
              ))
            ) : (
              <p className="border-b border-[color:var(--line)] py-4 text-sm text-[color:var(--muted)]">
                Related writing can be added from `src/content/blogs`.
              </p>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-t border-[color:var(--line)] pt-8">
      <h2 className="text-xl font-bold text-[color:var(--foreground)]">
        {title}
      </h2>
      <ul className="mt-5 list-disc space-y-3 pl-5 marker:text-[color:var(--muted)]">
        {items.map((item) => (
          <li key={item} className="text-base leading-[1.7] text-[color:var(--muted)]">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
