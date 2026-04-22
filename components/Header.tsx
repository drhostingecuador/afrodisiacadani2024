import React, { useState } from 'react';
import { User, Menu, X, Sun, Moon } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isDark, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // We define nav items with an action. 
  // For simplicity, sections like 'SERVICES' just go to home for now, 
  // but 'MI AMIGA' switches the page.
  const handleScroll = (id: string) => {
    // If not on home page, first navigate to home then scroll
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'INICIO', action: () => onNavigate('home') },
    { name: 'SOBRE MI', action: () => handleScroll('about') },
    { name: 'SERVICIOS', action: () => handleScroll('services') },
    { name: 'GALERÍA', action: () => handleScroll('gallery') },
    { name: 'CONTACTO', action: () => handleScroll('contact') },
  ];

  const handleNavClick = (action: () => void) => {
    action();
  };

  return (
    <header className="bg-primary dark:bg-darkSurface text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <img
            src="/logo.png"
            alt="Afrodisiaca Dani"
            className="h-6 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-xs lg:text-sm font-serif font-bold tracking-[0.2em]">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={item.action}
              className="hover:text-gray-300 transition-colors uppercase"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Theme Toggle & User Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleTheme}
            className="hover:bg-white/10 p-2 rounded-full transition"
            title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="hidden md:block hover:bg-white/10 p-2 rounded-full transition">
            <User size={20} />
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
          <ul className="flex flex-col space-y-4 mt-4 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.action)}
                  className="block w-full py-2 text-sm font-serif font-bold tracking-[0.15em] hover:bg-white/10 uppercase"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;