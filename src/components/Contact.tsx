import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type: 'vtc',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Contactez nos équipes pour un devis personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Que ce soit pour une mission d'ingénierie ou un service VTC, nos équipes sont à votre écoute pour vous proposer une solution adaptée à vos besoins.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-surface rounded-2xl p-6 border border-border/50">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Téléphone</h4>
                <p className="text-primary font-medium">+33 6 12 34 56 78</p>
                <p className="text-sm text-text-muted">Disponible 24/7</p>
              </div>

              <div className="bg-surface rounded-2xl p-6 border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">E-mail</h4>
                <p className="text-primary font-medium">contact@ingemove.com</p>
                <p className="text-sm text-text-muted">Réponse sous 2h</p>
              </div>
            </div>

            {/* Services Quick Access */}
            <div className="space-y-4">
              <h4 className="font-semibold text-text-primary">Accès rapide</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+33612345678" 
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <span>📞</span>
                  Réservation VTC immédiate
                </a>
                <a 
                  href="mailto:contact@ingemove.com" 
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <span>💼</span>
                  Consultation ingénierie
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-surface rounded-2xl p-6 border border-border/50">
              <h4 className="font-semibold text-text-primary mb-4">Nos bureaux</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary">📍</span>
                  <div>
                    <p className="font-medium text-text-primary">Siège Social - Paris</p>
                    <p className="text-sm text-text-muted">15 Avenue des Champs-Élysées, 75008 Paris</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary">📍</span>
                  <div>
                    <p className="font-medium text-text-primary">Bureau Lyon</p>
                    <p className="text-sm text-text-muted">Part-Dieu Business Center, 69003 Lyon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface rounded-3xl p-8 shadow-xl border border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-elevated focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-elevated focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="vous@entreprise.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface-elevated focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Type de demande *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface-elevated focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                >
                  <option value="vtc">🚗 Réservation VTC</option>
                  <option value="engineering">⚙️ Mission d'ingénierie</option>
                  <option value="partenariat">🤝 Partenariat</option>
                  <option value="autre">💬 Autre demande</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface-elevated focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez votre projet, vos dates, vos besoins spécifiques..."
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
                <button type="submit" className="btn-primary w-full">
                  Envoyer la demande
                </button>
                
                <p className="text-xs text-text-muted text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par IngeMove concernant votre demande.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-primary rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Besoin d'une réponse immédiate ?</h3>
          <p className="text-lg opacity-90 mb-6">
            Notre équipe est disponible pour répondre à vos questions urgentes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+33612345678" 
              className="btn-outline bg-white text-primary hover:bg-surface-hover"
            >
              Appeler maintenant
            </a>
            <a 
              href="https://wa.me/33612345678" 
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;