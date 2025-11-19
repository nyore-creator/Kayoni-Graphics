import React, { useState } from 'react';

function Item({question, answer}){
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(o => !o)}>
      <strong>{question}</strong>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default function FAQ(){
  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <Item question="What services do you offer?" answer="We offer graphic design, branding, printing, and publishing services." />
      <Item question="Where are you located?" answer="We are located in Homa Bay, Legacy Plaza – 2nd Floor, Door No. 25." />
      <Item question="Do you work on weekends?" answer="We are closed on Saturdays but open on Sundays from 8am - 5pm." />
    </section>
  );
}
