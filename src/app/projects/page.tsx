import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { ProjectFilterGrid } from "@/components/sections/project-filter-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Sourabh Singh Rawat, with screenshots, architecture notes, and build stories.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects I have built and documented."
        description="Browse the current featured builds now. Later projects can be added as normal projects and promoted with a single `featured` flag."
      />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectFilterGrid />
        </div>
      </section>
    </>
  );
}
