import { Info } from "lucide-react";

type CalloutProps = {
  title?: string;
  children: React.ReactNode;
};

export function Callout({ title = "Engineering note", children }: CalloutProps) {
  return (
    <aside className="my-6 rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel)] p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--foreground)]">
        <Info className="h-4 w-4" aria-hidden="true" />
        {title}
      </div>
      <div className="mt-3 text-sm leading-6 text-[color:var(--soft)]">
        {children}
      </div>
    </aside>
  );
}
