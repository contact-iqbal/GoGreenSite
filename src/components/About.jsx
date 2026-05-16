export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <span className="text-[#4a9960] text-sm font-semibold tracking-widest uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 text-4xl font-bold text-[#0d2414] leading-tight">
              Dedicated to a<br />
              <span className="text-[#266038]">Greener Future</span>
            </h2>
            <p className="mt-5 text-[#4a6358] text-base leading-relaxed">
              GoGreen is an environmental organization committed to raising
              awareness about the critical importance of preserving our natural
              ecosystems. We work alongside communities, scientists, and
              policymakers to drive real, measurable change.
            </p>
            <p className="mt-4 text-[#4a6358] text-base leading-relaxed">
              Founded on the belief that every individual action matters, we
              channel collective energy into reforestation programs, conservation
              research, and education campaigns that span across continents.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: '12+', label: 'Years of Service' },
                { value: '40+', label: 'Countries Reached' },
                { value: '2M+', label: 'Trees Planted' },
                { value: '180K', label: 'Volunteers Worldwide' },
              ].map(({ value, label }) => (
                <div key={label} className="border-l-2 border-[#4a9960] pl-4">
                  <p className="text-2xl font-bold text-[#0d2414]">{value}</p>
                  <p className="text-sm text-[#4a6358] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="/seedling.png"
                alt="A young seedling growing from soil"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md px-6 py-4 border border-[#d4eedd]">
              <p className="text-2xl font-bold text-[#266038]">98%</p>
              <p className="text-sm text-[#4a6358] mt-0.5">
                Sapling survival rate
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
