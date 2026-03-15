import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'
import type { Project } from '../../types/portfolio'

const PROJECTS: Project[] = [
  {
    id: 'invoice-automation',
    title: 'AI Invoice Automation System',
    description: 'OCR-based pipeline that ingests raw invoices and automatically extracts structured data.',
    techStack: ['Python', 'Tesseract OCR', 'Computer Vision', 'Pandas', 'FastAPI'],
    pipeline: 'Upload → OCR → Entity extraction → Validation → Accounting dashboard',
    github: { label: 'View on GitHub', href: 'https://github.com/your-username/invoice-automation' },
    live: { label: 'View demo', href: 'https://your-demo-link.com/invoice-automation' },
  },
  {
    id: 'rag-qa',
    title: 'RAG Document Question Answering System',
    description:
      'Upload PDFs, embed them into a vector store, and query them with an LLM that retrieves grounded context.',
    techStack: ['Python', 'LangChain', 'FAISS', 'LLM', 'Streamlit'],
    pipeline: 'PDF upload → Chunk & embed → Vector search → LLM answer generation',
    github: { label: 'View on GitHub', href: 'https://github.com/your-username/rag-qa' },
    live: { label: 'Live app', href: 'https://your-demo-link.com/rag-qa' },
  },
  {
    id: 'recommender',
    title: 'Recommendation System',
    description:
      'ML-powered recommendation engine for products or content, designed to plug into modern web backends.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Batch inference'],
    pipeline: 'Data preprocessing → Feature engineering → Model training → Offline evaluation',
    github: { label: 'View on GitHub', href: 'https://github.com/your-username/recommender-system' },
    live: { label: 'Case study', href: 'https://your-demo-link.com/recommender' },
  },
  {
    id: 'finance-assistant',
    title: 'Finance AI Assistant',
    description:
      'Conversational assistant that can analyze invoices, expenses, and accounting exports to surface insights.',
    techStack: ['Python', 'LLM', 'RAG', 'Pandas', 'LangChain'],
    pipeline: 'Data ingestion → Normalization → Retrieval → LLM reasoning',
    github: { label: 'View on GitHub', href: 'https://github.com/your-username/finance-ai-assistant' },
    live: { label: 'Prototype', href: 'https://your-demo-link.com/finance-ai' },
  },
  {
    id: 'ai-portfolio-generator',
    title: 'AI Portfolio Generator',
    description:
      'LLM-powered tool that takes your projects and generates a complete, deployable portfolio website.',
    techStack: ['Python', 'LLM', 'LangChain', 'React', 'Tailwind CSS'],
    pipeline: 'Project intake → Content generation → Component layout → Deployable bundle',
    github: { label: 'View on GitHub', href: 'https://github.com/your-username/ai-portfolio-generator' },
    live: { label: 'Live generator', href: 'https://your-demo-link.com/ai-portfolio' },
  },
]

export const Projects: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading
        label="Projects"
        title="Selected work across automation, RAG, and financial AI"
      />

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
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
              <a href={project.github.href} target="_blank" rel="noreferrer">
                {project.github.label}
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

