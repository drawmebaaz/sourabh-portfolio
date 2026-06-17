import type { Metadata } from "next";
import { BlogCard } from "@/components/cards/blog-card";
import { PageHeader } from "@/components/common/page-header";
import { getAllPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Project build stories and engineering notes by Sourabh Singh Rawat.",
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blogs"
        title="Project build stories."
        description="The longer notes behind AlgoRadar, StockBreakers, and Smart Hostel: what I tried, what broke, and how I fixed it."
      />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} featured={index === 0} />
          ))}
        </div>
      </section>
    </>
  );
}
