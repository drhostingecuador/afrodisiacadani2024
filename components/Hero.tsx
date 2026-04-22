import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="welcome" className="relative w-full">
      {/* Top Banner Image */}
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {/* 
           IMPORTANTE: Reemplaza './banner.jpg' con la ruta real de tu imagen subida.
           Si la imagen no carga, asegúrate de que el archivo 'banner.jpg' esté en la carpeta pública.
        */}
        <img
          src="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/590b55a5-9698-41ab-db8e-cce879ffcb00/public"
          alt="Banner Dani"
          className="w-full h-full object-cover object-center opacity-90"
          onError={(e) => {
            // Fallback en caso de que la imagen local no se encuentre
            (e.target as HTMLImageElement).src = "https://picsum.photos/id/64/1920/800";
          }}
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-white animate-in fade-in zoom-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-wider drop-shadow-md mb-2 animate-slideUp">
            Afrodisiaca Dani
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-widest uppercase drop-shadow-sm animate-slideUpDelay">
            Tu Escort Preferida
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold">
              Afrodisiaca Dani
            </h1>
            <h2 className="text-lg uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">
              WELCOME
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Hello, I am Afrodisiaca Dani, a pretty girl waiting to meet safe and solvent gentlemen, it does not matter if they are nationals or foreigners, everyone is welcome.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-4">
              Afrodisiaca Dani
              <br />
              Tu Escort Preferida
            </p>
            <div className="w-24 h-1 bg-primary rounded-full mt-4"></div>
          </div>

          {/* Right Side Image/Illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-xl bg-[#e6dcd3] dark:bg-darkSurface">
              <img
                src="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/c9f8f2c0-1757-4481-39a9-57ba2d636100/public"
                alt="Afrodisiaca Dani"
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80 dark:opacity-90"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;