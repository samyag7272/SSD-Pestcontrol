import { Link, Outlet } from 'react-router-dom';
import { Phone, Mail, Clock, MessageCircle, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { servicesData, locationsData } from '../data';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const openBooking = () => alert("Popup 305");

  return (
    <>
      {/* Announcement Bar */}
      <div className="ann-bar">
        <a href="tel:919594227724" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Phone size={14} />
          +91 9594227724
        </a>
        <div className="ann-center">
          <span className="ann-badge">🇮🇳 All Over India</span>
          <span style={{ opacity: .7 }}>|</span>
          <span className="ann-badge">⏰ 24x7 Available</span>
        </div>
        <Link to="/contact-us" style={{ fontWeight: 600 }}>Pest Control Experts →</Link>
      </div>

      {/* Navigation */}
      <div className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="nav-logo" aria-label="SSD Pest Control Home">
            <div className="nav-logo-icon" aria-hidden="true">SSD</div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">SSD Pest Control</span>
              <span className="nav-logo-sub">ISO 9001:2015 Certified</span>
            </div>
          </Link>
          <div className="nav-links" role="list">
            <Link to="/" className="nav-link" role="listitem">Home</Link>
            <Link to="/about-us" className="nav-link" role="listitem">About Us</Link>
            <div className="drop-wrap" role="listitem">
              <Link to="/our-services" className="nav-link has-drop" aria-haspopup="true">Our Services</Link>
              <div className="dropdown" role="menu" aria-label="Services submenu">
                <div className="drop-cols">
                  {servicesData.map((srv) => (
                    <Link key={srv.id} to={`/our-services/${srv.id}`} role="menuitem">{srv.name}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="drop-wrap" role="listitem">
              <Link to="/our-locations" className="nav-link has-drop" aria-haspopup="true">Our Locations</Link>
              <div className="dropdown" role="menu" aria-label="Locations submenu">
                {locationsData.map((loc) => (
                   <Link key={loc.id} to={`/our-locations/${loc.id}`} role="menuitem">Pest Control {loc.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/blogs" className="nav-link" role="listitem">Blogs</Link>
            <Link to="/contact-us" className="nav-link" role="listitem">Contact Us</Link>
          </div>
          <div className="nav-right">
            <button className="btn-book hidden lg:block" onClick={openBooking} aria-label="Book Free Inspection">Book Free Inspection</button>
            <button className="lg:hidden text-ink-900 border-none bg-transparent flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[104px] left-0 w-full bg-white border-b border-slate-200 shadow-lg max-h-[calc(100vh-104px)] overflow-y-auto z-[999]">
           <nav className="flex flex-col p-4 space-y-4">
             <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Home</Link>
             <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">About Us</Link>
             
             <div>
               <button onClick={() => toggleDropdown('services')} className="flex items-center justify-between w-full text-base font-medium">
                 Our Services <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
               </button>
               {activeDropdown === 'services' && (
                 <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100 flex flex-col items-start">
                    <Link to="/our-services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium py-1" style={{ color: "var(--brand)" }}>All Services</Link>
                   {servicesData.map((srv) => (
                      <Link key={srv.id} to={`/our-services/${srv.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-600 py-1">{srv.name}</Link>
                   ))}
                 </div>
               )}
             </div>

             <div>
               <button onClick={() => toggleDropdown('locations')} className="flex items-center justify-between w-full text-base font-medium">
                 Our Locations <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`} />
               </button>
               {activeDropdown === 'locations' && (
                 <div className="pl-4 mt-2 space-y-2 border-l-2 border-slate-100 flex flex-col items-start">
                   {locationsData.map((loc) => (
                      <Link key={loc.id} to={`/our-locations/${loc.id}`} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-600 py-1">Pest Control {loc.name}</Link>
                   ))}
                 </div>
               )}
             </div>

             <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Blogs</Link>
             <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">Contact Us</Link>

             <button className="btn-book w-full mt-4" style={{ animation: 'none' }} onClick={() => { openBooking(); setIsMobileMenuOpen(false); }}>
               Book Free Inspection
             </button>
           </nav>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer" aria-label="Site footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon" aria-hidden="true">SSD</div>
              <div className="footer-logo-name">SSD Pest Control</div>
            </div>
            <p className="footer-about">Established in 2010 — trusted, safe, eco-friendly pest control across Mumbai, Bandra, Thane, Navi Mumbai, Amravati, Paratwada, and Nashik. ISO 9001:2015 certified. Government & BMC Approved.</p>
            <div className="footer-social" aria-label="Social media links">
              <a href="https://www.facebook.com/ssdpestcontrol/" className="social-btn" aria-label="SSD Pest Control on Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/ssd_pest_control_services.68/" className="social-btn" aria-label="SSD Pest Control on Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCxB9q1xN9fejlf-mxrhjO7w" className="social-btn" aria-label="SSD Pest Control on YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 00-1.95 1.97A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Our Services</div>
            <ul className="footer-links">
              {servicesData.slice(0, 16).map(srv => (
                 <li key={srv.id}><Link to={`/our-services/${srv.id}`}>{srv.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Our Branches</div>
            {locationsData.map(loc => (
              <div key={loc.id} className="footer-branch">
                <div className="branch-city">{loc.name}</div>
                <div className="branch-phone"><a href="tel:919594232394" style={{ color: 'inherit' }}>+91 9594232394</a></div>
              </div>
            ))}
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.55)' }}>Email: <a href="mailto:info@ssdpestcontrol.com" style={{ color: 'rgba(255,255,255,.7)' }}>info@ssdpestcontrol.com</a></div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.55)', marginTop: '4px' }}>Phone: <a href="tel:919594227724" style={{ color: 'rgba(255,255,255,.7)' }}>+91 9594227724</a></div>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/our-locations">Our Locations</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/admin" style={{ color: "var(--brand)" }}>Admin Dashboard</Link></li>
            </ul>
            <div style={{ marginTop: '24px' }}>
              <div className="footer-col-title">Availability</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>Monday – Sunday<br />24 × 7 Services<br />All Over India</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">Copyright © 2026 Ssdpestcontrol | All rights reserved</div>
          <div className="footer-dev">Designed and developed by <a href="#" target="_blank" rel="noopener noreferrer">Akshar Digital Media</a></div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919594227724" className="wa-float" aria-label="Chat with SSD Pest Control on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Mobile CTA Bar */}
      <div className="mobile-cta-bar" role="complementary" aria-label="Quick action bar">
        <div className="mcb-price">
          <div className="mcb-label">Inspection</div>
          <div className="mcb-val">FREE</div>
        </div>
        <button className="mcb-btn" onClick={() => alert("Popup 305")} aria-label="Book Now">Book Now</button>
        <a href="https://wa.me/919594227724" className="mcb-wa" aria-label="WhatsApp us" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <Toast />
    </>
  );
}

function Toast() {
  const [toastData, setToastData] = useState({ name: 'Suresh M. just booked', time: '3 minutes ago · Dahisar' });
  const [key, setKey] = useState(0);

  useEffect(() => {
    const dataList = [
      { name: 'Suresh M. just booked', time: '3 minutes ago · Dahisar' },
      { name: 'Meena K. just booked', time: '7 minutes ago · Thane' },
      { name: 'Rahul S. just booked', time: '12 minutes ago · Bandra' },
      { name: 'Priya N. just booked', time: '18 minutes ago · Navi Mumbai' },
      { name: 'Anil D. just booked', time: '22 minutes ago · Andheri' },
    ];
    let ti = 0;
    const interval = setInterval(() => {
      ti = (ti + 1) % dataList.length;
      setToastData(dataList[ti]);
      setKey(prev => prev + 1); // trigger re-render / animation
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div key={key} className="toast" role="status" aria-live="polite">
      <div className="toast-success" aria-hidden="true">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div>
        <div className="toast-name">{toastData.name}</div>
        <div className="toast-time">{toastData.time}</div>
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-1 flex flex-col w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
