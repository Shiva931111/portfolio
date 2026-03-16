import type { FC } from 'react'
import { motion, type Variants } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export const About: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading
        label="About"
        title="AI / ML Developer focused on building intelligent systems"
      />

      <div className="two-column">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="body-lg">
            I build AI and machine learning systems that turn data into useful insights.
            My work focuses on predictive models, document AI, and intelligent automation.
          </p>

          <div className="about-meta">
            <span className="about-meta-tag">🤖 AI / ML Development</span>
            <span className="about-meta-tag">📊 Data & ML Pipelines</span>
            <span className="about-meta-tag">⚙️ Automation Systems</span>
          </div>
        </motion.div>

        <div className="about-grid">
          {[
            {
              title: 'Key Expertise',
              items: [
                'Machine Learning Models',
                'RAG & LLM Applications',
                'OCR Document Processing',
                'Recommendation Systems',
              ],
            },
            {
              title: 'Approach',
              items: [
                'Solve real-world problems with AI',
                'Clean and scalable Python code',
                'Experiment and iterate quickly',
                'Focus on measurable results',
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="about-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}