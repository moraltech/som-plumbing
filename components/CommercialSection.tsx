
import React from 'react';

const CommercialSection: React.FC = () => {
  const solutions = [
    { name: 'Industrial HVAC', desc: 'High-capacity cooling and heating systems.' },
    { name: 'Electrical Audits', desc: 'Efficiency and compliance testing for large facilities.' },
    { name: 'Commercial Plumbing', desc: 'Maintenance for offices, restaurants, and retail.' },
    { name: 'Preventative Plans', desc: 'Scheduled care to avoid costly business downtime.' }
  ];

  return (
    <section id="commercial" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm">Enterprise Level</h2>
            <h3 className="text-4xl font-extrabold font-montserrat leading-tight">Specialized Commercial Solutions</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Managing large-scale properties requires precision and reliability. HDC provides industrial-grade expertise for commercial operations of all sizes.
            </p>
            <div className="space-y-4 pt-4">
              {solutions.map((s, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <h4 className="font-bold text-white">{s.name}</h4>
                    <p className="text-sm text-slate-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Commercial high-rise building" 
              className="rounded-[2rem] shadow-2xl brightness-75"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-slate-900 font-extrabold text-3xl">500+</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Active Contracts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
