const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16">
      <header className="text-center mb-10">
        <h2 className="text-3xl font-bold">Nos Services</h2>
        <p className="text-gray-600 mt-2">Deux expertises, une exigence d'excellence.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* VTC */}
        <article id="vtc" className="rounded-2xl shadow p-6 border">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-5">
            <img src="/images/fleet.webp" alt="VTC Premium IngeMove" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">🚗 VTC Premium</h3>
          <p className="text-gray-600 mb-4">
            Chauffeur privé 24/7. Confort, discrétion et ponctualité, partout en France.
          </p>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li>• Flotte business & luxe (Mercedes, BMW, Tesla, Van)</li>
            <li>• Réservation simple, devis rapide</li>
            <li>• Entreprises & événements</li>
          </ul>
          <div className="flex items-center justify-between">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-black text-white font-semibold hover:opacity-90">
              Réserver un VTC
            </a>
            <span className="text-sm text-gray-500">Disponible 24/7 • Paiement sécurisé</span>
          </div>
        </article>

        {/* Ingénierie */}
        <article id="consulting" className="rounded-2xl shadow p-6 border">
          <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 mb-5">
            <img src="https://images.unsplash.com/photo-1581092795360-7f7b1d30df08?q=80&w=1200&auto=format&fit=crop" alt="Consulting Ingénierie" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">⚙️ Consulting Ingénierie</h3>
          <p className="text-gray-600 mb-4">15+ ans d'expérience industrielle. Résultats mesurables & conformité ISO.</p>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li>• Système de Management Qualité (ISO 9001, IATF)</li>
            <li>• Lean Manufacturing, AMDEC, industrialisation</li>
            <li>• PMO, KPIs, pilotage projet</li>
          </ul>
          <div className="flex items-center justify-between">
            <a href="#contact" className="px-5 py-3 rounded-lg border border-black font-semibold hover:bg-black hover:text-white">
              Contacter Ingénierie
            </a>
            <span className="text-sm text-gray-500">500+ projets • 98% satisfaction</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;