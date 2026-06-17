"use client";

import { useState, useEffect } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    fetch("/api/reservations/dates")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setBookedDates(data);
      })
      .catch(() => {});
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar reserva");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        guestCount: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar reserva");
    }
  };

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isDateBooked = (dateStr: string) => bookedDates.includes(dateStr);

  const isDatePast = (dateStr: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(dateStr + "T12:00:00") < today;
  };

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectDate = (day: number) => {
    const dateStr = formatDate(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (!isDatePast(dateStr) && !isDateBooked(dateStr)) {
      setForm({ ...form, eventDate: dateStr });
    }
  };

  const eventTypes = [
    "Casamento",
    "Aniversário",
    "Confraternização",
    "Evento Corporativo",
    "Chá de Bebê",
    "Formatura",
    "Festa Infantil",
    "Outro",
  ];

  return (
    <section id="reservas" className="py-24 bg-emerald-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-emerald-300 font-semibold text-sm tracking-wider uppercase">
            Reserve seu evento
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Faça sua <span className="text-emerald-400">Reserva</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-emerald-200 max-w-2xl mx-auto">
            Escolha a data ideal e garanta o espaço para o seu evento especial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Calendar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((d) => (
                <div key={d} className="text-center text-sm font-medium text-emerald-300 py-2">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateStr = formatDate(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                const booked = isDateBooked(dateStr);
                const past = isDatePast(dateStr);
                const selected = form.eventDate === dateStr;

                return (
                  <button
                    key={day}
                    onClick={() => selectDate(day)}
                    disabled={past || booked}
                    className={`aspect-square rounded-xl text-sm font-medium transition-all duration-200 ${
                      selected
                        ? "bg-emerald-500 text-white shadow-lg scale-110"
                        : booked
                        ? "bg-red-500/20 text-red-300 cursor-not-allowed line-through"
                        : past
                        ? "text-white/20 cursor-not-allowed"
                        : "text-white hover:bg-white/10 hover:scale-105"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-6 mt-6 text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                Selecionado
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                Reservado
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                Disponível
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {status === "success" && (
              <div className="bg-emerald-400/20 border border-emerald-400/40 text-emerald-200 p-5 rounded-2xl flex items-start gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="font-bold text-emerald-100">Reserva enviada com sucesso!</p>
                  <p className="text-sm mt-1">Entraremos em contato em breve para confirmar. Obrigado!</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-400/20 border border-red-400/40 text-red-200 p-5 rounded-2xl">
                <p className="font-bold">❌ {errorMsg}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  placeholder="(82) 99820-5222"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Data do Evento *
                </label>
                <input
                  type="date"
                  required
                  value={form.eventDate}
                  onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Tipo de Evento *
                </label>
                <select
                  required
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                >
                  <option value="" className="text-slate-900">
                    Selecione o tipo
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="text-slate-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Nº de Convidados *
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  value={form.guestCount}
                  onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                  placeholder="Quantidade"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-emerald-200 mb-2">
                Mensagem (opcional)
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-none"
                placeholder="Descreva detalhes do seu evento..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-lg shadow-2xl shadow-emerald-900/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar Reserva"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
