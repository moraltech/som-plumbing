
import React from 'react';

const ResidentialSection: React.FC = () => {
  const items = [
    { title: 'Home Rewiring', desc: 'Upgrading old systems to meet modern safety standards.', icon: '🏠' },
    { title: 'Emergency Plumbing', desc: '24/7 fix for leaks, bursts, and clogs.', icon: '🚿' },
    { title: 'Smart Home Setup', desc: 'Integration of thermostats, lighting, and security.', icon: '📱' },
    { title: 'HVAC Maintenance', desc: 'Keeping your home comfortable year-round.', icon: '🌡️' }
  ];

  return (
    <section id="residential" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Our Focus</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 font-montserrat leading-tight">Premium Residential Services</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in making your home safe, efficient, and comfortable. Our residential experts handle everything from minor repairs to major system upgrades.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513694490325-c4d7d0568be3?q=80&w=2070&auto=format&fit=crop" 
                alt="Residential home interior" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSection;
