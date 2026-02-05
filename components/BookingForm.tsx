
import React, { useState, useEffect } from 'react';
import { BookingFormData, ServiceType, Technician } from '../types';

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
  const [status, setStatus] = useState<ServiceStatus>('REQUESTED');
  const [eta, setEta] = useState(45); // minutes

  // Simulate real-time status updates after submission
  useEffect(() => {
    if (submitted) {
      // Fix: Use any[] to avoid NodeJS.Timeout namespace error in browser environment
      const timers: any[] = [];

      // Step 1: Assigning technician after 3 seconds
      timers.push(setTimeout(() => setStatus('ASSIGNING'), 3000));

      // Step 2: En route after 8 seconds
      timers.push(setTimeout(() => {
        setStatus('EN_ROUTE');
        setEta(28);
      }, 8000));

      // Step 3: Optional delay simulation at 15 seconds
      timers.push(setTimeout(() => {
        if (Math.random() > 0.5) {
          setStatus('DELAYED');
          setEta(35);
        }
      }, 15000));

      // Step 4: Arrived/On Site after 25 seconds for demo purposes
      timers.push(setTimeout(() => {
        setStatus('ON_SITE');
        setEta(0);
      }, 25000));

      return () => timers.forEach(clearTimeout);
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      case 'DELAYED': return 'Slight Delay in Traffic';
      case 'ON_SITE': return 'Technician on Site';
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-8 animate-fadeIn">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900">Live Service Tracking</h3>
            <p className="text-slate-500 text-sm">Booking ID: #HDC-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
          <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>

        {/* Real-time Visualizer */}
        <div className="relative pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold text-slate-700">{getStatusLabel(status)}</span>
            {eta > 0 && <span className="text-sm font-bold text-orange-600">ETA: {eta} mins</span>}
          </div>
          
          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
            <div 
              className={`h-full transition-all duration-1000 ease-out ${status === 'DELAYED' ? 'bg-red-500' : 'bg-orange-500'}`}
              style={{ 
                width: status === 'REQUESTED' ? '20%' : 
                       status === 'ASSIGNING' ? '40%' : 
                       status === 'EN_ROUTE' ? '75%' : 
                       status === 'DELAYED' ? '70%' : '100%' 
              }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            <span>Requested</span>
            <span>Assigned</span>
            <span>En Route</span>
            <span>Arrived</span>
          </div>
        </div>

        {/* Technician Info (Appears when assigned) */}
        {(status !== 'REQUESTED' && status !== 'ASSIGNING') && (
          <div className="bg-slate-50 p-6 rounded-2xl flex items-center gap-5 border border-slate-100">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center overflow-hidden shadow-inner border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" 
                alt="Ahmed Mohamed" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-extrabold text-slate-900">Ahmed Mohamed</h4>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Master Plumbing Specialist</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-orange-500 text-xs">★★★★★</span>
                <span className="text-xs font-bold text-slate-700">4.9</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href={`tel:${formData.phone}`} className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {status === 'ON_SITE' && (
          <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center gap-3 text-green-800">
            <span className="text-xl">📍</span>
            <p className="text-sm font-semibold">Ahmed has arrived at your location. Please ensure the work area is accessible.</p>
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setSubmitted(false)}
            className="flex-1 text-slate-500 text-sm font-bold hover:text-slate-800 transition-colors"
          >
            Cancel Request
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="flex-1 bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-all text-sm"
          >
            Update Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
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
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
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
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Category</label>
          <select 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
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
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          placeholder="e.g., Leaking water heater..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-orange-600 text-white py-4 rounded-xl font-extrabold text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-900/20 active:scale-95"
      >
        Confirm Booking Request
      </button>
    </form>
  );
};

export default BookingForm;