export default function Structure() {
  const features = [
    {
      icon: "🏊‍♂️",
      title: "Piscina",
      description:
        "Piscina ampla para diversão dos convidados, perfeita para festas e eventos ao ar livre.",
      image: "/images/pool.jpg",
    },
    {
      icon: "🏛️",
      title: "Galpão Coberto com Palco",
      description:
        "Galpão coberto espaçoso com palco fixo e camarim, ideal para shows, apresentações e cerimônias.",
      image: "/images/pavilion.jpg",
    },
    {
      icon: "🏠",
      title: "Casa Completa",
      description:
        "Casa com 03 quartos (01 suíte), sala e cozinha equipada para maior conforto dos organizadores.",
      image: "/images/house.jpg",
    },
  ];

  return (
    <section id="estrutura" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
            Infraestrutura completa
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossa <span className="text-emerald-600">Estrutura</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Tudo o que você precisa para realizar um evento inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl bg-white/20 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🔥", title: "02 Churrasqueiras", desc: "Para churrasco perfeito" },
            { icon: "🚻", title: "09 Banheiros", desc: "Conforto para todos" },
            { icon: "🚗", title: "Estacionamento", desc: "Amplo e seguro" },
            { icon: "🌳", title: "5.000m² de Área", desc: "Muito espaço verde" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
