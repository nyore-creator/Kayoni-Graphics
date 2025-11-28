// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing fields' });
    }
    const doc = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, data: { id: doc._id } });
  } catch (err) {
    console.error('Contact POST error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// GET /api/contact
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
