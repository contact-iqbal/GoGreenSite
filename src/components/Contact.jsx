import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <span className="text-[#4a9960] text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#0d2414] leading-tight">
              Ready to Make a Difference?
            </h2>
            <p className="mt-5 text-[#4a6358] text-base leading-relaxed">
              Whether you want to volunteer, partner with us, or simply learn
              more — we would love to hear from you. Together, every action
              counts.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: 'Email', value: 'help.rekakarya@gmail.com' },
                { label: 'Phone', value: '+1 234 567 890' },
                { label: 'Headquarters', value: 'Indonesia' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-[#4a9960] shrink-0 mt-1.5" />
                  <div>
                    <p className="text-xs text-[#4a6358] uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium text-[#0d2414] mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#eef8f1] rounded-2xl p-8 border border-[#d4eedd]">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 rounded-full bg-[#266038] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#0d2414]">Message Sent</p>
                <p className="text-sm text-[#4a6358] mt-2">
                  Thank you for reaching out. We will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-[#4a6358] uppercase tracking-wider mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full bg-white border border-[#d4eedd] rounded-xl px-4 py-3 text-sm text-[#0d2414] placeholder-[#a3d4b0] focus:outline-none focus:border-[#4a9960] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4a6358] uppercase tracking-wider mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full bg-white border border-[#d4eedd] rounded-xl px-4 py-3 text-sm text-[#0d2414] placeholder-[#a3d4b0] focus:outline-none focus:border-[#4a9960] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#4a6358] uppercase tracking-wider mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how you'd like to get involved…"
                    className="w-full bg-white border border-[#d4eedd] rounded-xl px-4 py-3 text-sm text-[#0d2414] placeholder-[#a3d4b0] focus:outline-none focus:border-[#4a9960] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#266038] text-white text-sm font-medium hover:bg-[#1c4a2c] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
