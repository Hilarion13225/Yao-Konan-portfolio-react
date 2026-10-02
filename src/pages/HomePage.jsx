import { useDocumentMeta } from '../hooks/useDocumentMeta.js'
import { interests } from '../data/interests.js'
import Hero from '../sections/hero/Hero.jsx'
import About from '../sections/about/About.jsx'
import Capabilities from '../sections/about/Capabilities.jsx'
import Skills from '../sections/skills/Skills.jsx'
import SelectedWork from '../sections/projects/SelectedWork.jsx'
import HowIBuild from '../sections/engineering/HowIBuild.jsx'
import MoreThanCode from '../sections/engineering/MoreThanCode.jsx'
import DataToIntelligence from '../sections/data-ai/DataToIntelligence.jsx'
import Experience from '../sections/experience/Experience.jsx'
import Education from '../sections/education/Education.jsx'
import CurrentlyExploring from '../sections/exploring/CurrentlyExploring.jsx'
import CodeLivesHere from '../sections/github/CodeLivesHere.jsx'
import BeyondTheCode from '../sections/personal/BeyondTheCode.jsx'
import Contact from '../sections/contact/Contact.jsx'

// Ordre narratif : qui je suis → ce que je construis → ce que j'ai construit
// → comment je travaille → vers quoi je vais → construisons ensemble.
const SECTIONS = [
  About,
  Capabilities,
  Skills,
  SelectedWork,
  HowIBuild,
  MoreThanCode,
  DataToIntelligence,
  Experience,
  Education,
  CurrentlyExploring,
  CodeLivesHere,
  ...(interests.length > 0 ? [BeyondTheCode] : []),
  Contact,
]

export default function HomePage() {
  useDocumentMeta({
    description:
      "Portfolio de Yao Konan, développeur Full-Stack orienté Data & IA, étudiant en Master Big Data & Intelligence Artificielle (BIHAR) à l'ESATIC, Abidjan.",
  })

  return (
    <>
      <Hero />
      {SECTIONS.map((Section, i) => (
        <Section key={i} index={i + 1} />
      ))}
    </>
  )
}
