const skills = [
  { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"] },
  { category: "Outils", items: ["Git", "GitHub", "Vite", "VS Code"] },
  { category: "Soft Skills", items: ["Communication", "Travail en équipe", "Résolution de problèmes", "Apprentissage continu"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center items-center text-yellow-400 mb-12 sm:text-5xl">
          Mes Compétences
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg border-2 border-green-500 hover:border-yellow-400 transition-all hover:transform hover:scale-105 sm:p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
