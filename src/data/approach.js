// « How I build » — de l'idée à la mise en production.
export const processSteps = [
  { key: 'idea', title: { fr: 'Idée', en: 'Idea' }, text: { fr: 'Comprendre le besoin réel et les personnes concernées.', en: 'Understand the real need and the people involved.' } },
  { key: 'analysis', title: { fr: 'Analyse', en: 'Analysis' }, text: { fr: 'Recueillir les besoins, identifier les acteurs, les rôles et les règles métier.', en: 'Gather requirements, identify actors, roles and business rules.' } },
  { key: 'ux', title: 'UX / UI', text: { fr: 'Dessiner des parcours simples, adaptés à chaque profil d’utilisateur.', en: 'Design simple flows tailored to each user profile.' } },
  { key: 'architecture', title: 'Architecture', text: { fr: 'Découper en couches : interface, API, services, données. Modéliser la base.', en: 'Split into layers: interface, API, services, data. Model the database.' } },
  { key: 'dev', title: { fr: 'Développement', en: 'Development' }, text: { fr: 'Construire par incréments, avec des composants et des endpoints réutilisables.', en: 'Build incrementally, with reusable components and endpoints.' } },
  { key: 'testing', title: { fr: 'Tests', en: 'Testing' }, text: { fr: 'Tester les endpoints (Postman) et les parcours critiques avant de livrer.', en: 'Test endpoints (Postman) and critical flows before shipping.' } },
  { key: 'deploy', title: { fr: 'Déploiement', en: 'Deployment' }, text: { fr: 'Mettre en ligne (Vercel, Render) et itérer à partir de l’usage.', en: 'Ship (Vercel, Render) and iterate from real usage.' } },
]

// « More than code » — principes, chacun relié à une pratique réelle.
export const principles = [
  { title: { fr: 'Architecture propre', en: 'Clean architecture' }, text: { fr: 'Séparer interface, logique métier, services IA et données — comme sur Smartex SustWay.', en: 'Separate interface, business logic, AI services and data — as in Smartex SustWay.' } },
  { title: { fr: 'Composants réutilisables', en: 'Reusable components' }, text: { fr: 'Des composants React pensés pour être réutilisés plutôt que dupliqués.', en: 'React components built to be reused rather than duplicated.' } },
  { title: { fr: 'Conception d’API', en: 'API design' }, text: { fr: 'API REST claires, documentées et testées endpoint par endpoint.', en: 'Clear REST APIs, documented and tested endpoint by endpoint.' } },
  { title: { fr: 'Modélisation des données', en: 'Database modeling' }, text: { fr: 'Modéliser avant de coder : PostgreSQL, MySQL, MongoDB selon le besoin.', en: 'Model before coding: PostgreSQL, MySQL, MongoDB depending on the need.' } },
  { title: { fr: 'Sécurité', en: 'Security' }, text: { fr: 'Authentification, gestion des rôles, JWT : l’accès aux données se conçoit dès le départ.', en: 'Authentication, role management, JWT: data access is designed from day one.' } },
  { title: 'Performance', text: { fr: 'Charger moins, charger plus tard : images optimisées, découpage du code, requêtes ciblées.', en: 'Load less, load later: optimised images, code splitting, targeted queries.' } },
  { title: { fr: 'UX responsive', en: 'Responsive UX' }, text: { fr: 'Chaque écran est pensé pour le mobile autant que pour le bureau.', en: 'Every screen is designed for mobile as much as desktop.' } },
  { title: { fr: 'Maintenabilité', en: 'Maintainability' }, text: { fr: 'Code lisible, données séparées des composants, conventions constantes.', en: 'Readable code, data separated from components, consistent conventions.' } },
]

// « From Data to Intelligence » — pipeline et où chaque étape a été pratiquée.
export const dataPipeline = [
  { key: 'collect', title: { fr: 'Collecter', en: 'Collect' }, text: { fr: 'Capteurs IoT, formulaires, documents, API.', en: 'IoT sensors, forms, documents, APIs.' }, seen: 'smart-water-management' },
  { key: 'clean', title: { fr: 'Nettoyer', en: 'Clean' }, text: { fr: 'Nettoyer et structurer : Python, Pandas.', en: 'Clean and structure: Python, Pandas.' }, seen: null },
  { key: 'store', title: { fr: 'Stocker', en: 'Store' }, text: { fr: 'PostgreSQL pour le relationnel, MongoDB pour les mesures.', en: 'PostgreSQL for relational data, MongoDB for measurements.' }, seen: 'smart-water-management' },
  { key: 'analyze', title: { fr: 'Analyser', en: 'Analyze' }, text: { fr: 'Explorer, mesurer, comprendre les tendances.', en: 'Explore, measure, understand trends.' }, seen: 'smartex-sustway' },
  { key: 'model', title: { fr: 'Modéliser', en: 'Model' }, text: { fr: 'Régression, TF-IDF, LLM selon le problème.', en: 'Regression, TF-IDF, LLMs depending on the problem.' }, seen: 'salary-prediction' },
  { key: 'predict', title: { fr: 'Prédire', en: 'Predict' }, text: { fr: 'Exposer le modèle via une API consommée par l’interface.', en: 'Serve the model through an API consumed by the UI.' }, seen: 'salary-prediction' },
  { key: 'decide', title: { fr: 'Décider', en: 'Decide' }, text: { fr: 'Transformer le résultat en recommandations et actions.', en: 'Turn the output into recommendations and actions.' }, seen: 'smartex-sustway' },
]

// status: 'practiced' = utilisé dans un projet ; 'learning' = en cours d'apprentissage
export const dataDomains = [
  { title: { fr: 'Analyse de données', en: 'Data Analysis' }, status: 'practiced', note: 'Python · Pandas' },
  { title: 'Machine Learning', status: 'practiced', note: 'scikit-learn' },
  { title: { fr: 'IA générative', en: 'Generative AI' }, status: 'practiced', note: 'Gemini · OpenAI' },
  { title: { fr: 'Agents IA', en: 'AI Agents' }, status: 'practiced', note: 'Smartex SustWay' },
  { title: { fr: 'Ingénierie des données', en: 'Data Engineering' }, status: 'learning', note: 'Master BIHAR' },
  { title: { fr: 'Visualisation', en: 'Visualization' }, status: 'learning', note: null },
]
