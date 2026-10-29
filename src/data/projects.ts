export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Projet BI — Entrepôt de données & ETL",
    period: "2026",
    tags: ["MySQL", "ETL", "Talaxie", "Business Intelligence"],
    summary:
      "Entrepôt de données en étoile (5 dimensions, 1 table de faits) alimenté par des jobs ETL Talaxie depuis 3 fichiers Excel, avec indicateurs d'inscriptions par filière et par région.",
    repo: "https://github.com/Marouane-Chafiqi/Mini-Projet-BI",
    image: "/projets/BI.jpg",
  },
  {
    title: "Application mobile éducative",
    tags: ["Flutter", "Mobile"],
    summary:
      "Application d'orientation et de révision des cours, testée auprès d'utilisateurs réels. Version Windows à télécharger.",
    link: "https://github.com/Marouane-Chafiqi/Application-Mosta9bali-.git",
    image: "/projets/most.jpg",
  },
  {
    title: "Site de location de voitures",
    tags: ["Full Stack Web", "E-commerce"],
    summary: "Site complet de réservation et de location de véhicules, avec espace de connexion.",
    link: "http://homiescars.free.je/homies2/?i=1",
    image: "/projets/stock.jpg",
  },
  {
    title: "InnovaStudio — Media Hub ENS",
    period: "2025–2026",
    tags: ["Web", "Design"],
    summary:
      "Site officiel du Media Hub de l'ENS Marrakech : développement, identité visuelle et contenus.",
    link: "https://innovastudioens.netlify.app/",
    image: "/projets/hub.jpg",
  },
  {
    title: "Marrakech Hues",
    tags: ["Web", "E-commerce", "Design"],
    summary: "Site e-commerce de vente de tableaux traditionnels de Marrakech : couleurs, architecture et riads de la ville.",
    link: "https://marrakech-hues.netlify.app/",
    image: "/projets/hues.jpg",
  },
];
