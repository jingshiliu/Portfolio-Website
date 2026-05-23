export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, TypeScript, and Tailwind CSS v4. Dark, minimal, terminal aesthetic.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/jingshiliu/portfolio-website',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'Short description of what this project does and the problem it solves.',
    tech: ['Node.js', 'PostgreSQL', 'Docker'],
    github: '#',
  },
  {
    title: 'Project Three',
    description: 'Short description of what this project does and the problem it solves.',
    tech: ['Python', 'FastAPI', 'Redis'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Four',
    description: 'Short description of what this project does and the problem it solves.',
    tech: ['Go', 'gRPC', 'Kubernetes'],
    github: '#',
  },
]
