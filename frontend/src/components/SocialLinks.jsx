// src/components/SocialLinks.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function SocialLinks() {
  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/kayonigraphics',
      icon: <FaFacebookF />,
      bgColor: '#1877f2',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kayoni_graphics/',
      icon: <FaInstagram />,
      bgColor: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@kayonigraphics254',
      icon: <FaTiktok />,
      bgColor: '#000000',
    },
  ];

  return (
    <div className="social-links">
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={social.name}
          style={{
            background: social.bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
