// src/components/Services.jsx
import React from 'react';

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>Services Offered</h2>
      <div className="grid">
        <div className="card">
          <div className="service-icon">🎨</div>
          <h3>Graphic Design</h3>
          <p>Creative, professional designs tailored to your brand identity.</p>
        </div>

        <div className="card">
          <div className="service-icon">🏷️</div>
          <h3>Branding</h3>
          <ul className="list">
            <li>Jerseys</li>
            <li>T-shirts</li>
            <li>Reflectors</li>
            <li>Caps</li>
            <li>Mugs</li>
            <li>Pens</li>
          </ul>
        </div>

        <div className="card">
          <div className="service-icon">🖨️</div>
          <h3>Design & Printing</h3>
          <ul className="list">
            <li>Banners</li>
            <li>Posters</li>
            <li>Business Cards</li>
            <li>Flyers</li>
            <li>Eulogies</li>
          </ul>
        </div>

        <div className="card">
          <div className="service-icon">📚</div>
          <h3>Printing, Perforating & Binding</h3>
          <ul className="list">
            <li>Receipt Books</li>
            <li>Delivery Notebooks</li>
            <li>Invoice Books</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
