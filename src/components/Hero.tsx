export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <div>
        <p className="font-mono text-accent text-sm mb-6 tracking-widest">// hello, world</p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-none tracking-tight">
          Jingshi Liu
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light">
          Software Engineer — building things that matter.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="font-mono text-sm border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-black transition-all duration-200"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm border border-white/20 text-gray-400 px-6 py-3 hover:border-white/40 hover:text-white transition-all duration-200"
          >
            get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
