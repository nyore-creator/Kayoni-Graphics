// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

// CORS: allow localhost + deployed frontend
const allowedOrigins = [
  'http://localhost:5173', // dev frontend
  process.env.FRONTEND_URL || 'https://your-frontend.vercel.app', // prod frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS not allowed for this origin'), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('❌ Missing MONGO_URI in .env');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Contact route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'All fields are required.' });
    }

    // Here you can add logic to save to DB, send email, etc.
    console.log('Contact form submitted:', { name, email, message });

    return res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ /api/contact error:', error.message);
    return res.status(500).json({ msg: 'Server error.' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
