
import React, { useState } from 'react';
import { FLEET, BUSINESS_INFO } from '../constants';
import { Fuel, Gauge, Shield, Users } from 'lucide-react';

const Fleet: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Luxury', 'SUV', 'Sedan', 'Economical'];

  const filteredCars = filter === 'All' 
    ? FLEET 
    : FLEET.filter(car => car.type === filter);

  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Collection</h2>
            <p className="text-4xl font-bold text-slate-900 font-serif">Explore Our Premium Fleet</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest">
                  {car.type}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{car.name}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {car.features.slice(0, 4).map((feat, i) => (
                    <div key={i} className="flex items-center text-slate-500 text-sm">
                      <Shield className="w-4 h-4 mr-2 text-blue-500" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <span className="block text-2xl font-black text-blue-600">{car.price}</span>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-tighter">No hidden fuel charges*</span>
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp1.replace('+', '')}?text=Hi, I want to rent the ${car.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
                  >
                    Rent Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
