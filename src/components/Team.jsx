const members = [
  {
    name: 'Dr. Sarah Linden',
    role: 'Chief Ecologist',
    initials: 'SL',
  },
  {
    name: 'Marcus Osei',
    role: 'Reforestation Lead',
    initials: 'MO',
  },
  {
    name: 'Amara Singh',
    role: 'Community Director',
    initials: 'AS',
  },
  {
    name: 'Lena Hofer',
    role: 'Research Scientist',
    initials: 'LH',
  },
]

export default function Team() {
  return (
    <section className="py-24 bg-[#eef8f1]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-[#4a9960] text-sm font-semibold tracking-widest uppercase">
            Our People
          </span>
          <h2 className="mt-3 text-4xl font-bold text-[#0d2414] leading-tight">
            The Team Behind the Mission
          </h2>
          <p className="mt-4 text-[#4a6358] text-base leading-relaxed">
            Scientists, community organizers, and passionate advocates united by
            a common purpose — a thriving planet.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map(({ name, role, initials }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 border border-[#d4eedd] hover:shadow-md transition-shadow duration-200 text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-[#1c4a2c] flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-semibold">{initials}</span>
              </div>
              <p className="font-semibold text-[#0d2414] text-sm">{name}</p>
              <p className="text-xs text-[#4a9960] mt-1">{role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
