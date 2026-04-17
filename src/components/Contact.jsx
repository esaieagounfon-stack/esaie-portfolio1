export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-yellow-400 sm:text-5xl">Me Contacter</h2>
        <p className="text-gray-400 mb-12 text-center text-base sm:text-lg">Vous avez un projet en tête ? Contactez-moi !</p>
        <form className="space-y-6 bg-gray-800 p-8 rounded-lg border-2 border-green-500 sm:p-10">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-500 border-2 border-green-500 focus:border-yellow-400 focus:outline-none transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-500 border-2 border-green-500 focus:border-yellow-400 focus:outline-none transition-colors"
            required
          />
          <textarea
            placeholder="Votre message"
            className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-500 border-2 border-green-500 focus:border-yellow-400 focus:outline-none transition-colors"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded text-lg transition-all transform hover:scale-105"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
