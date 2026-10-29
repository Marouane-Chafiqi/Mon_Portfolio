import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKEDIN = "https://www.linkedin.com/in/marouane-chafiqi-596ab0257/";

export default function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "LinkedIn", value: "Marouane Chafiqi", href: LINKEDIN },
    { label: "Adresse", value: profile.location },
  ];

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Contact — Marouane Chafiqi</title>
        <meta name="description" content="Contacter Marouane Chafiqi : email, téléphone, LinkedIn, CV." />
      </Helmet>
      <PageHeader title="Contact" subtitle="Parlons de votre projet" tone="brown" />

      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <Card className="grid content-start gap-4">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
            >
              <span className="text-sm text-muted-foreground">{r.label}</span>
              {r.href ? (
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  {r.value}
                </a>
              ) : (
                <span className="font-medium">{r.value}</span>
              )}
            </div>
          ))}
        </Card>

        <div className="zellige relative flex flex-col justify-between gap-6 overflow-hidden rounded-md bg-navy p-8 text-white">
          <div
            className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[22px] border-gold/30"
            aria-hidden="true"
          />
          <div className="relative">
            <h3 className="font-serif text-3xl font-semibold text-white">Candidat Master Informatique</h3>
            <p className="mt-3 text-white/80">
              À la recherche d'une opportunité dans génie logiciel et intelligence artificielle.
              N'hésitez pas à m'écrire, je réponds avec plaisir.
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={buttonVariants()}>Écrire un email</a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "text-white")}
            >
              LinkedIn
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "text-white")}
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}