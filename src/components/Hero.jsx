export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero_leaves.png"
          alt="Lush green leaves"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay — subtle, not gradient */}
        <div className="absolute inset-0 bg-[#0d2414]/50" />
      </div>

      {/* Headline — large display text like reference */}
      <div className="relative z-10 px-6 pb-28 pt-32 max-w-6xl mx-auto w-full">
        <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-4">
          Environmental Awareness Initiative
        </p>
        <h1 className="text-white text-6xl sm:text-8xl font-bold leading-none mb-6">
          Protect<br />Nature
        </h1>
        <p className="text-white/75 text-base sm:text-lg max-w-md leading-relaxed mb-8">
          Every tree, every river, every ecosystem matters. Together we
          can preserve the natural world for generations to come.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#how-it-works"
            className="px-6 py-3 rounded-full bg-[#266038] text-white text-sm font-medium hover:bg-[#1c4a2c] transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Join the Movement
          </a>
        </div>
      </div>

      {/* Torn-paper divider at bottom */}
      <div className="relative z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 fill-white block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,80 L0,40 Q30,60 60,42 Q90,24 120,48 Q150,72 180,50 Q210,28 240,52 Q270,76 300,54 Q330,32 360,56 Q390,80 420,58 Q450,36 480,60 Q510,80 540,62 Q570,44 600,66 Q630,80 660,64 Q690,48 720,70 Q750,80 780,62 Q810,44 840,68 Q870,80 900,60 Q930,40 960,64 Q990,80 1020,60 Q1050,40 1080,62 Q1110,80 1140,58 Q1170,36 1200,58 Q1230,80 1260,60 Q1290,40 1320,62 Q1350,80 1380,56 Q1410,32 1440,52 L1440,80 Z" />
        </svg>
      </div>
    </section>
  )
}
