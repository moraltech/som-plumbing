
import React from 'react';
import { Technician, ServiceType } from '../types';

interface TechnicianProfilesProps {
  onBookTech: () => void;
}

const technicians: Technician[] = [
  {
    id: 'tech-1',
    name: 'Ahmed Mohamed',
    role: 'Master Hydraulic Engineer',
    expertise: [ServiceType.PLUMBING, ServiceType.EMERGENCY],
    certifications: ['Licensed Master Plumber'],
    bio: '15+ years of infrastructure repair. Specialist in high-pressure failures.',
    rating: 4.9,
    reviews: 1240,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    status: 'Available'
  },
  {
    id: 'tech-2',
    name: 'Sarah Chen',
    role: 'Senior Electrical Architect',
    expertise: [ServiceType.ELECTRICAL],
    certifications: ['State Certified Expert'],
    bio: 'Pioneer in modernizing residential electrical grids.',
    rating: 5.0,
    reviews: 856,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    status: 'On Another Job'
  },
  {
    id: 'tech-3',
    name: 'Marcus Miller',
    role: 'Climate Systems Lead',
    expertise: [ServiceType.HVAC],
    certifications: ['EPA 608 Certified'],
    bio: 'Expert in industrial-grade climate control.',
    rating: 4.8,
    reviews: 2105,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    status: 'Offline'
  }
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'Available': return 'bg-green-100 text-green-700 border-green-200';
    case 'On Another Job': return 'bg-amber-100 text-amber-700 border-amber-200';
    default: return 'bg-slate-100 text-slate-500 border-slate-200';
  }
};

const TechnicianProfiles: React.FC<TechnicianProfilesProps> = ({ onBookTech }) => {
  return (
    <section id="team" className="py-24 bg-slate-50 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Our Specialists</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Expert Technicians On Call</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our team consists of highly vetted, licensed professionals ready to handle any technical challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technicians.map((tech) => (
            <div 
              key={tech.id} 
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tech.imageUrl} 
                  alt={tech.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${getStatusStyles(tech.status)}`}>
                    {tech.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{tech.name}</h4>
                <p className="text-orange-600 font-bold text-xs uppercase mb-4">{tech.role}</p>
                <p className="text-slate-600 text-sm italic mb-6">"{tech.bio}"</p>
                <button 
                  onClick={onBookTech}
                  className="w-full py-3 bg-blue-900 text-white rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors shadow-lg active:scale-95"
                >
                  Book with {tech.name.split(' ')[0]}
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
