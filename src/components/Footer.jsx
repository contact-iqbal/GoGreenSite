const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Us', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d2414] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-xl font-semibold tracking-tight">
              Green<span className="font-light">vironment</span>
            </p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Protecting ecosystems and inspiring action for a sustainable,
              flourishing planet.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission note */}
          <div className="max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Our Mission
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              We plant trees, restore habitats, and educate communities because
              a healthy planet is not optional — it is the foundation of all life.
            </p>
          </div>

        </div>

        {/* Divider + bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} GoGreen Initiative. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
