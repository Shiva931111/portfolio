import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'
import type { Project } from '../../types/portfolio'

type FeaturedProject = Project & { icon: string; color: 'red' | 'blue' | 'purple' }

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'invoice-automation',
    title: 'AI Invoice Automation System',
    description:
      'AI system that extracts invoice data automatically using OCR and machine learning. Detects vendor, amount, and invoice information and stores it in a structured dashboard — eliminating manual data entry.',
    techStack: ['Python', 'Tesseract OCR', 'Computer Vision', 'Pandas', 'FastAPI'],
    pipeline: 'Upload → OCR → Entity Extraction → Validation → Dashboard',
    github: { label: 'GitHub', href: 'https://github.com/Shiva931111' },
    live: { label: 'View Demo', href: 'https://github.com/Shiva931111' },
    icon: '🧾',
    color: 'red',
  },
  {
    id: 'rag-qa',
    title: 'RAG PDF Question Answering',
    description:
      'LLM-based system that allows users to upload PDFs and ask questions. Uses embeddings and vector search to retrieve accurate, source-cited answers — no hallucinations, no guesswork.',
    techStack: ['Python', 'LangChain', 'FAISS', 'OpenAI', 'Streamlit'],
    pipeline: 'PDF Upload → Chunk & Embed → Vector Search → LLM Answer',
    github: { label: 'GitHub', href: 'https://github.com/Shiva931111' },
    live: { label: 'Live App', href: 'https://github.com/Shiva931111' },
    icon: '🔍',
    color: 'blue',
  },
  {
    id: 'recommender',
    title: 'Recommendation System',
    description:
      'Machine learning recommendation engine that analyzes user behavior and suggests relevant items such as movies or products using collaborative and content-based filtering techniques.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI'],
    pipeline: 'Data Preprocessing → Feature Engineering → Training → Inference API',
    github: { label: 'GitHub', href: 'https://github.com/Shiva931111' },
    live: { label: 'Case Study', href: 'https://github.com/Shiva931111' },
    icon: '🎯',
    color: 'purple',
  },
]

const OTHER_PROJECTS: (Project & { icon: string })[] = [
  {
    id: 'fraud-detection',
    title: 'Fraud Detection System',
    description:
      'ML classification model that detects fraudulent financial transactions using feature engineering, class imbalance handling, and rigorous model evaluation metrics (precision, recall, F1).',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Matplotlib'],
    pipeline: 'Data Ingestion → Feature Engineering → Model Training → Evaluation',
    github: { label: 'GitHub', href: 'https://github.com/Shiva931111' },
    live: { label: 'Details', href: 'https://github.com/Shiva931111' },
    icon: '🛡️',
  },
  {
    id: 'neural-network',
    title: 'Neural Network Prediction Model',
    description:
      'Multi-layer neural network implemented from scratch using forward propagation and backpropagation to improve prediction accuracy on structured datasets.',
    techStack: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    pipeline: 'Data Prep → Architecture Design → Training → Evaluation',
    github: { label: 'GitHub', href: 'https://github.com/Shiva931111' },
    live: { label: 'Notebook', href: 'https://github.com/Shiva931111' },
    icon: '🧠',
  },
]

const glowMap = {
  red: 'var(--glow-red)',
  blue: 'var(--glow-blue)',
  purple: 'var(--glow-purple)',
}

const borderMap = {
  red: 'rgba(232, 52, 92, 0.6)',
  blue: 'rgba(59, 130, 246, 0.6)',
  purple: 'rgba(139, 92, 246, 0.6)',
}

const gradientMap = {
  red: 'radial-gradient(circle at top left, rgba(232,52,92,0.13), transparent 60%), rgba(10,6,30,0.92)',
  blue: 'radial-gradient(circle at top right, rgba(59,130,246,0.13), transparent 60%), rgba(10,6,30,0.92)',
  purple: 'radial-gradient(circle at top left, rgba(139,92,246,0.13), transparent 60%), rgba(10,6,30,0.92)',
}

export const Projects: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading
        label="Projects"
        title="Real-world AI / ML systems built end-to-end"
      />

      {/* ── Featured 3 ── */}
      <div className="featured-projects-grid">
        {FEATURED_PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            className="featured-project-card"
            style={{ background: gradientMap[project.color] }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{
              y: -7,
              borderColor: borderMap[project.color],
              boxShadow: glowMap[project.color],
              transition: { duration: 0.22 },
            }}
          >
            <div className="featured-badge">
              <span className="featured-num">0{index + 1}</span>
              <span className="featured-label">Featured</span>
            </div>

            <div className="project-icon-wrap">{project.icon}</div>

            <div className="project-header">
              <h3>{project.title}</h3>
              {project.pipeline && <p className="project-pipeline">{project.pipeline}</p>}
            </div>

            <p className="project-description">{project.description}</p>

            <ul className="project-tech">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              <a href={project.github.href} target="_blank" rel="noreferrer" className="project-link-btn">
                {project.github.label} ↗
              </a>
              <a href={project.live.href} target="_blank" rel="noreferrer" className="project-link-accent">
                {project.live.label} →
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ── More projects ── */}
      <motion.h4
        className="other-projects-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        More Projects
      </motion.h4>

      <div className="projects-grid-secondary">
        {OTHER_PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.18 } }}
          >
            <div className="project-header">
              <h3>
                <span style={{ marginRight: '0.45rem' }}>{project.icon}</span>
                {project.title}
              </h3>
              {project.pipeline && <p className="project-pipeline">{project.pipeline}</p>}
            </div>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.github.href} target="_blank" rel="noreferrer">
                {project.github.label} ↗
              </a>
              <a href={project.live.href} target="_blank" rel="noreferrer" className="accent-link">
                {project.live.label}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
