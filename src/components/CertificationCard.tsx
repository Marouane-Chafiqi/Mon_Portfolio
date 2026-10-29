import type { Certification } from "@/data/certifications";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <Card className={clsx(isExpired && "opacity-80")} aria-label={`Certification ${c.title}`}>
      {c.image && (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={640}
          height={452}
          loading="lazy"
          className="mb-4 aspect-[1.4/1] w-full rounded-sm border border-border bg-white object-contain"
        />
      )}
      <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {c.issuer} • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
      </p>
      {c.credentialId && (
        <p className="mt-1 break-all text-xs text-muted-foreground">ID : {c.credentialId}</p>
      )}
      {c.skills?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {c.skills.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      ) : null}
      <div className="mt-4 flex items-center gap-3 text-sm">
        {c.credentialUrl && (
          <a
            className="font-medium text-gold-dark underline underline-offset-4"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat
          </a>
        )}
        {isExpired && <Badge>Expirée</Badge>}
        {c.status === "revoked" && <Badge>Révoquée</Badge>}
      </div>
    </Card>
  );
}
