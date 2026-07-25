import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
 
export default function App() {
  // Corrige le saut d'ancre lors d'un chargement direct sur une URL du
  // type /#about : au premier rendu, la section ciblée n'existe pas encore
  // dans le DOM (React vient tout juste de monter), donc le saut natif du
  // navigateur échoue silencieusement. On le refait nous-mêmes une fois
  // que tout est bien rendu.
  useEffect(() => {
    if (!window.location.hash) return
    const id = window.location.hash.slice(1)
    const target = document.getElementById(id)
    if (target) {
      // requestAnimationFrame garantit que le layout (dont --header-h) est stable
      requestAnimationFrame(() => {
        target.scrollIntoView({ block: 'start' })
      })
    }
  }, [])
 
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}