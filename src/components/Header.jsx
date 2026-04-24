import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black border-b-2 border-green-500 shadow-lg">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-1xl font-bold text-yellow-400 md:text-3xl">Esaie AG</h1>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-green-500 text-green-400 hover:bg-green-500/10 transition-colors"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </span>
        </button>

        <nav className={`absolute inset-x-0 top-full z-30 rounded-b-3xl border-b border-green-500 bg-black/95 px-6 pb-6 pt-4 shadow-2xl backdrop-blur-lg transition-all duration-300 md:static md:block md:border-0 md:bg-transparent md:px-0 md:pb-0 md:pt-0 md:shadow-none ${menuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-end md:gap-8">
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
              À propos
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
              Compétences
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">
              Contact
            </a>
          </div>
         
        </nav>
      </div>
    </header>
  );
}
