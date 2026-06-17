import type { TocItem } from "@/lib/blogs";
import { cn } from "@/lib/utils";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24 border-l border-[color:var(--line)] pl-4">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
        Table of contents
      </p>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "text-sm leading-5 text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]",
              item.level === 3 && "pl-3",
            )}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
