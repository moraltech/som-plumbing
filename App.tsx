import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustBadges from './components/TrustBadges';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ServiceAreaMap from './components/ServiceAreaMap';
import ResidentialSection from './components/ResidentialSection';
import CommercialSection from './components/CommercialSection';
import TestimonialsSection from './components/TestimonialsSection';
import ExpertiseGrid from './components/ExpertiseGrid';
import { ServiceType } from './types';

const App: React.FC = () => {
  const [preSelectedService, setPreSelectedService] = useState<ServiceType | undefined>(undefined);

  const handleOpenBooking = (service?: ServiceType) => {
    if (service) setPreSelectedService(service);
    const el = document.getElementById('booking');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />
        
        <TrustBadges />

        <ExpertiseGrid />
        
        <Services onSelectService={handleOpenBooking} />

        <ResidentialSection />
        
        <CommercialSection />

        <AboutSection />

        <TestimonialsSection />
        
        <StatsSection />

        <section id="booking" className="py-20 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                  Book Your Professional Service Appointment
                </h2>
                <p className="text-xl text-slate-600">
                  Our certified technicians are standing by. Describe your issue or use our contact details for an instant preliminary assessment.
                </p>
                
                <div className="space-y-4 pt-4">
                  <h4 className="font-bold text-slate-900">Frequently Asked Questions</h4>
                  <details className="group border-b border-slate-200 pb-3">
                    <summary className="cursor-pointer font-semibold list-none flex justify-between items-center text-slate-800 group-open:text-orange-600 transition-colors">
                      Do you offer 24/7 emergency repair?
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 pl-4 border-l-2 border-orange-500">Yes, we have specialized teams on standby 24/7 for critical electrical, gas, and plumbing emergencies.</p>
                  </details>
                  <details className="group border-b border-slate-200 pb-3">
                    <summary className="cursor-pointer font-semibold list-none flex justify-between items-center text-slate-800 group-open:text-orange-600 transition-colors">
                      What areas do you serve?
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 pl-4 border-l-2 border-orange-500">We provide coverage across major metropolitan areas, with local hubs in over 50 cities.</p>
                  </details>
                </div>
              </div>
              
              <BookingForm initialService={preSelectedService} />
            </div>
          </div>
        </section>

        <ServiceAreaMap />
      </main>

      <Footer />
    </div>
  );
};

export default App;