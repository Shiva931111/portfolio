import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

const AREAS = [
  {
    title: 'Machine Learning',
    detail: 'Building predictive models and pipelines from raw data to reliable inference.',
  },
  {
    title: 'Deep Learning',
    detail: 'Neural architecture design, training loops, and model evaluation at scale.',
  },
  {
    title: 'AI Automation',
    detail: 'End-to-end workflows that replace manual processes with intelligent pipelines.',
  },
  {
    title: 'LLM Systems',
    detail: 'Prompt engineering, tool-use, and retrieval-augmented generation with LangChain.',
  },
  {
    title: 'Backend AI Systems',
    detail: 'FastAPI services, model serving, and async batch inference pipelines.',
  },
]

export const Experience: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading label="Learning Journey" title="Continuous growth in applied AI" />

      <div className="timeline">
        {AREAS.map((area, index) => (
          <motion.div
            key={area.title}
            className="timeline-item"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{area.title}</h3>
              <p>{area.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
