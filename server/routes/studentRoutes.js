const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();

// Student Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, studentId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.query(
      'INSERT INTO students (name, email, password, student_id) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, studentId],
      (err, result) => {
        if (err) {
          return res.status(400).json({ message: 'Student already exists or invalid data' });
        }
        res.status(201).json({ message: 'Student registered successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Student Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  db.query('SELECT * FROM students WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const student = results[0];
    const isValidPassword = await bcrypt.compare(password, student.password);
    
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: student.id, role: 'student' }, process.env.JWT_SECRET || 'your_jwt_secret', {
      expiresIn: '1h'
    });
    
    res.json({ token });
  });
});

module.exports = router;