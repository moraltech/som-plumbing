
import React from 'react';
import { ServiceType } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceType) => void;
}

const serviceList = [
  {
    type: ServiceType.ELECTRICAL,
    title: 'Electrical Engineering',
    description: 'Complete wiring, panel upgrades, and smart home lighting solutions with expert precision.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    color: 'bg-blue-600',
    features: ['Panel Upgrades', 'Rewiring', 'EV Chargers', 'Inspections']
  },
  {
    type: ServiceType.PLUMBING,
    title: 'Plumbing Systems',
    description: 'Emergency leak repair, water heater installation, and advanced drainage solutions.',
    image: 'https://images.unsplash.com/photo-1504328332790-bb2cb80b72c3?q=80&w=800&auto=format&fit=crop',
    color: 'bg-orange-600',
    features: ['Leak Detection', 'Water Heaters', 'Pipe Repair', 'Drain Cleaning']
  },
  {
    type: ServiceType.HVAC,
    title: 'HVAC Solutions',
    description: 'High-efficiency heating and cooling maintenance for year-round comfort in your home.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop',
    color: 'bg-slate-900',
    features: ['AC Repair', 'Heating Fix', 'Air Quality', 'Maintenance']
  }
];

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-montserrat">Professional Service Categories</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From residential repairs to enterprise infrastructure, we provide the highest standard of technical care with certified experts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            onClick={() => onSelectService(service.type)}
            className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer active:scale-[0.98]"
          >
            {/* Image Header */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute top-4 left-4 ${service.color} text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                Certified Service
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 flex-grow">
              <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Competencies</p>
                <div className="grid grid-cols-2 gap-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <span className="text-orange-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="p-8 pt-0 mt-auto">
              <button 
                className="w-full py-4 rounded-2xl border-2 border-slate-50 font-black text-[10px] uppercase tracking-widest text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 shadow-sm"
              >
                Inquire About {service.title.split(' ')[0]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
