
import React from 'react';
import { Users, Timer, CreditCard, HeartHandshake, UserCheck, Settings } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Chauffeur Driven',
      desc: 'Highly trained and verified drivers for a stress-free journey.',
      icon: Users,
    },
    {
      title: '24/7 Assistance',
      desc: 'Our support team is always ready to assist you anytime, anywhere.',
      icon: Timer,
    },
    {
      title: 'Self Drive Option',
      desc: 'Rent and drive yourself with our flexible self-drive policies.',
      icon: UserCheck,
    },
    {
      title: 'Competitive Rates',
      desc: 'Best pricing in Islamabad and Rawalpindi with no hidden costs.',
      icon: CreditCard,
    },
    {
      title: 'Pristine Maintenance',
      desc: 'All our vehicles undergo regular inspections for safety and comfort.',
      icon: Settings,
    },
    {
      title: 'Trust & Reliability',
      desc: 'Serving thousand of satisfied customers across Pakistan.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
          <p className="text-4xl font-bold text-slate-900 font-serif">Better Experience, Better Journeys</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
