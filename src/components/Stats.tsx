import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      value: '500+', 
      label: 'Missions réalisées', 
      description: 'Projets d\'ingénierie et courses VTC',
      icon: '📊'
    },
    { 
      value: '24/7', 
      label: 'Disponibilité', 
      description: 'Service client et réservations',
      icon: '🕒'
    },
    { 
      value: '98%', 
      label: 'Satisfaction client', 
      description: 'Basé sur nos évaluations',
      icon: '⭐'
    },
    { 
      value: '15+', 
      label: 'Années d\'expérience', 
      description: 'Dans l\'ingénierie industrielle',
      icon: '🏆'
    }
  ];

  const Counter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
    const [count, setCount] = useState('0');
    
    useEffect(() => {
      if (!inView) return;
      
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const suffix = value.replace(/[\d]/g, '');
      
      if (isNaN(numericValue)) {
        setCount(value);
        return;
      }
      
      let start = 0;
      const increment = numericValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue + suffix);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start) + suffix);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [inView, value, duration]);
    
    return <span>{count}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            IngeMove en quelques chiffres
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Notre expertise reconnue dans l'ingénierie et le transport premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center card-hover bg-surface rounded-2xl p-8 border border-border/50 fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter value={stat.value} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-text-muted text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;