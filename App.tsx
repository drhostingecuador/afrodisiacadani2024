import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Services from './components/Services';
import Gallery from './components/Gallery';
import FriendPromo from './components/FriendPromo';
import FriendPage from './components/FriendPage';
import FelicidadPage from './components/FelicidadPage';
import Footer from './components/Footer';
import AgeVerification from './components/AgeVerification';

export type Page = 'home' | 'friend' | 'felicidad';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDark, setIsDark] = useState(() => {
    // Default to dark mode as the "first option"
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Make dark mode the default
  });

  React.useEffect(() => {
    // Persist to localStorage and update document class
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? 'dark bg-darkBg text-darkText' : 'bg-secondary text-textDark'}`}>
      <AgeVerification />
      <Header onNavigate={navigateTo} isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Offerings />
            <Services />
            <Gallery />
            <FriendPromo 
              title="Les presento a mi amiga Felicidad"
              description="Felicidad es una chica preciosa con sus 1.40 cm de altura, se adapta a tu necesidad, manejable y delicada, dispuesta a complacerte."
              image="/felicidad.jpg"
              buttonText="Ver perfil de Felicidad"
              onNavigate={() => navigateTo('felicidad')} 
            />
            <FriendPromo 
              title="Les presento a mi amiga Thalia"
              description="Thalia es una linda señorita ecuatoriana dispuesta a cumplir tus fantasías. Educada, siempre atenta y con un buen trasero para hacerte vibrar, la vas a tener siempre en tu mente, porque querrás volverla a ver cuando tengas ganas."
              image="/thalia-promo.png"
              buttonText="Ver perfil de Thalia"
              onNavigate={() => navigateTo('friend')} 
              reverse={true}
            />
          </>
        ) : currentPage === 'friend' ? (
          <FriendPage />
        ) : (
          <FelicidadPage />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;