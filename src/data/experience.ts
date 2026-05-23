export interface Role {
  company: string
  title: string
  period: string
  bullets: string[]
}

export const experience: Role[] = [
  {
    company: 'Company Name',
    title: 'Software Engineer',
    period: '2024 – Present',
    bullets: [
      'Built and maintained scalable backend services handling high traffic loads.',
      'Collaborated with cross-functional teams to ship features on time.',
      'Improved system reliability by implementing comprehensive monitoring and alerting.',
    ],
  },
  {
    company: 'Previous Company',
    title: 'Software Engineer Intern',
    period: '2023 – 2024',
    bullets: [
      'Developed REST APIs consumed by web and mobile clients.',
      'Wrote unit and integration tests improving overall code coverage significantly.',
    ],
  },
]
