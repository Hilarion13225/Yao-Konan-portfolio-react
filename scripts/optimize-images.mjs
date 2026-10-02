// Génère les images optimisées (WebP) et les visuels SEO à partir des originaux.
// Usage : npm run images
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const SRC = 'public/images'
const OUT = 'public/images/opt'

const screenshots = ['parrainage', 'tourism', 'recruit', 'chatbot', 'prediction']

await mkdir(OUT, { recursive: true })

for (const name of screenshots) {
  await sharp(`${SRC}/${name}.png`)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${name}.webp`)
}

await sharp(`${SRC}/profile1.png`).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${OUT}/profile.webp`)

// Favicon PNG pour Apple (le SVG sert de favicon principal)
const mark = (size, radius) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="#05070A"/>
  <text x="32" y="41" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#F8FAFC" letter-spacing="-1">YK</text>
  <circle cx="51" cy="13" r="4" fill="#22D3EE"/>
</svg>`
await sharp(Buffer.from(mark(180, 0))).png().toFile('public/apple-touch-icon.png')

// Image Open Graph 1200×630
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="80%" cy="10%" r="80%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#08111F" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#05070A" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#94A3B8" stroke-opacity="0.07"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#05070A"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="120" font-family="Courier New, monospace" font-size="22" letter-spacing="4" fill="#94A3B8">AVAILABLE FOR OPPORTUNITIES</text>
  <text x="76" y="300" font-family="Arial, Helvetica, sans-serif" font-size="150" font-weight="700" letter-spacing="-6" fill="#F8FAFC">YAO KONAN</text>
  <rect x="80" y="352" width="56" height="3" fill="#3B82F6"/>
  <text x="156" y="364" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600" letter-spacing="2" fill="#F8FAFC">FULL-STACK DEVELOPER</text>
  <text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600" letter-spacing="2" fill="#22D3EE">DATA &amp; AI</text>
  <text x="80" y="550" font-family="Courier New, monospace" font-size="22" fill="#94A3B8">Master 2 BIHAR — ESTIA × ESATIC · France</text>
  <text x="1120" y="550" text-anchor="end" font-family="Courier New, monospace" font-size="22" fill="#94A3B8">yao-konan-gold.vercel.app</text>
</svg>`
await sharp(Buffer.from(og)).png().toFile('public/og-image.png')

console.log('Images optimisées dans', OUT)
