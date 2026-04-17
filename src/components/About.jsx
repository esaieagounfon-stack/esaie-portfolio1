export default function About() {
  return (
    <section id="about" className="py-20 bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-400 sm:text-5xl">À propos de moi</h2>
        <div className="bg-gradient-to-r from-green-900 to-black p-8 rounded-lg border-2 border-green-500 sm:p-10">
          <p className="text-base text-gray-300 leading-relaxed mb-6 sm:text-lg">
            Je suis un développeur passionné par la création d'expériences web exceptionnelles. Spécialisé en React.js et Tailwind CSS, je m'efforce de créer des interfaces modernes, performantes et accessibles.
          </p>
          <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
            Mon objectif est de transformer des idées en solutions numériques concrètes, en utilisant les dernières technologies et en suivant les meilleures pratiques du développement web.
          </p>
        </div>
      </div>
    </section>
  );
}
