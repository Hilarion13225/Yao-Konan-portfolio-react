export const awards = [
  {
    title: { fr: '1re place — Technovore Hackathon 2025', en: '1st place — Technovore Hackathon 2025' },
    org: 'ESATIC',
    project: 'smart-water-management',
  },
]

// Certificats — triés automatiquement du plus récent au plus ancien via `dateISO`.
const certificateList = [
  {
    title: '2025 C Programming Bootcamp — The Complete C Language Course',
    issuer: 'Udemy — Toppers Bootcamp',
    dateISO: '2026-03-27',
    url: 'https://ude.my/UC-4b258001-ff06-4711-a978-5ae3a9fdd9b9',
  },
  {
    title: 'Machine Learning and Deep Learning Projects in Python',
    issuer: 'Udemy — S. Emadedin Hashemi',
    dateISO: '2026-02-26',
    url: 'https://ude.my/UC-c675edfe-9e36-434c-a194-c6e58166f8c4',
  },
  {
    title: 'Learn Functions & Function Expressions in Modern JavaScript',
    issuer: 'Udemy — Noshad Yousuf',
    dateISO: '2025-06-27',
    url: 'https://ude.my/UC-4ce14893-fe81-4564-908b-29428bbd756a',
  },
  {
    title: 'Laravel and Postman REST API Development: Beginner to Pro',
    issuer: 'Udemy — Mehmood Khalil',
    dateISO: '2025-04-28',
    url: 'https://ude.my/UC-f4c429e6-5fdb-4ef8-a323-5769841025aa',
  },
  {
    title: 'Python and Django Framework and HTML5 Stack Complete Course',
    issuer: 'Udemy — Horizon Tech',
    dateISO: '2025-04-08',
    url: 'https://ude.my/UC-d7acb6ec-6ca6-4a9b-a78c-2f0b2ab5bb4d',
  },
  {
    title: 'Mastering HTML5: From Beginner to Advanced',
    issuer: 'Udemy — Mehmood Khalil, Zaheer Irshad',
    dateISO: '2024-12-04',
    url: 'https://ude.my/UC-bf859b75-bc77-463f-9a0c-f848be370edb',
  },
]

export const certificates = [...certificateList].sort((a, b) => b.dateISO.localeCompare(a.dateISO))
