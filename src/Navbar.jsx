import React, { useState, useEffect } from 'react'
import { Sun, Moon, Mail, Phone, Linkedin, Github } from 'lucide-react'

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-8 border-b border-gray-300 dark:border-gray-700 pb-2">{title}</h2>
    <div className="prose dark:prose-invert max-w-none">{children}</div>
  </section>
)

export default function App(){
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-6 font-semibold">
            <a href="#about" className="hover:text-[var(--accent)]">About</a>
            <a href="#skills" className="hover:text-[var(--accent)]">Skills</a>
            <a href="#certificates" className="hover:text-[var(--accent)]">Certificates</a>
            <a href="#projects" className="hover:text-[var(--accent)]">Projects</a>
            <a href="#experience" className="hover:text-[var(--accent)]">Experience</a>
            <a href="#contact" className="hover:text-[var(--accent)]">Contact</a>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(d => !d)}
            className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition"
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow transition ${dark ? 'translate-x-6' : 'translate-x-1'}`}
            >
              {dark ? <Moon size={14} className="mx-auto mt-0.5" /> : <Sun size={14} className="mx-auto mt-0.5" />}
            </span>
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        <Section id="about" title="About">
          <p>Benim hakkımda kısa bir tanıtım yazısı. Profesyonel kimliğimi ve hedeflerimi öne çıkaran birkaç cümle.</p>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <li className="p-3 rounded bg-white dark:bg-gray-800 shadow">React</li>
            <li className="p-3 rounded bg-white dark:bg-gray-800 shadow">TailwindCSS</li>
            <li className="p-3 rounded bg-white dark:bg-gray-800 shadow">JavaScript</li>
            <li className="p-3 rounded bg-white dark:bg-gray-800 shadow">TypeScript</li>
          </ul>
        </Section>

        <Section id="certificates" title="Certificates">
          <ul className="list-disc pl-6">
            <li>Frontend Developer Certificate - Example</li>
            <li>React Specialist - Example</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid sm:grid-cols-2 gap-6">
            <article className="p-4 border rounded-lg bg-white dark:bg-gray-800">
              <h4 className="font-semibold">Project One</h4>
              <p className="text-sm">Açıklama: React, Tailwind</p>
              <a className="text-sm underline" href="#">Repository</a>
            </article>
            <article className="p-4 border rounded-lg bg-white dark:bg-gray-800">
              <h4 className="font-semibold">Project Two</h4>
              <p className="text-sm">Açıklama: Next.js, API</p>
              <a className="text-sm underline" href="#">Live Demo</a>
            </article>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-4">
            <div>
              <strong>Intern — Company</strong>
              <div className="text-sm text-gray-600 dark:text-gray-400">Jun 2024 - Present</div>
              <p>Yaptığım işler, sorumluluklar ve başarılar.</p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3"><Phone size={18}/> <span>+90 555 555 55 55</span></div>
            <div className="flex items-center gap-3"><Mail size={18}/> <span>youremail@example.com</span></div>
            <div className="flex items-center gap-3"><Linkedin size={18}/> <a href="#" className="underline">LinkedIn</a></div>
            <div className="flex items-center gap-3"><Github size={18}/> <a href="#" className="underline">GitHub</a></div>
          </div>
        </Section>

        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ad Soyad — CV Portfolio
        </footer>
      </main>
    </div>
  )
}
