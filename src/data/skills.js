// Uniquement les technologies réellement utilisées dans les projets et expériences.
// Pas de pourcentages : le niveau se lit dans les projets.

// « What I build » — les quatre axes du profil, reliés aux projets qui les prouvent.
export const capabilities = [
  {
    id: 'fullstack',
    title: { fr: 'Développement Full-Stack', en: 'Full-Stack Development' },
    text: {
      fr: 'Applications web complètes : interfaces, API REST, authentification, gestion des rôles et bases de données.',
      en: 'End-to-end web applications: interfaces, REST APIs, authentication, role management and databases.',
    },
    stack: ['React', 'Next.js', 'Laravel', 'Node.js', 'Django', 'Quarkus'],
    proof: ['electoral-sponsorship', 'tourismchain-ci'],
  },
  {
    id: 'data',
    title: { fr: 'Données & ingénierie', en: 'Data & Engineering' },
    text: {
      fr: 'Collecte, stockage et exploitation des données — de capteurs IoT jusqu’aux bases relationnelles et documentaires.',
      en: 'Collecting, storing and using data — from IoT sensors to relational and document databases.',
    },
    stack: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'MongoDB'],
    proof: ['smart-water-management', 'salary-prediction'],
  },
  {
    id: 'ai',
    title: { fr: 'Intelligence artificielle', en: 'Artificial Intelligence' },
    text: {
      fr: 'Applications qui intègrent l’IA : analyse documentaire, NLP, modèles de Machine Learning et LLM via API.',
      en: 'Applications that embed AI: document analysis, NLP, Machine Learning models and LLMs through APIs.',
    },
    stack: ['Machine Learning', { fr: 'IA générative', en: 'Generative AI' }, { fr: "API d'IA", en: 'AI APIs' }, 'NLP', 'scikit-learn'],
    proof: ['smartex-sustway', 'ai-chatbot', 'smartrecruit'],
  },
  {
    id: 'product',
    title: { fr: 'Produit & ingénierie UI', en: 'Product & UI Engineering' },
    text: {
      fr: 'Des interfaces pensées pour leurs utilisateurs : parcours clairs, dashboards par rôle, composants réutilisables.',
      en: 'Interfaces designed for their users: clear flows, role-based dashboards, reusable components.',
    },
    stack: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    proof: ['smartex-sustway', 'tourismchain-ci'],
  },
]

// « Skills » — index typographique par domaine.
export const skillDomains = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: ['Laravel', 'PHP', 'Node.js', 'Django', 'Django REST Framework', 'Java · Quarkus', 'FastAPI', { fr: 'API REST', en: 'REST API' }],
  },
  {
    id: 'database',
    title: { fr: 'Bases de données', en: 'Databases' },
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Firebase'],
  },
  {
    id: 'data-ai',
    title: { fr: 'Données & IA', en: 'Data & AI' },
    items: ['Python', 'Pandas', 'scikit-learn', 'Machine Learning', 'NLP', { fr: 'IA générative', en: 'Generative AI' }, { fr: 'API Gemini · OpenAI', en: 'Gemini · OpenAI APIs' }],
  },
  {
    id: 'iot',
    title: 'IoT',
    items: ['ESP32', { fr: 'Capteurs (pH, niveau, turbidité)', en: 'Sensors (pH, level, turbidity)' }],
  },
  {
    id: 'tools',
    title: { fr: 'Outils', en: 'Tools' },
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'Odoo', 'Vercel', 'Render'],
  },
]

export const marqueeTech = [
  'React', 'Next.js', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'Laravel', 'Django',
  'Quarkus', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Linux', 'Machine Learning', { fr: 'IA générative', en: 'Generative AI' },
]

// « Currently exploring » — sujets en cours d'apprentissage, distincts des compétences pratiquées.
// À ajuster librement : rien ici n'est présenté comme maîtrisé.
export const exploring = [
  {
    title: { fr: 'Big Data & ingénierie des données', en: 'Big Data & Data Engineering' },
    text: { fr: 'Pipelines et traitement de données à grande échelle — au cœur du Master BIHAR.', en: 'Large-scale data pipelines and processing — at the core of the BIHAR Master’s.' },
  },
  {
    title: 'Deep Learning',
    text: { fr: 'Réseaux de neurones et projets pratiques, dans la continuité de ma certification ML & DL.', en: 'Neural networks and hands-on projects, following my ML & DL certification.' },
  },
  {
    title: { fr: 'Agents IA', en: 'AI Agents' },
    text: { fr: 'Orchestration d’agents et systèmes multi-agents, au-delà de ce que j’ai mis en place sur Smartex.', en: 'Agent orchestration and multi-agent systems, beyond what I built for Smartex.' },
  },
  {
    title: 'Cloud & DevOps',
    text: { fr: 'De Docker au déploiement continu : automatiser la mise en production.', en: 'From Docker to continuous delivery: automating releases.' },
  },
  {
    title: { fr: 'Architecture React avancée', en: 'Advanced React architecture' },
    text: { fr: 'Organisation de grandes bases de code React, performance et systèmes de design.', en: 'Structuring large React codebases, performance and design systems.' },
  },
]

// Ce qui est déjà pratiqué en projet — pour la distinction Experienced / Exploring.
export const experienced = [
  'React', 'Next.js', 'Laravel', 'Django', 'Quarkus', 'FastAPI', 'PostgreSQL', 'MongoDB',
  { fr: 'API REST', en: 'REST API' }, 'Python', 'Machine Learning', { fr: 'IA générative', en: 'Generative AI' }, 'Docker', 'Git',
]
