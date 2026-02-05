
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-montserrat tracking-tight leading-tight">
                Excellence in Every <br />
                <span className="text-blue-900">Home Service</span>
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                HDC has been a cornerstone of reliable home maintenance for over 15 years. We started with a simple mission: to provide high-quality, honest, and professional services that homeowners can depend on, day or night.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-900 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-800">🎯</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white">Our Mission</h4>
                <p className="text-sm text-slate-600 group-hover:text-blue-100">To deliver precision-engineered solutions for every household challenge with integrity and speed.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-900 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-800">⭐</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white">Our Vision</h4>
                <p className="text-sm text-slate-600 group-hover:text-blue-100">Setting the gold standard for residential and commercial technical services across the nation.</p>
              </div>
            </div>

            <div className="pt-4">
               <div className="flex items-center gap-4 text-slate-900 font-bold">
                 <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=hdc${i}`} alt="User" />
                     </div>
                   ))}
                 </div>
                 <span className="text-sm">Trusted by 10,000+ local residents</span>
               </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service" />
                </div>
                <div className="bg-orange-600 p-8 rounded-3xl text-white shadow-xl">
                  <p className="text-4xl font-extrabold mb-1">15+</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years in Business</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-xl">
                  <p className="text-4xl font-extrabold mb-1">24/7</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Fast Response</p>
                </div>
                <div className="h-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Technical Work" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
