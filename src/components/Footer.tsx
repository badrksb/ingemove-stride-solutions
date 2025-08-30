const Footer = () => {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Enhanced Footer Logo matching the brand */}
              <div className="flex items-center">
                <div className="text-2xl font-bold">
                  <span className="text-white">Inge</span>
                  <span className="text-secondary">Move</span>
                </div>
                <div className="ml-1 text-secondary">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 7l5 5m0 0l-5 5m5-5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="ml-2">
                <p className="text-gray-300 text-sm">Ingénierie & Mobilité</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Votre partenaire de confiance pour l'excellence en ingénierie industrielle et les services de transport premium en France.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                <span>📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                <span>📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
                <span>💼</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#vtc" className="text-gray-300 hover:text-secondary transition-colors">
                  VTC Premium
                </a>
              </li>
              <li>
                <a href="#vtc" className="text-gray-300 hover:text-secondary transition-colors">
                  Chauffeur privé
                </a>
              </li>
              <li>
                <a href="#engineering" className="text-gray-300 hover:text-secondary transition-colors">
                  Consulting Qualité
                </a>
              </li>
              <li>
                <a href="#engineering" className="text-gray-300 hover:text-secondary transition-colors">
                  Lean Manufacturing
                </a>
              </li>
              <li>
                <a href="#engineering" className="text-gray-300 hover:text-secondary transition-colors">
                  Gestion de projet
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-secondary">📞</span>
                <div>
                  <p className="text-white font-medium">+33 6 12 34 56 78</p>
                  <p className="text-gray-400 text-sm">Disponible 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">✉️</span>
                <div>
                  <p className="text-white font-medium">contact@ingemove.com</p>
                  <p className="text-gray-400 text-sm">Réponse sous 2h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary">📍</span>
                <div>
                  <p className="text-white font-medium">Paris & Lyon</p>
                  <p className="text-gray-400 text-sm">Couverture nationale</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} IngeMove. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;