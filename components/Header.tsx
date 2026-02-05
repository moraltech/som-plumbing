
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Residential', href: '#residential' },
    { name: 'Commercial', href: '#commercial' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white border-b border-slate-100 py-4`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="https://uploads.onecompiler.io/44cmwnab3/44cquz7zb/HDC%20LOGO%20.png" 
            alt="HDC PowerFlow" 
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="font-bold text-slate-700 hover:text-orange-600 transition-colors text-[15px]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-[#ea580c] text-white px-8 py-3 rounded-xl font-extrabold text-[15px] hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
          >
            Book Online
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-6 space-y-4 shadow-xl border-t border-slate-100">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block text-lg font-bold text-slate-900 py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="block w-full text-center bg-[#ea580c] text-white px-6 py-4 rounded-xl font-bold text-lg" 
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
