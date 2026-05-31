import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { locationsData } from '../data';

export default function Contact() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <div className="flex items-center text-sm font-medium text-brand-50">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-ink-900">Head Office</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                 <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-primary mr-4 shrink-0"><MapPin /></div>
                 <div>
                    <h4 className="font-bold text-ink-900 mb-1">Address</h4>
                    <p className="text-slate-600">24, Suryakiran Society, MHB Colony Chuna Bhatti, SN Dubey Rd, Dahisar East, Mumbai 400068</p>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-primary mr-4 shrink-0"><Phone /></div>
                 <div>
                    <h4 className="font-bold text-ink-900 mb-1">Phone</h4>
                    <a href="tel:919594232394" className="text-slate-600 hover:text-brand-primary">+91 9594232394</a>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-primary mr-4 shrink-0"><Mail /></div>
                 <div>
                    <h4 className="font-bold text-ink-900 mb-1">Email</h4>
                    <a href="mailto:info@ssdpestcontrol.com" className="text-slate-600 hover:text-brand-primary">info@ssdpestcontrol.com</a>
                 </div>
              </div>
              <div className="flex items-start">
                 <div className="w-12 h-12 bg-success-500/10 rounded-xl flex items-center justify-center text-success-500 mr-4 shrink-0"><Clock /></div>
                 <div>
                    <h4 className="font-bold text-ink-900 mb-1">Working Hours</h4>
                    <p className="text-slate-600">Monday - Sunday 24 X 7 Services</p>
                 </div>
              </div>
            </div>

            <h2 className="text-2xl font-heading font-bold mb-6 text-ink-900">Our Branches</h2>
            <div className="grid sm:grid-cols-2 gap-4">
               {locationsData.map(loc => (
                 <Link key={loc.id} to={`/our-locations/${loc.id}`} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-primary transition-colors">
                    <h4 className="font-bold text-brand-dark mb-1">{loc.name}</h4>
                    <p className="text-sm font-medium text-slate-600">{loc.phone}</p>
                 </Link>
               ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_4px_12px_rgba(15,23,42,0.06)] h-fit border border-slate-100">
             <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Send us a message</span>
             <h2 className="text-3xl font-heading font-bold mb-8">Quick Response.</h2>
             <form onSubmit={e => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transform transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink-900 mb-1">Phone No</label>
                  <input type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transform transition-all" placeholder="Your Phone Number" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-primary to-brand-dark text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all mt-4 animate-pulse-glow">
                  Submit Request
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
