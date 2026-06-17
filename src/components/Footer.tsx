export default function Footer() {
  const whatsappNumber = "5582998205222";
  const whatsappMsg = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a Iberis Chácara Eventos."
  );

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-xl">
                🌿
              </div>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Iberis Chácara
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              O local perfeito para você fazer grandes eventos. 5.000m² de
              natureza e infraestrutura completa.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-sm font-semibold transition-colors"
            >
              💬 Fale pelo WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#estrutura", label: "Estrutura" },
                { href: "#galeria", label: "Galeria" },
                { href: "#reservas", label: "Reservas" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-emerald-500">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+5582998205222" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  (82) 99820-5222
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🕐</span>
                <span className="text-slate-400">Todos os dias • 9:00 - 18:00</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <a
                  href="https://www.google.com/maps/place/Iberis+Ch%C3%A1cara+Eventos/@-9.484712,-35.8152072,15.48z/data=!4m15!1m8!3m7!1s0x70137e427c73909:0x97cff6bd62e283d7!2sIberis+Ch%C3%A1cara+Eventos!8m2!3d-9.4825887!4d-35.8133239!10e5!16s%2Fg%2F11fct1qq6d!3m5!1s0x70137e427c73909:0x97cff6bd62e283d7!8m2!3d-9.4825887!4d-35.8133239!16s%2Fg%2F11fct1qq6d?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Ver localização no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Iberis Chácara Eventos. Todos os direitos
            reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}
