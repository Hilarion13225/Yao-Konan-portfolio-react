export const profile = {
  name: 'KONAN Yao',
  fullName: 'KONAN Yao Serge-Hilarion Boigny',
  title: {
    fr: 'Développeur Full Stack | Étudiant Big Data & IA',
    en: 'Full Stack Developer | Big Data & AI Student',
  },
  school: 'ESATIC — Master 1 BIHAR',
  location: 'Yopougon, Abidjan',
  email: 'hilarion.konan2024@esatic.edu.ci',
  whatsapp: 'https://wa.me/2250594262422',
  phone: '+225 05 94 26 24 22 | 07 67 55 76 71',
  linkedin: 'https://linkedin.com/in/konan-yao-serge/',
  photo: '/images/profile1.png',
  cv: '/cv-konan-yao.pdf',
}

export const navLinks = [
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#certificates', key: 'certificates' },
  { href: '#education', key: 'education' },
  { href: '#contact', key: 'contact' },
]

export const experiences = [
  {
    date: {
      fr: 'Décembre 2024 - Octobre 2025',
      en: 'December 2024 - October 2025',
    },
    title: {
      fr: 'Développeur full stack',
      en: 'Full-Stack Developer',
    },
    org: 'Commission Electorale Indépendante (CEI), Angré 7e Tranche, Cocody, Abidjan',
    description: {
      fr: "Analyse des besoins et développement d'une application web de gestion du parrainage électoral. Conception et implémentation du backend avec Laravel et de l'API REST associée. Développement de l'interface utilisateur avec Next.js (React). Intégration et gestion de la base de données PostgreSQL. Mise en place de l'authentification, de la gestion des rôles et de la consommation d'API REST. Rédaction et exécution des tests des endpoints API avec Postman.",
      en: "Requirements analysis and development of a web application for managing electoral sponsorship. Design and implementation of the backend with Laravel and its associated REST API. Development of the user interface with Next.js (React). Integration and management of the PostgreSQL database. Setup of authentication, role management, and REST API consumption. Writing and running API endpoint tests with Postman.",
    },
  },
  {
    date: { fr: '2025', en: '2025' },
    title: {
      fr: 'Lauréat — Technovore Hackathon, Niveau 2 Développement',
      en: 'Winner — Technovore Hackathon, Level 2 Development',
    },
    org: 'ESATIC — Treichville, Abidjan',
    description: {
      fr: "1er place pour le développement d'un système de recyclage intelligent de l'eau rejetée, réutilisable pour l'agriculture ou purifiée pour la consommation humaine (Python, Django, MongoDB, microcontrôleurs ESP32).",
      en: "1st place for developing a smart wastewater recycling system, reusable for agriculture or purified for human consumption (Python, Django, MongoDB, ESP32 microcontrollers).",
    },
  },
  {
    date: {
      fr: 'Janvier 2023 - Novembre 2023',
      en: 'January 2023 - November 2023',
    },
    title: { fr: 'Développeur web', en: 'Web Developer' },
    org: 'GLOBAL CROA, Riviera Bonoumin Laurier 7, Abidjan',
    description: {
      fr: "Création d'un site vitrine avec Odoo pour la présentation de l'entreprise et de ses produits.",
      en: "Creation of a showcase website using Odoo to present the company and its products.",
    },
  },
  {
    date: {
      fr: 'Octobre 2022 - Décembre 2022',
      en: 'October 2022 - December 2022',
    },
    title: { fr: 'Développeur web', en: 'Web Developer' },
    org: "Laboratoire des Technologies de l'Information et de la Télécommunication (LABTIC), Cocody Saint Jean/Abidjan",
    description: {
      fr: "Conception et développement du backend (Laravel) et du frontend (Laravel Blade) d'une application de gestion des activités. Intégration, modélisation et gestion de la base de données MySQL.",
      en: "Design and development of the backend (Laravel) and frontend (Laravel Blade) of an activity management application. Integration, modeling, and management of the MySQL database.",
    },
  },
]

