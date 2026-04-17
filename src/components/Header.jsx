export default function Header() {
  return (
    <header className="fixed w-full top-0 z-40 flex justify-between items-center p-6 bg-black border-b-2 border-green-500 shadow-lg">
      <h1 className="text-3xl font-bold text-yellow-400">Esaie</h1>
      <nav className="space-x-8">
        <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">À propos</a>
        <a href="#skills" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">Compétences</a>
        <a href="#projects" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">Projets</a>
        <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors font-semibold">Contact</a>
      </nav>
    </header>
  );
}
