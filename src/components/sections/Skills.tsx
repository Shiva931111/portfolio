import type { FC, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../shared/SectionHeading'
import {
  SiPython, SiJavascript, SiMysql, SiJupyter,
  SiPandas, SiNumpy, SiScikitlearn, SiGit,
  SiC,
} from 'react-icons/si'
import { FaBrain, FaJava, FaChartBar, FaDatabase } from 'react-icons/fa'
import { TbChartDots, TbNetwork, TbCpu } from 'react-icons/tb'
import { RiRobot2Line } from 'react-icons/ri'

interface SkillItem {
  name: string
  icon: ReactElement
}

interface SkillCategory {
  id: string
  label: string
  accentColor: string
  skills: SkillItem[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    accentColor: 'rgba(232, 52, 92, 0.7)',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <TbCpu /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    accentColor: 'rgba(139, 92, 246, 0.7)',
    skills: [
      { name: 'Regression', icon: <TbChartDots /> },
      { name: 'Classification', icon: <FaBrain /> },
      { name: 'Clustering', icon: <TbChartDots /> },
      { name: 'Neural Networks', icon: <TbNetwork /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    ],
  },
  {
    id: 'data',
    label: 'Data Handling',
    accentColor: 'rgba(59, 130, 246, 0.7)',
    skills: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'EDA', icon: <FaChartBar /> },
      { name: 'Feature Engineering', icon: <RiRobot2Line /> },
    ],
  },
  {
    id: 'viz',
    label: 'Visualization',
    accentColor: 'rgba(232, 52, 92, 0.7)',
    skills: [
      { name: 'Matplotlib', icon: <TbChartDots /> },
      { name: 'Seaborn', icon: <FaChartBar /> },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    accentColor: 'rgba(59, 130, 246, 0.7)',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    id: 'cs',
    label: 'Core CS',
    accentColor: 'rgba(139, 92, 246, 0.7)',
    skills: [
      { name: 'DSA', icon: <TbNetwork /> },
      { name: 'OOP', icon: <TbCpu /> },
      { name: 'DBMS', icon: <FaDatabase /> },
      { name: 'Operating Systems', icon: <TbCpu /> },
      { name: 'Computer Networks', icon: <TbNetwork /> },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    accentColor: 'rgba(232, 52, 92, 0.7)',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Jupyter Notebook', icon: <SiJupyter /> },
    ],
  },
]

export const Skills: FC = () => {
  return (
    <section className="section-inner">
      <SectionHeading label="Skills" title="From research notebooks to production-ready systems" />

      <div className="skills-grid-v2">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            className="skills-card-v2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={{ borderColor: category.accentColor, transition: { duration: 0.2 } }}
          >
            <h3 className="skills-card-label">{category.label}</h3>
            <ul className="skills-pill-list">
              {category.skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="skill-pill"
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-label">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
