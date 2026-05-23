export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent text-sm mb-10 tracking-widest">// 04. contact</p>
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Let's talk.</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          I'm open to new opportunities, collaborations, or just a good technical conversation.
        </p>
        <a
          href="mailto:elvisjingshi@gmail.com"
          className="font-mono text-accent text-lg hover:underline block mb-10"
        >
          elvisjingshi@gmail.com
        </a>
        <div className="flex gap-6">
          <a
            href="https://github.com/jingshiliu"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-gray-500 hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/jingshiliu"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-gray-500 hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
