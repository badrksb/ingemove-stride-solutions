import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo matching the professional IngeMove design */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="flex items-center">
              {/* Logo with professional styling matching the brand */}
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-primary">Inge</span>
                <span className="text-secondary">Move</span>
              </div>
              {/* Arrow element matching the logo design */}
              <div className="ml-1 text-secondary transform transition-transform group-hover:translate-x-1">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 7l5 5m0 0l-5 5m5-5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="leading-tight ml-1 sm:ml-2 hidden sm:block">
              <p className="text-xs sm:text-sm text-text-muted font-medium">Ingénierie & Mobilité</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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
              className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors text-sm xl:text-base"
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
              className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors text-sm xl:text-base"
            >
              Ingénierie
            </a>
            <a href="#testimonials" className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors text-sm xl:text-base">
              Références
            </a>
            <a href="#contact" className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors text-sm xl:text-base">
              Contact
            </a>
          </nav>

          {/* Mobile menu button & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#contact" className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-2">
              <span className="hidden sm:inline">Demander un devis</span>
              <span className="sm:hidden">Devis</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-primary hover:bg-surface-elevated rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 pt-4">
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
                  setIsMobileMenuOpen(false);
                }}
                className="text-text-primary font-medium py-2 px-4 rounded-lg hover:bg-surface-elevated transition-colors"
              >
                🚗 VTC Premium
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
                  setIsMobileMenuOpen(false);
                }}
                className="text-text-primary font-medium py-2 px-4 rounded-lg hover:bg-surface-elevated transition-colors"
              >
                ⚙️ Ingénierie
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary font-medium py-2 px-4 rounded-lg hover:bg-surface-elevated transition-colors"
              >
                📋 Références
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary font-medium py-2 px-4 rounded-lg hover:bg-surface-elevated transition-colors"
              >
                📞 Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;