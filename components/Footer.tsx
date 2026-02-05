
import React, { useState } from 'react';

const miniMapAreas = [
  { id: 'm1', name: 'Downtown', x: 40, y: 30 },
  { id: 'm2', name: 'Westside', x: 20, y: 60 },
  { id: 'm3', name: 'South Bay', x: 60, y: 75 },
  { id: 'm4', name: 'East Hills', x: 80, y: 40 },
];

const Footer: React.FC = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center">
               <img 
                src="https://uploads.onecompiler.io/44cmwnab3/44cquz7zb/HDC%20LOGO%20.png" 
                alt="HDC Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const p = e.currentTarget.parentElement;
                  if (p) {
                    const s = document.createElement('span');
                    s.className = "text-xl font-bold text-white tracking-tighter";
                    s.innerText = "HDC";
                    p.appendChild(s);
                  }
                }}
              />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing top-tier licensed plumbing, electrical, and HVAC services across the USA. HDC is your trusted home service partner.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'IG', 'LI'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold hover:bg-orange-600 hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Expert Services</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">Our Specialists</a></li>
              <li><a href="#booking" className="hover:text-orange-500 transition-colors">Schedule Appointment</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Commercial Division</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Small Map */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Primary Coverage</h4>
              <div className="relative h-32 w-full bg-slate-800 rounded-xl overflow-hidden border border-white/5 group">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}></div>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-2">
                  <path d="M20,50 Q40,10 80,30 T60,90 T20,50" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2,2" className="opacity-20" />
                  {miniMapAreas.map(area => (
                    <g 
                      key={area.id} 
                      onMouseEnter={() => setHoveredArea(area.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                      className="cursor-pointer"
                    >
                      <circle cx={area.x} cy={area.y} r="3" fill="#FF6B00" className="animate-pulse" />
                      <circle cx={area.x} cy={area.y} r="1.5" fill="white" />
                    </g>
                  ))}
                </svg>
                {/* Floating Label */}
                <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-900 rounded text-[8px] font-bold text-white transition-opacity duration-300 ${hoveredArea ? 'opacity-100' : 'opacity-0'}`}>
                  {hoveredArea} Active
                </div>
                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-white font-extrabold text-lg">+1 (404) 583-4735</p>
              <div className="text-slate-400 text-xs flex flex-col gap-1">
                <span>424 N Indian Creek Dr</span>
                <span>Clarkston, GA 30021</span>
              </div>
              <p className="text-slate-400 text-xs">support@hdc.com</p>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Emergency Dispatch: 24/7 Available</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Service Alerts</h4>
            <p className="text-xs text-slate-400 mb-4 italic">Get seasonal maintenance tips and exclusive discounts directly.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-orange-500 outline-none text-sm transition-all"
              />
              <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors text-sm shadow-lg shadow-orange-900/20">
                Join Network
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>© 2024 HDC. Licensed & Insured.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
