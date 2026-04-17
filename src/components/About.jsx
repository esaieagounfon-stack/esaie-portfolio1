export default function About() {
  return (
    <section id="about" className="py-20 bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400 sm:text-5xl">À propos de moi</h2>
        <div className="bg-gradient-to-r from-green-900 to-black p-8 rounded-lg border-2 border-green-500 sm:p-10">
          <p className="text-base text-gray-300 leading-relaxed mb-6 sm:text-lg">
            Je suis un développeur Web passionné par le numérique et spécialisé dans la création de solutions digitales simples, efficaces et utiles.
          </p>
          <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
            Curieux, rigoureux et orienté résultats, je m’investis dans des projets qui allient technologie, créativité et impact. Mon objectif : créer, apprendre et apporter de la valeur à chaque collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
