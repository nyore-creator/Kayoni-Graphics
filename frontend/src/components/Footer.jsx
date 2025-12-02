import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <p>&copy; 2025 Kayoni Graphics and Branding | All Rights Reserved</p>

      <div className="contact-info">
        <p>Call us: <a href="tel:+254741033753">+254 741 033 753</a></p>
        <p>Email: <a href="mailto:kayonigraphics@gmail.com">kayonigraphics@gmail.com</a></p>
      </div>

      <SocialLinks />

      <button className="scroll-top" onClick={scrollTop}>
        ↑ Back to Top
      </button>
    </footer>
  );
}
