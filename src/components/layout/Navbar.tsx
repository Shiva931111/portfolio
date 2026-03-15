import type { FC } from 'react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar: FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="logo-mark">λ</span>
          <span className="logo-text">Shiva.ai</span>
        </motion.div>

        <nav className="navbar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

