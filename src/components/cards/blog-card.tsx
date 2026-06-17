import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug } from "@/data/projects";
import type { BlogPostMeta } from "@/lib/blogs";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPostMeta;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const relatedProject = post.relatedProject
    ? getProjectBySlug(post.relatedProject)
    : undefined;
  const preview = relatedProject?.screenshots?.[0];
  const meta = [post.category, ...post.tags.slice(0, 2)].join(" / ");

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] transition-colors duration-200 hover:border-[color:var(--line-strong)]",
        featured && "md:col-span-2",
      )}
    >
      <div className="overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--panel-strong)]">
          {preview ? (
            <Image
              src={preview.src}
              alt={preview.alt}
              width={1200}
              height={675}
            className="aspect-video h-auto w-full object-cover"
            />
          ) : (
          <div className="flex aspect-video items-end p-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Build note
              </span>
            </div>
          )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
          {post.readingTime}
        </p>
        <h3 className="mt-3 text-xl font-bold text-[color:var(--foreground)]">
          <Link className="focus-ring rounded-[4px]" href={`/blogs/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[color:var(--muted)]">
          {post.description}
        </p>
        <p className="mt-5 font-mono text-xs leading-6 text-[color:var(--muted)]">
          {formatDate(post.date)} / {meta}
        </p>
        <Link
          className="focus-ring mt-5 w-fit rounded-[4px] text-sm font-semibold text-[color:var(--foreground)] underline-offset-4 transition hover:text-[color:var(--accent)] hover:underline"
          href={`/blogs/${post.slug}`}
        >
          Read note
        </Link>
      </div>
    </article>
  );
}
