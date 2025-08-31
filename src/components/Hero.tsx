const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/images/hero.webp)" }}
    >
      <div className="bg-black/50 py-28 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">IngeMove</h1>
        <p className="text-lg md:text-xl mb-8">
          Ingénierie d'excellence & Services VTC Premium en France
        </p>
        <div className="flex justify-center gap-4">
          <a href="#vtc" className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90">
            🚗 Réserver un VTC
          </a>
          <a href="#consulting" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
            💼 Contacter Ingénierie
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;