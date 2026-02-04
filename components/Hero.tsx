
import React from 'react';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="text-white space-y-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-bold border border-orange-500/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            Currently Serving Your Area
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Som <span className="text-orange-500">Pulibing</span> <br />
            Professional <br />
            Service Solutions 
          </h1>
          
          <p className="text-xl text-blue-50/80 max-w-xl leading-relaxed">
            From residential repairs to industrial HVAC installations. Som Pulibing provides licensed experts for every home and commercial need. Guaranteed satisfaction, 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onOpenBooking}
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-xl shadow-orange-900/40"
            >
              Schedule Service Now
            </button>
            <a 
              href="tel:18005550199"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (800) 555-0199
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 opacity-80">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">15k+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-200">Projects Done</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">4.9/5</span>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-200">Customer Rating</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">200+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-200">Licensed Techs</span>
            </div>
          </div>
        </div>

        {/* Feature box decoration */}
        <div className="hidden lg:flex flex-col justify-center items-end">
           <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Rapid Response</h3>
                    <p className="text-sm text-slate-500">Average arrival under 60 min</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Fully Guaranteed</h3>
                    <p className="text-sm text-slate-500">All parts and labor warrantied</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Upfront Pricing</h3>
                    <p className="text-sm text-slate-500">No hidden fees, ever.</p>
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
