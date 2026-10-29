export type Experience = {
  role: string;
  org: string;
  start: string;
  end?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Design & Filmmaking",
    org: "Gaia, au sein de M Avenue, Marrakech",
    start: "2025",
    end: "2025",
    points: [
      "Participation à des projets de design et de production vidéo (filmmaking)",
      "Travail en équipe avec la société Gaia au sein de M Avenue",
    ],
  },
  {
    role: "Assistant IA — Traitement de données & automatisation documentaire",
    org: "Activité freelance, Maroc",
    start: "2025",
    points: [
      "Utilisation d'outils d'IA (NotebookLM, Elicit, SciSpace) pour la recherche, l'extraction et la synthèse de documents",
      "Cartographie bibliographique automatisée (ResearchRabbit, Connected Papers)",
      "Préparation, fusion et mise en forme automatisée de documents PDF",
    ],
  },
  {
    role: "Administrateur de systèmes informatiques",
    org: "Collège, Oujda, Maroc",
    start: "2022",
    end: "2025",
    points: [
      "Gestion et maintenance du système d'information de l'établissement (notes, absences, inscriptions)",
      "Support technique auprès de l'équipe pédagogique et résolution d'incidents",
      "Déploiement d'outils numériques (Moodle, H5P, Scenarichain)",
      "Mission menée pendant 3 ans en parallèle des études",
    ],
  },
  {
    role: "Stagiaire — Administration",
    org: "Hôtel Hivernage, Marrakech",
    start: "2022",
    end: "2022",
    points: [
      "Stage au sein de l'administration de l'hôtel",
      "Utilisation du système de base de données dédié à la gestion des chambres",
      "Suivi de la disponibilité des chambres",
    ],
  },
];
