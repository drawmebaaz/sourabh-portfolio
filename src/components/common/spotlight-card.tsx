import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] transition-colors duration-200 hover:border-[color:var(--line-strong)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
