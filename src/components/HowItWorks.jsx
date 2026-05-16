const steps = [
  {
    number: '01',
    title: 'Assess the Land',
    description:
      'Our ecologists survey degraded areas to understand soil conditions, native species, and the most effective restoration strategies.',
  },
  {
    number: '02',
    title: 'Plant & Restore',
    description:
      'Volunteer teams and local communities plant native species, restore waterways, and remove invasive plants that disrupt ecosystems.',
  },
  {
    number: '03',
    title: 'Monitor Growth',
    description:
      'We use satellite imaging and on-ground monitoring to track the health and progress of restored habitats over time.',
  },
  {
    number: '04',
    title: 'Educate & Expand',
    description:
      'Knowledge gained from each project is shared through workshops, schools, and open-access research to amplify global impact.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#eef8f1]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-[#4a9960] text-sm font-semibold tracking-widest uppercase">
            Our Process
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0d2414] leading-tight">
            How We Restore Nature
          </h2>
          <p className="mt-4 text-[#4a6358] text-base leading-relaxed">
            A structured, science-driven approach ensures every project delivers
            lasting ecological benefit.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-7 border border-[#d4eedd] hover:shadow-md transition-shadow duration-200"
            >
              {/* Connector line (not last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-8 h-px bg-[#a3d4b0] translate-x-full z-10" />
              )}
              <span className="text-4xl font-bold text-[#d4eedd]">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-[#0d2414]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#4a6358] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
