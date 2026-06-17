"use client";

import Link from "next/link";
import { cn, isExternalHref } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  icon,
  className,
  download,
}: AnimatedButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-[4px] px-4 py-2 text-sm font-semibold transition-colors duration-150",
    variant === "primary" &&
      "border border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--button-text)] hover:bg-[color:var(--accent-hover)]",
    variant === "secondary" &&
      "border border-[color:var(--line-strong)] bg-transparent text-[color:var(--foreground)] hover:border-[color:var(--accent)]",
    variant === "ghost" &&
      "border border-transparent bg-transparent px-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (isExternalHref(href)) {
    return (
      <a
        className={classes}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} download={download}>
      {content}
    </Link>
  );
}
