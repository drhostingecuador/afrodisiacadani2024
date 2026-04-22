import React from 'react';

interface FriendPromoProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onNavigate: () => void;
  reverse?: boolean;
}

const FriendPromo: React.FC<FriendPromoProps> = ({ title, description, image, buttonText, onNavigate, reverse }) => {
  return (
    <section className="py-16 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-primary font-bold uppercase tracking-tight">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic">
              {description}
            </p>
            <button
              onClick={onNavigate}
              className="bg-primary text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#5a2441] dark:hover:bg-primary/80 transition-all shadow-md active:scale-95"
            >
              {buttonText}
            </button>
          </div>

          {/* Illustration/Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full bg-[#fdecdb] dark:bg-darkSurface rounded-2xl p-8 overflow-hidden shadow-inner border border-transparent dark:border-white/5">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover rounded mix-blend-multiply dark:mix-blend-normal opacity-90 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FriendPromo;