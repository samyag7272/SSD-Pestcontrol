import { useParams, Link } from 'react-router-dom';
import { locationsData } from '../data';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function LocationDetail() {
  const { locationId } = useParams<{ locationId: string }>();
  const location = locationsData.find(l => l.id === locationId);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Location not found</h2>
          <Link to="/our-locations" className="text-brand-primary hover:underline">Return to all locations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen pb-20">
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Pest Control Services {location.name}</h1>
          <div className="flex flex-wrap items-center text-sm font-medium text-brand-50 gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/our-locations" className="hover:text-white">Our Locations</Link>
            <span>/</span>
            <span className="text-white">{location.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold mb-6 text-ink-900">#1 Pest Control Company in {location.name}</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Looking for reliable pest control in {location.name}? SSD Pest Control Services Pvt. Ltd. provides government-approved, eco-friendly, and highly effective pest management solutions for residential and commercial properties in {location.name}.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
             <div className="flex items-start mb-4">
               <MapPin className="text-brand-primary mr-3 shrink-0 mt-1" />
               <div>
                  <h4 className="font-bold text-ink-900">Branch Address</h4>
                  <p className="text-slate-600 mt-1">{location.address}</p>
               </div>
             </div>
             <div className="flex items-center">
               <Phone className="text-brand-primary mr-3 shrink-0" />
               <div>
                  <h4 className="font-bold text-ink-900">Contact Number</h4>
                  <a href={`tel:${location.phone.replace(/[^+0-9]/g, '')}`} className="text-brand-primary font-bold hover:underline mt-1 block">{location.phone}</a>
               </div>
             </div>
          </div>

          <div className="flex gap-4">
             <button onClick={() => alert('Popup 305')} className="bg-gradient-to-r from-brand-primary to-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all animate-pulse-glow">
                Book Free Inspection
             </button>
          </div>
        </div>

        <div className="bg-slate-200 rounded-3xl w-full aspect-square overflow-hidden shadow-lg relative">
           <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold flex-col bg-white/50">
              <MapPin size={48} className="mb-4 text-brand-primary" />
              <span>[Embedded Google Map for {location.name}]</span>
           </div>
        </div>
      </div>
    </div>
  );
}
