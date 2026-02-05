
import React, { useState } from 'react';

const miniMapAreas = [
  { id: 'm1', name: 'Downtown ATL', x: 40, y: 55, techs: 12 },
  { id: 'm2', name: 'Buckhead', x: 35, y: 35, techs: 8 },
  { id: 'm3', name: 'Clarkston (HQ)', x: 75, y: 48, techs: 15 },
  { id: 'm4', name: 'Decatur', x: 60, y: 65, techs: 9 },
];

const Footer: React.FC = () => {
  const [hoveredArea, setHoveredArea] = useState<typeof miniMapAreas[0] | null>(null);
  const [zipInput, setZipInput] = useState('');
  const [zipStatus, setZipStatus] = useState<'idle' | 'checking' | 'valid' | 'invalid'>('idle');

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput) return;
    setZipStatus('checking');
    setTimeout(() => {
      if (zipInput.startsWith('30')) {
        setZipStatus('valid');
      } else {
        setZipStatus('invalid');
      }
    }, 1000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter leading-none">
                HDC<span className="text-orange-600">.</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 leading-none mt-1">
                PowerFlow
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Licensed expertise in electrical, plumbing, and HVAC systems. Providing nationwide reliability for over 15 years.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Our Services</a></li>
              <li><a href="#booking" className="hover:text-orange-500 transition-colors">Book Online</a></li>
              <li><a href="mailto:support@hdc.com" className="hover:text-orange-500 transition-colors">Email Support</a></li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Service Area</h4>
            <div className="relative h-40 w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              <svg viewBox="0 0 100 100" className="w-full h-full p-4 opacity-50">
                <path d="M10,20 L40,10 L80,20 L90,60 L70,90 L30,95 L10,60 Z" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="0.5" />
                {miniMapAreas.map(area => (
                  <circle 
                    key={area.id} 
                    cx={area.x} cy={area.y} r="3" 
                    fill="#ea580c" 
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredArea(area)}
                    onMouseLeave={() => setHoveredArea(null)}
                  />
                ))}
              </svg>
              {hoveredArea && (
                <div className="absolute top-2 left-2 bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg text-[10px] font-bold">
                  {hoveredArea.name}: {hoveredArea.techs} Techs
                </div>
              )}
            </div>
            <form onSubmit={checkZip} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Zip Code" 
                className={`bg-slate-800 border rounded-lg px-3 py-2 text-xs flex-grow outline-none transition-all ${
                  zipStatus === 'valid' ? 'border-green-500' : zipStatus === 'invalid' ? 'border-red-500' : 'border-slate-700 focus:border-orange-500'
                }`}
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-orange-700">Check</button>
            </form>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h4>
            <div className="space-y-4">
              <div>
                <a href="tel:+14045834735" className="text-white font-bold hover:text-orange-500 transition-colors">+1 (404) 583-4735</a>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Emergency Line</p>
              </div>
              <div>
                <a href="mailto:support@hdc.com" className="text-white font-bold hover:text-orange-500 transition-colors">support@hdc.com</a>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Response &lt; 2 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
          <p>© 2024 HDC PowerFlow. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
