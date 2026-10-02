// Expériences réelles, de la plus récente à la plus ancienne.
export const experiences = [
  {
    year: '2025',
    period: { fr: 'Déc. 2024 — Oct. 2025', en: 'Dec 2024 — Oct 2025' },
    role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
    org: 'Commission Électorale Indépendante (CEI)',
    place: 'Angré, Cocody — Abidjan',
    points: [
      { fr: "Analyse des besoins et développement d'une application web de gestion du parrainage électoral.", en: 'Requirements analysis and development of a web application for electoral sponsorship management.' },
      { fr: "Conception et implémentation du backend Laravel et de l'API REST associée.", en: 'Design and implementation of the Laravel backend and its REST API.' },
      { fr: "Interface utilisateur avec Next.js (React), base de données PostgreSQL.", en: 'User interface with Next.js (React), PostgreSQL database.' },
      { fr: 'Authentification, gestion des rôles et tests des endpoints avec Postman.', en: 'Authentication, role management and endpoint testing with Postman.' },
    ],
    stack: ['Laravel', 'Next.js', 'PostgreSQL', 'REST API', 'Postman'],
    project: 'electoral-sponsorship',
  },
  {
    year: '2025',
    period: { fr: '2025', en: '2025' },
    role: { fr: 'Lauréat — Technovore Hackathon', en: 'Winner — Technovore Hackathon' },
    org: 'ESATIC',
    place: 'Treichville — Abidjan',
    points: [
      { fr: "1re place (niveau 2 développement) pour un système de recyclage intelligent de l'eau rejetée, réutilisable pour l'agriculture ou purifiée pour la consommation.", en: '1st place (level 2 development) for a smart wastewater recycling system, reusable for agriculture or purified for consumption.' },
    ],
    stack: ['Python', 'Django', 'MongoDB', 'ESP32'],
    project: 'smart-water-management',
  },
  {
    year: '2023',
    period: { fr: 'Janv. 2023 — Nov. 2023', en: 'Jan 2023 — Nov 2023' },
    role: { fr: 'Développeur web', en: 'Web Developer' },
    org: 'GLOBAL CROA',
    place: 'Riviera Bonoumin — Abidjan',
    points: [
      { fr: "Création d'un site vitrine avec Odoo pour présenter l'entreprise et ses produits.", en: 'Built a showcase website with Odoo to present the company and its products.' },
    ],
    stack: ['Odoo'],
    project: null,
  },
  {
    year: '2022',
    period: { fr: 'Oct. 2022 — Déc. 2022', en: 'Oct 2022 — Dec 2022' },
    role: { fr: 'Développeur web', en: 'Web Developer' },
    org: 'LABTIC',
    orgFull: "Laboratoire des Technologies de l'Information et de la Télécommunication",
    place: 'Cocody Saint-Jean — Abidjan',
    points: [
      { fr: "Conception et développement du backend (Laravel) et du frontend (Blade) d'une application de gestion des activités.", en: 'Designed and built the backend (Laravel) and frontend (Blade) of an activity management application.' },
      { fr: 'Modélisation et gestion de la base de données MySQL.', en: 'MySQL database modeling and management.' },
    ],
    stack: ['Laravel', 'Blade', 'MySQL'],
    project: null,
  },
]
