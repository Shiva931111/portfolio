import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'

export const About: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading
        label="About"
        title="Designing and deploying intelligent systems end‑to‑end"
      />

      <div className="two-column">
        <motion.p
          className="body-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          I&apos;m Shiva, an AI/ML engineer and AIML student passionate about building systems that
          move beyond prototypes into real products. I focus on combining solid machine learning
          fundamentals with practical engineering to automate workflows and ship reliable AI
          experiences.
        </motion.p>

        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="about-card">
            <h3>Applied AI focus areas</h3>
            <ul>
              <li>AI automation for repetitive back‑office workflows</li>
              <li>Financial AI systems that understand invoices and cash flow</li>
              <li>Document AI pipelines for unstructured PDFs and scans</li>
              <li>Recommendation engines for products and content</li>
              <li>LLM applications with retrieval‑augmented generation (RAG)</li>
              <li>Production‑minded MLOps and observability</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>How I work</h3>
            <ul>
              <li>Start with the problem, then choose models and tools</li>
              <li>Design data pipelines that are observable and debuggable</li>
              <li>Prototype fast with Python, then harden for production</li>
              <li>Ship in tight feedback loops with realistic datasets</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

