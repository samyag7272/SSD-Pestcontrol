import { Link } from 'react-router-dom';
import { locationsData } from '../data';
import { MapPin, Phone } from 'lucide-react';

export default function Locations() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Our Locations</h1>
          <div className="flex items-center text-sm font-medium text-brand-50">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Our Locations</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Pan-Maharashtra & Beyond</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Find SSD Pest Control Near You</h2>
            <p className="text-lg text-slate-600">
              We operate across multiple locations to provide rapid, reliable, and same-day pest control services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationsData.map((loc) => (
              <Link key={loc.id} to={`/our-locations/${loc.id}`} className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-transform border border-slate-100 group">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-brand-primary transition-colors">Pest Control {loc.name}</h3>
                <div className="flex items-center text-slate-600 text-sm font-medium">
                  <Phone size={14} className="mr-2" /> {loc.phone}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
