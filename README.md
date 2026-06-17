# Sourabh Singh Rawat Portfolio

A production-grade personal portfolio for Sourabh Singh Rawat, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, lucide-react, and a Markdown-powered blog system.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Folder Structure

```txt
src/
  app/                 Route pages and metadata
  components/          Reusable UI, layout, cards, sections, MDX components
  content/blogs/       Editable Markdown blog posts, one folder per post
  data/                Projects, skills, and site info
  lib/                 Blog parsing and utility helpers
public/
  assets/              Resume, generated visuals, and project screenshots
```

## Add a New Project

Edit `src/data/projects.ts` and add a new object to the `projects` array. Use a unique `slug`, fill the stack/features/architecture fields, and add a matching `blogSlug` if you want a build-story link.

Set `featured: true` only for projects that should appear in the homepage featured section. Keep later projects as `featured: false` and they will still appear on the Projects page.

## Add a New Blog

Create a new folder in `src/content/blogs/`, then add an `index.md` file:

```txt
src/content/blogs/my-new-build-story/index.md
```

Include frontmatter like:

```md
---
title: "My New Build Story"
slug: "my-new-build-story"
date: "2026-05-01"
description: "Short summary for cards and SEO."
tags: ["Full Stack", "Debugging"]
category: "Project Build Stories"
featured: false
relatedProject: "algoradar"
---
```

Use `##` and `###` headings to populate the table of contents. Use normal fenced code blocks for code examples.

For callout-style notes, use Markdown blockquotes:

```md
> **Engineering note:** Write the thing you want highlighted.
```

Put blog images in `public/assets/blogs/my-new-build-story/` and reference them from Markdown with `/assets/blogs/my-new-build-story/image-name.png`.

## Edit Personal Info

Update `src/data/site.ts` for name, email, GitHub, LinkedIn, resume path, headline, and summary.

The public resume download is `public/assets/resume.pdf`, and `siteConfig.resume` already points to `/assets/resume.pdf`.

## Project Screenshots

Store project screenshots under:

```txt
public/assets/projects/project-slug/
```

Then add them to that project's `screenshots` array in `src/data/projects.ts`.

## Assumptions

- LinkedIn, GitHub, resume, and the three current project repos are wired in.
- Live demo links are intentionally hidden until deployments exist.
- Project screenshots are stored under `public/assets/projects/`.
- The generated hero visual lives at `public/assets/portfolio-hero.png`.
