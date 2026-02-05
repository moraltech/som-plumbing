
import React, { useState, useMemo } from 'react';

// Specific hubs and their technician counts
const miniMapAreas = [
  { id: 'm1', name: 'Downtown ATL', x: 40, y: 55, techs: 12, zipPrefixes: ['303'] },
  { id: 'm2', name: 'Buckhead', x: 35, y: 35, techs: 8, zipPrefixes: ['30305', '30324', '30326'] },
  { id: 'm3', name: 'Clarkston (HQ)', x: 75, y: 48, techs: 15, zipPrefixes: ['30021', '300', '302'] },
  { id: 'm4', name: 'Decatur', x: 60, y: 65, techs: 9, zipPrefixes: ['30030', '30032', '30033'] },
];

const ServiceAreaMap: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{ 
    status: 'success' | 'fail' | 'invalid'; 
    message: string; 
    hub?: typeof miniMapAreas[0] 
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Robust validation: Check for 5 digits
    const isValidZip = /^\d{5}$/.test(zipInput);
    
    if (!isValidZip) {
      setResult({ status: 'invalid', message: 'Please enter a valid 5-digit zip code.' });
      // Clear invalid state after a few seconds or on next type
      return;
    }

    setIsChecking(true);
    setResult(null);

    // Simulate network scanning with a tech-style delay
    setTimeout(() => {
      // Logic: Find matching hub based on prefixes
      // We sort prefixes by length descending to match most specific first
      let matchedHub = miniMapAreas.find(hub => 
        hub.zipPrefixes
          .sort((a, b) => b.length - a.length)
          .some(pref => zipInput.startsWith(pref))
      );

      // Fallback: If it starts with 30 but no specific hub matched, assign to the larger HQ zone
      if (!matchedHub && zipInput.startsWith('30')) {
        matchedHub = miniMapAreas.find(h => h.id === 'm3');
      }

      if (matchedHub) {
        setResult({
          status: 'success',
          message: `Success! Our ${matchedHub.name} dispatch hub is currently active in your zone.`,
          hub: matchedHub
        });
      } else {
        setResult({
          status: 'fail',
          message: "Unfortunately, we haven't reached your neighborhood yet. We're expanding rapidly!"
        });
      }
      setIsChecking(false);
    }, 1400);
  };

  return (
    <section className="py-24 bg-[#0f172a] text-white scroll-mt-20 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Real-Time Coverage
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold font-montserrat leading-tight mb-4">
            Live Service Map
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">
            Enter your zip code below to verify if our technicians are currently available for immediate dispatch in your area.
          </p>
        </div>

        {/* Map Visualization Container */}
        <div className="bg-[#1e293b]/40 backdrop-blur-md border border-slate-700/50 rounded-[3rem] p-6 sm:p-12 shadow-2xl relative">
          
          {/* Scanning Animation Line */}
          {isChecking && (
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[3rem]">
              <div className="w-full h-1 bg-orange-500/60 shadow-[0_0_20px_rgba(234,88,12,0.5)] absolute top-0 animate-[scan_2s_ease-in-out_infinite]"></div>
              <div className="absolute inset-0 bg-orange-500/[0.03] animate-pulse"></div>
            </div>
          )}

          <div className="aspect-[16/9] relative w-full bg-[#0f172a]/80 rounded-[2rem] border border-slate-800 shadow-inner flex items-center justify-center overflow-hidden">
            {/* SVG Map Grid */}
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 p-10">
              <defs>
                <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Abstract Boundary Path */}
              <path 
                d="M15,30 L40,20 L80,30 L90,65 L70,85 L30,90 L10,65 Z" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.2" 
                strokeDasharray="2,2"
              />

              {miniMapAreas.map(hub => {
                const isActive = result?.hub?.id === hub.id;
                return (
                  <g key={hub.id} className="transition-all duration-500">
                    {isActive && (
                      <circle cx={hub.x} cy={hub.y} r="10" fill="url(#dotGlow)" className="animate-pulse" />
                    )}
                    <circle 
                      cx={hub.x} 
                      cy={hub.y} 
                      r={isActive ? "2.5" : "1.5"} 
                      fill={isActive ? "#22c55e" : "#ea580c"}
                      className={isActive ? "animate-bounce" : "animate-pulse"}
                    />
                    {isActive && (
                      <circle cx={hub.x} cy={hub.y} r="6" fill="none" stroke="#22c55e" strokeWidth="0.5" className="animate-ping" />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Live Indicator */}
            <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3 shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">System Online</span>
            </div>
          </div>

          {/* Search Functionality */}
          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="flex-grow relative">
                <input 
                  type="text" 
                  maxLength={5}
                  placeholder="30021" 
                  className={`w-full h-16 bg-[#0f172a] border rounded-2xl px-6 text-xl font-bold text-white outline-none transition-all placeholder:text-slate-700 ${
                    result?.status === 'invalid' ? 'border-red-500 ring-4 ring-red-500/10 animate-[shake_0.4s_ease-in-out]' : 'border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10'
                  }`}
                  value={zipInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
                    setZipInput(val);
                    if (result) setResult(null); // Reset result on new input
                  }}
                />
                {zipInput.length > 0 && (
                  <button 
                    type="button" 
                    onClick={() => { setZipInput(''); setResult(null); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
              <button 
                type="submit"
                disabled={isChecking || zipInput.length < 5}
                className="bg-[#ea580c] h-16 text-white px-10 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20 active:scale-95 disabled:opacity-30 min-w-[140px] uppercase tracking-wider"
              >
                {isChecking ? (
                  <svg className="animate-spin h-6 w-6 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Verify'}
              </button>
            </form>

            {/* Robust Feedback Display */}
            <div className={`mt-8 transition-all duration-500 transform ${result ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 h-0 overflow-hidden'}`}>
              {result && (
                <div className={`p-6 rounded-3xl border backdrop-blur-2xl flex items-start gap-5 ${
                  result.status === 'success' 
                    ? 'bg-green-500/10 border-green-500/20 text-green-100' 
                    : result.status === 'fail'
                    ? 'bg-red-500/10 border-red-500/20 text-red-100'
                    : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-100'
                }`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                    result.status === 'success' ? 'bg-green-500 text-white' : 
                    result.status === 'fail' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                  }`}>
                    {result.status === 'success' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xl font-black">!</span>
                    )}
                  </div>
                  <div className="flex-grow pt-1">
                    <h4 className="font-black text-lg mb-1">
                      {result.status === 'success' ? 'Location Confirmed' : 
                       result.status === 'fail' ? 'Coverage Unavailable' : 'Input Required'}
                    </h4>
                    <p className="font-medium text-sm opacity-90 leading-relaxed">{result.message}</p>
                    
                    {result.status === 'success' && (
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <button 
                          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                          className="text-[10px] font-black uppercase tracking-widest bg-white text-slate-900 px-5 py-2.5 rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-md"
                        >
                          Book Priority Service
                        </button>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                            {result.hub?.techs} Units Active
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Key Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Network Hubs', value: '4' },
            { label: 'Field Agents', value: '44+' },
            { label: 'Response', value: '<20m' },
            { label: 'Satisfaction', value: '99%' }
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <p className="text-4xl font-black text-white group-hover:text-orange-500 transition-colors duration-300">{stat.value}</p>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </section>
  );
};

export default ServiceAreaMap;
