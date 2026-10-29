import { cn } from "@/lib/utils";

type Props = { title: string; subtitle?: string; tone?: "brown" | "green" };

export default function PageHeader({ title, subtitle, tone = "brown" }: Props) {
  return (
    <div
      className={cn(
        "full-bleed zellige relative mb-10 overflow-hidden",
        tone === "brown" ? "bg-navy text-white" : "bg-gold-dark text-white",
      )}
    >
      <div
        className={cn(
          "absolute -right-24 -top-24 h-80 w-80 rounded-full border-[28px]",
          tone === "brown" ? "border-gold/30" : "border-white/15",
        )}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="font-serif text-5xl font-semibold text-white md:text-7xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-xl text-lg text-white/80">{subtitle}</p>}
        <div className={cn("mt-6 h-1.5 w-24", tone === "brown" ? "bg-gold" : "bg-paper")} />
      </div>
    </div>
  );
}
