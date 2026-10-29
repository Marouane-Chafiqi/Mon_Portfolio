export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "ENS Marrakech, Université Cadi Ayyad",
    degree: "Master",
    field: "Didactique des Sciences et Ingénierie éducative",
    location: "Marrakech",
    start: "2025",
    end: "2027",
    courses: [
      "Programmation Avancée et DevOps",
      "IA avancée",
      "Développement Web et multiplateforme",
      "Systèmes de Bases de Données",
      "Sécurité Réseaux",
    ],
    highlights: [
      "En cours — modules à dominante informatique",
      "Gouvernance des SI et assurance qualité",
    ],
  },
  {
    school: "ESEF",
    degree: "Licence",
    field: "Informatique",
    location: "Oujda",
    start: "2023",
    end: "2025",
  },
  {
    school: "Lycée Zerktouni",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Marrakech",
    start: "2022",
  },
];
