// « How I build » — de l'idée à la mise en production.
export const processSteps = [
  { key: 'idea', title: 'Idea', text: { fr: 'Comprendre le besoin réel et les personnes concernées.', en: 'Understand the real need and the people involved.' } },
  { key: 'analysis', title: 'Analysis', text: { fr: 'Recueillir les besoins, identifier les acteurs, les rôles et les règles métier.', en: 'Gather requirements, identify actors, roles and business rules.' } },
  { key: 'ux', title: 'UX / UI', text: { fr: 'Dessiner des parcours simples, adaptés à chaque profil d’utilisateur.', en: 'Design simple flows tailored to each user profile.' } },
  { key: 'architecture', title: 'Architecture', text: { fr: 'Découper en couches : interface, API, services, données. Modéliser la base.', en: 'Split into layers: interface, API, services, data. Model the database.' } },
  { key: 'dev', title: 'Development', text: { fr: 'Construire par incréments, avec des composants et des endpoints réutilisables.', en: 'Build incrementally, with reusable components and endpoints.' } },
  { key: 'testing', title: 'Testing', text: { fr: 'Tester les endpoints (Postman) et les parcours critiques avant de livrer.', en: 'Test endpoints (Postman) and critical flows before shipping.' } },
  { key: 'deploy', title: 'Deployment', text: { fr: 'Mettre en ligne (Vercel, Render) et itérer à partir de l’usage.', en: 'Ship (Vercel, Render) and iterate from real usage.' } },
]

// « More than code » — principes, chacun relié à une pratique réelle.
export const principles = [
  { title: 'Clean architecture', text: { fr: 'Séparer interface, logique métier, services IA et données — comme sur Smartex SustWay.', en: 'Separate interface, business logic, AI services and data — as in Smartex SustWay.' } },
  { title: 'Reusable components', text: { fr: 'Des composants React pensés pour être réutilisés plutôt que dupliqués.', en: 'React components built to be reused rather than duplicated.' } },
  { title: 'API design', text: { fr: 'API REST claires, documentées et testées endpoint par endpoint.', en: 'Clear REST APIs, documented and tested endpoint by endpoint.' } },
  { title: 'Database modeling', text: { fr: 'Modéliser avant de coder : PostgreSQL, MySQL, MongoDB selon le besoin.', en: 'Model before coding: PostgreSQL, MySQL, MongoDB depending on the need.' } },
  { title: 'Security', text: { fr: 'Authentification, gestion des rôles, JWT : l’accès aux données se conçoit dès le départ.', en: 'Authentication, role management, JWT: data access is designed from day one.' } },
  { title: 'Performance', text: { fr: 'Charger moins, charger plus tard : images optimisées, code splitting, requêtes ciblées.', en: 'Load less, load later: optimised images, code splitting, targeted queries.' } },
  { title: 'Responsive UX', text: { fr: 'Chaque écran est pensé pour le mobile autant que pour le bureau.', en: 'Every screen is designed for mobile as much as desktop.' } },
  { title: 'Maintainability', text: { fr: 'Code lisible, données séparées des composants, conventions constantes.', en: 'Readable code, data separated from components, consistent conventions.' } },
]

// « From Data to Intelligence » — pipeline et où chaque étape a été pratiquée.
export const dataPipeline = [
  { key: 'collect', title: 'Collect', text: { fr: 'Capteurs IoT, formulaires, documents, API.', en: 'IoT sensors, forms, documents, APIs.' }, seen: 'smart-water-management' },
  { key: 'clean', title: 'Clean', text: { fr: 'Nettoyer et structurer : Python, Pandas.', en: 'Clean and structure: Python, Pandas.' }, seen: null },
  { key: 'store', title: 'Store', text: { fr: 'PostgreSQL pour le relationnel, MongoDB pour les mesures.', en: 'PostgreSQL for relational data, MongoDB for measurements.' }, seen: 'smart-water-management' },
  { key: 'analyze', title: 'Analyze', text: { fr: 'Explorer, mesurer, comprendre les tendances.', en: 'Explore, measure, understand trends.' }, seen: 'smartex-sustway' },
  { key: 'model', title: 'Model', text: { fr: 'Régression, TF-IDF, LLM selon le problème.', en: 'Regression, TF-IDF, LLMs depending on the problem.' }, seen: 'salary-prediction' },
  { key: 'predict', title: 'Predict', text: { fr: 'Exposer le modèle via une API consommée par l’interface.', en: 'Serve the model through an API consumed by the UI.' }, seen: 'salary-prediction' },
  { key: 'decide', title: 'Decide', text: { fr: 'Transformer le résultat en recommandations et actions.', en: 'Turn the output into recommendations and actions.' }, seen: 'smartex-sustway' },
]

// status: 'practiced' = utilisé dans un projet ; 'learning' = en cours d'apprentissage
export const dataDomains = [
  { title: 'Data Analysis', status: 'practiced', note: 'Python · Pandas' },
  { title: 'Machine Learning', status: 'practiced', note: 'scikit-learn' },
  { title: 'Generative AI', status: 'practiced', note: 'Gemini · OpenAI' },
  { title: 'AI Agents', status: 'practiced', note: 'Smartex SustWay' },
  { title: 'Data Engineering', status: 'learning', note: 'Master BIHAR' },
  { title: 'Visualization', status: 'learning', note: null },
]
