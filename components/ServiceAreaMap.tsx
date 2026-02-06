import React, { useState } from 'react';

const ServiceAreaMap: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{ 
    status: 'success' | 'fail' | 'invalid'; 
    message: string; 
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidZip = /^\d{5}$/.test(zipInput);
    
    if (!isValidZip) {
      setResult({ status: 'invalid', message: 'Fadlan geli 5 lambar oo sax ah.' });
      return;
    }

    setIsChecking(true);
    setResult(null);

    setTimeout(() => {
      // Logic covering Clarkston (30021) and surroundings
      if (zipInput.startsWith('300') || zipInput.startsWith('303') || zipInput.startsWith('30')) {
        setResult({
          status: 'success',
          message: "Service available! We have technicians stationed in your area."
        });
      } else {
        setResult({
          status: 'fail',
          message: "We haven't reached your neighborhood yet, but we are expanding soon!"
        });
      }
      setIsChecking(false);
    }, 1200);
  };

  return (
    <section className="py-24 bg-white scroll-mt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Our Service Range</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 font-montserrat leading-tight">Metropolitan Service Center</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
            Our central hub ensures rapid dispatch across the entire metropolitan region and surrounding suburbs.
          </p>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group">
          {/* Clarkston GA Metro Embed */}
          <div className="h-[600px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.516847844288!2d-84.2403649!3d33.8118671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a9e334333333%3A0xdeadbeef!2s424%20N%20Indian%20Creek%20Dr%2C%20Clarkston%2C%20GA%2030021!5e0!3m2!1sen!2sus!4v1716388412345!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

          {/* Map Info Card Overlay */}
          <div className="absolute top-8 left-8 hidden md:block w-80">
            <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 animate-fadeIn">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm leading-none">Metro HQ</h4>
                  <p className="text-[10px] text-orange-600 font-bold uppercase tracking-widest mt-1">Main Dispatch</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-slate-600 font-bold leading-relaxed">
                  424 N Indian Creek Dr Suite 4C<br />
                  Clarkston, GA 30021
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-tight hover:text-blue-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a href="#" onClick={(e) => e.preventDefault()}>Get Directions</a>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zip Checker */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
            <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 max-w-xl w-full">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-grow w-full">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1 text-center sm:text-left">Check Local Availability</p>
                  <input 
                    type="text" 
                    placeholder="Enter Zip Code (e.g. 30021)" 
                    className={`w-full h-12 bg-slate-50 border rounded-xl px-4 font-bold text-slate-900 outline-none transition-all ${
                      result?.status === 'invalid' ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-200 focus:border-orange-500'
                    }`}
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  />
                </div>
                <button 
                  onClick={handleCheck}
                  disabled={isChecking || zipInput.length < 5}
                  className="w-full sm:w-auto bg-[#ea580c] h-12 text-white px-8 rounded-xl font-black text-sm hover:bg-orange-600 transition-all shadow-lg active:scale-95 disabled:opacity-30 uppercase tracking-wider"
                >
                  {isChecking ? 'Checking...' : 'Check Now'}
                </button>
              </div>

              {result && (
                <div className={`mt-4 p-4 rounded-xl text-xs font-bold animate-fadeIn ${
                  result.status === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                }`}>
                  {result.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;