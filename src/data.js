export const profile = {
  name: 'KONAN Yao',
  fullName: 'KONAN Yao Serge-Hilarion Boigny',
  title: 'Développeur Full Stack | Étudiant Big Data & IA',
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
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expériences' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#education', label: 'Formations' },
  { href: '#contact', label: 'Contact' },
]

export const experiences = [
  {
    date: 'Décembre 2024 - Octobre 2025',
    title: 'Développeur full stack',
    org: 'Commission Electorale Indépendante (CEI), Angré 7e Tranche, Cocody, Abidjan',
    description:
      "Analyse des besoins et développement d'une application web de gestion du parrainage électoral. Conception et implémentation du backend avec Laravel et de l'API REST associée. Développement de l'interface utilisateur avec Next.js (React). Intégration et gestion de la base de données PostgreSQL. Mise en place de l'authentification, de la gestion des rôles et de la consommation d'API REST. Rédaction et exécution des tests des endpoints API avec Postman.",
  },
  {
    date: '2025',
    title: 'Lauréat — Technovore Hackathon, Niveau 2 Développement',
    org: 'ESATIC — Treichville, Abidjan',
    description:
      "1er place pour le développement d'un système de recyclage intelligent de l'eau rejetée, réutilisable pour l'agriculture ou purifiée pour la consommation humaine (Python, Django, MongoDB, microcontrôleurs ESP32).",
  },
  {
    date: 'Janvier 2023 - Novembre 2023',
    title: 'Développeur web',
    org: 'GLOBAL CROA, Riviera Bonoumin Laurier 7, Abidjan',
    description:
      "Création d'un site vitrine avec Odoo pour la présentation de l'entreprise et de ses produits.",
  },
  {
    date: 'Octobre 2022 - Décembre 2022',
    title: 'Développeur web',
    org: 'Laboratoire des Technologies de l\'Information et de la Télécommunication (LABTIC), Cocody Saint Jean/Abidjan',
    description:
      "Conception et développement du backend (Laravel) et du frontend (Laravel Blade) d'une application de gestion des activités. Intégration, modélisation et gestion de la base de données MySQL.",
  },
]

export const education = [
  {
    date: 'Novembre 2025 — Présent',
    title: 'Master Big Data Intelligence for Human Augmented Reality (BIHAR)',
    org: 'ESATIC, Treichville/Abidjan',
    description:
      "Formation spécialisée en Big Data et Intelligence Artificielle. Exploration de l'analyse prédictive, du traitement de la donnée et des systèmes intelligents.",
  },
  {
    date: 'Décembre 2023 — Octobre 2024',
    title: "Licence Développement d'Applications et Systèmes d'Information (DASI)",
    org: 'ESATIC, Treichville/Abidjan — Mention Bien',
    description:
      "Bases solides en développement logiciel, conception d'applications et administration de bases de données.",
  },
  {
    date: 'Octobre 2020 — Septembre 2022',
    title: "BTS (Brevet de Technicien Supérieur) Informatique & Développeur d'Application",
    org: 'PIGIER Côte d\'Ivoire, Plateau/Abidjan',
    description: '',
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
    role: 'Développeur Full-Stack',
    title: 'Parrainage Électoral Numérique',
    description:
      "Application de gestion du parrainage électoral développée en stage à la Commission Électorale Indépendante (CEI), alliant performance, sécurité et accessibilité.",
    tags: ['#Next.js', '#Tailwind CSS', '#Laravel', '#PostgreSQL'],
    thumb: '/images/parrainage.png', // mettez une URL d'image ici quand vous en avez une, ex: '/images/parrainage.png'
    link: '#contact',
  },
  {
    role: 'Développeur IoT & Backend',
    title: "Recyclage Intelligent de l'Eau",
    description:
      "Système connecté combinant interactivité, communication en temps réel et UX moderne — 🏆 1er place au Technovore Hackathon 2025.",
    tags: ['#Python', '#Django', '#MongoDB', '#ESP32'],
    thumb: null,
    link: '#contact',
  },
  {
    role: 'Développeur Full-Stack & IA',
    title: 'SmartRecruit — Plateforme de recrutement assistée par IA',
    description:
      "Analyse de CV, scoring sémantique et classement automatique des candidats.",
    tags: ['#IA', '#NLP', '#React', '#Next.js'],
    thumb: '/images/recruit.png',
    link: 'https://smartrecruit-gamma.vercel.app/',
  },{
    role: 'Développeur Full-Stack & Machine Learning',
    title: 'Prédiction de Salaire (Django + React)',
    description:
      "Application web prédisant un salaire à partir des années d'expérience, via un modèle de régression linéaire (scikit-learn) exposé par une API Django et consommé par une interface React. Projet réalisé en binôme avec KOUAME Romeo.",
    tags: ['#Django', '#React', '#Machine Learning', '#Scikit-learn'],
    thumb: '/images/prediction.png',
    link: '#contact',
  },
]
