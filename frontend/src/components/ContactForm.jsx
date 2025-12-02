// src/components/ContactForm.jsx
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt, FaPhone } from "react-icons/fa";

const API_BASE =
  import.meta.env.VITE_API_BASE || "https://kayoni-graphics.onrender.com/api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?\d{9,15}$/.test(phone);

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill all fields.' });
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email.' });
      return;
    }

    if (!validatePhone(form.phone)) {
      setStatus({ type: 'error', msg: 'Please enter a valid phone number.' });
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
        setForm({ name: '', email: '', phone: '', message: '' });
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
      <p className="contact-subtitle">Reach out via the form below or call us directly!</p>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={submit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
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
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={update}
              required
            />
          </div>

          <div className="input-group">
            <FaPhoneAlt className="icon" />
            <input
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={update}
              required
            />
          </div>

          <div className="input-group textarea-group">
            <FaCommentDots className="icon" />
            <textarea
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

        {/* Direct Call Section */}
        <div className="contact-direct">
          <h3>Call Us Directly</h3>
          <a href="tel:+254741033753" className="btn btn-secondary call-btn">
            <FaPhone /> +254 741 033 753
          </a>
          <p>Click the button to call us immediately!</p>
        </div>
      </div>
    </section>
  );
}
