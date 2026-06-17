import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sourabh Singh Rawat, IIIT Allahabad student and full-stack developer.",
};

const focusAreas = [
  {
    title: "Tools help, fundamentals stay",
    text: "I use assistive tooling to move faster, but I still care about understanding the code, architecture, debugging process, and tradeoffs myself.",
  },
  {
    title: "Project-first engineering",
    text: "I prefer showing complete products: the user flow, the backend boundary, the data model, and the tradeoffs behind the final implementation.",
  },
  {
    title: "Full-stack with ML where it helps",
    text: "I like projects where product workflows, backend boundaries, data models, and useful ML signals have to fit together.",
  },
  {
    title: "Writing as proof of thought",
    text: "Blogs force me to explain what I built, why I made decisions, and what broke before the final version worked.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I am Sourabh Singh Rawat, and I like building things all the way through."
        description="B.Tech IT student at IIIT Allahabad, focused on practical web apps, project systems, and ML-backed features when they genuinely improve the product."
      />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="h-fit rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] p-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Profile
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[color:var(--foreground)]">
              {siteConfig.name}
            </h2>
            <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
              {siteConfig.role}
            </p>
            <dl className="mt-8 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
              {[
                ["Institution", siteConfig.institute],
                ["Focus", "Full-stack products and useful ML"],
                ["Proof", "Projects, screenshots, and build notes"],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-[120px_1fr]">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    {label}
                  </dt>
                  <dd className="text-sm leading-6 text-[color:var(--foreground)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="grid content-start gap-8">
            {focusAreas.map((area) => (
              <section key={area.title} className="pt-1">
                <h3 className="text-xl font-bold text-[color:var(--foreground)]">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-[1.7] text-[color:var(--muted)]">
                  {area.text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
