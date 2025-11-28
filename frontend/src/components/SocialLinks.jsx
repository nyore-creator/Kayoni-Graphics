// src/components/SocialLinks.jsx
import React from 'react';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.tiktok.com/@kayonigraphics254?_r=1&_t=ZM-91hRQSTqSKJ"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon tiktok"
        aria-label="TikTok"
      >
        <i className="fab fa-tiktok"></i>
      </a>
      <a
        href="https://www.facebook.com/share/1BawBZZL8c/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://www.instagram.com/kayoni_graphics/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
}
