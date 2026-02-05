
import React, { useState, useEffect } from 'react';
import { BookingFormData, ServiceType } from '../types';

type ServiceStatus = 'REQUESTED' | 'ASSIGNING' | 'EN_ROUTE' | 'DELAYED' | 'ON_SITE';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: ServiceType.ELECTRICAL,
    description: '',
    urgency: 'Standard'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<ServiceStatus>('REQUESTED');
  const [eta, setEta] = useState(45); // minutes
  const [progress, setProgress] = useState(0); // 0 to 100 for map animation

  // Real-time tracking simulation logic
  useEffect(() => {
    if (submitted) {
      const timers: any[] = [];

      timers.push(setTimeout(() => {
        setStatus('ASSIGNING');
        setProgress(10);
      }, 3000));

      timers.push(setTimeout(() => {
        setStatus('EN_ROUTE');
        setEta(25);
        setProgress(30);
      }, 8000));

      const mapInterval = setInterval(() => {
        setStatus(prev => {
          if (prev === 'EN_ROUTE') {
            setProgress(p => Math.min(p + 0.5, 95));
            setEta(e => Math.max(e - 0.1, 2));
          }
          return prev;
        });
      }, 1000);
      timers.push(mapInterval);

      timers.push(setTimeout(() => {
        setStatus('ON_SITE');
        setEta(0);
        setProgress(100);
        clearInterval(mapInterval);
      }, 45000));

      return () => {
        timers.forEach(t => typeof t === 'number' ? clearTimeout(t) : clearInterval(t));
      };
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Sending real data to Formspree for hassenali15544@gmail.com
      const response = await fetch('https://formspree.io/f/mqakpvel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceType,
          urgency: formData.urgency,
          message: formData.description,
          _subject: `New HDC Booking Request from ${formData.fullName}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Waan ka xunnahay, khalad ayaa dhacay. Fadlan hadhow isku day ama naga soo wac: +1 (404) 583-4735");
    } finally {
      setIsSending(false);
    }
  };

  const getStatusColor = (s: ServiceStatus) => {
    switch (s) {
      case 'REQUESTED': return 'bg-blue-100 text-blue-700';
      case 'ASSIGNING': return 'bg-yellow-100 text-yellow-700';
      case 'EN_ROUTE': return 'bg-green-100 text-green-700';
      case 'DELAYED': return 'bg-red-100 text-red-700';
      case 'ON_SITE': return 'bg-orange-100 text-orange-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusLabel = (s: ServiceStatus) => {
    switch (s) {
      case 'REQUESTED': return 'Codsiga Waa La Helay';
      case 'ASSIGNING': return 'Farsamayaqaan Ayaa Laguugu Habaynayaa...';
      case 'EN_ROUTE': return 'Farsamayaqaankii Wuu Soo Socdaa';
      case 'DELAYED': return 'Dib-u-dhac Yar Ayaa Jira';
      case 'ON_SITE': return 'Farsamayaqaankii Wuu Ku Soo Gaaray';
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fadeIn min-h-[600px]">
        {/* Tracker Header */}
        <div className="p-6 md:p-8 border-b border-slate-50 bg-slate-50/50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">Live Tracking</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Ticket: #HDC-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${getStatusColor(status)} shadow-sm`}>
              {(status === 'EN_ROUTE' || status === 'ASSIGNING') && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
              )}
              {status.replace('_', ' ')}
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-xl">
                {status === 'ON_SITE' ? '🏠' : '🚚'}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Status-ka Hadda</p>
                <p className="text-lg font-black text-slate-800">{getStatusLabel(status)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Waqtiga Imaanshaha</p>
              <p className={`text-2xl font-black ${status === 'ON_SITE' ? 'text-green-600' : 'text-orange-600'}`}>
                {status === 'ON_SITE' ? 'Wuu yimid' : `${Math.ceil(eta)}daq`}
              </p>
            </div>
          </div>
        </div>

        {/* Map Visualization */}
        <div className="relative flex-grow bg-slate-900 min-h-[300px] overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
            <path d="M50,250 C100,250 150,50 350,50" fill="none" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
            <path 
              d="M50,250 C100,250 150,50 350,50" 
              fill="none" 
              stroke="#ea580c" 
              strokeWidth="6" 
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset={1000 - (progress * 10)}
              className="transition-all duration-1000 ease-linear"
            />
            <g transform="translate(340, 40)">
              <circle r="12" fill="#ea580c" className="animate-pulse opacity-20" />
              <circle r="6" fill="#ea580c" />
              <text y="25" x="-10" fill="white" fontSize="8" fontWeight="bold">GURIGAAGA</text>
            </g>
            <g className="transition-all duration-1000 ease-linear"
               style={{ transform: `translate(${50 + (progress * 3)}px, ${250 - (progress * 2)}px)` }}>
              <rect x="-10" y="-10" width="20" height="20" rx="6" fill="white" className="shadow-2xl" />
              <text x="-5" y="4" fontSize="10">🚚</text>
            </g>
          </svg>
        </div>

        {/* Technician Footer */}
        <div className="p-6 bg-white border-t border-slate-50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-orange-100">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Ahmed" />
            </div>
            <div className="flex-grow">
              <h4 className="font-black text-slate-900">Ahmed Mohamed</h4>
              <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Master Service Tech</p>
            </div>
            <a href={`tel:+14045834735`} className="bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
          <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl">
            Codsasho Cusub
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 space-y-6 relative overflow-hidden"
    >
      {isSending && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="font-extrabold text-slate-900 uppercase tracking-widest text-xs">Codsigaaga Waa Loo Dirayaa Emailkaaga...</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Magacaaga oo Buuxa</label>
          <input 
            type="text" 
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
            placeholder="Geli magaca"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Emailkaaga</label>
          <input 
            type="email" 
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
            placeholder="tusaale@email.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Lambarka Telefoonka</label>
          <input 
            type="tel" 
            required
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
            placeholder="+1 (___) ___-____"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nooca Adeegga</label>
          <select 
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 cursor-pointer"
            value={formData.serviceType}
            onChange={(e) => setFormData({...formData, serviceType: e.target.value as ServiceType})}
          >
            {Object.values(ServiceType).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Heerka Degdegga</label>
        <div className="grid grid-cols-3 gap-3">
          {['Standard', 'Urgent', 'Emergency'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData({...formData, urgency: level as any})}
              className={`py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border-2 ${
                formData.urgency === level 
                  ? 'bg-orange-600 text-white border-orange-600 shadow-xl shadow-orange-600/20' 
                  : 'bg-white text-slate-600 border-slate-100 hover:border-orange-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sharaxaad kooban</label>
        <textarea 
          required
          rows={3}
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
          placeholder="Maxaad u baahan tahay in lagaa caawiyo?"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <button 
        type="submit"
        disabled={isSending}
        className="w-full bg-[#ea580c] text-white py-6 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-orange-600/30 active:scale-95 uppercase tracking-[0.2em] disabled:opacity-50"
      >
        Book Hubi & Notify Tech
      </button>
    </form>
  );
};

export default BookingForm;
