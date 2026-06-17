import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

const contactLinks = [
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.linkedin, external: true },
  { label: "Resume", href: siteConfig.resume },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[color:var(--line)] bg-[color:var(--background)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 md:py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-[1.25fr_0.55fr_0.7fr] lg:grid-cols-[1.35fr_0.65fr_0.8fr]">
          <div className="col-span-2 max-w-xl md:col-span-1">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Portfolio
            </p>
            <p className="mt-4 text-xl font-bold text-[color:var(--foreground)]">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Full-stack developer documenting the process from rough project
              ideas to working systems.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Pages
            </p>
            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="focus-ring w-fit rounded-[4px] py-0.5 text-sm font-semibold text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Contact
            </p>
            <div className="mt-4 grid gap-2">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  className="focus-ring w-fit min-w-0 rounded-[4px] py-0.5 text-sm font-semibold text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <span className="truncate">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[color:var(--line)] pt-5 font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>2026 / Sourabh Singh Rawat</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
