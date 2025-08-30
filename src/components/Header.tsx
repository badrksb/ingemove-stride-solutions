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
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-brand transition-transform group-hover:scale-105">
              IM
            </div>
            <div className="leading-tight">
              <p className="font-bold text-xl text-text-primary">IngeMove</p>
              <p className="text-sm text-text-muted">Ingénierie & Mobilité</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vtc" className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors">
              VTC Premium
            </a>
            <a href="#engineering" className="text-text-secondary font-medium animated-underline hover:text-primary transition-colors">
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