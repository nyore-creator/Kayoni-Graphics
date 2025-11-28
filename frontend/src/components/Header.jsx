// src/components/Header.jsx
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    let message = '';
    if (hour < 12) {
      message = 'Good Morning';
    } else if (hour < 18) {
      message = 'Good Afternoon';
    } else {
      message = 'Good Evening';
    }

    setGreeting(`${message}, Welcome to Kayoni Graphics`);
  }, []);

  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="welcome">{greeting}</h1>
        <p className="tagline">
          Delivering <span className="highlight">quality services</span> with professional outcomes.
        </p>
      </div>
      <button
        id="modeToggle"
        className="btn btn-secondary"
        onClick={() => setDark(!dark)}
        aria-label="Toggle Dark/Light Mode"
      >
        {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
