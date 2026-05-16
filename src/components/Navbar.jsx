import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Us', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-[#266038]' : 'text-white'
            }`}
          >
            Green<span className="font-light">vironment</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#4a9960] ${
                  scrolled ? 'text-[#1c4a2c]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            scrolled
              ? 'bg-[#266038] text-white hover:bg-[#1c4a2c]'
              : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
          }`}
        >
          Get Involved
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-5 transition-all duration-200 ${
                scrolled ? 'bg-[#1c4a2c]' : 'bg-white'
              } ${
                menuOpen && i === 0 ? 'rotate-45 translate-y-2' : ''
              } ${
                menuOpen && i === 1 ? 'opacity-0' : ''
              } ${
                menuOpen && i === 2 ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#d4eedd] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-[#1c4a2c] hover:text-[#4a9960] py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 text-center px-5 py-2 rounded-full bg-[#266038] text-white text-sm font-medium"
          >
            Get Involved
          </a>
        </div>
      )}
    </nav>
  )
}
