import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { appendRowToSheet } from '../lib/googleSheets';

export default function Home() {
  const [pestIndex, setPestIndex] = useState(0);
  const pests = ['Cockroach', 'Termites', 'Bed Bug', 'Mosquito', 'Rat', 'Bird', 'Fly', 'Rodent', 'Spider', 'Wood Borer'];

  // Fade Up Animation
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => io.observe(el));
    
    return () => io.disconnect();
  }, []);

  // Pest Name Rotator
  useEffect(() => {
    const pestRotate = document.getElementById('pest-rotate');
    const interval = setInterval(() => {
      if (pestRotate) {
        pestRotate.style.opacity = '0';
        setTimeout(() => {
          setPestIndex((prev) => (prev + 1) % pests.length);
          pestRotate.style.opacity = '1';
        }, 300);
      }
    }, 2200);
    return () => clearInterval(interval);
  }, [pests.length]);

  return (
    <div>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="hero-inner container">
          <div className="hero-content fade-up">
            <div className="hero-eyebrow">Welcome to antibugs</div>
            <h1 className="hero-h1" id="hero-h1">
              Protect your home from<br />
              <span className="hero-rotate" id="pest-rotate" style={{ transition: 'opacity 0.3s' }}>
                {pests[pestIndex]}
              </span>
            </h1>
            <p className="hero-sub">SSD Pest Control Services Pvt. Ltd. — Certified experts delivering safe, eco-friendly pest management since 2010. Government & BMC Approved.</p>
            <div className="hero-trust" role="list" aria-label="Key certifications">
              <div className="trust-item" role="listitem"><span className="trust-dot"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>ISO 9001:2015 Certified</div>
              <div className="trust-item" role="listitem"><span className="trust-dot"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Government & BMC Approved</div>
              <div className="trust-item" role="listitem"><span className="trust-dot"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>15+ Years of Excellence</div>
              <div className="trust-item" role="listitem"><span className="trust-dot"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Same Day Service Available</div>
              <div className="trust-item" role="listitem"><span className="trust-dot"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>Safe, Odorless & Eco-Friendly</div>
              <div className="trust-item" role="listitem"><span className="trust-dot"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>100% Satisfaction Guarantee</div>
            </div>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => alert('Popup 305')} aria-label="Get free quote">Get Free Quote</button>
              <button className="btn-secondary" onClick={() => alert('Popup 305')} aria-label="Book free inspection">Book Free Inspection</button>
            </div>
          </div>
          <div className="hero-img-col" aria-hidden="true">
            <div className="hero-img-card">
              <div className="hero-img-placeholder">
                <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true"><circle cx="40" cy="30" r="12"/><path d="M20 60c0-11 9-20 20-20s20 9 20 20"/><path d="M55 25c4 2 7 6 7 11"/><path d="M25 25c-4 2-7 6-7 11"/></svg>
                <span>Service Team Photo</span>
              </div>
            </div>
            <div className="badge-float badge-float-1" aria-hidden="true">
              <div className="badge-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div><div className="badge-val">15+</div><div className="badge-lbl">Years Experience</div></div>
            </div>
            <div className="badge-float badge-float-2" aria-hidden="true">
              <div className="badge-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div><div className="badge-val">ISO</div><div className="badge-lbl">9001:2015 Certified</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Strip */}
      <div className="strip-need" role="complementary" aria-label="Contact strip">
        <div className="strip-inner">
          <div>
            <div className="strip-eyebrow">Need Help?</div>
            <div className="strip-phone"><a href="tel:919594232394" style={{ color: 'inherit' }}>+91 9594232394</a></div>
            <div className="strip-sub">Monday – Sunday &nbsp;|&nbsp; 24 × 7 Services</div>
          </div>
          <button className="btn-white" onClick={() => alert('Popup 305')}>Get Free Quote</button>
        </div>
      </div>

      {/* Schedule Strip */}
      <div className="schedule-strip">
        <div className="schedule-inner">
          <div>
            <div className="sch-eye">Get Protected from Pest</div>
            <div className="sch-head">Let's start scheduling home visits.</div>
          </div>
          <button className="btn-primary" onClick={() => alert('Popup 305')}>Get Free Quote</button>
        </div>
      </div>

      {/* Who We Are */}
      <section className="section" aria-labelledby="who-h2">
        <div className="container">
          <div className="who-grid">
            <div className="who-img" aria-hidden="true">
              <div className="who-img-ph">
                <svg viewBox="0 0 120 120" fill="none" stroke="#93c5fd" strokeWidth="1.5" aria-hidden="true"><rect x="20" y="20" width="80" height="80" rx="8"/><path d="M20 50h80M50 50v50"/><circle cx="65" cy="35" r="8"/></svg>
              </div>
            </div>
            <div className="fade-up">
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-h2" id="who-h2">Protecting Homes.<br/>Preserving Health.<br/>Since 2010.</h2>
              <p className="who-body">Established in 2010, SSD Pest Control Services Pvt. Ltd. has built a solid reputation for delivering trusted, effective pest management solutions. With certified experts and innovative techniques, we protect your homes, businesses, and communities from all kinds of pests — ensuring peace of mind and a healthier environment.</p>
              <Link to="/our-services" className="btn-outline">Our Services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt" aria-labelledby="services-h2">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="fade-up">
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-h2" id="services-h2">Complete Pest Solutions Under One Roof</h2>
            <p className="section-sub" style={{ margin: '10px auto 0' }}>SSD Pest Control offers a wide range of certified, safe, and effective pest control services tailored for homes, offices, societies, and commercial properties.</p>
          </div>
          <div className="services-grid">
            <Link to="/our-services/cockroach-pest-control-services" className="service-card fade-up" aria-label="Cockroach Pest Control Services">
              <div className="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="4" ry="6"/><path d="M8 8L5 5M16 8l3-5M8 12H4M20 12h-4M8 16l-3 3M16 16l3 3"/></svg></div>
              <div className="sc-title">Cockroach Pest Control</div>
              <p className="sc-desc">Targeted treatments to eliminate cockroach infestations from kitchens, bathrooms, and common areas.</p>
              <div className="sc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
            </Link>
            <Link to="/our-services/general-pest-control-services" className="service-card fade-up" aria-label="General Pest Control Services">
              <div className="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/></svg></div>
              <div className="sc-title">General Pest Control</div>
              <p className="sc-desc">Comprehensive pest management covering all common pests for residential and commercial premises.</p>
              <div className="sc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
            </Link>
            <Link to="/our-services/residential-pest-control-services" className="service-card fade-up" aria-label="Residential Pest Control Services">
              <div className="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <div className="sc-title">Residential Pest Control</div>
              <p className="sc-desc">Home-specific treatments safe for families and pets, with minimal disruption to your daily routine.</p>
              <div className="sc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
            </Link>
            <Link to="/our-services/commercial-pest-control-services" className="service-card fade-up" aria-label="Commercial Pest Control Services">
              <div className="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
              <div className="sc-title">Commercial Pest Control</div>
              <p className="sc-desc">Industry-compliant pest control for offices, restaurants, warehouses, and large establishments.</p>
              <div className="sc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
            </Link>
            <Link to="/our-services/invisible-grill-services" className="service-card fade-up" aria-label="Invisible Grill Services">
              <div className="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg></div>
              <div className="sc-title">Invisible Grill Services</div>
              <p className="sc-desc">Modern safety grills that maintain your view while protecting windows and balconies effectively.</p>
              <div className="sc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
            </Link>
            <Link to="/our-services/rat-guard-services" className="service-card fade-up" aria-label="Rat Guard Services">
              <div className="sc-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></div>
              <div className="sc-title">Rat Guard Services</div>
              <p className="sc-desc">Effective rodent barriers and bait systems to prevent and eliminate rat infestations permanently.</p>
              <div className="sc-link">Learn more <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
            </Link>
          </div>
          <div className="services-cta fade-up">
            <Link to="/our-services" className="btn-outline">Explore All Services →</Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <StatsBanner />

      {/* Certifications */}
      <section className="section" aria-labelledby="certs-h2">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="fade-up">
            <span className="eyebrow">Accreditations</span>
            <h2 className="section-h2" id="certs-h2">Certified & Government Approved</h2>
          </div>
          <div className="certs-grid">
            <div className="cert-card fade-up">
              <div className="cert-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div className="cert-name">Government of Maharashtra</div>
              <div className="cert-sub">BMC Authorized</div>
            </div>
            <div className="cert-card fade-up">
              <div className="cert-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div>
              <div className="cert-name">Intellectual Property India</div>
              <div className="cert-sub">Registered Brand</div>
            </div>
            <div className="cert-card fade-up">
              <div className="cert-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
              <div className="cert-name">PCAI</div>
              <div className="cert-sub">Pest Control Association of India</div>
            </div>
            <div className="cert-card fade-up">
              <div className="cert-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
              <div className="cert-name">ISO 9001:2015</div>
              <div className="cert-sub">Quality Management Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt" aria-labelledby="why-h2">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="fade-up">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-h2" id="why-h2">The SSD Difference</h2>
          </div>
          <div className="why-grid">
            <div className="why-card fade-up">
              <div className="why-icon" style={{ background: 'rgba(16,185,129,.1)' }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="why-title">Eco-Friendly & Safe Methods</div>
              <p className="why-desc">Odorless, chemical-safe treatments protecting your family and pets while effectively eliminating pests.</p>
            </div>
            <div className="why-card fade-up">
              <div className="why-icon" style={{ background: 'rgba(0,102,255,.1)' }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="why-title">Pan-Maharashtra Presence</div>
              <p className="why-desc">8 branch offices across Mumbai, Thane, Navi Mumbai, Nashik, Amaravati, Paratwada & Ahmedabad.</p>
            </div>
            <div className="why-card fade-up">
              <div className="why-icon" style={{ background: 'rgba(245,158,11,.1)' }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
              </div>
              <div className="why-title">Affordable AMC Plans</div>
              <p className="why-desc">Annual Maintenance Contracts with regular inspections to keep your property pest-free year-round.</p>
            </div>
            <div className="why-card fade-up">
              <div className="why-icon" style={{ background: 'rgba(139,92,246,.1)' }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="why-title">100% Satisfaction Guarantee</div>
              <p className="why-desc">Free re-treatment guarantee. If pests return within the warranty period, we come back at no cost.</p>
            </div>
            <div className="why-card fade-up">
              <div className="why-icon" style={{ background: 'rgba(239,68,68,.1)' }} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="why-title">Same Day Service</div>
              <p className="why-desc">Emergency pest control available 24x7, including weekends and public holidays across all branches.</p>
            </div>
          </div>
          <div className="why-cta fade-up">
            <button className="btn-primary" onClick={() => alert('Popup 305')}>Get Free Quote Today</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" aria-labelledby="testi-h2">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="fade-up">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-h2" id="testi-h2">Here's what our pest control customers say</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card fade-up">
              <div className="testi-stars" aria-label="5 stars">
                <span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span>
              </div>
              <p className="testi-text">"Excellent service! The team was prompt, professional, and thorough. Our cockroach problem was completely resolved within a day. Highly recommend SSD Pest Control to everyone."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">RK</div>
                <div>
                  <div className="testi-name">Ramesh Kapoor</div>
                  <div className="testi-loc">Andheri West, Mumbai</div>
                </div>
              </div>
            </div>
            <div className="testi-card fade-up">
              <div className="testi-stars" aria-label="5 stars">
                <span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span>
              </div>
              <p className="testi-text">"We've been using SSD for our restaurant for 3 years now. Their commercial pest control team is exceptional — always on time and the treatment is 100% safe for our kitchen."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">PS</div>
                <div>
                  <div className="testi-name">Priya Sharma</div>
                  <div className="testi-loc">Bandra, Mumbai</div>
                </div>
              </div>
            </div>
            <div className="testi-card fade-up">
              <div className="testi-stars" aria-label="5 stars">
                <span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span><span className="testi-star" aria-hidden="true">★</span>
              </div>
              <p className="testi-text">"Termite treatment was done perfectly. The technicians explained each step, used eco-friendly chemicals, and the results were long-lasting. Great value for money."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">AM</div>
                <div>
                  <div className="testi-name">Anil Mehta</div>
                  <div className="testi-loc">Thane West</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section section-alt" aria-labelledby="clients-h2">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="fade-up">
            <h2 className="section-h2" id="clients-h2">Our Clients</h2>
          </div>
          <div className="clients-track-wrap" aria-hidden="true">
            <div className="clients-track" id="clients-track">
              {[...Array(18)].map((_, i) => (
                <div key={`client1-${i}`} className="client-logo">Client {i+1}</div>
              ))}
              {/* duplicate for seamless loop */}
              {[...Array(18)].map((_, i) => (
                <div key={`client2-${i}`} className="client-logo">Client {i+1}</div>
              ))}
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--ink-40)', marginTop: '8px' }}>Replace placeholder labels with client logo images.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="section" aria-labelledby="contact-h2">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up">
              <span className="eyebrow">Send Us a Message</span>
              <h2 className="section-h2" id="contact-h2">Quick Response.<br/>Reliable Service.<br/>Guaranteed Support.</h2>
              <p className="contact-info" style={{ fontSize: '15px', color: 'var(--ink-60)', lineHeight: 1.7, marginTop: '12px', marginBottom: '28px' }}>Reach out to us anytime. Our team is available 24x7 across all locations to address your pest control needs.</p>
              <div className="contact-detail">
                <div className="cd-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg></div>
                <div>
                  <div className="cd-label">Phone</div>
                  <div className="cd-val"><a href="tel:919594232394" style={{ color: 'var(--ink)' }}>+91 9594232394</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="cd-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div>
                  <div className="cd-label">Email</div>
                  <div className="cd-val"><a href="mailto:info@ssdpestcontrol.com" style={{ color: 'var(--ink)' }}>info@ssdpestcontrol.com</a></div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="cd-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div>
                  <div className="cd-label">Head Office</div>
                  <div className="cd-val">24, Suryakiran Society, Dahisar East, Mumbai 400068</div>
                </div>
              </div>
            </div>
            <div className="contact-form fade-up" role="form" aria-labelledby="form-title">
              <div className="form-title" id="form-title">Book a Free Inspection</div>
              <div className="form-sub">Get a callback within 30 minutes — 24x7</div>
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Your Name</label>
                <input className="form-input" type="text" id="form-name" name="name" placeholder="e.g. Rahul Sharma" autoComplete="name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="form-phone">Phone Number</label>
                <input className="form-input" type="tel" id="form-phone" name="phone" placeholder="e.g. +91 98765 43210" autoComplete="tel" required />
              </div>
              <button type="button" className="form-submit" onClick={async (e) => {
                const btn = e.target as HTMLButtonElement;
                const n = (document.getElementById('form-name') as HTMLInputElement).value;
                const p = (document.getElementById('form-phone') as HTMLInputElement).value;
                if (!n || !p) {
                  alert("Please fill in your name and phone number.");
                  return;
                }
                
                const spreadsheetId = localStorage.getItem('ssd_spreadsheet_id');
                if (spreadsheetId) {
                  btn.disabled = true;
                  const originalText = btn.innerHTML;
                  btn.innerHTML = 'Submitting...';
                  try {
                    await appendRowToSheet(spreadsheetId, [new Date().toLocaleString(), n, p, 'Homepage Form']);
                    alert("Thank you, " + n + "! We will call you at " + p + " within 30 minutes.");
                    (document.getElementById('form-name') as HTMLInputElement).value = '';
                    (document.getElementById('form-phone') as HTMLInputElement).value = '';
                  } catch (err: any) {
                    alert("Could not append to Google Sheets (are you logged in as Admin?): " + err.message);
                  } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                  }
                } else {
                  alert("Thank you, " + n + "! We will call you at " + p + " within 30 minutes.\n(Note for Admin: Connect Google Sheets in Admin Dashboard to save this data).");
                }
              }} aria-label="Submit inspection request">Get Free Inspection →</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function StatsBanner() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [customers, setCustomers] = useState(0);
  const [support, setSupport] = useState(0);
  const [experts, setExperts] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateValue(setCustomers, 10, 1800);
        animateValue(setSupport, 5, 1800);
        animateValue(setExperts, 50, 1800);
        animateValue(setYears, 15, 1800);
      }
    }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, end: number, duration: number) => {
    let start = 0;
    const step = end / (duration / 16);
    const tick = () => {
      start = Math.min(start + step, end);
      setter(Math.floor(start));
      if (start < end) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <section className="stats-banner" aria-labelledby="stats-h2" ref={statsRef}>
      <div className="stats-inner">
        <div className="stats-head fade-up">
          <h2 className="stats-h2" id="stats-h2">No Bugs. No Stress. Just SSD Success.</h2>
          <p className="stats-sub">Our mission is simple — to protect your home, office, and property from all kinds of pests with cutting-edge techniques and unmatched service quality.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-block fade-up" aria-label="Happy Customers">
            <div className="stat-num">{customers}K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-block fade-up" aria-label="Company Support cases">
            <div className="stat-num">{support}K+</div>
            <div className="stat-label">Company Support</div>
          </div>
          <div className="stat-block fade-up" aria-label="Professional Experts">
            <div className="stat-num">{experts}+</div>
            <div className="stat-label">Professional Experts</div>
          </div>
          <div className="stat-block fade-up" aria-label="Years of Experience">
            <div className="stat-num">{years}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
