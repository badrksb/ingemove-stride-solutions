import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo matching the professional IngeMove design */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex items-center">
              {/* Logo with professional styling matching the brand */}
              <div className="text-2xl font-bold">
                <span className="text-primary">Inge</span>
                <span className="text-secondary">Move</span>
              </div>
              {/* Arrow element matching the logo design */}
              <div className="ml-1 text-secondary transform transition-transform group-hover:translate-x-1">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 7l5 5m0 0l-5 5m5-5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="leading-tight ml-2">
              <p className="text-sm text-text-muted font-medium">Ingénierie & Mobilité</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#vtc-services" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('vtc-services');
                if (element) {
                  const event = new CustomEvent('activateVTCTab');
                  window.dispatchEvent(event);
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }
              }}
              className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors"
            >
              VTC Premium
            </a>
            <a 
              href="#vtc-services" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('vtc-services');
                if (element) {
                  const event = new CustomEvent('activateEngineeringTab');
                  window.dispatchEvent(event);
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }
              }}
              className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors"
            >
              Ingénierie
            </a>
            <a href="#testimonials" className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors">
              Références
            </a>
            <a href="#contact" className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn-primary">
            Demander un devis
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;