import { TableOfContents } from "@/components/mdx/table-of-contents";
import type { BlogPost } from "@/lib/blogs";
import { formatDate } from "@/lib/utils";

type BlogLayoutProps = {
  post: BlogPost;
  children: React.ReactNode;
};

export function BlogLayout({ post, children }: BlogLayoutProps) {
  const meta = [post.category, ...post.tags].join(" / ");

  return (
    <article className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
            {post.readingTime}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold text-[color:var(--foreground)] md:text-6xl md:leading-[1.02]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-[1.7] text-[color:var(--muted)]">
            {post.description}
          </p>
          <p className="mt-6 font-mono text-xs leading-6 text-[color:var(--muted)]">
            {formatDate(post.date)} / {meta}
            {post.relatedProject ? ` / ${post.relatedProject}` : ""}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,720px)_240px] lg:justify-center">
          <div className="min-w-0">
            <div className="prose-portfolio max-w-none">{children}</div>
          </div>
          <aside className="hidden lg:block">
            <TableOfContents items={post.toc} />
          </aside>
        </div>
      </div>
    </article>
  );
}
