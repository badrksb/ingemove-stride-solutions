// Founder photo is now served from public folder

const FounderExpertise = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-surface to-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>👨‍💼</span>
            <span>Notre Expertise</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Une expertise reconnue
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Dirigée par un expert en ingénierie avec plus de 15 ans d'expérience dans l'industrie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Photo */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl shadow-xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-secondary rounded-3xl shadow-lg transform -rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative bg-surface rounded-3xl p-8 shadow-xl border border-border/50">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  {/* Professional founder image */}
                  <img 
                    src="/founder-photo-real.png" 
                    alt="Fondateur & CEO IngeMove - Expert en Ingénierie" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 bg-surface-elevated rounded-xl p-4 border border-border/50">
                  <h3 className="text-xl font-bold text-text-primary mb-1">Fondateur & CEO</h3>
                  <p className="text-primary font-medium">Expert Ingénierie</p>
                  <div className="mt-3 text-sm text-text-muted">
                    <p>• Ingénieur diplômé</p>
                    <p>• 15+ ans d'expérience</p>
                    <p>• Certifié Lean Six Sigma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                Leadership & Innovation
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                Forte d'une expertise technique approfondie et d'une vision business pragmatique, notre équipe accompagne les industriels dans leurs projets de transformation et d'amélioration continue.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  metric: '100+',
                  label: 'Projets pilotés',
                  description: 'Missions d\'ingénierie réussies',
                  icon: '🎯'
                },
                {
                  metric: '50+',
                  label: 'Entreprises accompagnées',
                  description: 'Industries variées',
                  icon: '🏭'
                },
                {
                  metric: '15ans',
                  label: 'D\'expérience',
                  description: 'Expertise sectorielle',
                  icon: '⭐'
                },
                {
                  metric: '98%',
                  label: 'Satisfaction client',
                  description: 'Résultats mesurables',
                  icon: '📈'
                }
              ].map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-surface rounded-2xl p-6 border border-border/50 text-center card-hover"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-1">{achievement.metric}</div>
                  <div className="font-semibold text-text-primary mb-1">{achievement.label}</div>
                  <div className="text-sm text-text-muted">{achievement.description}</div>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="bg-surface rounded-2xl p-8 border border-border/50">
              <h4 className="text-xl font-bold text-text-primary mb-6">Nos Valeurs</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: 'Excellence', desc: 'Qualité irréprochable', icon: '🏆' },
                  { title: 'Innovation', desc: 'Solutions créatives', icon: '💡' },
                  { title: 'Proximité', desc: 'Accompagnement personnalisé', icon: '🤝' }
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <h5 className="font-semibold text-text-primary mb-1">{value.title}</h5>
                    <p className="text-sm text-text-muted">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                <span>Rencontrer l'équipe</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#vtc-services" className="btn-outline flex items-center justify-center gap-2">
                <span>Découvrir nos services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderExpertise;