// Numérote une section : 1 → "01"
export const pad = (n) => String(n).padStart(2, '0')

export const formatMonthYear = (iso, lang) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'short',
    year: 'numeric',
  })
