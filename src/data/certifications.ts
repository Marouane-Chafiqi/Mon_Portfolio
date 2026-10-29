export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications: Certification[] = [
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2026-10",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/28-c7f9cd63-21da-4be5-a932-2a4f64bd5ba8-094332",
    credentialId: "28-c7f9cd63-21da-4be5-a932-2a4f64bd5ba8-094332",
    skills: ["Hibernate", "JPA", "JEE"],
    tags: ["Java", "Backend"],
    image: "/certs/hibernate-jpa.webp",
    imageAlt: "Certification professionnelle Hibernate & JPA — MLIAEdu",
    status: "active",
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu",
    issueDate: "2026-09",
    credentialUrl: "https://mliaedu.toubkalit.com/verify-certificate/6-c7f9cd63-21da-4be5-a932-2a4f64bd5ba8-982926",
    credentialId: "6-c7f9cd63-21da-4be5-a932-2a4f64bd5ba8-615701",
    skills: ["Java", "POO"],
    tags: ["Java"],
    image: "/certs/java.png",
    imageAlt: "Certification professionnelle Java — MLIAEdu",
    status: "active",
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    issueDate: "2026-06",
    credentialUrl: "https://www.credly.com/badges/a18dcef0-e558-42db-b737-6714f3f1d51d",
    skills: ["Data"],
    tags: ["Data"],
    image: "/certs/data.png",
    imageAlt: "Certificat IBM SkillsBuild Data Fundamentals",
    status: "active",
  },
  {
    title: "Python — Certificate of Completion",
    issuer: "Kaggle",
    issueDate: "2026-06",
    credentialUrl: "https://www.kaggle.com/learn/certification/marouanechafiqi/python",
    skills: ["Python"],
    tags: ["Python", "Data"],
    image: "/certs/python.png",
    imageAlt: "Kaggle Certificate of Completion — Python",
    status: "active",
  },
  {
    title: "La modélisation 3D avec Unity",
    issuer: "ENS Marrakech",
    issueDate: "2026-06",
    skills: ["Unity", "3D"],
    tags: ["3D"],
    image: "/certs/unity.png",
    imageAlt: "Certificat de réussite — Modélisation 3D avec Unity, ENS Marrakech",
    status: "active",
  },
  {
    title: "TCF — Test de connaissance du français (B2)",
    issuer: "France Éducation international",
    issueDate: "2025-12",
    expiryDate: "2027-12",
    skills: ["Français B2", "Score 419/699"],
    tags: ["Langue", "Français"],
    image: "/certs/tcf.png",
    imageAlt: "Attestation TCF — résultats, niveau B2",
    status: "active",
  },
];
