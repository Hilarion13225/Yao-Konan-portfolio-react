// Après le build : crée une page HTML statique par projet (dist/projects/<slug>.html)
// avec son propre titre, sa description et son image Open Graph.
// Les aperçus LinkedIn / WhatsApp / X et les robots sans JavaScript lisent ainsi
// le bon contenu ; React prend ensuite le relais côté navigateur.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { projects } from '../src/data/projects.js'
import { site } from '../src/config/site.js'

const fr = (v) => (v && typeof v === 'object' ? v.fr : v)
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const template = await readFile('dist/index.html', 'utf8')

// Remplace l'attribut `attr` de la balise repérée par `marker`
function setAttr(html, marker, attr, value) {
  const re = new RegExp(`(<[^>]*${marker}[^>]*\\s${attr}=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`Balise introuvable : ${marker}`)
  return html.replace(re, `$1${esc(value)}$2`)
}

await mkdir('dist/projects', { recursive: true })

for (const p of projects) {
  const title = `${fr(p.title)} — Yao Konan`
  const description = fr(p.summary)
  const url = `${site.url}/projects/${p.slug}`
  const image = `${site.url}/og/${p.slug}.png`

  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  html = setAttr(html, 'name="description"', 'content', description)
  html = setAttr(html, 'rel="canonical"', 'href', url)
  html = setAttr(html, 'property="og:type"', 'content', 'article')
  html = setAttr(html, 'property="og:url"', 'content', url)
  html = setAttr(html, 'property="og:title"', 'content', title)
  html = setAttr(html, 'property="og:description"', 'content', description)
  html = setAttr(html, 'property="og:image"', 'content', image)
  html = setAttr(html, 'name="twitter:title"', 'content', title)
  html = setAttr(html, 'name="twitter:description"', 'content', description)
  html = setAttr(html, 'name="twitter:image"', 'content', image)

  // Contenu lisible sans JavaScript (remplacé par l'application au chargement)
  const body = `<main class="prerender" style="max-width:48rem;margin:0 auto;padding:6rem 1.25rem;font-family:system-ui,sans-serif;color:#F8FAFC;background:#05070A">
      <p>${esc(fr(p.category))}</p>
      <h1>${esc(fr(p.title))}</h1>
      <p>${esc(fr(p.tagline))}</p>
      <p>${esc(description)}</p>
      ${p.problem ? `<h2>Problem</h2><p>${esc(fr(p.problem))}</p>` : ''}
      ${p.solution ? `<h2>Solution</h2><p>${esc(fr(p.solution))}</p>` : ''}
      <h2>Technologies</h2><p>${esc(p.stack.join(', '))}</p>
      <p><a href="/" style="color:#22D3EE">Yao Konan — Full-Stack Developer | Data &amp; AI</a></p>
    </main>`
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  // Masqué dès que JavaScript tourne, pour éviter un flash avant le rendu React
  html = html.replace('</head>', '<style>html[data-js] .prerender{display:none}</style></head>')

  await writeFile(`dist/projects/${p.slug}.html`, html)
}

console.log(`${projects.length} pages projet pré-générées dans dist/projects/`)
