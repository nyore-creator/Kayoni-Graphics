// src/components/ContactForm.jsx
import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill all fields.' });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          type: 'error',
          msg: data.msg || 'Failed to send message.',
        });
      } else {
        setStatus({
          type: 'success',
          msg: 'Message sent successfully!',
        });
        setForm({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        msg: 'Network error. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <form className="form" onSubmit={submit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={update}
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={update}
          required
        />

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Sending…' : 'Send'}
        </button>

        {status.msg && (
          <p className={`status ${status.type === 'success' ? 'ok' : 'err'}`}>
            {status.msg}
          </p>
        )}
      </form>
    </section>
  );
}
