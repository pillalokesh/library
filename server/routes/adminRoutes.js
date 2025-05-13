const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Hardcoded admin credentials
const ADMIN_EMAIL = 'admin@gmail.com';
// Hashed password for 'admin123' (generated using bcrypt.hash('admin123', 10))
const ADMIN_PASSWORD_HASH = '$2b$10$vv7fQEpuzo1Xhdpog5iFOuZkup/UuuZsqwu2CBm9bQwg3/uBLxxYC';

// Admin Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt:', { email, password }); // Debug log

  // Check if the provided email matches the hardcoded admin email
  if (email !== ADMIN_EMAIL) {
    console.log('Email mismatch:', email, '!=', ADMIN_EMAIL); // Debug log
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the provided password with the hardcoded hashed password
  const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

  if (!isValidPassword) {
    console.log('Password mismatch for email:', email); // Debug log
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT for the admin
  const token = jwt.sign({ id: 1, role: 'admin' }, process.env.JWT_SECRET || 'your_jwt_secret', {
    expiresIn: '1h'
  });

  res.json({ token });
});

module.exports = router;