import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data';
import { CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/our-services" className="text-brand-primary hover:underline">Return to all services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">{service.name}</h1>
          <div className="flex flex-wrap items-center text-sm font-medium text-brand-50 gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/our-services" className="hover:text-white">Our Services</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <div className="w-full aspect-[16/9] bg-slate-200 rounded-3xl overflow-hidden shadow-lg mb-8">
             <img src="https://images.unsplash.com/photo-1584820927498-cafece38a49c?auto=format&fit=crop&q=80&w=1200" alt={service.name} className="w-full h-full object-cover" />
           </div>
           
           <h2 className="text-3xl font-heading font-bold mb-6 text-ink-900">About {service.name}</h2>
           <p className="text-lg text-slate-600 leading-relaxed mb-8">
             {service.description} SSD Pest Control provides comprehensive and effective {service.shortName.toLowerCase()} solutions to ensure your safety and hygiene. Our certified experts use industry-leading techniques tailored to your specific situation.
           </p>

           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_12px_rgba(15,23,42,0.06)] mb-8">
             <h3 className="text-2xl font-bold font-heading mb-6">Key Benefits</h3>
             <ul className="space-y-4">
               {service.benefits.map((benefit, idx) => (
                 <li key={idx} className="flex items-start">
                   <CheckCircle2 className="text-success-500 mr-3 shrink-0 mt-0.5" />
                   <span className="text-slate-700 font-medium">{benefit}</span>
                 </li>
               ))}
               <li className="flex items-start">
                   <CheckCircle2 className="text-success-500 mr-3 shrink-0 mt-0.5" />
                   <span className="text-slate-700 font-medium">100% Satisfaction Guarantee</span>
                 </li>
             </ul>
           </div>
           
           <button onClick={() => alert('Popup 305')} className="bg-gradient-to-r from-brand-primary to-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_4px_12px_rgba(0,102,255,0.2)] hover:shadow-[0_8px_24px_rgba(0,102,255,0.3)] transition-all animate-pulse-glow">
              Get free quote
           </button>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-brand-50 p-8 rounded-3xl">
            <h3 className="text-xl font-bold font-heading mb-6 text-brand-dark">Why Choose SSD?</h3>
            <ul className="space-y-4">
              <li className="flex items-center"><ShieldCheck size={20} className="text-brand-primary mr-3" /> <span className="font-medium">ISO 9001:2015 Certified</span></li>
              <li className="flex items-center"><ShieldCheck size={20} className="text-brand-primary mr-3" /> <span className="font-medium">Govt & BMC Approved</span></li>
              <li className="flex items-center"><ShieldCheck size={20} className="text-brand-primary mr-3" /> <span className="font-medium">15+ Years Experience</span></li>
              <li className="flex items-center"><ShieldCheck size={20} className="text-brand-primary mr-3" /> <span className="font-medium">Eco-Friendly Methods</span></li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
             <h3 className="text-xl font-bold font-heading mb-4 text-ink-900">Coverage Area</h3>
             <p className="text-slate-600 mb-4 text-sm">We provide this service all over India, with specialized rapid response teams in Maharashtra and Ahmedabad.</p>
             <div className="flex items-center text-brand-primary font-bold">
               <MapPin size={20} className="mr-2" /> All Over India
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
