const Fleet = () => {
  return (
    <section id="fleet" className="max-w-6xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-bold">Notre Flotte Premium</h2>
        <p className="text-gray-600 mt-2">Véhicules récents, entretenus et adaptés à vos besoins.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Mercedes Classe E", spec: "Berline Executive • 1–3 passagers", img: "/images/fleet.webp" },
          { name: "BMW Série 5", spec: "Business • 1–3 passagers", img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=1200&q=80&auto=format&fit=crop" },
          { name: "Tesla Model S", spec: "Électrique • 1–3 passagers", img: "https://images.unsplash.com/photo-1511396275275-4ee008a8b100?w=1200&q=80&auto=format&fit=crop" },
          { name: "Mercedes Vito", spec: "Van 8 places • Groupes & événements", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&q=80&auto=format&fit=crop" },
        ].map((c) => (
          <article key={c.name} className="rounded-2xl border shadow-sm overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-600">{c.spec}</p>
              <a href="#contact" className="inline-block mt-3 text-sm font-semibold underline">Réserver</a>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#contact" className="px-6 py-3 rounded-lg border font-semibold hover:bg-black hover:text-white">
          Voir toute la flotte & obtenir un devis
        </a>
      </div>
    </section>
  );
};

export default Fleet;