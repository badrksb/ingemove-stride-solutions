const Stats = () => {
  return (
    <section id="why" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold">Pourquoi choisir IngeMove ?</h2>
          <p className="text-gray-600 mt-2">Des preuves concrètes de notre engagement.</p>
        </header>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🏆", value: "15+", label: "Années d'expérience" },
            { icon: "📊", value: "500+", label: "Projets réalisés" },
            { icon: "⭐", value: "98%", label: "Clients satisfaits" },
            { icon: "🌍", value: "France", label: "Couverture nationale" },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-xl bg-white shadow">
              <div className="text-5xl mb-3">{s.icon}</div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;