// Génère public/sitemap.xml à partir des projets (exécuté avant chaque build).
import { writeFile } from 'node:fs/promises'
import { projects } from '../src/data/projects.js'
import { site } from '../src/config/site.js'

const today = new Date().toISOString().slice(0, 10)
const urls = ['/', ...projects.map((p) => `/projects/${p.slug}`)]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.url}${u}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

await writeFile('public/sitemap.xml', xml)
console.log(`sitemap.xml : ${urls.length} URL`)
