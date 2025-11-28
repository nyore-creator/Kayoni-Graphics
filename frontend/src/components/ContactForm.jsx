// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

// Use Render backend URL as default, fallback to localhost for dev
const API_BASE =
  import.meta.env.VITE_API_BASE || 'https://kayoni-graphics.onrender.com/api';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill all fields.' });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email.' });
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
        setStatus({ type: 'error', msg: data.msg || 'Failed to send message.' });
      } else {
        setStatus({ type: 'success', msg: 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={submit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={update}
            required
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={update}
            required
          />
        </div>

        <div className="input-group textarea-group">
          <FaCommentDots className="icon" />
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={update}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Send Message'}
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
