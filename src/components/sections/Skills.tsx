import type { FC, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiHtml5,
  SiCss,
  SiStreamlit,
} from 'react-icons/si'
import { FaBrain } from 'react-icons/fa6'
import { TbGridDots, TbSql } from 'react-icons/tb'
import { RiRobot2Line } from 'react-icons/ri'

interface SkillItem {
  name: string
  icon: ReactElement
}

interface SkillCategoryWithIcons {
  id: string
  label: string
  skills: SkillItem[]
}

const SKILL_CATEGORIES: SkillCategoryWithIcons[] = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
  },
  {
    id: 'ai',
    label: 'AI / ML',
    skills: [
      { name: 'Machine Learning', icon: <FaBrain /> },
      { name: 'Deep Learning', icon: <FaBrain /> },
      { name: 'Natural Language Processing', icon: <RiRobot2Line /> },
      { name: 'Recommendation Systems', icon: <TbGridDots /> },
      { name: 'RAG Systems', icon: <TbSql /> },
      { name: 'LLM Applications', icon: <RiRobot2Line /> },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    skills: [
      { name: 'LangChain', icon: <RiRobot2Line /> },
      { name: 'FAISS', icon: <TbSql /> },
      { name: 'Tesseract OCR', icon: <TbGridDots /> },
      { name: 'Streamlit', icon: <SiStreamlit /> },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Three.js', icon: <SiThreedotjs /> },
      { name: 'WebGL', icon: <TbGridDots /> },
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss /> },
    ],
  },
]

export const Skills: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading label="Skills" title="From research notebooks to production-ready UIs" />

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            className="skills-card"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <h3>{category.label}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill.name} className="skill-pill">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-label">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

