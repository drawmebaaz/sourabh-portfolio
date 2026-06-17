export function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs text-[color:var(--muted)]">
      {children}
    </span>
  );
}
