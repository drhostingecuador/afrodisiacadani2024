import React, { useState, useEffect } from 'react';

const AgeVerification: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage to see if user has already verified age
        const isVerified = localStorage.getItem('ageVerified');
        if (!isVerified) {
            setIsVisible(true);
        }
    }, []);

    const handleEnter = () => {
        localStorage.setItem('ageVerified', 'true');
        setIsVisible(false);
    };

    const handleExit = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
            <div className="max-w-md w-full bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">18+</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                    Contenido para Adultos
                </h2>

                <p className="text-gray-300 mb-8 leading-relaxed">
                    Este sitio web contiene material destinado exclusivamente a personas mayores de 18 años.
                    Al entrar, confirmas que tienes la edad legal requerida.
                </p>

                <div className="flex flex-col gap-4">
                    <button
                        onClick={handleEnter}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors uppercase tracking-wide"
                    >
                        Soy mayor de 18 años - Entrar
                    </button>

                    <button
                        onClick={handleExit}
                        className="w-full bg-transparent hover:bg-white/10 text-gray-400 font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerification;
