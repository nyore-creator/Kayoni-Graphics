// backend/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Message = require("./models/Message");

const app = express();
app.use(express.json());

const allowedOrigins = [
  "https://kayonigraphics.org",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.log("❌ Blocked by CORS:", origin);
      return callback(new Error("CORS not allowed for this origin"), false);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.options("*", cors());

// Mongo
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ Missing MONGO_URI in .env");
  process.exit(1);
}
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Nodemailer transporter (using env vars)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g. smtp.sendgrid.net or smtp.gmail.com
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_SECURE === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter (logs but does not crash)
transporter.verify().then(
  () => console.log("✅ SMTP transporter ready"),
  (err) => console.warn("⚠️ SMTP verify problem:", err && err.message)
);

// Contact endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    // Save message to DB
    const msg = new Message({ name, email, phone, message });
    await msg.save();

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
    const mailOptions = {
      from: process.env.FROM_EMAIL || `"Kayoni Graphics" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New contact form message from ${name}`,
      html: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `,
    };

    // Send (don't block on failure)
    transporter.sendMail(mailOptions).catch((err) => {
      console.warn("⚠️ Failed to send email:", err && err.message);
    });

    return res.status(200).json({ msg: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ /api/contact error:", error.message);
    return res.status(500).json({ msg: "Server error." });
  }
});

app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
