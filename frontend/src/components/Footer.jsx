// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p>&copy; 2025 Kayoni Graphics and Branding | All Rights Reserved</p>

      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          F
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          I
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
          T
        </a>
      </div>

      <button className="scroll-top" onClick={scrollTop}>
        ↑ Back to Top
      </button>
    </footer>
  );
}
