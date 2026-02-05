
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Residential', href: '#residential' },
    { name: 'Commercial', href: '#commercial' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer h-full py-4" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="https://uploads.onecompiler.io/44cmwnab3/44cquz7zb/HDC%20LOGO%20.png" 
            alt="HDC PowerFlow Logo" 
            className="h-full w-auto object-contain max-h-[64px]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const text = document.createElement('span');
                text.className = "text-2xl font-extrabold text-blue-900 font-montserrat tracking-tight";
                text.innerText = "HDC PowerFlow";
                parent.appendChild(text);
              }
            }}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-slate-600 hover:text-blue-900 font-bold text-[15px] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-[#e95e13] text-white px-7 py-3 rounded-xl font-extrabold text-[15px] hover:bg-orange-700 transition-all hover:scale-105 shadow-md ml-4"
          >
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
        <div className="md:hidden bg-white border-t border-slate-100 py-6 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block text-lg font-bold text-slate-700 py-2 border-b border-slate-50" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="block w-full text-center bg-[#e95e13] text-white px-6 py-4 rounded-xl font-extrabold text-lg" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Online
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
