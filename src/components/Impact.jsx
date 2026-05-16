const impacts = [
  {
    headline: 'Forests Are Disappearing',
    stat: '10M ha',
    detail: 'of forest lost every year globally — an area the size of Iceland.',
    color: 'bg-[#1c4a2c]',
  },
  {
    headline: 'Biodiversity at Risk',
    stat: '1M+',
    detail: 'species face extinction due to habitat destruction and climate change.',
    color: 'bg-[#266038]',
  },
  {
    headline: 'Carbon Absorption',
    stat: '2.6 Gt',
    detail: 'of CO₂ absorbed annually by healthy forests — nature\'s best carbon sink.',
    color: 'bg-[#317a47]',
  },
]

const reasons = [
  {
    title: 'Climate Regulation',
    body:
      'Forests absorb carbon dioxide and release oxygen, directly moderating the Earth\'s climate and reducing the impact of extreme weather events.',
  },
  {
    title: 'Clean Water Supply',
    body:
      'Watersheds and wetlands filter fresh water for billions of people. Protecting them is protecting drinking water for future generations.',
  },
  {
    title: 'Food Security',
    body:
      'Pollinators, healthy soil, and diverse ecosystems underpin global food production. Degraded nature means degraded food systems.',
  },
  {
    title: 'Human Well-being',
    body:
      'Access to green spaces reduces stress, improves mental health, and supports physical activity — nature is essential to human flourishing.',
  },
  {
    title: 'Economic Stability',
    body:
      'Agriculture, fisheries, and tourism depend on natural ecosystems. A healthy environment is a prerequisite for long-term economic growth.',
  },
  {
    title: 'Genetic Diversity',
    body:
      'Wild species contain genetic information invaluable for medicine, agriculture, and science — once lost, this knowledge cannot be recovered.',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-[#4a9960] text-sm font-semibold tracking-widest uppercase">
            Why It Matters
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0d2414] leading-tight">
            The State of Our Planet
          </h2>
          <p className="mt-4 text-[#4a6358] text-base leading-relaxed">
            The numbers are stark. But with awareness and action, every one of
            them can be reversed.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {impacts.map(({ headline, stat, detail, color }) => (
            <div
              key={headline}
              className={`${color} rounded-2xl p-8 text-white`}
            >
              <p className="text-3xl font-bold mb-1">{stat}</p>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                {headline}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-[#0d2414] mb-8">
            Six Reasons to Protect Nature
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ title, body }) => (
              <div
                key={title}
                className="border border-[#d4eedd] rounded-2xl p-6 hover:border-[#4a9960] transition-colors duration-200"
              >
                <div className="w-8 h-0.5 bg-[#4a9960] mb-4 rounded-full" />
                <h4 className="text-base font-semibold text-[#0d2414] mb-2">
                  {title}
                </h4>
                <p className="text-sm text-[#4a6358] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
