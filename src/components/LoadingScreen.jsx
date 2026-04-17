import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        {/* Animation de cercles concentriques */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-4 border-green-500 rounded-full animate-spin animation-reverse"></div>
          <div className="absolute inset-6 border-4 border-yellow-300 rounded-full animate-pulse"></div>
        </div>
        
        {/* Texte animé */}
        <h1 className="text-4xl font-bold text-yellow-400 mb-2 animate-pulse">
          Esaie Portfolio
        </h1>
        <p className="text-green-500 text-lg animate-bounce">
          Bienvenue...
        </p>
      </div>

      <style>{`
        @keyframes animation-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animation-reverse {
          animation: animation-reverse 2s linear infinite !important;
        }
      `}</style>
    </div>
  );
}
