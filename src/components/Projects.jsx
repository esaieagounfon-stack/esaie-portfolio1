const projects = [
  { title: "Projet 1", description: "Calculatrice Fonctionelle avec du JavaScript", link: "https://hilarious-kataifi-30dc12.netlify.app/" },
  { title: "Projet 2", description: "Site pour les afro-events au Bénin.", link: "https://afro-event-59e182.netlify.app/" },
  { title: "Projet 3", description: "Portfolio", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 sm:text-5xl">Mes Projets</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg border-2 border-green-500 hover:border-yellow-400 shadow-lg hover:shadow-2xl hover:scale-105 transition-all sm:p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">{p.title}</h3>
              <p className="text-gray-300 mb-6">{p.description}</p>
              <a href={p.link} className="inline-block bg-green-500 hover:bg-yellow-400 text-black font-bold px-4 py-2 rounded transition-all">Voir plus</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
