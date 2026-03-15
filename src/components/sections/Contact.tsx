import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'shiva@example.com',
    href: 'mailto:shiva@example.com',
  },
  {
    label: 'GitHub',
    value: '@your-github',
    href: 'https://github.com/your-github',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-profile',
    href: 'https://www.linkedin.com/in/your-profile',
  },
  {
    label: 'Portfolio',
    value: 'this website',
    href: '#hero',
  },
]

export const Contact: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading label="Contact" title="Let’s build the next AI system" />

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <p className="body-lg">
          Open to internships, research collaborations, and AI projects where I can design,
          implement, and iterate on intelligent systems that ship.
        </p>

        <div className="contact-cards">
          {CONTACT_ITEMS.map((item) => (
            <a key={item.label} className="contact-card" href={item.href} target="_blank" rel="noreferrer">
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

