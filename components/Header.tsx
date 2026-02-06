import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Residential', id: 'residential' },
    { name: 'Commercial', id: 'commercial' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white border-b border-slate-100 py-4 ${isScrolled ? 'shadow-sm py-3' : ''}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="https://uploads.onecompiler.io/44cmwnab3/44cquz7zb/HDC%20LOGO%20.png" 
            alt="HDC PowerFlow" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent && !parent.querySelector('.fallback-logo')) {
                const span = document.createElement('span');
                span.className = 'fallback-logo text-xl font-black text-[#1e3a8a] tracking-tighter';
                span.innerHTML = 'HDC <span class="text-green-600">PowerFlow</span>';
                parent.appendChild(span);
              }
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)} 
              className="font-bold text-[#1e3a8a] hover:text-orange-600 transition-all text-lg tracking-tight"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('booking')}
            className="bg-[#ea580c] text-white px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-600/10"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#1e3a8a]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-6 space-y-4 shadow-2xl border-t border-slate-50">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)} 
              className="block w-full text-left text-lg font-bold py-3 border-b border-slate-50 text-[#1e3a8a]"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('booking')}
            className="block w-full text-center bg-[#ea580c] text-white px-6 py-4 rounded-xl font-black text-lg uppercase tracking-widest"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;