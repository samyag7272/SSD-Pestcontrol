import { Link } from 'react-router-dom';

export default function Blogs() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">Blogs</h1>
          <div className="flex items-center text-sm font-medium text-brand-50">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Blogs</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
             <h2 className="text-2xl font-bold text-slate-500">Coming Soon</h2>
             <p className="text-slate-400 mt-2">Our blog section is currently being updated with exciting new content.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
