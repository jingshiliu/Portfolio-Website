import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-white/10 bg-card p-6 group hover:border-accent/40 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-white font-semibold text-lg group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-3 shrink-0 ml-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-accent transition-colors"
            >
              gh ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-gray-500 hover:text-accent transition-colors"
            >
              live ↗
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tech.map(t => (
          <span key={t} className="font-mono text-xs text-gray-600">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
