// src/components/Gallery.jsx
import React, { useEffect, useRef, useState } from 'react';

// Import your images from /src/assets
import img1 from '../assets/images/yawa.jpg';
import img2 from '../assets/images/ango.jpg';
import img3 from '../assets/images/kiawa.jpg';
import img4 from '../assets/images/otis.jpg';
import img5 from '../assets/images/chesa.jpg';
import amt from '../assets/images/amt.jpg';
import devcon from '../assets/images/devcon.jpg';
import bcards from '../assets/images/b-cards.jpg';
import banner from '../assets/images/banner.jpg';
import sticker from '../assets/images/sticker.jpg';
import tags from '../assets/images/tags.jpg';
import refl1 from '../assets/images/reflector-1.jpg';
import refl2 from '../assets/images/reflector-2.jpg';
import hoodie from '../assets/images/hoodie.jpg';

const images = [
  { src: img1, alt: 'Graphic Design Sample 1' },
  { src: img2, alt: 'Graphic Design Sample 2' },
  { src: img3, alt: 'Graphic Design Sample 3' },
  { src: img4, alt: 'Graphic Design Sample 4' },
  { src: img5, alt: 'Graphic Design Sample 5' },
  { src: amt, alt: 'T-Shirt branding AMT' },
  { src: devcon, alt: 'T-Shirt branding DEVCON' },
  { src: bcards, alt: 'Business cards' },
  { src: banner, alt: 'Banner printing' },
  { src: sticker, alt: 'Sticker design' },
  { src: tags, alt: 'Tags' },
  { src: refl1, alt: 'Branded Reflectors 1' },
  { src: refl2, alt: 'Branded Reflectors 2' },
  { src: hoodie, alt: 'Branded Hoodie' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touch = useRef({ startX: 0, endX: 0 });

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const onTouchStart = (e) => {
    touch.current.startX = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touch.current.endX = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const delta = touch.current.endX - touch.current.startX;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touch.current = { startX: 0, endX: 0 };
  };

  return (
    <section className="section" id="gallery">
      <h2>Our Work (Images)</h2>
      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <button className="btn btn-ghost prev" onClick={prev} aria-label="Previous">
          ⟨ Prev
        </button>
        <button className="btn btn-ghost next" onClick={next} aria-label="Next">
          Next ⟩
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
