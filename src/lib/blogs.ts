import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { slugify } from "@/lib/utils";

const blogsDirectory = path.join(process.cwd(), "src", "content", "blogs");
const supportedPostFiles = ["index.md", "index.mdx"];

export type BlogFrontmatter = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  category:
    | "Project Build Stories"
    | "Debugging Notes"
    | "Competitive Programming"
    | "Machine Learning"
    | "College / Career"
    | "Personal Growth";
  featured?: boolean;
  relatedProject?: string;
};

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export type BlogPostMeta = BlogFrontmatter & {
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  toc: TocItem[];
};

type BlogSource = {
  filePath: string;
  fallbackSlug: string;
};

function getBlogSources(): BlogSource[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogsDirectory, { withFileTypes: true })
    .flatMap((entry): BlogSource[] => {
      if (entry.isDirectory()) {
        const directoryPath = path.join(blogsDirectory, entry.name);
        const postFile = supportedPostFiles
          .map((fileName) => path.join(directoryPath, fileName))
          .find((filePath) => fs.existsSync(filePath));

        return postFile
          ? [{ filePath: postFile, fallbackSlug: entry.name }]
          : [];
      }

      if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
        return [
          {
            filePath: path.join(blogsDirectory, entry.name),
            fallbackSlug: entry.name.replace(/\.mdx?$/, ""),
          },
        ];
      }

      return [];
    });
}

function extractToc(content: string): TocItem[] {
  return content
    .split("\n")
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const level = line.startsWith("###") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s/, "").trim();
      return {
        id: slugify(text),
        text,
        level,
      };
    });
}

export function getAllPosts(): BlogPostMeta[] {
  return getBlogSources()
    .map((source) => {
      const raw = fs.readFileSync(source.filePath, "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as BlogFrontmatter;

      return {
        ...frontmatter,
        slug: frontmatter.slug ?? source.fallbackSlug,
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  for (const source of getBlogSources()) {
    const raw = fs.readFileSync(source.filePath, "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as BlogFrontmatter;
    const postSlug = frontmatter.slug ?? source.fallbackSlug;

    if (postSlug === slug) {
      return {
        ...frontmatter,
        slug: postSlug,
        content,
        readingTime: readingTime(content).text,
        toc: extractToc(content),
      };
    }
  }

  return undefined;
}

export function getPostsByProject(projectSlug: string) {
  return getAllPosts().filter((post) => post.relatedProject === projectSlug);
}

export function getBlogSlugs() {
  return getAllPosts().map((post) => post.slug);
}
