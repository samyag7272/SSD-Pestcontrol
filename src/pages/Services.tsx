import { Link } from 'react-router-dom';
import { servicesData } from '../data';

export default function Services() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <div className="flex items-center text-sm font-medium text-brand-50">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Our Services</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((srv, index) => (
              <Link key={srv.id} to={`/our-services/${srv.id}`} className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-transform border border-slate-100 p-6 flex flex-col">
                 <div className="w-full h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1584820927498-cafece38a49c?auto=format&fit=crop&q=80&w=600&sig=${index + 10}`} alt={srv.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h3 className="text-xl font-bold font-heading text-ink-900 mb-3">{srv.name}</h3>
                 <p className="text-slate-600 flex-grow mb-6">{srv.description}</p>
                 <span className="text-brand-primary font-bold hover:text-brand-dark flex items-center">
                   Read More →
                 </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
