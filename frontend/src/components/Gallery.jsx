import React, { useState } from "react";

// Import all images from Assets/IMAGES
import img1 from "../Assets/IMAGES/logo 1.jpg";
import img2 from "../Assets/IMAGES/logo 2.jpg";
import img3 from "../Assets/IMAGES/logo 3.jpg";
import img4 from "../Assets/IMAGES/logo 4.jpg";
import img5 from "../Assets/IMAGES/logo 5.jpg";
import img6 from "../Assets/IMAGES/AMT.jpg";
import img7 from "../Assets/IMAGES/DEVCON.jpg";
import img8 from "../Assets/IMAGES/B.CARDS.jpg";
import img9 from "../Assets/IMAGES/BANNER.jpg";
import img10 from "../Assets/IMAGES/STICKER1.jpg";
import img11 from "../Assets/IMAGES/TAGS.jpg";
import img12 from "../Assets/IMAGES/REFLECTOR1.jpg";
import img13 from "../Assets/IMAGES/REFLECTOR2.jpg";
import img14 from "../Assets/IMAGES/HOODIE.jpg";

const IMAGES = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9,
  img10, img11, img12, img13, img14
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  const next = () =>
    setCurrent((i) => (i + 1) % IMAGES.length);

  return (
    <section className="gallery-section">

      <h2>Our Work (Images)</h2>

      <div className="gallery">
        <img
          src={IMAGES[current]}
          alt={`Gallery ${current + 1}`}
          className="gallery-image"
        />
      </div>

      <div className="gallery-controls">
        <button onClick={prev}>⟨ Prev</button>
        <button onClick={next}>Next ⟩</button>
      </div>

    </section>
  );
}
