import React, { useEffect, useState } from 'react';

export default function Header(){
  const [dark, setDark] = useState(localStorage.getItem('dark') === 'true');
  const [welcome, setWelcome] = useState('Company Introduction');

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('dark', dark);
  }, [dark]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setWelcome('Good Morning! Welcome to Kayoni Graphics');
    else if (hour < 18) setWelcome('Good Afternoon! Welcome to Kayoni Graphics');
    else setWelcome('Good Evening! Welcome to Kayoni Graphics');
  }, []);

  return (
    <header>
      <h1 id="welcome-message">{welcome}</h1>
      <p>
        Kayoni Graphics and Branding is a design, printing, branding, and publishing company.
        Our goal is to deliver <span className="highlight">quality services</span> with professional outcomes.
      </p>
      <button id="modeToggle" onClick={() => setDark(d => !d)}>
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}
