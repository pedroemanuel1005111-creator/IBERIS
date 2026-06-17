"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#estrutura", label: "Estrutura" },
    { href: "#galeria", label: "Galeria" },
    { href: "#reservas", label: "Reservas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#inicio"
            className="flex items-center gap-3"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${scrolled ? 'bg-emerald-600' : 'bg-white/20 backdrop-blur-sm'}`}>
              🌿
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                scrolled ? "text-emerald-800" : "text-white"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Iberis Chácara
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservas"
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200"
                  : "bg-white text-emerald-800 hover:bg-emerald-50"
              }`}
            >
              Reservar Agora
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-3 rounded-xl bg-emerald-600 text-white text-center font-semibold hover:bg-emerald-700 transition-colors"
            >
              Reservar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
