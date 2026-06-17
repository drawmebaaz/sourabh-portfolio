import { BlogCard } from "@/components/cards/blog-card";
import { AnimatedButton } from "@/components/common/animated-button";
import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import type { BlogPostMeta } from "@/lib/blogs";

export function BlogPreviewSection({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section className="border-y border-[color:var(--line)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Build notes"
            title="Notes from the builds."
            description="What broke, what changed, and the decisions behind the project versions shown here."
          />
          <AnimatedButton href="/blogs" variant="secondary">
            Read Blogs
          </AnimatedButton>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <BlogCard post={post} featured={post.featured && index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
