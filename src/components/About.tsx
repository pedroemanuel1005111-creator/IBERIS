export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
            Conheça nosso espaço
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sobre a <span className="text-emerald-600">Iberis Chácara</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-100 rounded-3xl" />
            <img
              src="/images/garden.jpg"
              alt="Área verde da Iberis Chácara"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-700" style={{ fontFamily: "'Playfair Display', serif" }}>
                5.000m²
              </div>
              <div className="text-slate-500 text-sm">de pura natureza</div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              A <strong className="text-emerald-700">Iberis Chácara Eventos</strong> é o
              local perfeito para você realizar grandes eventos. Com{" "}
              <strong>5.000m²</strong> de área total, oferecemos um ambiente
              acolhedor e completo, cercado por natureza exuberante.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Nossa infraestrutura conta com piscina, galpão coberto com palco
              fixo e camarim, duas churrasqueiras, nove banheiros, amplo
              estacionamento e uma casa completa com três quartos, sendo uma
              suíte, sala e cozinha.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🏊", text: "Piscina" },
                { icon: "🎤", text: "Palco com Camarim" },
                { icon: "🔥", text: "02 Churrasqueiras" },
                { icon: "🚗", text: "Estacionamento" },
                { icon: "🏠", text: "Casa Completa" },
                { icon: "🚻", text: "09 Banheiros" },
                { icon: "🌿", text: "Área Verde" },
                { icon: "🏛️", text: "Galpão Coberto" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 p-5 bg-amber-50 rounded-2xl border border-amber-200">
              <div className="text-4xl">🕐</div>
              <div>
                <div className="font-bold text-slate-800 text-lg">
                  Funcionamento
                </div>
                <div className="text-slate-600">
                  Todos os dias • 9:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
