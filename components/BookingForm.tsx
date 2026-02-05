
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

  // Simulate real-time status and map progress updates
  useEffect(() => {
    if (submitted) {
      const timers: any[] = [];

      // Step 1: Assigning technician
      timers.push(setTimeout(() => {
        setStatus('ASSIGNING');
        setProgress(10);
      }, 3000));

      // Step 2: En route
      timers.push(setTimeout(() => {
        setStatus('EN_ROUTE');
        setEta(25);
        setProgress(30);
      }, 8000));

      // Real-time map movement during EN_ROUTE
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

      // Step 3: Optional delay simulation
      timers.push(setTimeout(() => {
        if (Math.random() > 0.6) {
          setStatus('DELAYED');
          setEta(15);
        }
      }, 18000));

      // Step 4: Arrived
      timers.push(setTimeout(() => {
        setStatus('ON_SITE');
        setEta(0);
        setProgress(100);
        clearInterval(mapInterval);
      }, 35000));

      return () => {
        timers.forEach(t => typeof t === 'number' ? clearTimeout(t) : clearInterval(t));
      };
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Logic to send notification to hassenali15544@gmail.com
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('--- ADMIN NOTIFICATION ---');
      console.log('Recipient: hassenali15544@gmail.com');
      console.log('Subject: New HDC Booking Request');
      console.log('Data:', formData);
      console.log('-------------------------');

      setSubmitted(true);
    } catch (error) {
      console.error("Booking error:", error);
      alert("There was an error processing your request.");
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
      case 'REQUESTED': return 'Request Received';
      case 'ASSIGNING': return 'Matching Technician...';
      case 'EN_ROUTE': return 'Technician En Route';
      case 'DELAYED': return 'Traffic Delay Detected';
      case 'ON_SITE': return 'Technician on Site';
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fadeIn min-h-[600px]">
        {/* Header Section */}
        <div className="p-6 md:p-8 border-b border-slate-50 bg-slate-50/50">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight">Priority Tracking</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Ticket: #HDC-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${getStatusColor(status)} shadow-sm`}>
              {(status === 'EN_ROUTE' || status === 'ASSIGNING') && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
              )}
              {status}
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-xl">
                {status === 'ON_SITE' ? '🏠' : '🚚'}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Current Status</p>
                <p className="text-lg font-black text-slate-800">{getStatusLabel(status)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Est. Arrival</p>
              <p className={`text-2xl font-black ${status === 'ON_SITE' ? 'text-green-600' : 'text-orange-600'}`}>
                {status === 'ON_SITE' ? 'Arrived' : `${Math.ceil(eta)}m`}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Progress Map */}
        <div className="relative flex-grow bg-slate-900 min-h-[250px] group overflow-hidden">
          {/* Map Grid Pattern Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            
            {/* The Route Path */}
            <path 
              d="M50,250 C100,250 150,50 350,50" 
              fill="none" 
              stroke="#334155" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            <path 
              d="M50,250 C100,250 150,50 350,50" 
              fill="none" 
              stroke="url(#pathGradient)" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset={1000 - (progress * 10)}
              className="transition-all duration-1000 ease-linear"
            />

            {/* Destination Hub (House) */}
            <g transform="translate(340, 40)">
              <circle r="12" fill="#ea580c" className="animate-pulse opacity-20" />
              <circle r="6" fill="#ea580c" />
              <text y="25" x="-10" fill="white" fontSize="8" fontWeight="bold" className="uppercase tracking-widest">Target Site</text>
            </g>

            {/* Starting Point (Office) */}
            <g transform="translate(50, 250)">
              <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#475569" />
              <text y="20" x="-15" fill="#475569" fontSize="8" fontWeight="bold" className="uppercase tracking-widest">Dispatch HQ</text>
            </g>

            {/* Moving Technician (Truck) */}
            <g className="transition-all duration-1000 ease-linear"
               style={{ 
                 transform: `translate(${50 + (progress * 3)}px, ${250 - (progress * 2)}px)`
               }}>
              <rect x="-10" y="-10" width="20" height="20" rx="6" fill="white" className="shadow-lg" />
              <text x="-5" y="4" fontSize="10">🚚</text>
              {status === 'EN_ROUTE' && (
                <circle r="15" fill="none" stroke="#ea580c" strokeWidth="1" className="animate-ping" />
              )}
            </g>
          </svg>

          {/* Map Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-slate-800/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Live GPS Telemetry</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400">Current Speed: {status === 'EN_ROUTE' ? '35 mph' : '0 mph'}</span>
          </div>
        </div>

        {/* Footer Technician Details */}
        <div className="p-6 md:p-8 bg-white space-y-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" 
                  alt="Technician" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-grow">
              <h4 className="font-black text-slate-900">Ahmed Mohamed</h4>
              <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Master Service Tech</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-orange-500 text-xs">★★★★★</span>
                <span className="text-xs font-bold text-slate-500">(1,240 jobs)</span>
              </div>
            </div>
            <a href={`tel:${formData.phone}`} className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-100 transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setSubmitted(false)}
              className="py-3 px-4 bg-slate-50 text-slate-500 rounded-xl font-bold text-xs hover:bg-slate-100 transition-all uppercase tracking-widest"
            >
              Modify Request
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="py-3 px-4 bg-blue-900 text-white rounded-xl font-bold text-xs hover:bg-blue-800 transition-all shadow-md uppercase tracking-widest"
            >
              New Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-6 relative overflow-hidden"
    >
      {isSending && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="font-extrabold text-slate-900 uppercase tracking-widest text-xs">Processing Booking...</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
          <input 
            type="email" 
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
          <input 
            type="tel" 
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Category</label>
          <select 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer font-bold"
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
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Urgency Level</label>
        <div className="flex gap-4">
          {['Standard', 'Urgent', 'Emergency'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setFormData({...formData, urgency: level as any})}
              className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${
                formData.urgency === level 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Describe the Issue</label>
        <textarea 
          required
          rows={4}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none font-medium"
          placeholder="Please provide details..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <button 
        type="submit"
        disabled={isSending}
        className="w-full bg-[#ea580c] text-white py-5 rounded-xl font-black text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 active:scale-95 uppercase tracking-widest disabled:opacity-50"
      >
        Confirm & Notify Tech
      </button>
    </form>
  );
};

export default BookingForm;
