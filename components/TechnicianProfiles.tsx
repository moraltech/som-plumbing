
import React from 'react';
import { Technician, ServiceType } from '../types';

const technicians: Technician[] = [
  {
    id: 'tech-1',
    name: 'Ahmed Mohamed',
    role: 'Master Plumbing Specialist',
    expertise: [ServiceType.PLUMBING, ServiceType.EMERGENCY],
    certifications: ['Licensed Master Plumber', 'Advanced Leak Detection Certified'],
    bio: 'With over 15 years of experience, Ahmed specializes in complex hydraulic systems and emergency repairs.',
    rating: 4.9,
    reviews: 1240,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'tech-2',
    name: 'Sarah Chen',
    role: 'Senior Electrical Engineer',
    expertise: [ServiceType.ELECTRICAL],
    certifications: ['State Certified Electrician', 'Smart Home Integration Professional'],
    bio: 'Sarah is an expert in modernizing home electrical grids and high-efficiency smart home setups.',
    rating: 5.0,
    reviews: 856,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'tech-3',
    name: 'Marcus Miller',
    role: 'HVAC Solutions Director',
    expertise: [ServiceType.HVAC],
    certifications: ['EPA Section 608 Certified', 'NATE Certified Technician'],
    bio: 'Marcus focuses on industrial-grade climate control systems and sustainable energy HVAC retrofitting.',
    rating: 4.8,
    reviews: 2105,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  }
];

const TechnicianProfiles: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">The Experts Behind HDC</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-montserrat tracking-tight">Meet Your Certified Team</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our technicians aren't just workers—they are industry leaders with decades of combined experience and top-tier certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technicians.map((tech) => (
            <div 
              key={tech.id} 
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tech.imageUrl} 
                  alt={tech.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <span className="text-orange-500 text-sm">★</span>
                  <span className="text-slate-900 font-bold text-sm">{tech.rating}</span>
                  <span className="text-slate-400 text-xs font-medium">({tech.reviews})</span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{tech.name}</h4>
                  <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">{tech.role}</p>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{tech.bio}"
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Expertise</span>
                    <div className="flex flex-wrap gap-2">
                      {tech.expertise.map((exp, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-bold">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Certifications</span>
                    <ul className="space-y-2">
                      {tech.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <span className="text-green-500 mt-0.5">✔</span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-auto w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm group-hover:bg-blue-900 transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicianProfiles;