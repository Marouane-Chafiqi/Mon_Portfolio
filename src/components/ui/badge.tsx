import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm border border-border px-2.5 py-1 text-xs text-navy",
        className,
      )}
      {...props}
    />
  );
}
