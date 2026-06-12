import React, { useState } from 'react';
import { X } from 'lucide-react';

const FriendPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/thalia-hero.jpg"
          alt="Thalia Banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest mb-4 animate-slideUp">THALIA</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 md:py-24 px-6 text-center space-y-8 transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-serif text-primary uppercase tracking-wide">
          Soy Thalia VIP
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg md:text-xl">
          Será un placer conocerte en la intimidad, ¿solo si no eres tímido, o sí? No hay problema, yo te puedo quitar la timidez, es algo que me encanta hacer.
        </p>

        {/* Traits */}
        {/* Services & Schedule */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {/* Services */}
          <div className="p-8 border border-gray-100 dark:border-white/5 shadow-sm rounded-lg bg-gray-50 dark:bg-darkSurface transition-colors duration-300">
            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-primary/20 pb-2">Mis Servicios</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 font-medium">
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Sexo Oral</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Anal (Extra)</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Vaginal</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Masaje erótico</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Baile</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Ducha juntos</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Tríos</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic bg-white dark:bg-darkText/5 p-3 rounded border border-gray-100 dark:border-white/5">
              * Todo con protección por nuestra salud.
            </p>
          </div>

          {/* Schedule */}
          <div className="p-8 border border-gray-100 dark:border-white/5 shadow-sm rounded-lg bg-white dark:bg-darkSurface flex flex-col justify-center transition-colors duration-300">
            <h3 className="text-2xl font-serif text-primary mb-6 border-b border-gray-100 dark:border-white/5 pb-2">Horario de Atención</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Te atiendo en un lugar bonito en el centro, cómodo, seguro y privado. Voy a hoteles conocidos.
            </p>
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg text-center border border-primary/10">
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">De Lunes a Sábado</p>
              <p className="text-2xl font-serif text-primary">10:00 - 17:00 Horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="videos" className="bg-gray-50 dark:bg-darkSurface py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-primary text-center mb-12 uppercase">
            Videos de Thalia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {[
              "/thalia-videos/video1_new.mp4",
              "/thalia-videos/video2.mp4",
              "/thalia-videos/video200.MOV"
            ].map((videoSrc, idx) => (
              <div key={idx} className="relative w-full max-w-[280px]">
                {/* Smartphone Frame */}
                <div className="relative w-full bg-[#111] rounded-[2.5rem] p-2.5 shadow-2xl border-[4px] border-[#222] group hover:scale-[1.02] transition-transform duration-500">

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111] rounded-b-xl z-30 flex items-center justify-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#222]"></div>
                    <div className="w-6 h-0.5 rounded-full bg-[#222]"></div>
                  </div>

                  {/* Internal Screen Container */}
                  <div className="relative w-full overflow-hidden rounded-[1.8rem] bg-black" style={{ paddingTop: '177.77%' }}>
                    <video
                      src={videoSrc}
                      className="absolute top-0 left-0 w-full h-full border-0 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    ></video>

                    {/* Watermark Logo */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-500 z-10">
                      <img
                        src="/logo.png"
                        alt="Watermark"
                        className="w-24 grayscale invert brightness-200"
                      />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#222] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Gallery */}
      <section id="gallery" className="bg-white dark:bg-darkBg py-16 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-primary text-center mb-12 uppercase">
            Galería de Thalia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/0c7b30f4-8050-4da2-4186-942d126e7b00/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/cee2295a-92f1-4516-8b43-cec03e25cf00/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/66f10765-a3b1-401f-480c-a9b03ee3a000/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/5515285a-c7ab-40cc-bb94-44d1e952bb00/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/d907c904-e2e9-4b4a-7490-a27536ce3600/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/8f53f964-9482-441e-87e0-af1f348d6d00/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/14143e04-2d65-4bbc-9861-bad9822acb00/public",
              "https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/e1b827a6-92ec-493e-9e28-15267e72e200/public"
            ].map((src, idx) => (
              <div
                key={idx}
                className="aspect-[3/4] overflow-hidden rounded-md shadow-sm hover:opacity-90 transition cursor-pointer group dark:bg-darkSurface border border-transparent dark:border-white/5"
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Thalia ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:opacity-80 group-hover:dark:opacity-100" />
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
          <h2 className="text-2xl md:text-3xl font-serif mb-6 drop-shadow-sm">¿Te gustaría una cita con Thalia?</h2>
          <p className="mb-8 opacity-90 dark:text-gray-300">Contáctanos para agendar un encuentro exclusivo.</p>
          
          <a
            href="https://wa.me/593967952616"
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

export default FriendPage;