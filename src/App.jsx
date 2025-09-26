
import React, { useState, useEffect } from 'react'
import Photo from '../public/Vesikalık Visa.jpeg'

const Section = ({ id, title, children }) => (
  <section id={id} className="py-10">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
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
    <div className="min-h-screen transition-colors duration-300">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Photo} alt="profile" className="w-20 h-20 rounded-full object-cover ring-2 ring-offset-2 ring-gray-300 dark:ring-gray-700" />
          <div>
            <h1 className="text-xl font-bold">Celal Demirsoy</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Computer Engineering Student | AI & Software Development | Data Science & Web Technologies</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com/in/celal-demirsoy" className="text-sm underline">Linkedin</a>
          <a href="https://github.com/CelalDemirsoy" className="text-sm underline">GitHub</a>
          <button onClick={() => setDark(d => !d)} className="p-2 rounded bg-gray-200 dark:bg-gray-800">
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 bg-white/70 dark:bg-black/40 p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: celal.dmrsy@gmail.com</p>
            <p>Location: Istanbul,Turkiye</p>

            <h3 className="mt-6 font-semibold mb-2">Skills</h3>
            <ul className="list-disc ml-5">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>TypeScript (optional)</li>
              <li>HTML & CSS</li>
            </ul>

            <h3 className="mt-6 font-semibold mb-2">Certificates</h3>
            <ul className="list-disc ml-5">
              <li>Frontend Developer - Example</li>
              <li>React Specialist - Example</li>
            </ul>
          </aside>

          <section className="md:col-span-2 bg-white/70 dark:bg-black/40 p-6 rounded-xl shadow">
            <Section id="about" title="About">
              <p>Ben 20 yaşında... (buraya kendin ekle). Temiz, erişilebilir ve göze hoş gelen bir portföy sitesi örneğidir.</p>
            </Section>

            <Section id="projects" title="Projects">
              <div className="space-y-4">
                <article className="p-4 border rounded">
                  <h4 className="font-semibold">Project One</h4>
                  <p className="text-sm">Kısa açıklama — tech: React, Tailwind</p>
                  <a className="text-sm underline" href="#">Repository</a>
                </article>
                <article className="p-4 border rounded">
                  <h4 className="font-semibold">Project Two</h4>
                  <p className="text-sm">Kısa açıklama — tech: Next.js, API</p>
                  <a className="text-sm underline" href="#">Live</a>
                </article>
              </div>
            </Section>

            <Section id="experience" title="Experience">
              <div className="space-y-3">
                <div>
                  <strong>Intern — Company</strong>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Jun 2024 - Present</div>
                  <p>Yaptığım işler, sorumluluklar ve başarılar.</p>
                </div>
              </div>
            </Section>

            <Section id="contact" title="Contact">
              <p>İş veya projeler için: celal.dmrsy@gmail.com</p>
              <form className="mt-3 space-y-2">
                <input className="w-full p-2 border rounded" placeholder="İsim" />
                <input className="w-full p-2 border rounded" placeholder="Email" />
                <textarea className="w-full p-2 border rounded" placeholder="Mesaj" rows="4" />
                <button className="px-4 py-2 rounded bg-[var(--accent)] text-white">Gönder</button>
              </form>
            </Section>
          </section>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Celal Demirsoy —   Portfolio</footer>
      </main>
    </div>
  )
}



/* import React, { useState, useEffect } from 'react'
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
      {/* Navbar *}
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

          {/* Dark mode toggle *}
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
 */