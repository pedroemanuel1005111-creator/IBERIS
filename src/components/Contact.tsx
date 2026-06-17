"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const whatsappNumber = "5582998205222";
  const whatsappMsg = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a Iberis Chácara Eventos e verificar disponibilidade."
  );

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
            Fale conosco
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Entre em <span className="text-emerald-600">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Estamos aqui para ajudar
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Entre em contato conosco para tirar suas dúvidas, solicitar
                orçamentos ou agendar uma visita. Ficaremos felizes em ajudá-lo a
                planejar o seu evento perfeito!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div>
                  <div className="font-bold text-slate-800">WhatsApp</div>
                  <div className="text-green-600 font-medium">(82) 99820-5222</div>
                  <div className="text-xs text-slate-400 mt-1">Clique para conversar</div>
                </div>
              </a>

              <a
                href="tel:+5582998205222"
                className="flex items-center gap-5 p-5 bg-blue-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <div className="font-bold text-slate-800">Telefone</div>
                  <div className="text-blue-600 font-medium">(82) 99820-5222</div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                  🕐
                </div>
                <div>
                  <div className="font-bold text-slate-800">Horário de Funcionamento</div>
                  <div className="text-amber-600 font-medium">
                    Todos os dias • 9:00 - 18:00
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Iberis+Ch%C3%A1cara+Eventos/@-9.484712,-35.8152072,15.48z/data=!4m15!1m8!3m7!1s0x70137e427c73909:0x97cff6bd62e283d7!2sIberis+Ch%C3%A1cara+Eventos!8m2!3d-9.4825887!4d-35.8133239!10e5!16s%2Fg%2F11fct1qq6d!3m5!1s0x70137e427c73909:0x97cff6bd62e283d7!8m2!3d-9.4825887!4d-35.8133239!16s%2Fg%2F11fct1qq6d?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-rose-50 rounded-2xl border border-rose-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <div className="font-bold text-slate-800">Localização</div>
                  <div className="text-rose-600 font-medium">Ver no Google Maps</div>
                  <div className="text-xs text-slate-400 mt-1">Clique para abrir o mapa</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3
              className="text-xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Envie uma mensagem
            </h3>

            {status === "success" && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-xl mb-6 flex items-center gap-2">
                ✅ Mensagem enviada com sucesso! Responderemos em breve.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6">
                ❌ Erro ao enviar mensagem. Tente novamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="E-mail"
                />
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Telefone"
                />
              </div>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Assunto"
              />
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                placeholder="Sua mensagem..."
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-200 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5!2d-35.8133239!3d-9.4825887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70137e427c73909%3A0x97cff6bd62e283d7!2sIberis%20Ch%C3%A1cara%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Iberis Chácara Eventos"
          />
        </div>
      </div>
    </section>
  );
}
