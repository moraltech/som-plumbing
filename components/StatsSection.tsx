import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Electrical', rating: 4.9 },
  { name: 'Plumbing', rating: 4.8 },
  { name: 'HVAC', rating: 4.9 },
  { name: 'Emergency', rating: 5.0 },
];

const COLORS = ['#004AAD', '#FF6B00', '#2D3748', '#3182CE'];

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Our Performance</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Data-Driven Quality Assurance</h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We monitor every service call to ensure maximum efficiency and customer satisfaction.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">📈</div>
                <div>
                  <h4 className="font-bold text-lg">98% Satisfaction Rate</h4>
                  <p className="text-slate-400">Based on over 100,000 feedback submissions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm h-[400px]">
             <h4 className="text-center font-bold text-slate-400 mb-6 uppercase tracking-wider text-xs">Satisfaction by Dept.</h4>
             <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#cbd5e1" axisLine={false} tickLine={false} />
                  <YAxis hide domain={[4, 5]} />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}} 
                    contentStyle={{backgroundColor: '#1a202c', border: 'none', borderRadius: '12px'}}
                    itemStyle={{color: '#fff'}}
                  />
                  <Bar dataKey="rating" radius={[8, 8, 0, 0]} barSize={40}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;