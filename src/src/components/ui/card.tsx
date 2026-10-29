import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "rounded-md border-2 border-navy bg-white/60 p-5 transition-all duration-300",
        "hover:-translate-y-1.5 hover:shadow-[7px_7px_0_0_rgb(var(--gold-dark))]",
        className,
      )}
      {...props}
    />
  );
}
