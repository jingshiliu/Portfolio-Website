import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <p className="font-mono text-accent text-sm tracking-widest">// 03. experience</p>
        <a
          href="/resume.pdf"
          className="font-mono text-xs text-gray-500 hover:text-accent transition-colors border border-white/10 hover:border-accent/40 px-4 py-2"
        >
          resume ↓
        </a>
      </div>
      <div className="space-y-12">
        {experience.map((role, i) => (
          <div key={i} className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <p className="font-mono text-xs text-gray-500 pt-1">{role.period}</p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-white font-semibold mb-1">{role.title}</h3>
              <p className="text-accent font-mono text-sm mb-4">{role.company}</p>
              <ul className="space-y-2">
                {role.bullets.map((bullet, j) => (
                  <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-accent shrink-0 font-mono mt-0.5">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