export const education = [
  {
    date: {
      fr: 'Novembre 2025 — Présent',
      en: 'November 2025 — Present',
    },
    title: {
      fr: 'Master Big Data Intelligence for Human Augmented Reality (BIHAR)',
      en: 'Master Big Data Intelligence for Human Augmented Reality (BIHAR)',
    },
    org: 'ESATIC, Treichville/Abidjan',
    description: {
      fr: "Formation spécialisée en Big Data et Intelligence Artificielle. Exploration de l'analyse prédictive, du traitement de la donnée et des systèmes intelligents.",
      en: "Specialized training in Big Data and Artificial Intelligence. Exploring predictive analytics, data processing, and intelligent systems.",
    },
  },
  {
    date: {
      fr: 'Décembre 2023 — Octobre 2024',
      en: 'December 2023 — October 2024',
    },
    title: {
      fr: "Licence Développement d'Applications et Systèmes d'Information (DASI)",
      en: "Bachelor's Degree in Application Development and Information Systems (DASI)",
    },
    org: 'ESATIC, Treichville/Abidjan — Mention Bien',
    description: {
      fr: "Bases solides en développement logiciel, conception d'applications et administration de bases de données.",
      en: "Solid foundation in software development, application design, and database administration.",
    },
  },
  {
    date: {
      fr: 'Octobre 2020 — Septembre 2022',
      en: 'October 2020 — September 2022',
    },
    title: {
      fr: "BTS (Brevet de Technicien Supérieur) Informatique & Développeur d'Application",
      en: 'BTS (Higher Technician Certificate) in Computer Science & Application Development',
    },
    org: "PIGIER Côte d'Ivoire, Plateau/Abidjan",
    description: { fr: '', en: '' },
  },
]

// Ajoute ici tes certificats. `image` peut être null (une icône générique
// s'affichera à la place) ou un chemin vers /public/images/....
// `credentialUrl` peut être null si tu n'as pas de lien de vérification :
// dans ce cas le bouton "Voir le certificat" ne s'affiche tout simplement pas.
// `dateISO` (format AAAA-MM-JJ) sert uniquement au tri : les certificats sont
// automatiquement affichés du plus récent au plus ancien, peu importe
// l'ordre dans lequel tu les ajoutes ci-dessous.
export const certificates = [
  {
    title: {
      fr: '2025 C Programming Bootcamp - The Complete C Language Course',
      en: '2025 C Programming Bootcamp - The Complete C Language Course',
    },
    issuer: 'Udemy — Toppers Bootcamp',
    date: { fr: '27 mars 2026', en: 'March 27, 2026' },
    dateISO: '2026-03-27',
    image: null,
    credentialUrl: 'https://ude.my/UC-4b258001-ff06-4711-a978-5ae3a9fdd9b9',
  },
  {
    title: {
      fr: 'Machine Learning and Deep Learning Projects in Python',
      en: 'Machine Learning and Deep Learning Projects in Python',
    },
    issuer: 'Udemy — S. Emadedin Hashemi',
    date: { fr: '26 février 2026', en: 'February 26, 2026' },
    dateISO: '2026-02-26',
    image: null,
    credentialUrl: 'https://ude.my/UC-c675edfe-9e36-434c-a194-c6e58166f8c4',
  },
  {
    title: {
      fr: 'Learn Functions & Function Expressions in Modern JavaScript',
      en: 'Learn Functions & Function Expressions in Modern JavaScript',
    },
    issuer: 'Udemy — Noshad Yousuf',
    date: { fr: '27 juin 2025', en: 'June 27, 2025' },
    dateISO: '2025-06-27',
    image: null,
    credentialUrl: 'https://ude.my/UC-4ce14893-fe81-4564-908b-29428bbd756a',
  },
  {
    title: {
      fr: 'Mastering HTML5: From Beginner to Advanced',
      en: 'Mastering HTML5: From Beginner to Advanced',
    },
    issuer: 'Udemy — Mehmood Khalil, Zaheer Irshad',
    date: { fr: '4 décembre 2024', en: 'December 4, 2024' },
    dateISO: '2024-12-04',
    image: null,
    credentialUrl: 'https://ude.my/UC-bf859b75-bc77-463f-9a0c-f848be370edb',
  },
  {
    title: {
      fr: 'Laravel and Postman Rest API Development: Beginner to Pro',
      en: 'Laravel and Postman Rest API Development: Beginner to Pro',
    },
    issuer: 'Udemy — Mehmood Khalil',
    date: { fr: '28 avril 2025', en: 'April 28, 2025' },
    dateISO: '2025-04-28',
    image: null,
    credentialUrl: 'https://ude.my/UC-f4c429e6-5fdb-4ef8-a323-5769841025aa',
  },
  {
    title: {
      fr: 'Python And Django Framework And HTML 5 Stack Complete Course',
      en: 'Python And Django Framework And HTML 5 Stack Complete Course',
    },
    issuer: 'Udemy — Horizon Tech',
    date: { fr: '8 avril 2025', en: 'April 8, 2025' },
    dateISO: '2025-04-08',
    image: null,
    credentialUrl: 'https://ude.my/UC-d7acb6ec-6ca6-4a9b-a78c-2f0b2ab5bb4d',
  },
]

