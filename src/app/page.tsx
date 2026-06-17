import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { getAllPosts } from "@/lib/blogs";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <HeroSection buildNoteCount={posts.length} />
      <FeaturedProjectsSection />
      <BlogPreviewSection posts={posts} />
      <SkillsSection />
      <PhilosophySection />
    </>
  );
}
