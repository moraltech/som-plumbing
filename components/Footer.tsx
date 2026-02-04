
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
               <img 
                src="https://uploads.onecompiler.io/44cmwnab3/44cmwm67f/som%20pumbinig%202.png" 
                alt="Som Pulibing Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing top-tier licensed pulibing, electrical, and HVAC services across the USA. Your trusted home service partner.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#booking" className="hover:text-orange-500 transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <p className="text-white font-bold text-xl mb-4">(800) 555-0199</p>
            <p className="text-slate-300 text-sm mb-6">service@sompulibing.com</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:ring-1 focus:ring-orange-500 outline-none"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          <p>© 2024 Som Pulibing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
