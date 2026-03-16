import { lazy, Suspense } from 'react'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'

const Chatbot = lazy(() => import('./components/ai/Chatbot'))

function App() {
  return (
    <div className="app-root">
      
      <Navbar />

      {/* Hero: full viewport, outside main container */}
      <section id="hero">
        <Hero />
      </section>

      <main>
        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
