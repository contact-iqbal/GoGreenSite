import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Impact from './components/Impact'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Impact />
      <Contact />
      <Footer />
    </div>
  )
}
