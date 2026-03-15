import type { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  label: string
  title: ReactNode
}

export const SectionHeading: FC<SectionHeadingProps> = ({ label, title }) => {
  return (
    <div className="section-heading">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}

