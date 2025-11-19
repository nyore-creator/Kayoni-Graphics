import React, { useState } from 'react';

export default function Tabs(){
  const [tab, setTab] = useState('tab1');
  return (
    <section className="tab-container">
      <h2>Our Categories</h2>
      <div className="tab-buttons">
        <button data-tab="tab1" onClick={() => setTab('tab1')}>Design</button>
        <button data-tab="tab2" onClick={() => setTab('tab2')}>Branding</button>
        <button data-tab="tab3" onClick={() => setTab('tab3')}>Printing</button>
      </div>
      <div id="tab1" className={`tab-content ${tab === 'tab1' ? 'active' : ''}`}>
        <p>We create logos, posters, banners, and more!</p>
      </div>
      <div id="tab2" className={`tab-content ${tab === 'tab2' ? 'active' : ''}`}>
        <p>We brand t-shirts, caps, mugs, reflectors, and jerseys.</p>
      </div>
      <div id="tab3" className={`tab-content ${tab === 'tab3' ? 'active' : ''}`}>
        <p>We print business cards, flyers, receipt books, and invoice books.</p>
      </div>
    </section>
  );
}
