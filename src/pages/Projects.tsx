import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Marouane Chafiqi</title>
        <meta
          name="description"
          content="Projets académiques et techniques : Java, JavaFX, Flutter, Full Stack Web."
        />
      </Helmet>
      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            {p.image && (
              <img
                src={p.image}
                alt={`Aperçu du projet ${p.title}`}
                width={640}
                height={400}
                loading="lazy"
                className="mb-4 aspect-[16/10] w-full rounded-sm border border-border bg-white object-cover"
              />
            )}
            <h3 className="text-lg font-semibold">{p.title}</h3>
            {p.period && <p className="text-xs text-gold-dark">{p.period}</p>}
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-4 text-sm font-medium">
              {p.link && (
                <a
                  className="text-gold-dark underline underline-offset-4"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="text-gold-dark underline underline-offset-4"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}