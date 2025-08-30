import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Directrice Qualité',
      company: 'AutoTech Industries',
      content: 'L\'accompagnement d\'IngeMove sur notre certification IATF 16949 a été remarquable. Leur expertise technique et leur approche pragmatique nous ont permis d\'obtenir la certification en 6 mois.',
      rating: 5,
      project: 'Certification IATF 16949'
    },
    {
      name: 'Pierre Dubois',
      role: 'CEO',
      company: 'Innovation Partners',
      content: 'Pour nos déplacements clients et événements, IngeMove assure un service VTC irréprochable. Ponctualité, professionnalisme et véhicules haut de gamme au rendez-vous.',
      rating: 5,
      project: 'Service VTC Entreprise'
    },
    {
      name: 'Marie Lefebvre',
      role: 'Responsable Production',
      company: 'MécaPrecision',
      content: 'Le projet d\'amélioration continue mené par IngeMove a permis de réduire nos non-conformités de 70% et d\'améliorer notre productivité de 25%. Résultats exceptionnels !',
      rating: 5,
      project: 'Lean Manufacturing'
    },
    {
      name: 'Jean-Claude Weber',
      role: 'Directeur Général',
      company: 'TechSolutions',
      content: 'Service VTC premium pour nos dirigeants et clients internationaux. IngeMove comprend nos enjeux business et s\'adapte parfaitement à nos besoins spécifiques.',
      rating: 5,
      project: 'VTC Executive'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-surface-elevated to-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>⭐</span>
            <span>Ils nous font confiance</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Témoignages clients
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Découvrez les retours de nos clients sur nos prestations
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 card-hover">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Quote */}
              <div className="flex-1">
                <div className="text-6xl text-primary/20 font-serif leading-none mb-4">"</div>
                <blockquote className="text-xl text-text-primary leading-relaxed mb-6">
                  {testimonials[currentTestimonial].content}
                </blockquote>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-text-secondary">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-primary font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Badge */}
              <div className="bg-surface-elevated rounded-2xl p-6 min-w-[250px]">
                <h4 className="font-semibold text-text-primary mb-2">Projet réalisé</h4>
                <p className="text-primary font-medium bg-primary/10 px-3 py-2 rounded-xl inline-block">
                  {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-border hover:bg-text-subtle'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { metric: '98%', label: 'Satisfaction client', icon: '😊' },
            { metric: '24h', label: 'Délai de réponse', icon: '⚡' },
            { metric: '100+', label: 'Entreprises clientes', icon: '🏢' },
            { metric: '15ans', label: 'D\'expérience', icon: '🏆' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.metric}</div>
              <div className="text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;