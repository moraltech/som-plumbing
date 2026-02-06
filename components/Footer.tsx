import React from 'react';

const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <img 
                src="https://uploads.onecompiler.io/44cmwnab3/44cquz7zb/HDC%20LOGO%20.png" 
                alt="HDC PowerFlow" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Nationwide leaders in electrical, plumbing, and HVAC solutions. Licensed, insured, and ready to serve 24/7 across metropolitan areas.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer group">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-white transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Residential', 'Commercial', 'About'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleNavClick(item.toLowerCase())}
                    className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <span className="text-orange-600 font-bold mt-1">📍</span>
                <span>424 N Indian Creek Dr Suite 4C<br/>Clarkston, GA 30021</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="text-orange-600 font-bold">📞</span>
                +1 (404) 583-4735
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <span className="text-orange-600 font-bold">✉️</span>
                support@hdcpowerflow.com
              </li>
            </ul>
          </div>

          {/* Dispatch Info */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">24/7 Emergency</h4>
            <p className="text-slate-400 text-xs mb-6">Urgent technical support is always available. Average response time: 45 min.</p>
            <a 
              href="tel:+14045834735" 
              className="mt-auto block w-full text-center py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-600/10 active:scale-95"
            >
              Call Dispatch
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© 2024 HDC PowerFlow. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;