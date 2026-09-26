import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        "bg-brand-50 text-brand-700 border border-brand-100",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
      {children}
    </span>
  );
}
