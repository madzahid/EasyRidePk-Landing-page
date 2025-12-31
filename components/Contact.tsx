
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
            <p className="text-4xl font-bold text-slate-900 font-serif mb-8">Ready to Start Your Journey?</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Our Office</h4>
                  <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Support</h4>
                  <p className="text-slate-600">{BUSINESS_INFO.phone1}</p>
                  <p className="text-slate-600">{BUSINESS_INFO.phone2}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600">Open 24/7 for Bookings & Support</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4 italic font-serif">Quick Booking?</h3>
              <p className="text-slate-400 mb-6">WhatsApp is our fastest channel. Get instant quotes and vehicle availability within minutes.</p>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp1}`}
                className="inline-flex items-center space-x-2 bg-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Open WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] overflow-hidden min-h-[500px] border border-slate-100 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/20">
              <MapPin size={32} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Located in PWD</h3>
            <p className="text-slate-600 mb-8 max-w-sm">Find us in Lane 17A, Sector D, PWD Islamabad. We offer free vehicle delivery within a 5km radius.</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
