import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Numéro WhatsApp (remplacez par votre numéro réel)
    const phoneNumber = "2290155955285"; // Votre numéro WhatsApp

    // Message formaté pour WhatsApp
    const whatsappMessage = `Bonjour Esaie !

Je m'appelle ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

Cordialement,
${formData.name}`;

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Ouvrir WhatsApp avec le message pré-rempli
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-black px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-yellow-400 sm:text-5xl">Me Contacter</h2>
        <p className="text-gray-400 mb-12 text-center text-base sm:text-lg">Vous avez un projet? Contactez-moi !</p>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg border-2 border-green-500 sm:p-10">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-500 border-2 border-green-500 focus:border-yellow-400 focus:outline-none transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-700 text-white placeholder-gray-500 border-2 border-green-500 focus:border-yellow-400 focus:outline-none transition-colors"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
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
