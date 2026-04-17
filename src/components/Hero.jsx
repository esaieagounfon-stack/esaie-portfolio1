export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
        {/* Texte */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            Bonjour, je suis Esaie AGOUNFON
          </h1>
          <p className="text-xl text-green-400 mb-6">
            Développeur Web Full Stack passionné par la création d'expériences web innovantes.
          </p>
         
          <a
            href="#projects"
            className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-green-500 hover:text-white transition-all transform hover:scale-105"
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
                className="w-80 h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
