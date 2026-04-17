export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-24 px-6">
      <div className="grid gap-12 items-center max-w-6xl mx-auto md:grid-cols-2">
        {/* Texte */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6 sm:text-5xl md:text-6xl">
            Bonjour, je suis Esaie AGOUNFON
          </h1>
          <p className="text-lg text-green-400 mb-6 sm:text-xl">
            Développeur Web Full Stack passionné par la création d'expériences web innovantes.
          </p>

          <a
            href="#projects"
            className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-green-500 hover:text-white transition-all transform hover:scale-105"
          >
            Découvrez mes projets
          </a>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Cadre décoratif */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-green-500 rounded-lg opacity-75 blur"></div>
            <div className="relative bg-black p-1 rounded-lg">
              <img
                src="/hero.png"
                alt="Photo de profil"
                className="w-64 h-64 rounded-lg object-cover shadow-2xl sm:w-72 sm:h-72 md:w-80 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
