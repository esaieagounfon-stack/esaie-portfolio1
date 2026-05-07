export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t-2 border-green-500">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-yellow-400">Esaie AGOUNFON</h2>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full border border-green-500 px-4 py-2 text-sm font-semibold text-green-300 hover:bg-green-500/10 transition-colors"
              >
                Retour en haut
                <span aria-hidden="true">↑</span>
              </a>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Développeur Web Full Stack. Je conçois des interfaces modernes et des applications fiables, du prototype à la mise en ligne.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-4 py-2 font-bold text-black hover:bg-green-500 hover:text-white transition-colors"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg border border-green-500 px-4 py-2 font-semibold text-gray-200 hover:bg-green-500/10 transition-colors"
              >
                Voir mes projets
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <h3 className="text-lg font-bold text-green-400">Navigation</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li><a className="hover:text-yellow-400 transition-colors" href="#about">À propos</a></li>
                <li><a className="hover:text-yellow-400 transition-colors" href="#skills">Compétences</a></li>
                <li><a className="hover:text-yellow-400 transition-colors" href="#projects">Projets</a></li>
                <li><a className="hover:text-yellow-400 transition-colors" href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-400">Contact</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>
                  <a className="hover:text-yellow-400 transition-colors" href="tel:+22955955285">
                    +229 55 95 52 85
                  </a>
                </li>
                <li>
                  <a className="hover:text-yellow-400 transition-colors" href="mailto:agounfon.esaie@gmail.com">
                    agounfon.esaie@gmail.com
                  </a>
                </li>
                <li className="text-gray-400">Bénin</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-400">Réseaux</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://github.com/esaieagounfon-stack"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-4 py-2 text-gray-200 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.41 3.01-.41 1.02 0 2.05.14 3.01.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.63-2.81 5.66-5.48 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
                </svg>
                GitHub
              </a>

              <a
                href="https://wa.me/22955955285"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-4 py-2 text-gray-200 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.89c0 2.09.55 4.13 1.6 5.94L0 24l6.33-1.66a11.9 11.9 0 0 0 5.71 1.46h.01c6.54 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.17-3.41-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.76.99 1-3.66-.23-.37a9.9 9.9 0 0 1-1.52-5.27C3.12 6.44 7.56 2 12.04 2c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.99c0 5.46-4.44 9.91-9.86 9.91Zm5.78-7.43c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.63-.53-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.14-1.52.26-.75.26-1.39.18-1.52-.08-.13-.29-.21-.61-.37Z"/>
                </svg>
                WhatsApp
              </a>

              <a
                href="https://www.facebook.com/togis.lawal.94"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-4 py-2 text-gray-200 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 5.9 4.39 10.8 10.12 11.85v-8.37H7.08V12.07h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.88v2.28h3.33l-.53 3.48h-2.8v8.37C19.61 22.87 24 17.96 24 12.07Z"/>
                </svg>
                Facebook
              </a>

              <a
                href="https://www.instagram.com/agounfonjesuskpego"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500 px-4 py-2 text-gray-200 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.75 6a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z"/>
                </svg>
                Instagram
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Disponible pour missions freelance, stages et collaborations.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-green-500/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-300">
            &copy; {year} Esaie AGOUNFON. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">
            Construit avec React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}