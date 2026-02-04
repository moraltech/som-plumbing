
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="text-orange-500">⚡</span> 24/7 Emergency Support
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a href="tel:18005550199" className="hover:text-orange-400 transition-colors">(800) 555-0199</a>
          <span>License #123456789</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer h-full py-2" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="https://uploads.onecompiler.io/44cmwnab3/44cmwm67f/som%20pumbinig%202.png" 
            alt="Som Pulibing Logo" 
            className="h-full w-auto object-contain max-h-[60px]"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const text = document.createElement('span');
                text.className = "text-2xl font-extrabold text-blue-900 font-montserrat tracking-tight uppercase";
                text.innerText = "SOM PULIBING";
                parent.appendChild(text);
              }
            }}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-700 hover:text-blue-900 font-semibold transition-colors">Services</a>
          <a href="#residential" className="text-slate-700 hover:text-blue-900 font-semibold transition-colors">Residential</a>
          <a href="#commercial" className="text-slate-700 hover:text-blue-900 font-semibold transition-colors">Commercial</a>
          <a href="#about" className="text-slate-700 hover:text-blue-900 font-semibold transition-colors">About</a>
          <a href="#booking" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-orange-700 transition-all hover:scale-105 shadow-md">
            Book Online
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
          <a href="#services" className="block text-lg font-semibold text-slate-700 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#residential" className="block text-lg font-semibold text-slate-700 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Residential</a>
          <a href="#commercial" className="block text-lg font-semibold text-slate-700 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Commercial</a>
          <a href="#booking" className="block w-full text-center bg-orange-600 text-white px-6 py-3 rounded-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>
            Book Online
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
