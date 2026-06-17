import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn("px-4 pb-12 pt-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-bold text-[color:var(--foreground)] md:text-6xl md:leading-[1.02]">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-[1.7] text-[color:var(--muted)]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
