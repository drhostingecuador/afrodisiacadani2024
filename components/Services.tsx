import React from 'react';
import { Heart, Smile, Sparkles } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc?: string; icon?: React.ReactNode; image?: string }> = ({ title, desc, icon, image }) => {
  if (image) {
    // Card with background image and overlay
    return (
      <div className="relative bg-white dark:bg-darkSurface shadow-sm border border-gray-100 dark:border-white/5 h-full hover:shadow-md transition-shadow overflow-hidden group">
        {/* Background Image */}
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover dark:opacity-80" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col items-center text-center justify-center h-full min-h-[200px]">
          <h3 className="text-white font-serif font-bold text-xl md:text-2xl uppercase tracking-wide drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  // Default card with icon
  return (
    <div className="bg-white dark:bg-darkSurface p-6 md:p-8 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col items-center text-center justify-center h-full hover:shadow-md transition-shadow">
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-primary font-serif font-bold text-lg mb-3 uppercase tracking-wide">
        {title}
      </h3>
      {desc && (
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic">
          {desc}
        </p>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-primary uppercase mb-2">SERVICIOS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Service Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard
            title="Penetración"
            image="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/d6717681-9a09-4d0a-029a-68e169662f00/public"
          />
          <ServiceCard
            title="Sexo Oral"
            image="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/8d0dba7a-d00b-48d5-e647-04042484ce00/public"
          />
          <ServiceCard
            title="Masaje relajante"
            image="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/b3a06774-4b2e-4232-d10a-c56d6385a600/public"
          />
        </div>

        {/* Right Side: Smartphone Stylized Video Player */}
        <div className="lg:col-span-12 xl:col-span-5 relative flex flex-col justify-center items-center py-8">
          <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 uppercase tracking-widest text-center">
            Contenido XXX
          </h3>
          {/* Smartphone Frame */}
          <div className="relative w-full max-w-[280px] md:max-w-[325px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-[6px] border-[#333] dark:border-[#111] group transition-transform duration-500 hover:scale-[1.02]">

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#111] dark:bg-[#111] rounded-b-2xl z-30 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#222]"></div>
              <div className="w-8 h-1 rounded-full bg-[#222]"></div>
            </div>

            {/* Internal Screen Container */}
            <div className="relative w-full overflow-hidden rounded-[2.2rem] bg-black" style={{ paddingTop: '210.8181818181818%' }}>
              <iframe
                src="https://customer-ei41x2d1k43y7dmw.cloudflarestream.com/efd8310002150e62ac992a0cf5f65ca5/iframe?poster=https%3A%2F%2Fcustomer-ei41x2d1k43y7dmw.cloudflarestream.com%2Fefd8310002150e62ac992a0cf5f65ca5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D15s%26height%3D600&startTime=15s&autoplay=true&muted=true&loop=true"
                className="absolute top-0 left-0 w-full h-full border-0 object-cover"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>

              {/* Watermark Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10">
                <img
                  src="/logo.png"
                  alt="Watermark"
                  className="w-32 md:w-40 grayscale invert brightness-200"
                />
              </div>
            </div>

            {/* Side Buttons (Simulated) */}
            <div className="absolute -right-2 top-24 w-1 h-12 bg-[#333] dark:bg-[#222] rounded-l-md"></div>
            <div className="absolute -left-2 top-20 w-1 h-8 bg-[#333] dark:bg-[#222] rounded-r-md"></div>
            <div className="absolute -left-2 top-32 w-1 h-8 bg-[#333] dark:bg-[#222] rounded-r-md"></div>
          </div>
        </div>
      </div>

      {/* Servicios Extras Section */}
      <div className="mt-16 text-center bg-gray-50 dark:bg-darkSurface py-12 px-6 rounded-xl border border-transparent dark:border-white/5 transition-colors duration-300">
        <h3 className="text-3xl font-serif text-primary uppercase mb-6 drop-shadow-sm">SERVICIOS EXTRAS</h3>
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-medium max-w-4xl mx-auto italic">
          MASAJE PROSTÁTICO, FETICHE DE PIES, CAMBIO DE ROLES, GARGANTA PROFUNDA, SOLO COMPAÑÍA, MASTURBACIÓN.
        </p>
      </div>
    </section>
  );
};

export default Services;