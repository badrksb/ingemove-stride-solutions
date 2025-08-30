import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('vtc');

  const vtcServices = [
    {
      name: 'Mercedes Classe E',
      category: 'Berline Executive',
      passengers: '1-3',
      luggage: '3',
      features: ['Cuir', 'Climatisation', 'WiFi'],
      price: 'À partir de 1.2€/km',
      image: '🚗'
    },
    {
      name: 'BMW Série 5',
      category: 'Business Premium',
      passengers: '1-3',
      luggage: '3',
      features: ['Cuir', 'GPS', 'Eau minérale'],
      price: 'À partir de 1.4€/km',
      image: '🚙'
    },
    {
      name: 'Tesla Model S',
      category: 'Électrique Luxury',
      passengers: '1-4',
      luggage: '2',
      features: ['Autopilot', 'Écran tactile', 'Silence'],
      price: 'À partir de 1.6€/km',
      image: '⚡'
    },
    {
      name: 'Mercedes Vito',
      category: 'Van Groupe',
      passengers: '1-8',
      luggage: '8',
      features: ['Espace', 'Confort', 'Modularité'],
      price: 'À partir de 1.8€/km',
      image: '🚐'
    }
  ];

  const engineeringServices = [
    {
      title: 'Système de Management Qualité',
      description: 'ISO 9001, IATF 16949, audit et certification',
      icon: '🎯',
      deliverables: ['Audit complet', 'Plan d\'action', 'Accompagnement certification']
    },
    {
      title: 'AMDEC & Industrialisation',
      description: 'APQP, PPAP, validation process et produit',
      icon: '⚙️',
      deliverables: ['AMDEC Process/Produit', 'Plan de contrôle', 'Validation industrielle']
    },
    {
      title: 'Lean Manufacturing',
      description: 'Amélioration continue, 5S, résolution de problèmes',
      icon: '📈',
      deliverables: ['Cartographie VSM', 'Chantiers Kaizen', 'Formation équipes']
    },
    {
      title: 'Gestion de Projet PMO',
      description: 'Pilotage projets industriels, planification, risques',
      icon: '📊',
      deliverables: ['Planning projet', 'Suivi KPI', 'Reporting direction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Nos Expertises</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Deux métiers, une excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Découvrez nos services premium en transport VTC et consulting ingénierie
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface-elevated rounded-2xl p-2 inline-flex">
            <button
              onClick={() => setActiveTab('vtc')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'vtc'
                  ? 'bg-secondary text-white shadow-glow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              🚗 Services VTC Premium
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'engineering'
                  ? 'bg-primary text-white shadow-brand'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              ⚙️ Consulting Ingénierie
            </button>
          </div>
        </div>

        {/* VTC Services */}
        {activeTab === 'vtc' && (
          <div className="fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {vtcServices.map((service, index) => (
                <div 
                  key={service.name}
                  className="card-hover bg-surface-elevated rounded-2xl p-6 border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{service.image}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">{service.name}</h3>
                  <p className="text-secondary font-medium mb-4">{service.category}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Passagers:</span>
                      <span className="text-text-primary font-medium">{service.passengers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Bagages:</span>
                      <span className="text-text-primary font-medium">{service.luggage}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-text-muted mb-4">{service.price}</div>

                  <div className="flex gap-2">
                    <button className="btn-secondary flex-1 text-sm py-2">Réserver</button>
                    <button className="btn-outline text-sm py-2 px-4">Devis</button>
                  </div>
                </div>
              ))}
            </div>

            {/* VTC Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Chauffeurs Professionnels', desc: 'Formés, uniformes, discrets' },
                { title: 'Véhicules Premium', desc: 'Flotte récente, entretenue, assurée' },
                { title: 'Service 24/7', desc: 'Réservation et assistance continues' }
              ].map((benefit, index) => (
                <div key={benefit.title} className="text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">{benefit.title}</h4>
                  <p className="text-text-muted">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Services */}
        {activeTab === 'engineering' && (
          <div className="fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {engineeringServices.map((service, index) => (
                <div 
                  key={service.title}
                  className="card-hover bg-surface-elevated rounded-2xl p-8 border border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
                      <p className="text-text-secondary mb-4">{service.description}</p>
                      
                      <h4 className="font-semibold text-text-primary mb-2">Livrables clés:</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="text-sm text-text-muted flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Engineering CTA */}
            <div className="bg-gradient-primary rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Besoin d'un accompagnement sur mesure ?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Nos consultants seniors vous accompagnent sur vos projets industriels avec une approche pragmatique et des résultats mesurables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-outline bg-white text-primary hover:bg-surface-hover">
                  Planifier un échange
                </a>
                <a href="#contact" className="btn-secondary">
                  Recevoir notre plaquette
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;