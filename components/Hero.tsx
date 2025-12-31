
import React from 'react';
import { ChevronRight, ShieldCheck, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp1.replace('+', '')}?text=Hello, I would like to inquire about car rental service in Islamabad.`;

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Serving Islamabad & Rawalpindi 24/7</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-serif">
            Premium Car Rentals <br />
            <span className="text-blue-500">Tailored For You.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Experience comfort and luxury with the largest fleet of cars in PWD, Islamabad. 
            From luxury V8s for weddings to economical sedans for city drives.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#fleet"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              Explore Fleet
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20"
            >
              Book via WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-blue-400 h-5 w-5" />
              <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-blue-400 h-5 w-5" />
              <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">Free Pickup ISB</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="text-blue-400 h-5 w-5" />
              <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Badge Decor */}
      <div className="absolute right-10 bottom-10 hidden lg:block animate-bounce-slow">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-xl">4.9</div>
            <div>
              <p className="text-white font-bold">Excellent Rating</p>
              <p className="text-slate-300 text-xs">Based on 500+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
