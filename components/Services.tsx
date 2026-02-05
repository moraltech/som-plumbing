
import React from 'react';

const serviceList = [
  {
    title: 'Electrical Engineering',
    description: 'Complete wiring, panel upgrades, and smart home lighting solutions with expert precision.',
    icon: '⚡',
    color: 'bg-blue-50 text-blue-600',
    features: ['Panel Upgrades', 'Rewiring', 'EV Chargers', 'Inspections']
  },
  {
    title: 'Plumbing Systems',
    description: 'Emergency leak repair, water heater installation, and advanced drainage solutions.',
    icon: '💧',
    color: 'bg-orange-50 text-orange-600',
    features: ['Leak Detection', 'Water Heaters', 'Pipe Repair', 'Drain Cleaning']
  },
  {
    title: 'HVAC Solutions',
    description: 'High-efficiency heating and cooling maintenance for year-round comfort in your home.',
    icon: '❄️',
    color: 'bg-slate-100 text-slate-900',
    features: ['AC Repair', 'Heating Fix', 'Air Quality', 'Maintenance']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Full-Service Technical Solutions</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From residential repairs to enterprise infrastructure, we provide the highest standard of technical care.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            className="group p-8 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 bg-white"
          >
            <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <span className="text-orange-500">✓</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
