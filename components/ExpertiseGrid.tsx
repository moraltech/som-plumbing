import React from 'react';

const expertiseItems = [
  { title: 'AC Installation', icon: 'ac' },
  { title: 'AC Maintenance', icon: 'ac' },
  { title: 'AC Repair', icon: 'ac' },
  { title: 'Furnace Installation', icon: 'furnace' },
  { title: 'Furnace Maintenance', icon: 'furnace' },
  { title: 'Furnace Repair', icon: 'furnace' },
  { title: 'Plumbing', icon: 'plumbing' },
  { title: 'Water Heater', icon: 'plumbing' },
];

const Icon = ({ type }: { type: string }) => {
  const color = "#005CAB"; // Deep Blue for the icons
  
  if (type === 'ac') {
    return (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
    );
  }
  
  if (type === 'furnace') {
    return (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 11v6" strokeLinecap="round" />
        <path d="M10 13h4" strokeLinecap="round" />
        <path d="M10 16h4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 7a2 2 0 0 1 2 2"></path>
      <path d="M18 7v11a2 2 0 1 1-4 0v-7a2 2 0 0 0-2-2H4"></path>
      <path d="M7 2v3"></path>
      <path d="M5 2v3"></path>
      <path d="M15 20v2"></path>
      <path d="M17 20v2"></path>
    </svg>
  );
};

const ExpertiseGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight font-montserrat">
          We've Got an <span className="text-[#005CAB]">Expert</span> for That
        </h2>
        <p className="text-slate-600 text-lg md:text-xl font-medium mb-16 max-w-3xl mx-auto">
          Skip unreliable contractors and costly mistakes. We're the professionals your home deserves.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <Icon type={item.icon} />
              </div>
              <h4 className="text-[#005CAB] font-black text-xl leading-tight group-hover:text-orange-600 transition-colors">
                {item.title}
              </h4>
              <div className="mt-4 w-8 h-1 bg-slate-100 group-hover:w-16 group-hover:bg-orange-500 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-50 rounded-full blur-[100px] -z-10 opacity-50"></div>
    </section>
  );
};

export default ExpertiseGrid;