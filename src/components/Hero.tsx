import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const features = [
    "Excellence en ingénierie industrielle",
    "Services VTC premium 24/7",
    "Couverture nationale France"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-surface via-surface-elevated to-surface">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Content */}
        <div className="fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Disponible 24/7
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">Ingénierie d'Excellence</span>
            <br />
            <span className="text-text-primary">& Mobilité Professionnelle</span>
          </h1>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
            IngeMove combine expertise en ingénierie industrielle et services de transport premium pour accompagner vos projets et déplacements avec excellence.
          </p>

          {/* Rotating features */}
          <div className="mb-8 h-8 overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 2}rem)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="h-8 flex items-center text-lg font-medium text-primary">
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#vtc" className="btn-secondary inline-flex items-center justify-center gap-2">
              <span>Réserver un VTC</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#engineering" className="btn-outline inline-flex items-center justify-center gap-2">
              <span>Nos expertises</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-8 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Certifié ISO 9001</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>+500 missions réalisées</span>
            </div>
          </div>
        </div>

        {/* Enhanced Vehicle Showcase */}
        <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative p-8">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-surface rounded-3xl shadow-xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-surface rounded-3xl shadow-lg transform -rotate-1"></div>
            
            {/* Main content */}
            <div className="relative bg-surface rounded-3xl p-8 shadow-xl border border-border/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Notre Flotte Premium</h3>
                <p className="text-text-muted">Véhicules récents et entretenus</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Mercedes Classe E', category: 'Berline Executive', badge: 'Premium', color: 'bg-primary' },
                  { name: 'BMW Série 5', category: 'Business', badge: 'Confort', color: 'bg-secondary' },
                  { name: 'Tesla Model S', category: 'Électrique', badge: 'Éco', color: 'bg-accent' },
                  { name: 'Mercedes Vito', category: 'Van 8 places', badge: 'Groupe', color: 'bg-primary' }
                ].map((vehicle, index) => (
                  <div 
                    key={vehicle.name} 
                    className="card-hover bg-surface-elevated rounded-2xl p-4 border border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-8 h-8 ${vehicle.color} rounded-lg mb-3 shadow-sm`}></div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">{vehicle.name}</h4>
                    <p className="text-xs text-text-muted mb-2">{vehicle.category}</p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {vehicle.badge}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a href="#vtc" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light transition-colors">
                  Voir toute la flotte
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;