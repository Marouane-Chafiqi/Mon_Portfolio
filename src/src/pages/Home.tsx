import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const marquee = [
  "Java",
  "JavaFX",
  "Hibernate/JPA",
  "Python",
  "Flutter",
  "MySQL",
  "Linux",
  "Git",
  "Full Stack Web",
  "IA",
  "DevOps",
];

export default function Home() {
  return (
    <div className="grid gap-14">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Marouane Chafiqi : génie logiciel, Java, intelligence artificielle, DevOps."
        />
      </Helmet>

      <section className="full-bleed zellige relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p
              className="rise text-sm font-medium tracking-wide text-gold"
              style={{ animationDelay: ".7s" }}
            >
              {profile.location}
            </p>
            <h1
              className="rise mt-4 font-serif text-6xl font-semibold leading-[0.95] text-white md:text-8xl"
              style={{ animationDelay: ".85s" }}
            >
              Marouane
              <br />
              <span className="italic text-gold">Chafiqi</span>
            </h1>
            <p
              className="rise mt-7 max-w-xl text-xl text-white/90"
              style={{ animationDelay: "1.05s" }}
            >
              {profile.role}
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "1.25s" }}>
              <Link to="/projects" className={buttonVariants()}>
                Voir les projets
              </Link>
              <Link
                to="/contact"
                className={cn(buttonVariants({ variant: "outline" }), "text-white")}
              >
                Contact
              </Link>
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

          {/* photo dans une arche marocaine */}
          <div className="relative mx-auto w-full max-w-[320px]">
            <div
              className="absolute -right-4 -top-4 h-full w-full rounded-t-full border-4 border-gold"
              aria-hidden="true"
            />
            <img
              src="/me.jpeg"
              alt="Portrait de Marouane Chafiqi"
              width={320}
              height={420}
              className="relative aspect-[3/4] w-full rounded-t-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* bande verte qui défile */}
      <div className="full-bleed -my-6 overflow-hidden bg-gold py-4 text-navy">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap font-serif text-2xl font-semibold">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>
              {m} <span className="ml-10 text-gold-dark">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="grid gap-8">
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">À propos</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
      </section>

      <section className="grid gap-8">
        <h2 className="font-serif text-4xl font-semibold md:text-5xl">Compétences</h2>
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {profile.skills.map((g) => (
            <div key={g.group} className="border-l-4 border-gold-dark pl-5">
              <h3 className="text-lg font-semibold text-gold-dark">{g.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge key={s} className="border-navy bg-white/50 text-navy">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{profile.languages.join(" · ")}</p>
      </section>
    </div>
  );
}
