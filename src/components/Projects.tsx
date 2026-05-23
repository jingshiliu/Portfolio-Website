import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent text-sm mb-10 tracking-widest">// 02. projects</p>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
