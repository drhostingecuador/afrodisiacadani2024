import React, { useState } from 'react';
import { X } from 'lucide-react';

const FelicidadPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    "/fergie-gallery/1a3780e9-8161-420c-80bf-5fa76d09209d.jpeg",
    "/fergie-gallery/42b81520-0574-47a5-a698-c21738fecf29.jpeg",
    "/fergie-gallery/4961058922399730741.jpg",
    "/fergie-gallery/4961058922399730754.jpg",
    "/fergie-gallery/4961058922399730816.jpg",
    "/fergie-gallery/4967823199538187504.jpg",
    "/fergie-gallery/4972325076883672663.jpg",
    "/fergie-gallery/4972325076883672664.jpg",
    "/fergie-gallery/4972325076883672708.jpg",
    "/fergie-gallery/4974576876697357523.jpg",
    "/fergie-gallery/bf673fa5-cfe8-479e-899b-ee1e3583fab6.jpeg",
    "/fergie-gallery/ea4ecbb0-5eac-4e9f-b37a-5b17bcb61645.jpeg"
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/portada.png"
          alt="Fergie Banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest mb-4 animate-slideUp">FERGIE</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 md:py-24 px-6 text-center space-y-8 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-serif text-primary uppercase tracking-wide">
          Soy Fergie
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg md:text-xl">
          Fergie como te gusta una mujer completa, blanca y alta, dispuesta a complacerte.
        </p>

        {/* Content Grid: Services/Schedule and Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left Column: Services & Schedule stacked */}
          <div className="space-y-8 text-left">
            {/* Services */}
            <div className="p-8 border border-gray-100 dark:border-white/5 shadow-sm rounded-lg bg-gray-50 dark:bg-darkSurface transition-colors duration-300">
              <h3 className="text-2xl font-serif text-primary mb-6 border-b border-primary/20 pb-2">Mis Servicios</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Sexo Oral</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Vaginal</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Masaje erótico</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Ducha juntos</li>
              </ul>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic bg-white dark:bg-darkText/5 p-3 rounded border border-gray-100 dark:border-white/5">
                * Todo con protección por nuestra salud.
              </p>
            </div>

            {/* Schedule */}
            <div className="p-8 border border-gray-100 dark:border-white/5 shadow-sm rounded-lg bg-white dark:bg-darkSurface transition-colors duration-300">
              <h3 className="text-2xl font-serif text-primary mb-6 border-b border-gray-100 dark:border-white/5 pb-2">Horario de Atención</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Te atiendo en un lugar bonito en el centro, cómodo, seguro y privado.
              </p>
              <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg text-center border border-primary/10">
                <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Previa Cita</p>
                <p className="text-2xl font-serif text-primary">Contáctame</p>
              </div>
            </div>
          </div>

          {/* Right Column: Video Player */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif text-primary mb-8 uppercase tracking-widest lg:hidden">Mi Video</h3>
            <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
              {/* Speaker/Notch */}
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
              {/* Frame buttons */}
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              
              {/* Screen */}
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black">
                <video
                  src="/videofer.MOV"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Gallery */}
      <section id="gallery" className="bg-white dark:bg-darkBg py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-primary text-center mb-12 uppercase">
            Galeria de Fergie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="aspect-[3/4] overflow-hidden rounded-md shadow-sm hover:opacity-90 transition cursor-pointer group dark:bg-darkSurface border border-transparent dark:border-white/5"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Fergie ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:opacity-80 group-hover:dark:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Call to Action */}
      <section className="bg-primary dark:bg-darkSurface text-white py-16 text-center border-t border-transparent dark:border-white/5 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 drop-shadow-sm">¿Te gustaría una cita con Fergie?</h2>
          <p className="mb-8 opacity-90 dark:text-gray-300">Contáctanos para agendar un encuentro exclusivo.</p>
          
          <a
            href="https://wa.me/593993830831"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#d946ef] hover:bg-[#c026d3] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendate conmigo
          </a>
        </div>
      </section>
    </div>
  );
};

export default FelicidadPage;
