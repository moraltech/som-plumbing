import React from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Clarkston Resident",
    text: "HDC saved us during a major electrical failure at 2 AM. Their master electrician arrived in 30 minutes and had our power restored safely. Truly life-savers!",
    rating: 5,
    tag: "Electrical Service"
  },
  {
    name: "David Chen",
    location: "Owner, Lotus Cafe",
    text: "We use HDC for all our commercial HVAC maintenance. They are professional, punctual, and their preventative plans have saved us thousands in potential downtime.",
    rating: 5,
    tag: "Commercial HVAC"
  },
  {
    name: "Michael Ross",
    location: "Homeowner",
    text: "The plumbing rough-in they did for our new home was flawless. The inspectors even commented on the neatness of the work. Highly recommend their construction team!",
    rating: 5,
    tag: "New Construction"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-montserrat tracking-tight">
            What Our Clients Say
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Real stories from homeowners and business owners who trust HDC for their critical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 font-medium italic mb-8 leading-relaxed flex-grow">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-slate-900 leading-none">{t.name}</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-2">{t.location}</p>
                </div>
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter">
                  {t.tag}
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Client</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;