import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "rounded-sm border border-border bg-white px-3 py-2 text-sm placeholder:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
