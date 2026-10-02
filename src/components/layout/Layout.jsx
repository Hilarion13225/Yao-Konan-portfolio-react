import { Outlet } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Cursor from '../common/Cursor.jsx'
import ScrollProgress from '../common/ScrollProgress.jsx'
import ScrollManager from '../common/ScrollManager.jsx'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function Layout() {
  const { t } = useLanguage()
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="noise relative min-h-dvh">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[80] -translate-y-24 rounded-full bg-fg px-4 py-2 text-sm text-bg focus:translate-y-0"
        >
          {t.skip}
        </a>
        <ScrollManager />
        <ScrollProgress />
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          <Outlet />
        </main>
        <Footer />
        <Cursor />
      </div>
    </MotionConfig>
  )
}
