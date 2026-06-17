"use client";

import { useState } from "react";

const images = [
  { src: "/images/hero.jpg", alt: "Vista aérea da chácara", category: "Área Externa" },
  { src: "/images/pool.jpg", alt: "Piscina", category: "Piscina" },
  { src: "/images/pavilion.jpg", alt: "Galpão com palco", category: "Galpão" },
  { src: "/images/garden.jpg", alt: "Área verde", category: "Área Externa" },
  { src: "/images/house.jpg", alt: "Casa", category: "Casa" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
            Fotos do espaço
          </span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-slate-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossa <span className="text-emerald-600">Galeria</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full">
                  {image.category}
                </span>
                <p className="text-white font-medium mt-2">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors"
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
