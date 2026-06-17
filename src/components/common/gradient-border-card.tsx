import { cn } from "@/lib/utils";

type GradientBorderCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientBorderCard({
  children,
  className,
}: GradientBorderCardProps) {
  return (
    <div
      className={cn(
        "h-full rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] transition-colors duration-200 hover:border-[color:var(--line-strong)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
