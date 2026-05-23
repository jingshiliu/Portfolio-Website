import { useState, useEffect } from 'react'

const links = ['about', 'projects', 'experience', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent text-sm tracking-widest">
          jingshiliu<span className="animate-pulse">_</span>
        </a>
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="font-mono text-xs tracking-widest text-gray-400 hover:text-accent transition-colors uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
