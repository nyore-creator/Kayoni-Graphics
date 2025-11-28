// src/components/VideoGrid.jsx
import React from 'react';
import v1 from '../assets/videos/kayoni.mp4';
import v2 from '../assets/videos/embroidery.mp4';
import v3 from '../assets/videos/jerseys.mp4';

export default function VideoGrid() {
  return (
    <section className="section" id="videos">
      <h2>Our Work (Videos)</h2>
      <div className="video-grid">
        <video controls>
          <source src={v1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video controls>
          <source src={v2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video controls autoPlay muted loop>
          <source src={v3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
