// Tous les projets du portfolio.
//
// Règle : aucune information inventée. Un champ vide ([] ou null) est simplement
// masqué à l'affichage — par exemple `challenges`, `learnings` ou `links.github`.
// Pour ajouter des captures : placer l'image dans public/images/ puis lancer
// `npm run images` qui génère la version optimisée dans public/images/opt/.
//
// `visual.kind` choisit la composition graphique de la carte :
//   'screenshot' → capture d'écran (visual.image)
//   'smartex' | 'water' → illustration SVG dédiée au projet

export const projects = [
  {
    slug: 'smartex-sustway',
    featured: true,
    category: { fr: 'IA · SaaS · RSE/ESG', en: 'AI · SaaS · CSR/ESG' },
    title: 'Smartex SustWay',
    tagline: {
      fr: "Plateforme d'intelligence et d'audit RSE/ESG",
      en: 'CSR/ESG intelligence & audit platform',
    },
    summary: {
      fr: "Une plateforme intelligente permettant d'évaluer la conformité RSE/ESG, d'analyser les preuves documentaires et de transformer les résultats d'audit en plans d'amélioration concrets.",
      en: 'An intelligent platform that evaluates CSR/ESG compliance, analyses documentary evidence and turns audit results into concrete improvement plans.',
    },
    role: { fr: 'Full-Stack & IA — de la conception aux services IA', en: 'Full-Stack & AI — from design to AI services' },
    period: null,
    context: {
      fr: "Les démarches RSE/ESG demandent aux organisations de prouver leurs pratiques : politiques internes, rapports, procédures, indicateurs. Smartex SustWay est né pour accompagner cette évaluation et la rendre exploitable.",
      en: 'CSR/ESG programmes require organisations to prove their practices: internal policies, reports, procedures, indicators. Smartex SustWay was built to support that assessment and make it actionable.',
    },
    problem: {
      fr: "Un audit RSE/ESG repose sur de nombreuses preuves documentaires hétérogènes. Leur analyse manuelle est longue, et les résultats restent souvent un constat difficile à transformer en actions concrètes.",
      en: 'A CSR/ESG audit relies on many heterogeneous documents. Reviewing them manually is slow, and the outcome often remains a diagnosis that is hard to turn into concrete action.',
    },
    solution: {
      fr: "Une plateforme SaaS qui analyse les documents avec l'IA, évalue la conformité, calcule un score, identifie les risques, puis génère recommandations, actions correctives et rapports — jusqu'à la préparation au financement.",
      en: 'A SaaS platform that analyses documents with AI, evaluates compliance, computes a score, identifies risks, then generates recommendations, corrective actions and reports — all the way to financing readiness.',
    },
    architecture: {
      type: 'layers',
      layers: [
        { label: { fr: 'Interface', en: 'Interface' }, items: ['React', 'Vite', 'Tailwind CSS'] },
        { label: { fr: 'API métier', en: 'Business API' }, items: ['Java', 'Quarkus', 'REST API'] },
        { label: { fr: 'Services IA', en: 'AI services' }, items: ['Python', 'FastAPI', 'Multi-agent AI'] },
        { label: { fr: 'Données', en: 'Data' }, items: ['PostgreSQL'] },
      ],
    },
    features: [
      { fr: 'Analyse documentaire assistée par IA', en: 'AI-powered document analysis' },
      { fr: 'Évaluation de la conformité RSE/ESG', en: 'CSR/ESG compliance evaluation' },
      { fr: 'Scoring', en: 'Scoring' },
      { fr: 'Analyse des risques', en: 'Risk analysis' },
      { fr: 'Recommandations', en: 'Recommendations' },
      { fr: 'Actions correctives', en: 'Corrective actions' },
      { fr: 'Reporting', en: 'Reporting' },
      { fr: 'Préparation au financement', en: 'Financing readiness' },
      { fr: 'IA multi-agents', en: 'Multi-agent AI' },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Java', 'Quarkus', 'PostgreSQL', 'Python', 'FastAPI', 'REST API', 'AI'],
    contribution: [
      { fr: 'Analyse fonctionnelle et conception de l’architecture globale', en: 'Functional analysis and overall architecture design' },
      { fr: 'Interface React / Vite / Tailwind CSS et intégration des API', en: 'React / Vite / Tailwind CSS interface and API integration' },
      { fr: 'API REST et logique métier en Java / Quarkus, modélisation PostgreSQL', en: 'REST API and business logic in Java / Quarkus, PostgreSQL modeling' },
      { fr: 'Services IA en Python / FastAPI : analyse documentaire et agents', en: 'AI services in Python / FastAPI: document analysis and agents' },
    ],
    result: null,
    challenges: [],
    learnings: [],
    gallery: [],
    links: { live: null, github: null },
    visual: { kind: 'smartex', accent: '#22D3EE' },
  },
  {
    slug: 'electoral-sponsorship',
    featured: true,
    category: { fr: 'Full-Stack · Secteur public', en: 'Full-Stack · Public sector' },
    title: 'Electoral Sponsorship Management',
    tagline: {
      fr: 'Digitalisation du parrainage électoral — CEI',
      en: 'Digitalising electoral sponsorship — CEI',
    },
    summary: {
      fr: "Application de gestion du parrainage électoral développée à la Commission Électorale Indépendante (CEI), alliant performance, sécurité et accessibilité.",
      en: 'Electoral sponsorship management application built at the Independent Electoral Commission (CEI), combining performance, security and accessibility.',
    },
    role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
    period: { fr: 'Déc. 2024 — Oct. 2025', en: 'Dec 2024 — Oct 2025' },
    context: {
      fr: "Projet réalisé pendant mon expérience de développeur full-stack à la Commission Électorale Indépendante (CEI), à Abidjan.",
      en: 'Built during my full-stack developer experience at the Independent Electoral Commission (CEI) in Abidjan.',
    },
    problem: {
      fr: "Le parrainage électoral implique plusieurs acteurs et un volume important de données à collecter, valider et traiter. Il fallait digitaliser ce processus de façon fiable et sécurisée.",
      en: 'Electoral sponsorship involves several actors and a large volume of data to collect, validate and process. The process had to be digitalised reliably and securely.',
    },
    solution: {
      fr: "Une application web avec une API REST Laravel, une interface Next.js et une base PostgreSQL : gestion des acteurs, collecte et validation des parrainages, authentification et gestion des rôles.",
      en: 'A web application with a Laravel REST API, a Next.js interface and a PostgreSQL database: actor management, sponsorship collection and validation, authentication and role management.',
    },
    architecture: {
      type: 'layers',
      layers: [
        { label: { fr: 'Interface', en: 'Interface' }, items: ['Next.js', 'React', 'Tailwind CSS'] },
        { label: { fr: 'API', en: 'API' }, items: ['Laravel', 'REST API', { fr: 'Authentification & rôles', en: 'Auth & roles' }] },
        { label: { fr: 'Données', en: 'Data' }, items: ['PostgreSQL'] },
      ],
    },
    features: [
      { fr: 'Digitalisation du processus de parrainage', en: 'Digitalised sponsorship process' },
      { fr: 'Gestion des acteurs (agents, collecteurs)', en: 'Actor management (agents, collectors)' },
      { fr: 'Collecte des parrainages', en: 'Sponsorship collection' },
      { fr: 'Validation et traitement', en: 'Validation and processing' },
      { fr: 'Authentification et gestion des rôles', en: 'Authentication and role management' },
      { fr: 'Recherche par numéro d’électeur', en: 'Search by voter number' },
    ],
    stack: ['Laravel', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'REST API', 'Postman'],
    contribution: [
      { fr: 'Analyse des besoins', en: 'Requirements analysis' },
      { fr: 'Conception et implémentation du backend Laravel et de son API REST', en: 'Design and implementation of the Laravel backend and its REST API' },
      { fr: 'Développement de l’interface utilisateur avec Next.js (React)', en: 'User interface development with Next.js (React)' },
      { fr: 'Intégration et gestion de la base de données PostgreSQL', en: 'PostgreSQL database integration and management' },
      { fr: 'Authentification, gestion des rôles et consommation de l’API REST', en: 'Authentication, role management and REST API consumption' },
      { fr: 'Rédaction et exécution des tests d’endpoints avec Postman', en: 'Writing and running endpoint tests with Postman' },
    ],
    result: null,
    challenges: [],
    learnings: [],
    gallery: [{ src: '/images/opt/parrainage.webp', alt: { fr: 'Écran de collecte des parrainages', en: 'Sponsorship collection screen' } }],
    links: { live: null, github: null },
    visual: { kind: 'screenshot', image: '/images/opt/parrainage.webp', accent: '#3B82F6' },
  },
  {
    slug: 'smart-water-management',
    featured: true,
    category: { fr: 'IoT · Data · IA', en: 'IoT · Data · AI' },
    title: 'Smart Water Management',
    tagline: {
      fr: "Recyclage et gestion intelligente de l'eau — 1re place, Technovore Hackathon 2025",
      en: 'Smart water recycling & management — 1st place, Technovore Hackathon 2025',
    },
    summary: {
      fr: "Système connecté qui mesure la qualité de l'eau rejetée pour la réorienter vers l'agriculture ou la purification, et optimiser la gestion de l'eau dans les zones rurales.",
      en: 'A connected system that measures the quality of wastewater to route it towards agriculture or purification, and optimise water management in rural areas.',
    },
    role: { fr: 'Développeur IoT & Backend', en: 'IoT & Backend Developer' },
    period: { fr: '2025 — Hackathon', en: '2025 — Hackathon' },
    context: {
      fr: 'Projet réalisé lors du Technovore Hackathon 2025 (ESATIC, niveau 2 développement).',
      en: 'Built during the Technovore Hackathon 2025 (ESATIC, level 2 development).',
    },
    problem: {
      fr: "Dans les zones rurales, l'eau est une ressource rare et l'eau rejetée est rarement valorisée, faute de savoir si elle peut être réutilisée.",
      en: 'In rural areas, water is scarce and wastewater is rarely reused, because nobody knows whether it can be.',
    },
    solution: {
      fr: "Des capteurs connectés à un ESP32 mesurent pH, niveau et turbidité (TSS). Les données sont stockées dans MongoDB, analysées, puis exploitées par du Machine Learning pour aider à décider : réutilisation agricole ou purification pour la consommation.",
      en: 'Sensors wired to an ESP32 measure pH, level and turbidity (TSS). Data is stored in MongoDB, analysed, then used by Machine Learning to support the decision: agricultural reuse or purification for consumption.',
    },
    architecture: {
      type: 'flow',
      layers: [
        { label: { fr: 'Capteurs', en: 'Sensors' }, items: ['pH', { fr: 'Niveau', en: 'Level' }, 'Turbidity / TSS'] },
        { label: { fr: 'Collecte', en: 'Collection' }, items: ['ESP32'] },
        { label: { fr: 'Base de données', en: 'Database' }, items: ['MongoDB'] },
        { label: { fr: 'Analyse', en: 'Analysis' }, items: ['Python', 'Django'] },
        { label: 'Machine Learning', items: [{ fr: 'Modèle', en: 'Model' }] },
        { label: { fr: 'Aide à la décision', en: 'Decision support' }, items: [{ fr: 'Agriculture / purification', en: 'Agriculture / purification' }] },
      ],
    },
    features: [
      { fr: 'Mesure du pH, du niveau et de la turbidité (TSS)', en: 'pH, level and turbidity (TSS) measurement' },
      { fr: 'Collecte des données via microcontrôleurs ESP32', en: 'Data collection via ESP32 microcontrollers' },
      { fr: 'Stockage des mesures dans MongoDB', en: 'Measurements stored in MongoDB' },
      { fr: 'Analyse et Machine Learning pour l’aide à la décision', en: 'Analysis and Machine Learning for decision support' },
      { fr: 'Réorientation de l’eau : agriculture ou purification', en: 'Water routing: agriculture or purification' },
    ],
    stack: ['ESP32', 'Sensors', 'Python', 'Django', 'MongoDB', 'Machine Learning'],
    contribution: [
      { fr: 'Développement IoT et backend du système', en: 'IoT and backend development of the system' },
    ],
    result: { fr: '1re place — Technovore Hackathon 2025', en: '1st place — Technovore Hackathon 2025' },
    challenges: [],
    learnings: [],
    gallery: [],
    links: { live: null, github: null },
    visual: { kind: 'water', accent: '#38BDF8' },
  },
  {
    slug: 'tourismchain-ci',
    featured: false,
    category: { fr: 'Full-Stack · Blockchain', en: 'Full-Stack · Blockchain' },
    title: 'TourismChain CI',
    tagline: {
      fr: 'Plateforme digitale du tourisme ivoirien',
      en: 'Ivorian tourism digital platform',
    },
    summary: {
      fr: "Plateforme centralisant l'offre touristique de Côte d'Ivoire pour 8 profils d'acteurs, avec certification blockchain des billets et produits.",
      en: "Platform centralising Côte d'Ivoire's tourism offering for 8 actor profiles, with blockchain certification of tickets and products.",
    },
    role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
    period: { fr: '2026 — Hackathon', en: '2026 — Hackathon' },
    context: {
      fr: 'Réalisé lors du Hackathon ESATIC TECHTITANS — Technovore Hackathon 2026.',
      en: 'Built during the ESATIC TECHTITANS Hackathon — Technovore Hackathon 2026.',
    },
    problem: {
      fr: "L'offre touristique ivoirienne (sites, circuits, événements, artisanat, hébergements, restauration) est dispersée entre de nombreux acteurs.",
      en: 'The Ivorian tourism offering (sites, tours, events, crafts, accommodation, dining) is scattered across many actors.',
    },
    solution: {
      fr: 'Une plateforme unique pour 8 profils d’acteurs : authentification JWT, certification blockchain des billets et produits (mode on-chain / off-chain), dashboards analytics par rôle et assistant conversationnel pour guider les touristes.',
      en: 'A single platform for 8 actor profiles: JWT authentication, blockchain certification of tickets and products (on-chain / off-chain mode), role-based analytics dashboards and a chatbot assistant to guide tourists.',
    },
    architecture: {
      type: 'layers',
      layers: [
        { label: { fr: 'Application', en: 'Application' }, items: ['Next.js', 'TypeScript'] },
        { label: { fr: 'Services', en: 'Services' }, items: ['JWT', 'Blockchain', 'Chatbot'] },
        { label: { fr: 'Données', en: 'Data' }, items: ['Prisma', 'PostgreSQL'] },
      ],
    },
    features: [
      { fr: "8 profils d'acteurs", en: '8 actor profiles' },
      { fr: 'Authentification JWT', en: 'JWT authentication' },
      { fr: 'Certification blockchain des billets et produits', en: 'Blockchain certification of tickets and products' },
      { fr: 'Dashboards analytics par rôle', en: 'Role-based analytics dashboards' },
      { fr: 'Assistant conversationnel intégré', en: 'Built-in chatbot assistant' },
    ],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Blockchain', 'Chatbot'],
    contribution: [],
    result: null,
    challenges: [],
    learnings: [],
    gallery: [{ src: '/images/opt/tourism.webp', alt: { fr: 'Accueil de TourismChain CI', en: 'TourismChain CI home page' } }],
    links: { live: 'https://tourim-chain.vercel.app/', github: null },
    visual: { kind: 'screenshot', image: '/images/opt/tourism.webp', accent: '#F59E0B' },
  },
  {
    slug: 'smartrecruit',
    featured: false,
    category: { fr: 'IA · NLP', en: 'AI · NLP' },
    title: 'SmartRecruit',
    tagline: {
      fr: 'Plateforme de recrutement assistée par IA',
      en: 'AI-assisted recruitment platform',
    },
    summary: {
      fr: 'Analyse de CV, scoring sémantique et classement automatique des candidats.',
      en: 'Resume analysis, semantic scoring and automatic candidate ranking.',
    },
    role: { fr: 'Développeur Full-Stack & IA', en: 'Full-Stack & AI Developer' },
    period: null,
    context: null,
    problem: {
      fr: 'Trier un grand nombre de CV à la main est long et subjectif.',
      en: 'Screening many resumes by hand is slow and subjective.',
    },
    solution: {
      fr: 'Analyse automatique des CV, scoring sémantique par rapport au besoin et classement des candidats.',
      en: 'Automatic resume analysis, semantic scoring against the job need and candidate ranking.',
    },
    architecture: null,
    features: [
      { fr: 'Analyse de CV', en: 'Resume analysis' },
      { fr: 'Scoring sémantique', en: 'Semantic scoring' },
      { fr: 'Classement automatique des candidats', en: 'Automatic candidate ranking' },
    ],
    stack: ['AI', 'NLP', 'React', 'Next.js'],
    contribution: [],
    result: null,
    challenges: [],
    learnings: [],
    gallery: [{ src: '/images/opt/recruit.webp', alt: { fr: 'Interface de SmartRecruit', en: 'SmartRecruit interface' } }],
    links: { live: 'https://smartrecruit-gamma.vercel.app/', github: null },
    visual: { kind: 'screenshot', image: '/images/opt/recruit.webp', accent: '#A78BFA' },
  },
  {
    slug: 'ai-chatbot',
    featured: false,
    category: { fr: 'IA générative · API', en: 'Generative AI · API' },
    title: { fr: 'Chatbot IA conversationnel', en: 'AI Conversational Chatbot' },
    tagline: {
      fr: 'Assistant conversationnel Django + LLM, déployé sur Render',
      en: 'Django + LLM conversational assistant, deployed on Render',
    },
    summary: {
      fr: 'Assistant conversationnel intégrant Gemini et OpenAI, un moteur NLP local (TF-IDF, scikit-learn) et une recherche web en temps réel.',
      en: 'Conversational assistant integrating Gemini and OpenAI, a local NLP engine (TF-IDF, scikit-learn) and real-time web search.',
    },
    role: { fr: 'Développeur Full-Stack & IA', en: 'Full-Stack & AI Developer' },
    period: null,
    context: null,
    problem: {
      fr: 'Offrir des réponses en langage naturel fiables, y compris sur des informations récentes.',
      en: 'Provide reliable natural-language answers, including on recent information.',
    },
    solution: {
      fr: 'Une API Django REST Framework qui combine les modèles Gemini et OpenAI, un moteur NLP local TF-IDF et une recherche web en temps réel.',
      en: 'A Django REST Framework API combining Gemini and OpenAI models, a local TF-IDF NLP engine and real-time web search.',
    },
    architecture: {
      type: 'layers',
      layers: [
        { label: 'API', items: ['Django', 'Django REST Framework'] },
        { label: { fr: 'Intelligence', en: 'Intelligence' }, items: ['Gemini', 'OpenAI', 'TF-IDF · scikit-learn', { fr: 'Recherche web', en: 'Web search' }] },
        { label: { fr: 'Déploiement', en: 'Deployment' }, items: ['Render'] },
      ],
    },
    features: [
      { fr: 'Réponses en langage naturel (Gemini, OpenAI)', en: 'Natural-language answers (Gemini, OpenAI)' },
      { fr: 'Moteur NLP local TF-IDF', en: 'Local TF-IDF NLP engine' },
      { fr: 'Recherche web en temps réel', en: 'Real-time web search' },
      { fr: 'Déployé en production sur Render', en: 'Deployed to production on Render' },
    ],
    stack: ['Django', 'DRF', 'Gemini', 'OpenAI', 'scikit-learn'],
    contribution: [],
    result: null,
    challenges: [],
    learnings: [],
    gallery: [{ src: '/images/opt/chatbot.webp', alt: { fr: 'Interface du chatbot', en: 'Chatbot interface' } }],
    links: { live: 'https://chatbot-project-vssz.onrender.com/api', github: null },
    visual: { kind: 'screenshot', image: '/images/opt/chatbot.webp', accent: '#34D399' },
  },
  {
    slug: 'salary-prediction',
    featured: false,
    category: { fr: 'Machine Learning', en: 'Machine Learning' },
    title: { fr: 'Prédiction de salaire', en: 'Salary Prediction' },
    tagline: {
      fr: 'Régression linéaire servie par Django, consommée par React',
      en: 'Linear regression served by Django, consumed by React',
    },
    summary: {
      fr: "Application web qui prédit un salaire à partir des années d'expérience. Réalisée en binôme avec KOUAME Romeo.",
      en: 'Web app predicting a salary from years of experience. Built in pair with KOUAME Romeo.',
    },
    role: { fr: 'Développeur Full-Stack & ML', en: 'Full-Stack & ML Developer' },
    period: null,
    context: {
      fr: 'Projet réalisé en binôme avec KOUAME Romeo.',
      en: 'Project built in pair with KOUAME Romeo.',
    },
    problem: {
      fr: "Estimer un salaire à partir des années d'expérience.",
      en: 'Estimate a salary from years of experience.',
    },
    solution: {
      fr: 'Un modèle de régression linéaire (scikit-learn) exposé par une API Django et consommé par une interface React.',
      en: 'A linear regression model (scikit-learn) exposed through a Django API and consumed by a React interface.',
    },
    architecture: {
      type: 'layers',
      layers: [
        { label: { fr: 'Interface', en: 'Interface' }, items: ['React'] },
        { label: 'API', items: ['Django'] },
        { label: { fr: 'Modèle', en: 'Model' }, items: ['scikit-learn', { fr: 'Régression linéaire', en: 'Linear regression' }] },
      ],
    },
    features: [
      { fr: "Prédiction à partir des années d'expérience", en: 'Prediction from years of experience' },
      { fr: 'API Django exposant le modèle', en: 'Django API serving the model' },
      { fr: 'Interface React', en: 'React interface' },
    ],
    stack: ['Django', 'React', 'Machine Learning', 'scikit-learn'],
    contribution: [],
    result: null,
    challenges: [],
    learnings: [],
    gallery: [{ src: '/images/opt/prediction.webp', alt: { fr: "Interface de prédiction", en: 'Prediction interface' } }],
    links: { live: null, github: null },
    visual: { kind: 'screenshot', image: '/images/opt/prediction.webp', accent: '#60A5FA' },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
export const getProject = (slug) => projects.find((p) => p.slug === slug)
