// src/components/NavBar.jsx
import React, { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li
          className="nav-has-dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <a href="#services">Services ▾</a>
          <ul className={`dropdown ${open ? 'open' : ''}`}>
            <li><a href="#services">Design</a></li>
            <li><a href="#services">Branding</a></li>
            <li><a href="#services">Printing</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
