import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return m ? `${m}/${y}` : y;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Marouane Chafiqi</title>
        <meta
          name="description"
          content="Master ENS Marrakech, Licence en Informatique ESEF Oujda, Baccalauréat."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Formations</h2>
      <ol className="relative border-s border-border">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-8">
            <span
              className="absolute -start-[7px] mt-1.5 h-3 w-3 rounded-full bg-gold"
              aria-hidden="true"
            />
            <h3 className="text-lg font-semibold">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""}
            </h3>
            <p className="text-sm text-muted-foreground">
              {e.school} • {fmt(e.start)}
              {e.end ? ` — ${fmt(e.end)}` : ""} {e.location ? `• ${e.location}` : ""}{" "}
              {e.gpa ? `• GPA ${e.gpa}` : ""}
            </p>
            {e.courses?.length ? (
              <p className="mt-2 text-sm">Cours : {e.courses.slice(0, 5).join(", ")}</p>
            ) : null}
            {e.highlights?.length ? (
              <ul className="ms-5 mt-2 list-disc text-sm">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
