import React, { useState } from 'react';
import { BookingFormData, ServiceType } from '../types';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 p-12 rounded-3xl border-2 border-green-200 text-center space-y-4">
        <div className="text-6xl text-green-500">✅</div>
        <h3 className="text-3xl font-extrabold text-green-900">Request Sent!</h3>
        <p className="text-green-800 text-lg">
          A ProService USA technician will contact you at <strong>{formData.phone}</strong> within the next hour.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-green-900 font-bold hover:underline"
        >
          Send another request
        </button>
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