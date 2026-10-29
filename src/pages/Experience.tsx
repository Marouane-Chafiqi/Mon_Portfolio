import { experience } from "@/data/experience";
import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Parcours — Marouane Chafiqi</title>
        <meta
          name="description"
          content="Expériences professionnelles : administration de SI, assistant IA."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Parcours</h2>
      <ol className="relative border-s border-border">
        {experience.map((e) => (
          <li key={e.role} className="ms-6 pb-8">
            <span
              className="absolute -start-[7px] mt-1.5 h-3 w-3 rounded-full bg-gold"
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <p className="text-sm text-muted-foreground">
              {e.start} — {e.end ?? "Présent"} • {e.org}
            </p>
            <ul className="ms-5 mt-3 list-disc space-y-1 text-sm">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
