// src/components/FAQ.jsx
import React, { useState } from 'react';

const items = [
  {
    q: 'What services do you offer?',
    a: 'We offer graphic design, branding, printing, and publishing services.'
  },
  {
    q: 'Where are you located?',
    a: 'Homa Bay, Legacy Plaza – 2nd Floor, Door No. 25.'
  },
  {
    q: 'Do you work on weekends?',
    a: 'We are closed on Saturdays but open on Sundays from 8am - 5pm.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        {items.map((it, i) => (
          <div className="faq-item" key={i}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {it.q}
              <span className="chevron">{open === i ? '▲' : '▼'}</span>
            </button>
            {open === i && <p className="faq-answer">{it.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
