
import React, { useState } from 'react';

const coverageAreas = [
  { id: 'north', name: 'Downtown & North', status: 'High Demand', techCount: 12, coords: { x: '30%', y: '25%' } },
  { id: 'west', name: 'Western Suburbs', status: 'Available', techCount: 8, coords: { x: '15%', y: '55%' } },
  { id: 'south', name: 'South Bay Area', status: 'Available', techCount: 15, coords: { x: '50%', y: '80%' } },
  { id: 'east', name: 'Eastern Heights', status: 'Busy', techCount: 5, coords: { x: '80%', y: '45%' } },
  { id: 'central', name: 'Central District', status: 'High Demand', techCount: 22, coords: { x: '45%', y: '40%' } },
];

const ServiceAreaMap: React.FC = () => {
  const [activeArea, setActiveArea] = useState<typeof coverageAreas[0] | null>(null);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Widespread Coverage</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 leading-tight font-montserrat">
                Serving the Entire <br />Metropolitan Area
              </h3>
              <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                We have strategically stationed technicians across the city to guarantee an average arrival time of under 60 minutes.
              </p>
            </div>

            <div className="space-y-4">
              {coverageAreas.map((area) => (
                <div 
                  key={area.id}
                  onMouseEnter={() => setActiveArea(area)}
                  onMouseLeave={() => setActiveArea(null)}
                  className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                    activeArea?.id === area.id 
                      ? 'bg-white border-orange-200 shadow-lg scale-105' 
                      : 'bg-white/50 border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">{area.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{area.techCount} technicians active</p>
                    </div>
                    <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-widest ${
                      area.status === 'High Demand' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive SVG Map Visualizer */}
          <div className="lg:col-span-7 relative h-[500px] w-full bg-blue-900 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white group">
            {/* Mock Map Background Grid/Lines */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full p-10">
              {/* Stylized City Shape */}
              <path 
                d="M50,150 Q100,50 200,80 T350,150 T200,250 T50,150" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.5" 
                className="opacity-20"
              />
              <path 
                d="M100,20 L120,50 L200,10 L280,60 L350,40" 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                className="opacity-10"
              />
              
              {/* Area Hotspots */}
              {coverageAreas.map((area) => (
                <g 
                  key={area.id} 
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveArea(area)}
                  onMouseLeave={() => setActiveArea(null)}
                >
                  {/* Outer Pulse */}
                  <circle 
                    cx={area.coords.x} 
                    cy={area.coords.y} 
                    r="8" 
                    fill="#FF6B00" 
                    className={`animate-ping opacity-40 transition-opacity ${activeArea?.id === area.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} 
                  />
                  {/* Inner Dot */}
                  <circle 
                    cx={area.coords.x} 
                    cy={area.coords.y} 
                    r="5" 
                    fill={activeArea?.id === area.id ? '#ffffff' : '#FF6B00'} 
                    className="transition-colors duration-300"
                  />
                  {/* Floating Label */}
                  {activeArea?.id === area.id && (
                    <foreignObject x={area.coords.x} y={area.coords.y} width="120" height="40" className="overflow-visible">
                      <div className="bg-white px-3 py-1.5 rounded-lg shadow-xl -translate-y-12 -translate-x-1/2 whitespace-nowrap border border-slate-100 animate-fadeIn">
                        <p className="text-[10px] font-extrabold text-blue-900 uppercase leading-none">{area.name}</p>
                        <p className="text-[8px] text-orange-600 font-bold uppercase mt-1">{area.techCount} Experts On Call</p>
                      </div>
                    </foreignObject>
                  )}
                </g>
              ))}
            </svg>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 bg-blue-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">100% Coverage Guaranteed</p>
                  <p className="text-blue-200 text-xs">Available within 25 miles of city center</p>
                </div>
              </div>
              <button className="hidden sm:block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all border border-white/10">
                Verify My Zip Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
