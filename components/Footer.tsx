
import React from 'react';
import { Car, Instagram, Facebook, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Pindi-ISB Rentals
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The most trusted car rental platform in Islamabad Capital Territory. Delivering excellence since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Home</a></li>
              <li><a href="#features" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Why Choose Us</a></li>
              <li><a href="#fleet" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Luxury Car Rental</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Wedding Protocol</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Corporate Travel</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Airport Pick & Drop</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm">{BUSINESS_INFO.address}</li>
              <li className="text-slate-900 font-bold text-sm">{BUSINESS_INFO.phone1}</li>
              <li className="text-slate-900 font-bold text-sm">{BUSINESS_INFO.phone2}</li>
              <li className="text-slate-500 text-sm">{BUSINESS_INFO.email}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Pindi-ISB Premium Rentals. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
