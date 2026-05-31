import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Gem } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">About Us</h1>
          <div className="flex items-center text-sm font-medium text-brand-50">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Protecting Homes. Preserving Health. Since 2010.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Established in 2010, SSD Pest Control Services Pvt. Ltd. has built a solid reputation for delivering trusted, effective pest management solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With certified experts and innovative techniques, we protect your homes, businesses, and communities from all kinds of pests — ensuring peace of mind and a healthier environment. We are an ISO 9001:2015 certified company, approved by the Government and BMC.
            </p>
          </div>
           {/* Stats */}
           <div className="grid grid-cols-2 gap-6 relative">
              <div className="bg-surface p-6 rounded-3xl text-center">
                 <div className="text-4xl font-heading font-black text-brand-primary mb-2">10K+</div>
                 <div className="font-medium text-ink-900">Happy Customer</div>
              </div>
              <div className="bg-surface p-6 rounded-3xl text-center mt-12">
                 <div className="text-4xl font-heading font-black text-brand-primary mb-2">24/7</div>
                 <div className="font-medium text-ink-900">Support</div>
              </div>
              <div className="bg-surface p-6 rounded-3xl text-center -mt-12">
                 <div className="text-4xl font-heading font-black text-brand-primary mb-2">50+</div>
                 <div className="font-medium text-ink-900">Experts</div>
              </div>
              <div className="bg-surface p-6 rounded-3xl text-center">
                 <div className="text-4xl font-heading font-black text-brand-primary mb-2">15+</div>
                 <div className="font-medium text-ink-900">Years Exp.</div>
              </div>
           </div>
        </div>
      </section>

      {/* Vision Mission Goal */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                 <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6"><Eye size={32} /></div>
                 <h3 className="text-2xl font-bold font-heading mb-4">Our Vision</h3>
                 <p className="text-slate-600">To be India's most trusted and innovative pest control company, creating healthier, pest-free environments for generations to come.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                 <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6"><Target size={32} /></div>
                 <h3 className="text-2xl font-bold font-heading mb-4">Our Mission</h3>
                 <p className="text-slate-600">To provide high-quality, affordable, and professional pest management solutions that ensure long-term health and hygiene.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                 <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-primary mb-6"><ShieldCheck size={32} /></div>
                 <h3 className="text-2xl font-bold font-heading mb-4">Our Goal</h3>
                 <p className="text-slate-600">Nationwide expansion, continuous innovation in eco-friendly treatments, and becoming the #1 pest control brand in every operating region.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-dark text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-12">Our Core Values</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <span className="px-6 py-3 bg-white/10 rounded-full font-medium flex items-center"><Gem size={18} className="mr-2 text-brand-primary" /> Customer First</span>
              <span className="px-6 py-3 bg-white/10 rounded-full font-medium flex items-center"><Gem size={18} className="mr-2 text-brand-primary" /> Integrity & Transparency</span>
              <span className="px-6 py-3 bg-white/10 rounded-full font-medium flex items-center"><Gem size={18} className="mr-2 text-brand-primary" /> Excellence</span>
              <span className="px-6 py-3 bg-white/10 rounded-full font-medium flex items-center"><Gem size={18} className="mr-2 text-brand-primary" /> Innovation</span>
              <span className="px-6 py-3 bg-white/10 rounded-full font-medium flex items-center"><Gem size={18} className="mr-2 text-brand-primary" /> Responsibility</span>
           </div>
         </div>
      </section>
    </div>
  );
}
