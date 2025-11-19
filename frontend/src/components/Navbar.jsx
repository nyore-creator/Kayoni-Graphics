import React from 'react';

export default function Navbar(){
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Services ▾</a>
          <ul>
            <li><a href="#design">Design</a></li>
            <li><a href="#branding">Branding</a></li>
            <li><a href="#printing">Printing</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
