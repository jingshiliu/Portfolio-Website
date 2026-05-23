const skills = [
  'TypeScript', 'React', 'Node.js', 'Python', 'Go',
  'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Git',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent text-sm mb-10 tracking-widest">// 01. about</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a software engineer who loves building clean, performant systems — from APIs to polished UIs.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I care deeply about developer experience, code quality, and shipping things that actually work. When I'm not writing code I'm probably reading about distributed systems or tinkering with side projects.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-gray-500 mb-4 tracking-widest uppercase">Stack</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span
                key={skill}
                className="font-mono text-xs text-accent border border-accent/30 px-3 py-1 bg-accent/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
