import React, { useState } from 'react';

export default function ContactForm(){
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const API = import.meta.env.VITE_API_URL || '';

  async function handleSubmit(e){
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()){
      alert('⚠️ Please fill in all fields before submitting.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const json = await res.json();
      if (res.ok && json.success !== false) {
        setStatus('sent');
        alert(`✅ Thank you, ${form.name}! Your message has been sent.`);
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        alert('❌ There was a problem sending your message.');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('error');
      alert('❌ Network error. Try again later.');
    }
  }

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label><br />
        <input id="name" name="yourname" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} /><br />

        <label htmlFor="email">Your Email:</label><br />
        <input id="email" type="email" name="youremail" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} /><br />

        <label htmlFor="message">Your Message:</label><br />
        <textarea id="message" name="yourmessage" rows="6" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} /><br />

        <input type="submit" value={status === 'sending' ? 'Sending…' : 'Send'} />
      </form>
      {status === 'sent' && <p style={{color:'green'}}>Message sent — thank you!</p>}
      {status === 'error' && <p style={{color:'red'}}>There was an error. Try again later.</p>}
    </section>
  );
}
