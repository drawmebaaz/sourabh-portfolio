import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sourabh Singh Rawat for internships, project collaboration, and software opportunities.",
};

const directLinks = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Resume", href: siteConfig.resume, download: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about the work."
        description="Reach out for internships, project collaboration, or a conversation about one of the builds on this site."
      />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
              Direct links
            </h2>
            <div className="mt-6 border-t border-[color:var(--line)]">
              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring block border-b border-[color:var(--line)] py-4 text-sm font-semibold text-[color:var(--foreground)] transition-colors duration-150 hover:text-[color:var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
