import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

const AREAS = [
  'Machine Learning',
  'Deep Learning',
  'AI Automation',
  'LLM Systems',
  'Backend AI systems',
]

export const Experience: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading label="Learning Journey" title="Continuous learning in applied AI" />

      <div className="timeline">
        {AREAS.map((area, index) => (
          <motion.div
            key={area}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{area}</h3>
              <p>
                Building depth through courses, hands‑on projects, and experimentation with real
                datasets and edge cases.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

