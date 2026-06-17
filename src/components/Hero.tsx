export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-in-up">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-emerald-300 text-sm font-medium mb-8 border border-white/20">
            ✨ O espaço perfeito para seus eventos
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Iberis Chácara
          <br />
          <span className="text-emerald-400">Eventos</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          5.000m² de pura natureza com toda a infraestrutura para
          realizar o evento dos seus sonhos
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#reservas"
            className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-lg font-semibold shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:scale-105 hover:shadow-emerald-900/50"
          >
            Faça sua Reserva
          </a>
          <a
            href="#sobre"
            className="px-10 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-lg font-semibold border border-white/30 transition-all duration-300 hover:scale-105"
          >
            Conheça o Espaço
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "5.000m²", label: "Área Total" },
            { value: "9", label: "Banheiros" },
            { value: "2", label: "Churrasqueiras" },
            { value: "7 dias", label: "Por Semana" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#sobre" className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors">
          <span className="text-xs mb-2">Role para baixo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
