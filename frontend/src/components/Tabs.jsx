// src/components/Tabs.jsx
import React, { useState } from 'react';

export default function Tabs() {
  const [tab, setTab] = useState('tab1');

  return (
    <section className="section">
      <h2>Our Categories</h2>
      <div className="tabs">
        <div className="tab-buttons">
          <button
            className={`btn ${tab === 'tab1' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setTab('tab1')}
          >
            Design
          </button>
          <button
            className={`btn ${tab === 'tab2' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setTab('tab2')}
          >
            Branding
          </button>
          <button
            className={`btn ${tab === 'tab3' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setTab('tab3')}
          >
            Printing
          </button>
        </div>
        <div className="tab-content">
          {tab === 'tab1' && <p>We create logos, posters, banners, and more!</p>}
          {tab === 'tab2' && <p>We brand t-shirts, caps, mugs, reflectors, and jerseys.</p>}
          {tab === 'tab3' && <p>We print business cards, flyers, receipt books, and invoice books.</p>}
        </div>
      </div>
    </section>
  );
}
