import React from 'react';

interface OfferingCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, subtitle, image }) => (
  <div className="relative group w-full max-w-md mx-auto">
    {/* Image Container */}
    <div className="w-full aspect-[3/4] rounded-t-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-darkSurface">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Floating Card */}
    <div className="relative -mt-10 mx-6 bg-white dark:bg-darkSurface rounded-xl shadow-lg p-6 text-center z-10 border border-transparent dark:border-white/5 transition-colors duration-300">
      <h3 className="text-xl font-serif text-primary font-bold uppercase mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm italic">
        {subtitle}
      </p>
    </div>
  </div>
);

const Offerings: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white/50 dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary">
            TE OFREZCO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <OfferingCard
            title="COMPAÑÍA"
            subtitle="Momentos individuales juntos."
            image="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/69949091-146b-4ede-5d1a-0a80d0d74700/public"
          />
          <OfferingCard
            title="FANTASÍA"
            subtitle="Haz tus sueños realidad."
            image="https://imagedelivery.net/WgyotPHiBAuJc-a7p1ngew/073a75a7-3164-41f9-1613-9b5d325a7100/public"
          />
        </div>
      </div>
    </section>
  );
};

export default Offerings;