import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/gallery/dani-1.jpg",
    "/gallery/dani-2.jpg",
    "/gallery/dani-3.jpg",
    "/gallery/dani-4.jpg",
    "/gallery/dani-5.jpg",
    "/gallery/dani-6.jpg",
    "/gallery/dani-7.jpg",
    "/gallery/dani-8.jpg",
    "/gallery/dani-9.jpg",
    "/gallery/dani-10.jpg",
    "/gallery/dani-11.jpg",
    "/gallery/dani-12.jpg",
    "/gallery/dani-13.jpg",
    "/gallery/dani-14.jpg",
    "/gallery/dani-15.jpg",
  ];

  return (
    <section id="gallery" className="py-12 px-6 max-w-7xl mx-auto transition-colors duration-300">
      <h2 className="text-3xl font-serif text-primary text-center mb-10 uppercase">
        Mi Galería
      </h2>

      {/* Grid Layout: Optimized for 5 images */}
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] aspect-[3/4] overflow-hidden rounded-md shadow-sm hover:opacity-90 transition cursor-pointer group bg-gray-100 dark:bg-darkSurface border border-transparent dark:border-white/5"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Galería ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:opacity-80 group-hover:dark:opacity-100"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;