export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  pipeline?: string
  github: ProjectLink
  live: ProjectLink
}

export type SkillCategoryId = 'ai' | 'tools' | 'frontend'

export interface SkillCategory {
  id: SkillCategoryId
  label: string
  skills: string[]
}

