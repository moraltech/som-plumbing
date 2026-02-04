import React from 'react';

const TrustBadges: React.FC = () => {
  return (
    <div className="bg-white py-10 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 font-bold text-xs uppercase tracking-widest mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-3xl">⭐</span>
            <span className="text-[10px] font-bold text-slate-900 uppercase">5-Star Rated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">🛡️</span>
            <span className="text-[10px] font-bold text-slate-900 uppercase">Fully Insured</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">📜</span>
            <span className="text-[10px] font-bold text-slate-900 uppercase">Licensed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;