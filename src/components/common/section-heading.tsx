import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold text-[color:var(--foreground)] md:text-[2.75rem] md:leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-[1.7] text-[color:var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