// Chaque icône est soit { icon: 'fab fa-xxx', color: '#hex' } soit { badge: 'texte', bg: '#hex', color: '#hex' }
export const skillsRow1 = [
  { icon: 'fab fa-html5', color: '#E34F26', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', color: '#2965F1', label: 'CSS3' },
  { icon: 'fab fa-js', color: '#F7DF1E', label: 'JavaScript' },
  { icon: 'fab fa-php', color: '#8892BF', label: 'PHP' },
  { icon: 'fab fa-react', color: '#61DAFB', label: 'React' },
  { icon: 'fab fa-node-js', color: '#68A063', label: 'Node.js' },
  { badge: 'N', bg: '#0d0d0d', color: '#fff', label: 'Next.js' },
]

export const skillsRow2 = [
  { icon: 'fab fa-python', color: '#3776AB', label: 'Python' },
  { icon: 'fab fa-laravel', color: '#FF2D20', label: 'Laravel' },
  { badge: 'Dj', bg: '#092E20', color: '#44B78B', label: 'Django' },
  { icon: 'fas fa-database', color: '#00758F', label: 'MySQL' },
  { icon: 'fas fa-database', color: '#336791', label: 'PostgreSQL' },
  { icon: 'fas fa-leaf', color: '#47A248', label: 'MongoDB' },
  { icon: 'fas fa-fire', color: '#FFA000', label: 'Firebase' },
]

export const projects = [
  {
    role: {
      fr: 'Développeur Full-Stack',
      en: 'Full-Stack Developer',
    },
    title: {
      fr: 'Parrainage Électoral Numérique',
      en: 'Digital Electoral Sponsorship Platform',
    },
    description: {
      fr: "Application de gestion du parrainage électoral développée en stage à la Commission Électorale Indépendante (CEI), alliant performance, sécurité et accessibilité.",
      en: "Electoral sponsorship management application developed during an internship at the Independent Electoral Commission (CEI), combining performance, security, and accessibility.",
    },
    tags: ['#Next.js', '#Tailwind CSS', '#Laravel', '#PostgreSQL'],
    thumb: '/images/parrainage.png',
    link: '#contact',
  },
  {
    role: {
      fr: 'Développeur IoT & Backend',
      en: 'IoT & Backend Developer',
    },
    title: {
      fr: "Recyclage Intelligent de l'Eau",
      en: 'Smart Water Recycling System',
    },
    description: {
      fr: "Système connecté combinant interactivité, communication en temps réel et UX moderne — 🏆 1er place au Technovore Hackathon 2025.",
      en: "Connected system combining interactivity, real-time communication, and modern UX — 🏆 1st place at the Technovore Hackathon 2025.",
    },
    tags: ['#Python', '#Django', '#MongoDB', '#ESP32'],
    thumb: null,
    link: '#contact',
  },
  {
    role: {
      fr: 'Développeur Full-Stack & IA',
      en: 'Full-Stack & AI Developer',
    },
    title: {
      fr: 'SmartRecruit — Plateforme de recrutement assistée par IA',
      en: 'SmartRecruit — AI-Assisted Recruitment Platform',
    },
    description: {
      fr: "Analyse de CV, scoring sémantique et classement automatique des candidats.",
      en: "Resume analysis, semantic scoring, and automatic candidate ranking.",
    },
    tags: ['#IA', '#NLP', '#React', '#Next.js'],
    thumb: '/images/recruit.png',
    link: 'https://smartrecruit-gamma.vercel.app/',
  },
  {
    role: {
      fr: 'Développeur Full-Stack & Machine Learning',
      en: 'Full-Stack & Machine Learning Developer',
    },
    title: {
      fr: 'Prédiction de Salaire (Django + React)',
      en: 'Salary Prediction (Django + React)',
    },
    description: {
      fr: "Application web prédisant un salaire à partir des années d'expérience, via un modèle de régression linéaire (scikit-learn) exposé par une API Django et consommé par une interface React. Projet réalisé en binôme avec KOUAME Romeo.",
      en: "Web application predicting a salary based on years of experience, using a linear regression model (scikit-learn) exposed through a Django API and consumed by a React interface. Project built in pair with KOUAME Romeo.",
    },
    tags: ['#Django', '#React', '#Machine Learning', '#Scikit-learn'],
    thumb: '/images/prediction.png',
    link: '#contact',
  },
  {
    role: {
      fr: 'Développeur Full-Stack',
      en: 'Full-Stack Developer',
    },
    title: {
      fr: 'TourismChain CI — Plateforme Digitale du Tourisme Ivoirien',
      en: 'TourismChain CI — Ivorian Tourism Digital Platform',
    },
    description: {
      fr: "Plateforme centralisant l'offre touristique de Côte d'Ivoire (sites, circuits, événements, artisanat, hébergements, restauration) pour 8 profils d'acteurs différents. Réalisée lors du Hackathon ESATIC TECHTITANS — Technovore Hackathon 2026. Authentification JWT, certification blockchain des billets et produits (mode on-chain/offchain), dashboards analytics par rôle, et assistant conversationnel intégré pour guider les touristes.",
      en: "Platform centralizing Côte d'Ivoire's tourism offering (sites, tours, events, crafts, accommodations, dining) for 8 different actor profiles. Built during the ESATIC TECHTITANS Hackathon — Technovore Hackathon 2026. JWT authentication, blockchain certification for tickets and products (on-chain/offchain mode), role-based analytics dashboards, and an integrated chatbot assistant to guide tourists.",
    },
    tags: ['#Next.js', '#TypeScript', '#Prisma', '#PostgreSQL', '#Blockchain', '#Chatbot'],
    thumb: '/images/tourism.png',
    link: 'https://tourim-chain.vercel.app/',
  },
  {
    role: {
      fr: 'Développeur Full-Stack & IA',
      en: 'Full-Stack & AI Developer',
    },
    title: {
      fr: 'Chatbot IA Conversationnel',
      en: 'AI Conversational Chatbot',
    },
    description: {
      fr: "Assistant conversationnel développé avec Django et Django REST Framework, intégrant les modèles Gemini et OpenAI pour des réponses en langage naturel, avec un moteur NLP local (TF-IDF, scikit-learn) et une recherche web en temps réel. Déployé en production sur Render.",
      en: "Conversational assistant built with Django and Django REST Framework, integrating Gemini and OpenAI models for natural language responses, with a local NLP engine (TF-IDF, scikit-learn) and real-time web search. Deployed to production on Render.",
    },
    tags: ['#Django', '#DRF', '#Gemini', '#OpenAI', '#Scikit-learn'],
    thumb: '/images/chatbot.png',
    link: 'https://chatbot-project-vssz.onrender.com/api',
  },
]