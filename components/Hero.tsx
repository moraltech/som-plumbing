
import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-[72px] min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
          alt="Technician working" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-950/30 backdrop-blur-md border border-orange-500/30 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
              </span>
              Currently Serving Your Area
            </div>

            <h1 className="text-5xl md:text-[80px] font-extrabold text-white leading-[1.05] tracking-tight font-montserrat">
              HDC <span className="text-[#ea580c]">Solutions</span><br />
              Professional<br />
              Service Experts
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
              Expert electrical, plumbing, and HVAC systems for your home and business. Nationwide reliability with licensed technicians.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-4">
              <button 
                onClick={onOpenBooking}
                className="bg-[#ea580c] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/30 active:scale-95 uppercase tracking-wider"
              >
                Schedule Now
              </button>
              <a 
                href="tel:+14045834735"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all active:scale-95 uppercase tracking-wider flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Emergency Call
              </a>
            </div>
          </div>

          {/* Feature Highlight Cards (Hidden on small mobile) */}
          <div className="lg:w-1/3 w-full max-w-md hidden md:block">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl space-y-8 border border-slate-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">Rapid Response</h3>
                  <p className="text-slate-500 font-medium text-sm mt-1">Arrival in under 60 min</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group border-t border-slate-50 pt-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">Fully Insured</h3>
                  <p className="text-slate-500 font-medium text-sm mt-1">Bonded and warranted work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
