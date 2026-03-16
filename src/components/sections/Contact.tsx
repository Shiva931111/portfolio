import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

const CONTACT_ITEMS = [
  {
    label: 'Phone',
    value: '+91 93114 55427',
    href: 'tel:+919311455427',
    icon: '📞',
  },
  {
    label: 'Email',
    value: 'golumshiva81@gmail.com',
    href: 'mailto:golumshiva81@gmail.com',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/Shiva931111',
    href: 'https://github.com/Shiva931111',
    icon: '💻',
  },
  
]

export const Contact: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading label="Contact" title="Let's build the next AI system together" />

      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className="contact-intro">
          <p className="body-lg">
            B.Tech CSE student (AI/ML) — open to internships, research collaborations,
            and entry-level AI/ML roles. Let's build intelligent, data-driven solutions that ship.
          </p>
          <motion.a
            href="mailto:golumshiva81@gmail.com"
            className="contact-cta-btn"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(232,52,92,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            Send me an email →
          </motion.a>
        </div>

        <div className="contact-cards">
          {CONTACT_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              className="contact-card"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.09, duration: 0.45 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <span className="contact-icon">{item.icon}</span>
              <div>
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
