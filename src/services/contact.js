import { site } from '../config/site.js'

// Aucun backend : le formulaire ouvre le client mail du visiteur avec un message prérempli.
// Pour un envoi direct, remplacer cette fonction par un appel EmailJS.
export function sendContactMessage({ name, email, subject, message }) {
  const body = `${message}\n\n— ${name} (${email})`
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
}
