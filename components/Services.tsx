
import React from 'react';

const serviceList = [
  {
    title: 'Electrical Solutions',
    description: 'Master electricians handling wiring, panels, smart home integrations, and safety inspections.',
    icon: '⚡',
    features: ['Panel Upgrades', 'EV Charger Install', 'Rewiring', 'Lighting']
  },
  {
    title: 'Expert Pulibing',
    description: 'Complete water systems support. From drain cleaning to sophisticated leak detection.',
    icon: '💧',
    features: ['Water Heaters', 'Leak Detection', 'Pipe Repair', 'Remodeling']
  },
  {
    title: 'Advanced HVAC',
    description: 'Year-round climate control for residential and commercial environments.',
    icon: '❄️',
    features: ['System Install', 'Maintenance', 'Air Quality', 'Thermostats']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-montserrat">Premium Service Offerings</h3>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We combine decades of experience with modern technology to provide fast, efficient, and reliable home and commercial maintenance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2"
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {service.description}
            </p>
            <ul className="w-full space-y-3 mb-8">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="text-green-500 font-bold">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
            <button className="mt-auto text-blue-700 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Learn More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;