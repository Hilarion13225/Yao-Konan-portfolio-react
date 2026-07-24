export const profile = {
  name: 'KONAN Yao',
  fullName: 'KONAN Yao Serge-Hilarion Boigny',
  title: 'Étudiant Big Data & IA',
  school: 'ESATIC — Master 1 BIHAR',
  location: 'Yopougon, Abidjan',
  email: 'hilarion.konan2024@esatic.edu.ci',
  whatsapp: 'https://wa.me/22505942624',
  phone: '+225 05 94 26 24 22',
  linkedin: '#',
  cv: 'https://yao-konan-portfolio.vercel.app/cv-konan-yao.pdf',
  photo: 'https://yao-konan-portfolio.vercel.app/images/profile.png',
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
    date: '2025',
    title: 'Stagiaire — Gestion du parrainage électoral',
    org: 'Commission Électorale Indépendante (CEI) — Abidjan',
    description:
      "Développement d'une application web pour la gestion du parrainage électoral, alliant performance, sécurité et accessibilité (Next.js, Tailwind CSS, Laravel, PostgreSQL).",
  },
  {
    date: '2025',
    title: 'Lauréat — Technovore Hackathon, Niveau 2 Développement',
    org: 'ESATIC — Treichville, Abidjan',
    description:
      "1er place pour le développement d'un système de recyclage intelligent de l'eau rejetée, réutilisable pour l'agriculture ou purifiée pour la consommation humaine (Python, Django, MongoDB, microcontrôleurs ESP32).",
  },
]

export const education = [
  {
    date: 'Septembre 2025 — Présent',
    title: 'Master 1 Big Data & Intelligence Artificielle (BIHAR)',
    org: 'ESATIC',
    description:
      "Formation spécialisée en Big Data et Intelligence Artificielle. Exploration de l'analyse prédictive, du traitement de la donnée et des systèmes intelligents.",
  },
  {
    date: '2022 — 2024',
    title: "Licence DASI (Développement d'Applications et Systèmes d'Information)",
    org: 'ESATIC',
    description:
      "Bases solides en développement logiciel, conception d'applications et administration de bases de données.",
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
    thumb: null, // mettez une URL d'image ici quand vous en avez une, ex: '/images/parrainage.png'
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
]
