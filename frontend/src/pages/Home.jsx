// src/pages/Home.jsx
import React, { useState } from 'react';
import Services from '../components/Services.jsx';
import Gallery from '../components/Gallery.jsx';
import VideoGrid from '../components/VideoGrid.jsx';
import FAQ from '../components/FAQ.jsx';
import Tabs from '../components/Tabs.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div id="home">
      <Services />
      <Gallery />
      <VideoGrid />

      <section className="section" id="counter-section">
        <h2>Fun Counter Game</h2>
        <p className="counter">{count}</p>
        <div className="counter-actions">
          <button className="btn btn-outline" onClick={() => setCount((c) => c + 1)}>Increase</button>
          <button className="btn btn-outline" onClick={() => setCount((c) => c - 1)}>Decrease</button>
          <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      <FAQ />
      <Tabs />

      <section className="section">
        <h2>Location</h2>
        <p>Homa Bay, Legacy Plaza – 2nd Floor, Door No. 25</p>
      </section>

      <section className="section">
        <h2>Working Days</h2>
        <div className="table">
          <div className="row head">
            <div>Day</div><div>Time</div>
          </div>
          {[
            ['Monday', '8am - 5pm'],
            ['Tuesday', '8am - 5pm'],
            ['Wednesday', '8am - 5pm'],
            ['Thursday', '8am - 5pm'],
            ['Friday', '8am - 5pm'],
            ['Saturday', 'Closed'],
            ['Sunday', '8am - 5pm'],
          ].map(([day, time]) => (
            <div className="row" key={day}>
              <div>{day}</div><div>{time}</div>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
