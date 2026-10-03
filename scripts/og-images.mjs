// Génère une image Open Graph (1200×630) par projet dans public/og/.
// Usage : npm run images (appelé à la suite de optimize-images.mjs)
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'
import { projects } from '../src/data/projects.js'

const OUT = 'public/og'
const fr = (v) => (v && typeof v === 'object' ? v.fr : v)
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Découpe un texte en lignes d'au plus `max` caractères
function wrap(text, max) {
  const lines = []
  let line = ''
  for (const word of text.split(' ')) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line)
      line = word
    } else line = (line + ' ' + word).trim()
  }
  if (line) lines.push(line)
  return lines
}

await mkdir(OUT, { recursive: true })

for (const p of projects) {
  const withShot = p.visual.kind === 'screenshot'
  const textWidth = withShot ? 15 : 20
  const titleLines = wrap(fr(p.title).toUpperCase(), textWidth).slice(0, 3)
  const size = titleLines.length > 2 ? 60 : 72
  const taglineLines = wrap(fr(p.tagline), withShot ? 34 : 48).slice(0, 2)
  const titleTop = 200
  const afterTitle = titleTop + titleLines.length * (size + 4)

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="85%" cy="15%" r="75%">
      <stop offset="0%" stop-color="${p.visual.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#05070A" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#94A3B8" stroke-opacity="0.07"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#05070A"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="92" font-family="Courier New, monospace" font-size="21" letter-spacing="3" fill="#94A3B8">YAO KONAN — CASE STUDY</text>
  <text x="72" y="140" font-family="Courier New, monospace" font-size="21" letter-spacing="3" fill="${p.visual.accent}">${esc(fr(p.category).toUpperCase())}</text>
  ${titleLines
    .map((l, i) => `<text x="68" y="${titleTop + i * (size + 4) + size - 10}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="700" letter-spacing="-2" fill="#F8FAFC">${esc(l)}</text>`)
    .join('\n  ')}
  ${taglineLines
    .map((l, i) => `<text x="72" y="${afterTitle + 44 + i * 36}" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#CBD5E1">${esc(l)}</text>`)
    .join('\n  ')}
  <rect x="72" y="548" width="44" height="3" fill="${p.visual.accent}"/>
  <text x="132" y="558" font-family="Courier New, monospace" font-size="20" fill="#94A3B8">${esc(p.stack.slice(0, 5).join(' · '))}</text>
</svg>`

  const layers = []
  if (withShot) {
    const frame = await sharp(`public${p.visual.image}`)
      .resize(560, 420, { fit: 'cover', position: 'top' })
      .composite([
        {
          input: Buffer.from('<svg width="560" height="420"><rect width="560" height="420" rx="18" fill="#fff"/></svg>'),
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer()
    layers.push({ input: frame, left: 600, top: 105 })
  }

  await sharp(Buffer.from(svg)).composite(layers).png().toFile(`${OUT}/${p.slug}.png`)
}

console.log(`${projects.length} images Open Graph dans ${OUT}`)
