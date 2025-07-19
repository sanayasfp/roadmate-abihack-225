export function Hero() {
  return (
    <section className="bg-slate-900 py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-700 bg-clip-text text-transparent">
          Apprends, construis, collabore avec Roadmate
        </h1>
        <p className="text-lg text-white mb-8">
          Une plateforme IA qui te guide avec des parcours personnalisés, des
          projets réels, et des binômes d’apprentissage en Afrique.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/start"
            className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
          >
            Commencer maintenant
          </a>
          <a
            href="#options"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Explorer les options
          </a>
        </div>
      </div>
    </section>
  );
}
